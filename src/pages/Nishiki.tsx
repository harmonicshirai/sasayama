import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Calendar, Stethoscope, Heart, Users } from 'lucide-react';

const Nishiki = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(210 80% 45% / 0.9), hsl(150 50% 50% / 0.85)), url('https://images.unsplash.com/photo-1519196213789-9304aa728a83?w=1920&auto=format&fit=crop&q=80')`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            医療法人社団 みどり会
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            にしき記念病院
          </h1>
          <p className="text-xl md:text-2xl">
            年中無休で地域の健康を守ります
          </p>
        </div>
      </section>

      {/* 病院概要 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-[hsl(var(--primary))]">病院概要</CardTitle>
                <CardDescription className="text-lg">
                  地域に根ざした医療を提供
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">所在地</p>
                        <p className="text-muted-foreground">〒669-2721<br />兵庫県丹波篠山市西谷575番地の1</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">電話番号</p>
                        <p className="text-muted-foreground">079-593-1352</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">診療時間</p>
                        <div className="text-muted-foreground space-y-1">
                          <p>平日（月・水・木・金）</p>
                          <p className="ml-4">午前: 9:00〜12:00</p>
                          <p className="ml-4">午後: 17:00〜19:00</p>
                          <p>火曜日</p>
                          <p className="ml-4">午前: 9:00〜12:00</p>
                          <p className="ml-4">午後: 17:30〜19:00</p>
                          <p>土日祝・振替休日</p>
                          <p className="ml-4">午前: 9:00〜12:00</p>
                          <p className="ml-4">午後: 14:00〜17:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[hsl(var(--primary))] mb-4">
              にしき記念病院の特徴
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">年中無休の内科診療</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  内科は日曜、祝日、年末年始を含む365日診療しています。急な体調不良にも対応可能です。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--secondary-light))] rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">救急病院認定</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  2010年2月から兵庫県の救急病院として認定されており、緊急時の対応が可能です。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">幅広い診療科目</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  内科、整形外科、眼科、皮膚科、耳鼻咽喉科など、多様な診療科目で地域医療をサポートします。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 診療科目 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-[hsl(var(--primary))]">診療科目</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: '内科', time: '月〜金 9:00-12:00 / 17:00-19:00、土日祝 9:00-12:00 / 14:00-17:00' },
                    { name: '心療内科', time: '予約制' },
                    { name: '総合内科・消化器内科', time: '予約制' },
                    { name: '精神科', time: '予約制' },
                    { name: '呼吸器内科', time: '予約制' },
                    { name: '脳神経外科', time: '予約制' },
                    { name: '整形外科', time: '月・火・水・金 9:00-12:00 / 16:00-18:30' },
                    { name: '神経内科', time: '予約制' },
                    { name: '眼科', time: '月・水・木・金 9:00-12:00 / 15:00-17:00、火 9:00-12:00' },
                    { name: '皮膚科', time: '16:30-19:00' },
                    { name: '耳鼻咽喉科', time: '予約制' },
                    { name: '放射線科', time: '各科診療時間に準ずる' },
                    { name: 'リハビリテーション科', time: '各科診療時間に準ずる' },
                    { name: '形成外科', time: '予約制' },
                    { name: '循環器内科', time: '予約制' },
                    { name: '老年内科', time: '予約制' },
                  ].map((dept) => (
                    <div key={dept.name} className="flex items-start gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <Stethoscope className="w-5 h-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">{dept.name}</p>
                        <p className="text-sm text-muted-foreground">{dept.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    ※ 予約制の診療科の予約については、診療時間内にお願いします。<br />
                    ※ 休暇により休診となる診療科がありますので、来院前に電話にてお問い合わせください。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 健康診断 */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-2 border-[hsl(var(--accent))]">
              <CardHeader>
                <CardTitle className="text-3xl text-[hsl(var(--primary))]">健康診断</CardTitle>
                <CardDescription className="text-lg">
                  協会けんぽ生活習慣病予防健診 受診申込受付中
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-[hsl(var(--accent))] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">予約受付時間</p>
                      <p className="text-muted-foreground">月〜金曜日 13:00〜16:30</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-[hsl(var(--accent))] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">お問い合わせ</p>
                      <p className="text-muted-foreground">079-593-1352</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nishiki;
