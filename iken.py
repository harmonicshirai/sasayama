#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import csv
import os
import re
import time
from dataclasses import dataclass
from pathlib import Path
from typing import List, Optional, Tuple
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

# PDF text extractor: PyMuPDF
import fitz  # pip install pymupdf


OPINIONBOX_URL = "https://www.sasayama.hyo-med.ac.jp/about/opinionbox/"

RE_NO = re.compile(r"No\.(\d+)")
RE_COLLECTION = re.compile(r"（\s*([0-9]{4}年[^）]*回収分[^）]*)\s*）")
RE_PDF = re.compile(r"\.pdf(\?.*)?$", re.IGNORECASE)

# 「＜ご意見＞ ... ＜回答＞」が複数あるPDFに対応（No.28みたいな形式） :contentReference[oaicite:4]{index=4}
RE_OPINION_BLOCKS = re.compile(r"＜ご意見＞\s*(.*?)\s*＜回答＞", re.DOTALL)

# まれに並び順が崩れてるPDF用の保険（No.42のように回答文が先に並ぶケース） :contentReference[oaicite:5]{index=5}
ANSWER_STARTERS = (
    "この度は", "このたびは", "ご意見ありがとうございます", "ご意見をいただき", "お詫び申し上げます",
    "申し訳", "当該職員", "管理者", "ひきつづき", "今後も", "至急",
)

@dataclass
class PdfLink:
    no: Optional[int]
    collection: Optional[str]  # 例: 2025年11月回収分
    label: str
    pdf_url: str


def normalize_text(s: str) -> str:
    s = s.replace("\r\n", "\n").replace("\r", "\n")
    # 連続スペースを少し整理
    s = re.sub(r"[ \t]+", " ", s)
    # 連続改行を整理
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def clean_opinion(s: str) -> str:
    s = normalize_text(s)
    # 注記の除去（PDFによく入る） :contentReference[oaicite:6]{index=6}
    s = re.sub(r"^※.*$", "", s, flags=re.MULTILINE).strip()
    # 先頭/末尾の箇条書き空白
    s = re.sub(r"^\s*[・●○〇\-]+\s*", "", s)
    return s.strip()


def safe_filename_from_url(url: str) -> str:
    path = urlparse(url).path
    name = os.path.basename(path) or "download.pdf"
    return name


def fetch_opinionbox_links(page_url: str, timeout: int) -> List[PdfLink]:
    r = requests.get(page_url, timeout=timeout)
    r.raise_for_status()
    soup = BeautifulSoup(r.text, "lxml")

    links: List[PdfLink] = []
    for a in soup.select("a[href]"):
        href = a.get("href", "").strip()
        if not href or not RE_PDF.search(href):
            continue
        abs_url = urljoin(page_url, href)
        label = a.get_text(" ", strip=True)

        no = None
        m = RE_NO.search(label)
        if m:
            try:
                no = int(m.group(1))
            except ValueError:
                no = None

        collection = None
        m2 = RE_COLLECTION.search(label)
        if m2:
            collection = m2.group(1)

        links.append(PdfLink(no=no, collection=collection, label=label, pdf_url=abs_url))

    # Noが取れるものはNo降順（新しいのが上に来がち）に並べ替え
    links.sort(key=lambda x: (x.no is None, -(x.no or -1)))
    return links


def download_pdf(url: str, dst: Path, timeout: int, delay: float) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    if dst.exists() and dst.stat().st_size > 0:
        return
    time.sleep(delay)
    r = requests.get(url, timeout=timeout)
    r.raise_for_status()
    dst.write_bytes(r.content)


def extract_text_pymupdf(pdf_path: Path) -> str:
    doc = fitz.open(pdf_path)
    parts = []
    for page in doc:
        parts.append(page.get_text("text"))
    doc.close()
    return normalize_text("\n".join(parts))


def fallback_extract_opinion(text: str) -> List[str]:
    """
    「＜ご意見＞...＜回答＞」が取れないPDF用の保険。
    ざっくり「ご意見箱便(回収分)」の直後から、回答っぽい語が出るまでを opinion とみなす。
    """
    lines = [ln.strip() for ln in text.split("\n") if ln.strip()]
    if not lines:
        return []

    # 「ご意見箱」便 の位置を探す :contentReference[oaicite:7]{index=7}
    start_idx = None
    for i, ln in enumerate(lines):
        if "「ご意見箱」便" in ln:
            start_idx = i
            break
    if start_idx is None:
        return []

    # その次の「（xxxx回収分）」行の次から開始
    i = start_idx + 1
    if i < len(lines) and ("回収分" in lines[i] and "（" in lines[i]):
        i += 1

    buf = []
    for j in range(i, len(lines)):
        ln = lines[j]
        # 回答っぽい始まりを見つけたら打ち切り
        if any(ln.startswith(k) for k in ANSWER_STARTERS):
            if buf:
                break
        buf.append(ln)

    candidate = clean_opinion("\n".join(buf))
    return [candidate] if candidate else []


def extract_opinions(text: str) -> List[str]:
    blocks = [clean_opinion(b) for b in RE_OPINION_BLOCKS.findall(text)]
    blocks = [b for b in blocks if b]
    if blocks:
        return blocks
    return fallback_extract_opinion(text)


def main():
    ap = argparse.ArgumentParser(description="Extract 'ご意見' from Sasayama Medical Center opinionbox PDFs.")
    ap.add_argument("--page", default=OPINIONBOX_URL, help="Opinionbox page URL")
    ap.add_argument("--out", default="opinionbox_export", help="Output directory")
    ap.add_argument("--delay", type=float, default=0.5, help="Delay seconds between requests")
    ap.add_argument("--timeout", type=int, default=30, help="HTTP timeout seconds")
    ap.add_argument("--from-no", type=int, default=None, help="Minimum No. to process")
    ap.add_argument("--to-no", type=int, default=None, help="Maximum No. to process")
    args = ap.parse_args()

    out_dir = Path(args.out).resolve()
    pdf_dir = out_dir / "pdfs"
    out_csv = out_dir / "opinions.csv"

    links = fetch_opinionbox_links(args.page, args.timeout)

    # 範囲フィルタ
    filtered: List[PdfLink] = []
    for lk in links:
        if lk.no is None:
            continue
        if args.from_no is not None and lk.no < args.from_no:
            continue
        if args.to_no is not None and lk.no > args.to_no:
            continue
        filtered.append(lk)

    out_dir.mkdir(parents=True, exist_ok=True)

    rows = []
    for lk in filtered:
        pdf_name = safe_filename_from_url(lk.pdf_url)
        pdf_path = pdf_dir / pdf_name

        try:
            download_pdf(lk.pdf_url, pdf_path, args.timeout, args.delay)
            text = extract_text_pymupdf(pdf_path)

            if len(text) < 20:
                # スキャンPDF等でテキストが取れない可能性
                rows.append({
                    "no": lk.no,
                    "collection": lk.collection or "",
                    "opinion_index": "",
                    "opinion_text": "",
                    "status": "NEEDS_OCR",
                    "label": lk.label,
                    "pdf_url": lk.pdf_url,
                    "pdf_file": str(pdf_path),
                })
                continue

            opinions = extract_opinions(text)
            if not opinions:
                rows.append({
                    "no": lk.no,
                    "collection": lk.collection or "",
                    "opinion_index": "",
                    "opinion_text": "",
                    "status": "NO_OPINION_FOUND",
                    "label": lk.label,
                    "pdf_url": lk.pdf_url,
                    "pdf_file": str(pdf_path),
                })
                continue

            for idx, op in enumerate(opinions, start=1):
                rows.append({
                    "no": lk.no,
                    "collection": lk.collection or "",
                    "opinion_index": idx,
                    "opinion_text": op,
                    "status": "OK",
                    "label": lk.label,
                    "pdf_url": lk.pdf_url,
                    "pdf_file": str(pdf_path),
                })

        except Exception as e:
            rows.append({
                "no": lk.no,
                "collection": lk.collection or "",
                "opinion_index": "",
                "opinion_text": "",
                "status": f"ERROR: {e}",
                "label": lk.label,
                "pdf_url": lk.pdf_url,
                "pdf_file": str(pdf_path),
            })

    # Excelで文字化けしにくい UTF-8 BOM にする（Win11業務向け）
    with out_csv.open("w", encoding="utf-8-sig", newline="") as f:
        w = csv.DictWriter(
            f,
            fieldnames=["no", "collection", "opinion_index", "opinion_text", "status", "label", "pdf_url", "pdf_file"],
        )
        w.writeheader()
        w.writerows(rows)

    print(f"Done: {out_csv}")
    print(f"PDFs: {pdf_dir}")


if __name__ == "__main__":
    main()
