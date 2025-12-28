import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Building2, Stethoscope, Award, Users, Heart, Calendar, Activity, BookOpen, Target, Eye } from 'lucide-react';

const Sasayama = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(210 80% 45% / 0.3), hsl(150 50% 50% / 0.3)), url('https://images.unsplash.com/photo-1565262353342-6e919eab5b58?w=1920&auto=format&fit=crop&q=80')`,
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

      {/* 診療時間・お見舞い時間 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 診療時間 */}
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-[hsl(var(--primary))]" />
                    <CardTitle className="text-2xl text-black">受付時間</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-lg text-black mb-2">外来受付</p>
                        <p className="text-gray-700">8:30 〜 11:30（平日のみ）</p>
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-black mb-2">休診日</p>
                        <p className="text-gray-700">土曜、日曜、祝日、年末年始（12月29日〜1月3日）</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-amber-700">お願い</span><br />
                      ・受付時間は平日8:30〜17:00です<br />
                      ・診療科によって診療日時が異なる場合がありますので、事前にお問い合わせください
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* お見舞い時間 */}
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Eye className="w-8 h-8 text-[hsl(var(--accent))]" />
                    <CardTitle className="text-2xl text-black">お見舞い時間</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-lg text-black mb-2">平日</p>
                        <p className="text-gray-700">14:00 〜 20:00</p>
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-black mb-2">土日祝日</p>
                        <p className="text-gray-700">10:00 〜 20:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-amber-700">お願い</span><br />
                      ・感染症予防のため、面会は少人数で短時間でお願いします<br />
                      ・病状によっては面会をお断りする場合があります
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              ささやま医療センターの特徴
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-black">大学病院の質</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  兵庫医科大学の付属病院として、最新の医療知識と技術を提供します。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--secondary-light))] rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-black">回復期リハビリ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  回復期リハビリテーション病棟44床を有し、充実したリハビリテーションを提供します。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-black">地域連携</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
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
                <CardTitle className="text-3xl text-black">診療科目</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    '内科',
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
                        <p className="font-semibold text-black">{dept}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    ※ 受付時間は平日8:30〜17:00です。<br />
                    ※ 診療科によって診療日時が異なる場合がありますので、事前にお問い合わせください。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 理念・基本方針 */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-2 border-[hsl(var(--primary))]">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-black">
                  理念・基本方針
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">理念</h3>
                  </div>
                  <p className="text-lg text-gray-700 ml-15">
                    安全で質の高い包括的医療を通じて、安心な地域づくりに貢献するとともに、良き医療人を育成します。
                  </p>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--secondary-light))] rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">基本方針</h3>
                  </div>
                  <div className="space-y-3 ml-15">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">患者さんの権利を尊重し、安全で質の高い医療を提供します</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">地域の医療機関と連携し、包括的な医療を提供します</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">医療人としての倫理観と専門性を高め、良き医療人を育成します</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">地域の健康増進活動に積極的に参加し、安心な地域づくりに貢献します</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-black">沿革</CardTitle>
                <CardDescription className="text-lg text-gray-700">
                  1952年から現在にいたるまでの歩み
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { year: '1952年', event: '国立篠山病院として開設' },
                    { year: '1997年10月1日', event: '兵庫医科大学に譲渡され、兵庫医科大学篠山病院として開院' },
                    { year: '2004年', event: '回復期リハビリテーション病棟を開設' },
                    { year: '2016年', event: '兵庫医科大学ささやま医療センターに名称変更' },
                    { year: '2021年', event: '地域包括ケア病棟を開設' },
                    { year: '2025年', event: 'にしき記念病院と経営統合' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border-l-4 border-[hsl(var(--primary))] bg-muted/30 rounded-r-lg">
                      <div className="flex items-center gap-2 min-w-[140px]">
                        <Calendar className="w-5 h-5 text-[hsl(var(--primary))] flex-shrink-0" />
                        <span className="font-semibold text-black">{item.year}</span>
                      </div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* リハビリテーションセンター */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--secondary-light))] rounded-full flex items-center justify-center">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-black">リハビリテーションセンター</CardTitle>
                    <CardDescription className="text-lg text-gray-700">充実したリハビリテーション体制</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-black">対象疾患</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      '脳血管疾患（脳卒中、慢性硬膜下血腫など）',
                      '運動器疾患（骨折、靱帯損傷、腰痛、肩関節周囲炎、変形性関節症など）',
                      '呼吸器疾患（肺炎、慢性呼吸器不全、気管支喘息など）',
                      '心大血管疾患（心筋梗塞、狭心症、心不全など）',
                      '廃用症候群（長期臥床による筋力低下など）',
                      'がん患者のリハビリテーション',
                    ].map((disease) => (
                      <div key={disease} className="flex items-start gap-2 p-3 bg-white rounded border">
                        <div className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{disease}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold mb-3 text-black">リハビリテーションの特徴</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                      <Heart className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black mb-1">回復期リハビリテーション病棟</p>
                        <p className="text-sm text-gray-700">44床の回復期リハビリテーション病棟で、集中的なリハビリテーションを提供します。</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                      <Users className="w-6 h-6 text-[hsl(var(--accent))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black mb-1">多職種連携</p>
                        <p className="text-sm text-gray-700">医師、看護師、理学療法士、作業療法士、言語聴覚士がチームで患者様をサポートします。</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                      <Award className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black mb-1">高い実績</p>
                        <p className="text-sm text-gray-700">回復期リハビリテーション病棟入院料1の施設基準を満たし、質の高いリハビリテーションを提供しています。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 施設基準 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-black">主な施設基準</CardTitle>
                <CardDescription className="text-lg text-gray-700">
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
                      <p className="text-sm text-black">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 病院概要 */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-black">病院概要</CardTitle>
                <CardDescription className="text-lg text-gray-700">
                  兵庫医科大学の付属病院（篠山キャンパス）
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black mb-1">名称</p>
                        <p className="text-gray-700">兵庫医科大学ささやま医療センター</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black mb-1">所在地</p>
                        <p className="text-gray-700">〒669-2321<br />兵庫県丹波篠山市黒岡5</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black mb-1">電話番号</p>
                        <p className="text-gray-700">079-552-1181</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black mb-1">設置者</p>
                        <p className="text-gray-700">学校法人 兵庫医科大学</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black mb-1">開設年月日</p>
                        <p className="text-gray-700">1997年10月1日</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black mb-1">許可病床数</p>
                        <p className="text-gray-700">138床（一般50床 / 回復期リハビリ44床）</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-3xl font-bold text-[hsl(var(--primary))] mb-1">217.9人</p>
                      <p className="text-sm text-gray-700">外来患者数（1日平均）</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-3xl font-bold text-[hsl(var(--accent))] mb-1">113.5人</p>
                      <p className="text-sm text-gray-700">入院患者数（1日平均）</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 text-center mt-2">（2023年4月1日〜2024年03月31日）</p>
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
