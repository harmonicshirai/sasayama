import { useState } from 'react';
import { Link } from '@/lib/react-router-dom-proxy';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Clock } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* トップバー */}
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>お問い合わせ: 079-552-1181</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>受付時間: 8:30〜11:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* メインナビゲーション */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">医</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[hsl(var(--primary))]">
                丹波篠山統合医療センター
              </h1>
              <p className="text-xs text-muted-foreground">Tamba Sasayama Integrated Medical Center</p>
            </div>
          </Link>

          {/* デスクトップメニュー */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-[hsl(var(--primary))] transition-colors font-medium">
              ホーム
            </Link>
            <Link to="/nishiki" className="text-foreground hover:text-[hsl(var(--primary))] transition-colors font-medium">
              にしき記念病院
            </Link>
            <Link to="/sasayama" className="text-foreground hover:text-[hsl(var(--primary))] transition-colors font-medium">
              ささやま医療センター
            </Link>
            <Link to="/departments" className="text-foreground hover:text-[hsl(var(--primary))] transition-colors font-medium">
              診療科目
            </Link>
            <Link to="/access" className="text-foreground hover:text-[hsl(var(--primary))] transition-colors font-medium">
              アクセス
            </Link>
            <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-dark))]">
              オンライン予約
            </Button>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ホーム
            </Link>
            <Link
              to="/nishiki"
              className="block py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              にしき記念病院
            </Link>
            <Link
              to="/sasayama"
              className="block py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ささやま医療センター
            </Link>
            <Link
              to="/departments"
              className="block py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              診療科目
            </Link>
            <Link
              to="/access"
              className="block py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              アクセス
            </Link>
            <div className="px-4 pt-2">
              <Button className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-dark))]">
                オンライン予約
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
