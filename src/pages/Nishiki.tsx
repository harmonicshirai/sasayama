import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Calendar, Stethoscope, Heart, Users, Eye } from 'lucide-react';

const Nishiki = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(210 80% 45% / 0.3), hsl(150 50% 50% / 0.3)), url('https://images.unsplash.com/photo-1581982231900-6a1a46b744c9?w=1920&auto=format&fit=crop&q=80')`,
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
                    <CardTitle className="text-2xl text-black">診療時間</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-black mb-2">内科（年中無休）</p>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p>平日（月・水・木・金）: 9:00-12:00 / 17:00-19:00</p>
                        <p>火曜日: 9:00-12:00 / 17:30-19:00</p>
                        <p>土日祝・振替休日: 9:00-12:00 / 14:00-17:00</p>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="font-semibold text-black mb-2">整形外科</p>
                      <p className="text-sm text-gray-700">月・火・水・金: 9:00-12:00 / 16:00-18:30</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-black mb-2">眼科</p>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p>月・水・木・金: 9:00-12:00 / 15:00-17:00</p>
                        <p>火曜日: 9:00-12:00</p>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="font-semibold text-black mb-2">皮膚科</p>
                      <p className="text-sm text-gray-700">16:30-19:00</p>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg">
                      <p className="font-semibold text-amber-700 mb-2">その他の診療科</p>
                      <p className="text-sm text-gray-700">予約制（診療時間内にお電話でご予約ください）</p>
                    </div>
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
              にしき記念病院の特徴
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-black">年中無休の内科診療</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  内科は日曜、祝日、年末年始を含む365日診療しています。急な体調不良にも対応可能です。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--secondary-light))] rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-black">救急病院認定</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  2010年2月から兵庫県の救急病院として認定されており、緊急時の対応が可能です。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-black">幅広い診療科目</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  内科、整形外科、眼科、皮膚科、耳鼻咽喉科など、多様な診療科目で地域医療をサポートします。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 診療科目・診療時間表 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-black">診療科目・診療時間表</CardTitle>
                <CardDescription className="text-lg text-gray-700">
                  各診療科の詳細な診療時間と担当医
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 内科 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] text-white p-4">
                    <h3 className="text-xl font-bold">内科（365日診療）</h3>
                    <p className="text-sm mt-1">一般内科、糖尿病など生活習慣病、肝臓疾患など幅広い分野で診察。医師、管理栄養士の指導のもとに栄養指導にも力を注いでいます。</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="p-3 text-left border">時間帯</th>
                          <th className="p-3 text-center border">月</th>
                          <th className="p-3 text-center border">火</th>
                          <th className="p-3 text-center border">水</th>
                          <th className="p-3 text-center border">木</th>
                          <th className="p-3 text-center border">金</th>
                          <th className="p-3 text-center border">土</th>
                          <th className="p-3 text-center border">日・祝</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-semibold">午前<br /><span className="text-sm font-normal">9:00-12:00</span></td>
                          <td className="p-3 text-center border bg-blue-50">院長<br />奥野</td>
                          <td className="p-3 text-center border bg-blue-50">院長</td>
                          <td className="p-3 text-center border bg-blue-50">院長</td>
                          <td className="p-3 text-center border bg-blue-50">院長</td>
                          <td className="p-3 text-center border bg-blue-50">院長または<br />京大医師</td>
                          <td className="p-3 text-center border bg-blue-50">院長または<br />京大医師</td>
                          <td className="p-3 text-center border bg-blue-50">院長または<br />京大医師</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-semibold">午後<br /><span className="text-sm font-normal">14:00-17:00</span></td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border bg-blue-50">院長または<br />京大医師</td>
                          <td className="p-3 text-center border bg-blue-50">院長または<br />京大医師</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-semibold">夜間<br /><span className="text-sm font-normal">17:00-19:00</span></td>
                          <td className="p-3 text-center border bg-blue-50">院長<br />奥野</td>
                          <td className="p-3 text-center border bg-amber-50">17:30-19:00<br />院長</td>
                          <td className="p-3 text-center border bg-blue-50">院長</td>
                          <td className="p-3 text-center border bg-blue-50">院長</td>
                          <td className="p-3 text-center border bg-blue-50">院長</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 総合内科・消化器内科 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary-light))] text-white p-4">
                    <h3 className="text-xl font-bold">総合内科・消化器内科（予約制）</h3>
                    <p className="text-sm mt-1">消化器疾患の診察、NBI（狭帯域光観察）などの最新技術を備えたスコープで胃カメラ、大腸カメラ、ポリープ切除を行っています。</p>
                  </div>
                  <div className="p-4 bg-amber-50">
                    <p className="text-sm text-muted-foreground">※ 完全予約制です。診療時間内にお電話でご予約ください。</p>
                  </div>
                </div>

                {/* 呼吸器内科 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] text-white p-4">
                    <h3 className="text-xl font-bold">呼吸器内科（予約制）</h3>
                    <p className="text-sm mt-1">肺ガンの早期発見、喘息治療、慢性呼吸器疾患、睡眠時無呼吸症候群、喀痰、息切れ、肺炎球菌ワクチンなどに最新の技術で診療。</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="p-3 text-left border">時間帯</th>
                          <th className="p-3 text-center border">月</th>
                          <th className="p-3 text-center border">火</th>
                          <th className="p-3 text-center border">水</th>
                          <th className="p-3 text-center border">木</th>
                          <th className="p-3 text-center border">金</th>
                          <th className="p-3 text-center border">土</th>
                          <th className="p-3 text-center border">日</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-semibold">午後<br /><span className="text-sm font-normal">14:30-17:00</span><br /><span className="text-xs">（月・金は14:30-15:50）</span></td>
                          <td className="p-3 text-center border bg-blue-50">黒須</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border bg-blue-50">黒須</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border bg-blue-50">黒須</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 整形外科 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary-light))] text-white p-4">
                    <h3 className="text-xl font-bold">整形外科</h3>
                    <p className="text-sm mt-1">医師及び理学療法士の指導により、患者様の機能回復訓練、消炎\u9鎮痛などリハビリを併せて行っています。</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="p-3 text-left border">時間帯</th>
                          <th className="p-3 text-center border">月</th>
                          <th className="p-3 text-center border">火</th>
                          <th className="p-3 text-center border">水</th>
                          <th className="p-3 text-center border">木</th>
                          <th className="p-3 text-center border">金</th>
                          <th className="p-3 text-center border">土</th>
                          <th className="p-3 text-center border">日</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-semibold">午前<br /><span className="text-sm font-normal">9:00-12:00</span></td>
                          <td className="p-3 text-center border bg-green-50">野口</td>
                          <td className="p-3 text-center border bg-green-50">野口</td>
                          <td className="p-3 text-center border bg-green-50">野口</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border bg-green-50">野口</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border">-</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-semibold">午後<br /><span className="text-sm font-normal">16:00-18:30</span></td>
                          <td className="p-3 text-center border bg-green-50">野口</td>
                          <td className="p-3 text-center border bg-green-50">野口</td>
                          <td className="p-3 text-center border bg-green-50">野口</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border bg-green-50">野口</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 眼科 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] text-white p-4">
                    <h3 className="text-xl font-bold">眼科</h3>
                    <p className="text-sm mt-1">白内障、緑内障などの一般眼科疾患、糖尿病網膜症、眼底出血、網膜剥離などの専門治療。日帰り白内障手術、緑内障手術、網膜剥離手術、硝子体手術など幅広く対応。</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="p-3 text-left border">時間帯</th>
                          <th className="p-3 text-center border">月</th>
                          <th className="p-3 text-center border">火</th>
                          <th className="p-3 text-center border">水</th>
                          <th className="p-3 text-center border">木</th>
                          <th className="p-3 text-center border">金</th>
                          <th className="p-3 text-center border">土</th>
                          <th className="p-3 text-center border">日</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-semibold">午前<br /><span className="text-sm font-normal">9:00-12:00</span></td>
                          <td className="p-3 text-center border bg-blue-50">中江</td>
                          <td className="p-3 text-center border bg-blue-50">中江</td>
                          <td className="p-3 text-center border bg-blue-50">中江</td>
                          <td className="p-3 text-center border bg-blue-50">中江</td>
                          <td className="p-3 text-center border bg-blue-50">中江</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border">-</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-semibold">午後<br /><span className="text-sm font-normal">13:00-15:00</span></td>
                          <td className="p-3 text-center border bg-amber-50">手術</td>
                          <td className="p-3 text-center border bg-amber-50">手術<br />予約検査</td>
                          <td className="p-3 text-center border bg-blue-50">中江</td>
                          <td className="p-3 text-center border bg-amber-50">手術<br />予約検査<br />光凝固治療</td>
                          <td className="p-3 text-center border bg-blue-50">中江</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border">-</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-semibold">午後<br /><span className="text-sm font-normal">15:00-17:00</span></td>
                          <td className="p-3 text-center border bg-blue-50">中江</td>
                          <td className="p-3 text-center border bg-amber-50">手術</td>
                          <td className="p-3 text-center border bg-blue-50">中江</td>
                          <td className="p-3 text-center border bg-blue-50">中江</td>
                          <td className="p-3 text-center border bg-blue-50">中江</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 耳鼻咽喉科 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary-light))] text-white p-4">
                    <h3 className="text-xl font-bold">耳鼻咽喉科</h3>
                    <p className="text-sm mt-1">一般的な症例はもとより、花粉症にはレーザー焼灼治療を取り入れ、最新の技術で診療しています。</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="p-3 text-left border">時間帯</th>
                          <th className="p-3 text-center border">月</th>
                          <th className="p-3 text-center border">火</th>
                          <th className="p-3 text-center border">水</th>
                          <th className="p-3 text-center border">木</th>
                          <th className="p-3 text-center border">金</th>
                          <th className="p-3 text-center border">土</th>
                          <th className="p-3 text-center border">日</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-semibold">午前<br /><span className="text-sm font-normal">9:00-12:00</span></td>
                          <td className="p-3 text-center border bg-green-50">田村</td>
                          <td className="p-3 text-center border bg-green-50">代診</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border bg-green-50">田村</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border bg-green-50">代診</td>
                          <td className="p-3 text-center border">-</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-semibold">午後<br /><span className="text-sm font-normal">14:00-16:30</span></td>
                          <td className="p-3 text-center border bg-green-50">田村</td>
                          <td className="p-3 text-center border bg-amber-50">休診中</td>
                          <td className="p-3 text-center border bg-green-50">田村</td>
                          <td className="p-3 text-center border bg-green-50">田村</td>
                          <td className="p-3 text-center border bg-green-50">田村</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border">-</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-semibold">夜間<br /><span className="text-sm font-normal">17:30-19:00</span></td>
                          <td className="p-3 text-center border bg-green-50">田村</td>
                          <td className="p-3 text-center border bg-amber-50">休診中</td>
                          <td className="p-3 text-center border bg-green-50">田村</td>
                          <td className="p-3 text-center border bg-green-50">田村</td>
                          <td className="p-3 text-center border bg-green-50">田村</td>
                          <td className="p-3 text-center border">-</td>
                          <td className="p-3 text-center border">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 予約制診療科 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-600 to-gray-500 text-white p-4">
                    <h3 className="text-xl font-bold">予約制診療科</h3>
                    <p className="text-sm mt-1">以下の診療科は完全予約制です。診療時間内にお電話でご予約ください。</p>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 border rounded bg-blue-50">
                        <p className="font-semibold text-black">心療内科</p>
                        <p className="text-sm text-gray-700 mt-1">火 9:00〜 坂井医師</p>
                        <p className="text-sm text-gray-700">金 10:00〜 堀医師</p>
                        <p className="text-sm text-gray-700">日（隔週） 9:00〜 村尾医師</p>
                      </div>
                      <div className="p-3 border rounded bg-green-50">
                        <p className="font-semibold text-black">精神科</p>
                        <p className="text-sm text-gray-700 mt-1">土 9:00-12:00 松本医師</p>
                        <p className="text-xs text-gray-700 mt-1">睡眠障害の治療にも力を注いでいます。</p>
                      </div>
                      <div className="p-3 border rounded bg-blue-50">
                        <p className="font-semibold text-black">神経内科</p>
                        <p className="text-sm text-gray-700 mt-1">月・火・水・木・金 9:00-12:00 / 14:00-18:30</p>
                        <p className="text-sm text-gray-700">（木は午前のみ） 野口医師</p>
                      </div>
                      <div className="p-3 border rounded bg-green-50">
                        <p className="font-semibold text-black">皮膚科</p>
                        <p className="text-sm text-gray-700 mt-1">金 16:30-19:00 横井医師</p>
                      </div>
                      <div className="p-3 border rounded bg-blue-50">
                        <p className="font-semibold text-black">脳神経外科</p>
                        <p className="text-sm text-gray-700 mt-1">水 17:00-19:00 頃末医師</p>
                      </div>
                      <div className="p-3 border rounded bg-green-50">
                        <p className="font-semibold text-black">形成外科</p>
                        <p className="text-sm text-gray-700 mt-1">木 13:30-17:00 兵庫医大本院医師</p>
                        <p className="text-sm text-gray-700">土（月1回第1週） 14:00-17:00</p>
                      </div>
                      <div className="p-3 border rounded bg-blue-50">
                        <p className="font-semibold text-black">循環器内科</p>
                        <p className="text-sm text-gray-700 mt-1">水 9:30-12:00 三田市民病院 吉川医師</p>
                      </div>
                      <div className="p-3 border rounded bg-green-50">
                        <p className="font-semibold text-black">老年内科</p>
                        <p className="text-sm text-gray-700 mt-1">毎月第2または第1土曜 14:00-17:00</p>
                        <p className="text-sm text-gray-700">国立長寿医療研究センター部長 兼 大阪大学招へい教授 里医師</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* その他の診療 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white p-4">
                    <h3 className="text-xl font-bold">その他の診療</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 border rounded bg-purple-50">
                        <p className="font-semibold text-black">物理療法</p>
                        <p className="text-sm text-gray-700 mt-1">月・火・水・木・金</p>
                        <p className="text-sm text-gray-700">午前 9:00-12:00 / 午後 14:00-18:30</p>
                        <p className="text-xs text-gray-700">（木は午前のみ）</p>
                      </div>
                      <div className="p-3 border rounded bg-purple-50">
                        <p className="font-semibold text-black">特定健診・健康診断</p>
                        <p className="text-sm text-gray-700 mt-1">予約制 応相談</p>
                      </div>
                      <div className="p-3 border rounded bg-purple-50">
                        <p className="font-semibold text-black">内視鏡</p>
                        <p className="text-sm text-gray-700 mt-1">予約制</p>
                      </div>
                      <div className="p-3 border rounded bg-purple-50">
                        <p className="font-semibold text-black">漢方</p>
                        <p className="text-sm text-gray-700 mt-1">予約制</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-amber-700">お願い</span><br />
                    ・予約制の診療科は、診療時間内にお電話（079-593-1352）でご予約ください。<br />
                    ・休暇により休診となる診療科がありますので、来院前にお問い合わせください。
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
                <CardTitle className="text-3xl text-black">健康診断</CardTitle>
                <CardDescription className="text-lg text-gray-700">
                  協会けんぽ生活習慣病予防健診 受診申込受付中
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-[hsl(var(--accent))] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-black mb-1">予約受付時間</p>
                      <p className="text-gray-700">月〜金曜日 13:00〜16:30</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-[hsl(var(--accent))] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-black mb-1">お問い合わせ</p>
                      <p className="text-gray-700">079-593-1352</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 病院概要 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-black">病院概要</CardTitle>
                <CardDescription className="text-lg text-gray-700">
                  地域に根ざした医療を提供
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black mb-1">所在地</p>
                        <p className="text-gray-700">〒669-2721<br />兵庫県丹波篠山市西谷575番地の1</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black mb-1">電話番号</p>
                        <p className="text-gray-700">079-593-1352</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black mb-1">開設年月日</p>
                        <p className="text-gray-700">2009年4月1日</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black mb-1">救急病院認定</p>
                        <p className="text-gray-700">2010年2月1日から認定<br />（兵庫県告示 第１４５号）</p>
                      </div>
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
