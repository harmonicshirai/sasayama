import { Link } from '@/lib/react-router-dom-proxy';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[hsl(var(--primary-dark))] to-[hsl(var(--primary))] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 病院情報 */}
          <div>
            <h3 className="text-lg font-bold mb-4">丹波篠山統合医療センター</h3>
            <p className="text-sm text-white/80 mb-4">
              地域の皆様に安心・安全な医療を提供します
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-white/80">兵庫県丹波篠山市</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-white/80">079-552-1181</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-white/80">info@tamba-medical.jp</span>
              </div>
            </div>
          </div>

          {/* にしき記念病院 */}
          <div>
            <h3 className="text-lg font-bold mb-4">にしき記念病院</h3>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>兵庫県丹波篠山市西谷575-1</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>079-593-1352</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>平日: 9:00〜12:00 / 17:00〜19:00</p>
                  <p>土日祝: 9:00〜12:00 / 14:00〜17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* ささやま医療センター */}
          <div>
            <h3 className="text-lg font-bold mb-4">ささやま医療センター</h3>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>兵庫県丹波篠山市黒岡5</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>079-552-1181</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>受付: 8:30〜11:30</p>
                  <p>休診: 土日祝・年末年始</p>
                </div>
              </div>
            </div>
          </div>

          {/* クイックリンク */}
          <div>
            <h3 className="text-lg font-bold mb-4">クイックリンク</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="block text-white/80 hover:text-white transition-colors">
                ホーム
              </Link>
              <Link to="/nishiki" className="block text-white/80 hover:text-white transition-colors">
                にしき記念病院
              </Link>
              <Link to="/sasayama" className="block text-white/80 hover:text-white transition-colors">
                ささやま医療センター
              </Link>
              <Link to="/departments" className="block text-white/80 hover:text-white transition-colors">
                診療科目
              </Link>
              <Link to="/access" className="block text-white/80 hover:text-white transition-colors">
                アクセス
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 丹波篠山統合医療センター All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
