import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Building2, Stethoscope, Award, Users, Heart } from 'lucide-react';

const Sasayama = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(210 80% 45% / 0.9), hsl(150 50% 50% / 0.85)), url('https://images.unsplash.com/photo-1565262353342-6e919eab5b58?w=1920&auto=format&fit=crop&q=80')`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            兵庫医科大学
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            ささやま医療センター
          </h1>
          <p className="text-xl md:text-2xl">
            大学病院として質の高い地域医療を提供
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
                  兵庫医科大学の付属病院（篠山キャンパス）
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">名称</p>
                        <p className="text-muted-foreground">兵庫医科大学ささやま医療センター</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">所在地</p>
                        <p className="text-muted-foreground">〒669-2321<br />兵庫県丹波篠山市黒岡5</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">電話番号</p>
                        <p className="text-muted-foreground">079-552-1181</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">受付時間</p>
                        <p className="text-muted-foreground">8:30〜11:30（平日のみ）</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">休診日</p>
                        <p className="text-muted-foreground">土曜、日曜、祝日、年末年始（12月29日〜1月3日）</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">開設年月日</p>
                        <p className="text-muted-foreground">1997年10月1日</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-3xl font-bold text-[hsl(var(--primary))] mb-1">138床</p>
                      <p className="text-sm text-muted-foreground">許可病床数</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-3xl font-bold text-[hsl(var(--accent))] mb-1">217.9人</p>
                      <p className="text-sm text-muted-foreground">外来患者数（1日平均）</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-3xl font-bold text-[hsl(var(--primary))] mb-1">113.5人</p>
                      <p className="text-sm text-muted-foreground">入院患者数（1日平均）</p>
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
              ささやま医療センターの特徴
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">大学病院の質</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  兵庫医科大学の付属病院として、最新の医療知識と技術を提供します。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--secondary-light))] rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">回復期リハビリ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  回復期リハビリテーション病棟44床を有し、充実したリハビリテーションを提供します。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">地域連携</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  兵庫医科大学病院（西宮市）とも連携し、総合的な医療を提供します。
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
                    '内科・総合診療科',
                    '循環器内科',
                    '消化器内科',
                    '呼吸器内科',
                    '小児科',
                    '整形外科',
                    '麻酔科',
                    '放射線科',
                    'リハビリテーション科',
                  ].map((dept) => (
                    <div key={dept} className="flex items-start gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <Stethoscope className="w-5 h-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">{dept}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    ※ 受付時間は平日8:30〜17:00です。<br />
                    ※ 診療科によって診療日時が異なる場合がありますので、事前にお問い合わせください。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 施設基準 */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-[hsl(var(--primary))]">主な施設基準</CardTitle>
                <CardDescription className="text-lg">
                  質の高い医療を提供するための認定・加算
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    '機能強化加算',
                    '急性期一般入院料6',
                    '救急医療管理加算1',
                    '診療録管理体制加算2',
                    '医師事務作業補助体制加算1',
                    '医療安全対策加算2',
                    '感染対策向上加算2',
                    '後発医薬品使用体制加算1',
                    '病棟薬剤業務実施加算1',
                    '入退院支援加算2',
                    '認知症ケア加算2',
                    '回復期リハビリテーション病棟入院料1',
                    '心大血管疾患等リハビリテーション料（Ⅰ）',
                    '脳血管疾患等リハビリテーション料（Ⅰ）',
                    '運動器リハビリテーション料（Ⅰ）',
                    '呼吸器リハビリテーション料（Ⅰ）',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 p-3 bg-white rounded border">
                      <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
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

export default Sasayama;
