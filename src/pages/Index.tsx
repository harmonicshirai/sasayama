import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/lib/react-router-dom-proxy';
import { 
  Heart, 
  Users, 
  Building2, 
  Stethoscope, 
  Clock, 
  MapPin, 
  Phone,
  Calendar,
  Award,
  Shield,
  Activity,
  Ambulance
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(210 80% 45% / 0.9), hsl(150 50% 50% / 0.85)), url('https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?w=1920&auto=format&fit=crop&q=80')`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            2025年 経営統合
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            地域医療の新しい未来へ
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            にしき記念病院と兵庫医科大学ささやま医療センターが統合し、<br />
            より充実した医療サービスを提供します
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(var(--primary))] hover:bg-white/90 text-lg px-8 py-6">
              <Calendar className="mr-2 w-5 h-5" />
              オンライン予約
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Phone className="mr-2 w-5 h-5" />
              お問い合わせ
            </Button>
          </div>
        </div>
      </section>

      {/* 統合のお知らせ */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[hsl(var(--primary))] shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-[hsl(var(--primary))]">
                  経営統合のお知らせ
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  より質の高い医療サービスの提供を目指して
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <p>
                  この度、医療法人社団みどり会 にしき記念病院と兵庫医科大学ささやま医療センターは、
                  2025年に経営統合することとなりました。
                </p>
                <p>
                  両病院の強みを活かし、丹波篠山地域の皆様により充実した医療サービスを提供してまいります。
                  今後とも変わらぬご支援を賜りますよう、よろしくお願い申し上げます。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 統合病院の特徴 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[hsl(var(--primary))] mb-4">
              統合医療センターの特徴
            </h2>
            <p className="text-xl text-muted-foreground">
              2つの病院が1つになり、さらに充実した医療を
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">充実した診療科目</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  内科、外科、整形外科など、幅広い診療科目で地域医療をサポート
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--secondary-light))] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">経験豊富な医療スタッフ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  両病院の優秀な医師・看護師が連携し、質の高い医療を提供
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">最新医療機器</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  最新の医療機器を導入し、正確な診断と治療を実現
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--primary))] rounded-full flex items-center justify-center mb-4">
                  <Ambulance className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">24時間救急対応</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  にしき記念病院では年中無休で内科診療を実施
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 各病院紹介 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[hsl(var(--primary))] mb-4">
              統合病院のご紹介
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* にしき記念病院 */}
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1519196213789-9304aa728a83?w=800&auto=format&fit=crop&q=80')`
              }} />
              <CardHeader>
                <CardTitle className="text-2xl text-[hsl(var(--primary))]">
                  にしき記念病院
                </CardTitle>
                <CardDescription className="text-base">
                  医療法人社団 みどり会
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                  <span>兵庫県丹波篠山市西谷575-1</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                  <span>079-593-1352</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                  <div>
                    <p>平日: 9:00〜12:00 / 17:00〜19:00</p>
                    <p>土日祝: 9:00〜12:00 / 14:00〜17:00</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/nishiki">
                    <Button className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-dark))]">
                      詳しく見る
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* ささやま医療センター */}
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1565262353342-6e919eab5b58?w=800&auto=format&fit=crop&q=80')`
              }} />
              <CardHeader>
                <CardTitle className="text-2xl text-[hsl(var(--primary))]">
                  ささやま医療センター
                </CardTitle>
                <CardDescription className="text-base">
                  兵庫医科大学
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                  <span>兵庫県丹波篠山市黒岡5</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                  <span>079-552-1181</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                  <div>
                    <p>受付時間: 8:30〜11:30</p>
                    <p>休診日: 土日祝・年末年始</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/sasayama">
                    <Button className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-dark))]">
                      詳しく見る
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 診療科目 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[hsl(var(--primary))] mb-4">
              主な診療科目
            </h2>
            <p className="text-xl text-muted-foreground">
              幅広い診療科目で地域の健康をサポート
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              '内科', '循環器内科', '消化器内科', '呼吸器内科',
              '外科', '整形外科', '脳神経外科', '小児科',
              '産婦人科', '眼科', '耳鼻咽喉科', '皮膚科',
              '精神科', '心療内科', 'リハビリテーション科', '放射線科'
            ].map((dept) => (
              <Card key={dept} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 pb-6">
                  <Stethoscope className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--primary))]" />
                  <p className="font-medium">{dept}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/departments">
              <Button size="lg" className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-dark))]">
                診療科目一覧を見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ご予約・お問い合わせ
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            診療のご予約やご相談は、お電話またはオンラインで承っております
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(var(--primary))] hover:bg-white/90 text-lg px-8 py-6">
              <Calendar className="mr-2 w-5 h-5" />
              オンライン予約
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Phone className="mr-2 w-5 h-5" />
              電話で問い合わせ
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
