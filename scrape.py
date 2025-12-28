#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import hashlib
import os
import re
import time
from pathlib import Path
from typing import Dict, Optional, Set, Tuple
from urllib.parse import urldefrag, urljoin, urlparse, unquote

import requests
from bs4 import BeautifulSoup


# ----------------------------
# Utility
# ----------------------------
WINDOWS_BAD_CHARS = r'<>:"/\\|?*'
WINDOWS_RESERVED = {
    "CON", "PRN", "AUX", "NUL",
    *(f"COM{i}" for i in range(1, 10)),
    *(f"LPT{i}" for i in range(1, 10)),
}

def sanitize_segment(seg: str) -> str:
    seg = unquote(seg)
    seg = "".join("_" if c in WINDOWS_BAD_CHARS else c for c in seg)
    seg = seg.strip().strip(".")
    if not seg:
        seg = "_"
    if seg.upper() in WINDOWS_RESERVED:
        seg = f"_{seg}"
    return seg

def ensure_parent(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)

def sha8(s: str) -> str:
    return hashlib.sha256(s.encode("utf-8")).hexdigest()[:8]

def is_data_uri(u: str) -> bool:
    return u.strip().lower().startswith("data:")

def is_skippable_scheme(u: str) -> bool:
    u = u.strip().lower()
    return (
        u.startswith("#")
        or u.startswith("mailto:")
        or u.startswith("tel:")
        or u.startswith("javascript:")
    )

def split_srcset(srcset: str) -> Tuple[Tuple[str, str], ...]:
    """
    Returns tuple of (url, descriptor) pairs.
    Example: "a.jpg 1x, b.jpg 2x" -> (("a.jpg","1x"),("b.jpg","2x"))
    """
    parts = []
    for chunk in srcset.split(","):
        chunk = chunk.strip()
        if not chunk:
            continue
        segs = chunk.split()
        url = segs[0]
        desc = " ".join(segs[1:]) if len(segs) > 1 else ""
        parts.append((url, desc))
    return tuple(parts)

def join_srcset(pairs: Tuple[Tuple[str, str], ...]) -> str:
    return ", ".join([f"{u} {d}".strip() for (u, d) in pairs])

def relpath(from_file: Path, to_file: Path) -> str:
    # make relative path using forward slashes (works in browsers)
    rp = os.path.relpath(to_file, start=from_file.parent)
    return rp.replace("\\", "/")


# ----------------------------
# Download + Path mapping
# ----------------------------
class Downloader:
    def __init__(self, out_dir: Path, base_url: str, same_origin: bool, delay: float, timeout: int):
        self.out_dir = out_dir
        self.base_url = base_url
        self.base_parsed = urlparse(base_url)
        self.same_origin = same_origin
        self.delay = delay
        self.timeout = timeout

        self.session = requests.Session()
        self.session.headers.update({
            "User-Agent": "Mozilla/5.0 (compatible; OfflineArchiver/1.0; +https://chat.openai.com/)"
        })

        # remote_url -> local_file_path
        self.map_url_to_file: Dict[str, Path] = {}
        self.downloaded: Set[str] = set()

    def allowed(self, abs_url: str) -> bool:
        p = urlparse(abs_url)
        if p.scheme not in ("http", "https"):
            return False
        if self.same_origin and p.netloc != self.base_parsed.netloc:
            return False
        return True

    def url_to_local_file(self, abs_url: str) -> Path:
        """
        Store under: out_dir/assets/<netloc>/<path...>[+queryhash]
        """
        p = urlparse(abs_url)
        netloc = sanitize_segment(p.netloc)
        path = p.path or "/"
        # sanitize each segment
        segs = [sanitize_segment(s) for s in path.split("/") if s != ""]
        if path.endswith("/") or not segs:
            segs.append("index")  # for rare assets ending with /

        filename = segs[-1]
        # If no extension, keep as-is (browser can still load by content-type in many cases)
        # but add suffix to avoid collisions
        if p.query:
            root, ext = os.path.splitext(filename)
            filename = f"{root}_q{sha8(p.query)}{ext}"
            segs[-1] = filename

        local = self.out_dir / "assets" / netloc / Path(*segs)
        return local

    def fetch_bytes(self, abs_url: str) -> Tuple[bytes, str, str]:
        """
        returns: (content_bytes, content_type, final_url)
        """
        time.sleep(self.delay)
        r = self.session.get(abs_url, timeout=self.timeout, allow_redirects=True)
        r.raise_for_status()
        ctype = r.headers.get("content-type", "")
        return r.content, ctype, r.url

    def download(self, abs_url: str) -> Optional[Path]:
        abs_url, _frag = urldefrag(abs_url)
        if abs_url in self.downloaded:
            return self.map_url_to_file.get(abs_url)

        if not self.allowed(abs_url):
            return None

        local_file = self.url_to_local_file(abs_url)
        ensure_parent(local_file)

        try:
            data, ctype, final_url = self.fetch_bytes(abs_url)
            # If redirected, register mapping for final_url too (same file)
            self.downloaded.add(abs_url)
            self.map_url_to_file[abs_url] = local_file
            if final_url != abs_url:
                final_url, _ = urldefrag(final_url)
                self.downloaded.add(final_url)
                self.map_url_to_file[final_url] = local_file

            local_file.write_bytes(data)
            return local_file
        except Exception as e:
            print(f"[WARN] download failed: {abs_url} ({e})")
            self.downloaded.add(abs_url)
            return None


# ----------------------------
# CSS processing (url(...) and @import)
# ----------------------------
CSS_URL_RE = re.compile(r"url\(\s*(['\"]?)(.*?)\1\s*\)", re.IGNORECASE)
CSS_IMPORT_RE = re.compile(r"@import\s+(?:url\()?(['\"])(.*?)\1\)?", re.IGNORECASE)

def rewrite_css(css_text: str, css_url: str, css_file: Path, dl: Downloader) -> str:
    """
    Download referenced resources in CSS and rewrite their URLs to local relative paths.
    """
    def repl_url(m: re.Match) -> str:
        raw = m.group(2).strip()
        if not raw or is_data_uri(raw) or is_skippable_scheme(raw):
            return m.group(0)

        abs_u = urljoin(css_url, raw)
        local = dl.download(abs_u)
        if not local:
            return m.group(0)

        return f"url({relpath(css_file, local)})"

    def repl_import(m: re.Match) -> str:
        raw = m.group(2).strip()
        if not raw or is_data_uri(raw) or is_skippable_scheme(raw):
            return m.group(0)

        abs_u = urljoin(css_url, raw)
        local = dl.download(abs_u)
        if not local:
            return m.group(0)

        return m.group(0).replace(raw, relpath(css_file, local))

    css_text = CSS_IMPORT_RE.sub(repl_import, css_text)
    css_text = CSS_URL_RE.sub(repl_url, css_text)
    return css_text


# ----------------------------
# HTML processing
# ----------------------------
ASSET_TAG_ATTRS = [
    ("img", ["src", "data-src", "data-original", "data-lazy-src", "srcset"]),
    ("source", ["src", "srcset"]),
    ("script", ["src"]),
    ("link", ["href"]),
    ("video", ["src", "poster"]),
    ("audio", ["src"]),
    ("iframe", ["src"]),
]

def should_download_link(tag) -> bool:
    """
    Decide whether <link href=...> should be downloaded.
    """
    rel = " ".join(tag.get("rel", [])).lower() if tag.has_attr("rel") else ""
    href = (tag.get("href") or "").lower()

    # typical assets
    if "stylesheet" in rel:
        return True
    if "icon" in rel or "shortcut icon" in rel or "apple-touch-icon" in rel:
        return True
    if "preload" in rel:
        return True
    # fallback by extension
    return any(href.endswith(ext) for ext in (".css", ".js", ".png", ".jpg", ".jpeg", ".webp", ".svg", ".ico", ".woff", ".woff2", ".ttf", ".otf"))

def rewrite_html_and_download_assets(html: str, page_url: str, out_html: Path, dl: Downloader) -> None:
    soup = BeautifulSoup(html, "lxml")

    # Respect <base href="..."> if present
    base_tag = soup.find("base", href=True)
    base_href = base_tag["href"].strip() if base_tag else page_url

    # 1) Download + rewrite tag attributes
    for tag_name, attrs in ASSET_TAG_ATTRS:
        for tag in soup.find_all(tag_name):
            for attr in attrs:
                if not tag.has_attr(attr):
                    continue

                # Special handling for <link href=...>
                if tag_name == "link" and attr == "href":
                    if not should_download_link(tag):
                        continue

                val = tag.get(attr)
                if not val:
                    continue

                # srcset
                if attr == "srcset":
                    pairs = split_srcset(val)
                    new_pairs = []
                    for u, d in pairs:
                        u = u.strip()
                        if not u or is_data_uri(u) or is_skippable_scheme(u):
                            new_pairs.append((u, d))
                            continue
                        abs_u = urljoin(base_href, u)
                        local = dl.download(abs_u)
                        if local:
                            new_pairs.append((relpath(out_html, local), d))
                        else:
                            new_pairs.append((u, d))
                    tag[attr] = join_srcset(tuple(new_pairs))
                    continue

                # normal URL attrs
                u = str(val).strip()
                if not u or is_data_uri(u) or is_skippable_scheme(u):
                    continue
                abs_u = urljoin(base_href, u)
                local = dl.download(abs_u)
                if local:
                    tag[attr] = relpath(out_html, local)

    # 2) Inline style="...url(...)"
    for tag in soup.find_all(style=True):
        style_text = tag.get("style") or ""
        def repl_inline(m: re.Match) -> str:
            raw = m.group(2).strip()
            if not raw or is_data_uri(raw) or is_skippable_scheme(raw):
                return m.group(0)
            abs_u = urljoin(base_href, raw)
            local = dl.download(abs_u)
            if not local:
                return m.group(0)
            return f"url({relpath(out_html, local)})"
        tag["style"] = CSS_URL_RE.sub(repl_inline, style_text)

    # 3) <style> blocks (download + rewrite)
    for style_tag in soup.find_all("style"):
        css_text = style_tag.string
        if not css_text:
            continue
        # Use page_url as base for inline styles
        rewritten = rewrite_css(css_text, page_url, out_html, dl)
        style_tag.string.replace_with(rewritten)

    # 4) Post-process downloaded CSS files: rewrite their internal URLs too
    #    (only those we downloaded and ended with .css)
    for remote_url, local_file in list(dl.map_url_to_file.items()):
        if local_file.suffix.lower() != ".css":
            continue
        try:
            css_bytes = local_file.read_bytes()
            # try decode; fallback to utf-8
            css_text = css_bytes.decode("utf-8", errors="replace")
            rewritten = rewrite_css(css_text, remote_url, local_file, dl)
            local_file.write_text(rewritten, encoding="utf-8")
        except Exception as e:
            print(f"[WARN] css rewrite failed: {local_file} ({e})")

    ensure_parent(out_html)
    out_html.write_text(str(soup), encoding="utf-8")


# ----------------------------
# Main
# ----------------------------
def main():
    ap = argparse.ArgumentParser(description="Download a web page + its assets (images/css/js/fonts) for offline viewing.")
    ap.add_argument("--url", required=True, help="Target page URL")
    ap.add_argument("--out", default="offline_export", help="Output directory")
    ap.add_argument("--same-origin", action="store_true", default=True, help="Download only same-origin assets (default ON)")
    ap.add_argument("--include-external", action="store_true", help="Also download external assets (CAUTION)")
    ap.add_argument("--delay", type=float, default=0.3, help="Delay seconds between requests")
    ap.add_argument("--timeout", type=int, default=30, help="HTTP timeout seconds")

    args = ap.parse_args()

    url = args.url
    out_dir = Path(args.out).resolve()
    out_dir.mkdir(parents=True, exist_ok=True)

    dl = Downloader(
        out_dir=out_dir,
        base_url=url,
        same_origin=(not args.include_external),
        delay=args.delay,
        timeout=args.timeout
    )

    # fetch page html
    try:
        html_bytes, ctype, final_url = dl.fetch_bytes(url)
        # decode HTML (best-effort)
        # requests doesn't always know encoding; use apparent by re-requesting headers is heavy -> decode with utf-8 replace
        html_text = html_bytes.decode("utf-8", errors="replace")
    except Exception as e:
        raise SystemExit(f"[ERROR] failed to fetch page: {url} ({e})")

    out_html = out_dir / "index.html"
    rewrite_html_and_download_assets(html_text, final_url, out_html, dl)

    print("\nDone.")
    print(f"Open: {out_html}")
    print(f"Assets saved under: {out_dir / 'assets'}")


if __name__ == "__main__":
    main()
