import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Clock, 
  FileText, 
  CreditCard, 
  MapPin, 
  Phone,
  AlertCircle,
  CheckCircle,
  Calendar,
  Users
} from 'lucide-react';

const FirstVisit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[hsl(var(--primary)/0.05)] to-[hsl(var(--accent)/0.05)] bg-white">
        <div className="relative z-10 container mx-auto px-4 text-center text-black">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            初めての方へ
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            初診の流れ、必要なもの、受付時間などをわかりやすくご案内します
          </p>
        </div>
      </section>

      {/* タブ切り替え */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="nishiki" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="nishiki" className="text-lg py-3">にしき記念病院</TabsTrigger>
                <TabsTrigger value="sasayama" className="text-lg py-3">ささやま医療センター</TabsTrigger>
              </TabsList>

              {/* にしき記念病院 */}
              <TabsContent value="nishiki" className="space-y-8">
                {/* 受付時間 */}
                <Card className="border-l-4 border-[hsl(var(--primary))]">
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center gap-3">
                      <Clock className="w-8 h-8 text-[hsl(var(--primary))]" />
                      受付時間
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="font-semibold text-black mb-2">内科（年中無休）</p>
                        <div className="text-gray-700 space-y-1 text-base">
                          <p>月・水・木・金: 9:00-12:00 / 17:00-19:00</p>
                          <p>火曜日: 9:00-12:00 / 17:30-19:00</p>
                          <p>土日祝: 9:00-12:00 / 14:00-17:00</p>
                        </div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <p className="font-semibold text-black mb-2">その他の診療科</p>
                        <div className="text-gray-700 space-y-1 text-base">
                          <p>整形外科: 月・火・水・金 9:00-12:00 / 16:00-18:30</p>
                          <p>眼科: 月・水・木・金 9:00-12:00 / 15:00-17:00</p>
                          <p>皮膚科: 金曜 16:30-19:00</p>
                          <p className="text-sm mt-2">※予約制の診療科もございます</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                      <p className="text-gray-700 text-base leading-relaxed">
                        <span className="font-semibold text-amber-700">お願い</span><br />
                        休暇により休診となる診療科がありますので、来院前にお電話（079-593-1352）にてお問い合わせください。
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* 初診の流れ */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center gap-3">
                      <Users className="w-8 h-8 text-[hsl(var(--primary))]" />
                      初診の流れ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center font-bold text-xl">
                            1
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-black mb-2">受付</h3>
                          <p className="text-gray-700 text-base leading-relaxed">
                            1階の受付窓口にお越しください。初診の方は「初めてです」とお伝えください。
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center font-bold text-xl">
                            2
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-black mb-2">問診票の記入</h3>
                          <p className="text-gray-700 text-base leading-relaxed">
                            問診票をお渡ししますので、症状や既往歴などをご記入ください。
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center font-bold text-xl">
                            3
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-black mb-2">診察</h3>
                          <p className="text-gray-700 text-base leading-relaxed">
                            お名前をお呼びしますので、診察室にお入りください。
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center font-bold text-xl">
                            4
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-black mb-2">お会計</h3>
                          <p className="text-gray-700 text-base leading-relaxed">
                            診察後、受付でお会計をお願いします。各種クレジットカード、電子マネーもご利用いただけます。
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 必要なもの */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center gap-3">
                      <FileText className="w-8 h-8 text-[hsl(var(--primary))]" />
                      ご持参いただくもの
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-black mb-1">健康保険証</p>
                          <p className="text-gray-700 text-sm">必ずご持参ください</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-black mb-1">お薬手帳</p>
                          <p className="text-gray-700 text-sm">お持ちの方はご持参ください</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-black mb-1">紹介状</p>
                          <p className="text-gray-700 text-sm">他院からの紹介状がある場合</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-black mb-1">各種医療証</p>
                          <p className="text-gray-700 text-sm">公費負担医療受給者証など</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* お支払い方法 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center gap-3">
                      <CreditCard className="w-8 h-8 text-[hsl(var(--primary))]" />
                      お支払い方法
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="font-semibold text-black mb-2">ご利用可能なお支払い方法</p>
                        <ul className="text-gray-700 space-y-1 text-base">
                          <li>• 現金</li>
                          <li>• 各種クレジットカード（VISA、MasterCard、JCB、AMEX等）</li>
                          <li>• 電子マネー（交通系IC、PayPay、楽天Pay等）</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* アクセス */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center gap-3">
                      <MapPin className="w-8 h-8 text-[hsl(var(--primary))]" />
                      アクセス
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-black mb-2">所在地</p>
                      <p className="text-gray-700 text-base">〒669-2300 兵庫県丹波篠山市</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-black mb-2 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-[hsl(var(--primary))]" />
                        お問い合わせ
                      </p>
                      <p className="text-gray-700 text-base">TEL: 079-593-1352</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ささやま医療センター */}
              <TabsContent value="sasayama" className="space-y-8">
                {/* 受付時間 */}
                <Card className="border-l-4 border-[hsl(var(--primary))]">
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center gap-3">
                      <Clock className="w-8 h-8 text-[hsl(var(--primary))]" />
                      受付時間
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-black mb-2">外来受付</p>
                      <div className="text-gray-700 space-y-1 text-base">
                        <p>平日: 8:30 〜 11:30</p>
                        <p className="text-sm mt-2">※診療科によって診療日時が異なる場合があります</p>
                      </div>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                      <p className="text-gray-700 text-base leading-relaxed">
                        <span className="font-semibold text-amber-700">休診日</span><br />
                        土曜、日曜、祝日、年末年始（12月29日〜1月3日）
                      </p>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                      <p className="text-gray-700 text-base leading-relaxed">
                        <span className="font-semibold text-amber-700">お願い</span><br />
                        受付時間は平日8:30〜17:00です。診療科によって診療日時が異なる場合がありますので、事前にお問い合わせください。
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* 初診の流れ */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center gap-3">
                      <Users className="w-8 h-8 text-[hsl(var(--primary))]" />
                      初診の流れ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center font-bold text-xl">
                            1
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-black mb-2">受付</h3>
                          <p className="text-gray-700 text-base leading-relaxed">
                            1階の総合受付にお越しください。初診の方は「初めてです」とお伝えください。
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center font-bold text-xl">
                            2
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-black mb-2">問診票の記入</h3>
                          <p className="text-gray-700 text-base leading-relaxed">
                            問診票をお渡ししますので、症状や既往歴などをご記入ください。
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center font-bold text-xl">
                            3
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-black mb-2">各診療科受付</h3>
                          <p className="text-gray-700 text-base leading-relaxed">
                            該当する診療科の受付にお越しください。
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center font-bold text-xl">
                            4
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-black mb-2">診察</h3>
                          <p className="text-gray-700 text-base leading-relaxed">
                            お名前をお呼びしますので、診察室にお入りください。
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center font-bold text-xl">
                            5
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-black mb-2">お会計</h3>
                          <p className="text-gray-700 text-base leading-relaxed">
                            診察後、1階の会計窓口でお会計をお願いします。
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 必要なもの */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center gap-3">
                      <FileText className="w-8 h-8 text-[hsl(var(--primary))]" />
                      ご持参いただくもの
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-black mb-1">健康保険証</p>
                          <p className="text-gray-700 text-sm">必ずご持参ください</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-black mb-1">お薬手帳</p>
                          <p className="text-gray-700 text-sm">お持ちの方はご持参ください</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-black mb-1">紹介状</p>
                          <p className="text-gray-700 text-sm">他院からの紹介状がある場合</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-black mb-1">各種医療証</p>
                          <p className="text-gray-700 text-sm">公費負担医療受給者証など</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* お支払い方法 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center gap-3">
                      <CreditCard className="w-8 h-8 text-[hsl(var(--primary))]" />
                      お支払い方法
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="font-semibold text-black mb-2">ご利用可能なお支払い方法</p>
                        <ul className="text-gray-700 space-y-1 text-base">
                          <li>• 現金</li>
                          <li>• 各種クレジットカード</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* アクセス */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center gap-3">
                      <MapPin className="w-8 h-8 text-[hsl(var(--primary))]" />
                      アクセス
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-black mb-2">所在地</p>
                      <p className="text-gray-700 text-base">〒669-2321 兵庫県丹波篠山市黒岡5</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-black mb-2 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-[hsl(var(--primary))]" />
                        お問い合わせ
                      </p>
                      <p className="text-gray-700 text-base">TEL: 079-552-1181</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirstVisit;
