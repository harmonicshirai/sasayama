import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Phone, Clock, Car, Bus, Train } from 'lucide-react';

const Access = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(210 80% 45% / 0.9), hsl(150 50% 50% / 0.85)), url('https://images.unsplash.com/photo-1519196213789-9304aa728a83?w=1920&auto=format&fit=crop&q=80')`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            アクセス
          </h1>
          <p className="text-xl md:text-2xl">
            各病院へのアクセス方法
          </p>
        </div>
      </section>

      {/* アクセス情報 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="nishiki" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="nishiki" className="text-lg">にしき記念病院</TabsTrigger>
              <TabsTrigger value="sasayama" className="text-lg">ささやま医療センター</TabsTrigger>
            </TabsList>

            <TabsContent value="nishiki">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 基本情報 */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-[hsl(var(--primary))]">基本情報</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">住所</p>
                          <p className="text-muted-foreground">
                            〒669-2721<br />
                            兵庫県丹波篠山市西谷575番地の1
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">電話番号</p>
                          <p className="text-muted-foreground">079-593-1352</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">診療時間</p>
                          <div className="text-muted-foreground space-y-1">
                            <p>平日: 9:00〜12:00 / 17:00〜19:00</p>
                            <p>土日祝: 9:00〜12:00 / 14:00〜17:00</p>
                            <p className="text-sm text-[hsl(var(--primary))] font-semibold">※内科は年中無休</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-[hsl(var(--primary))]">交通アクセス</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Car className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">お車でお越しの方</p>
                          <p className="text-muted-foreground">
                            舞鶴若狭自動車道「丹南篠山口IC」より約15分<br />
                            駐車場完備
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Bus className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">バスでお越しの方</p>
                          <p className="text-muted-foreground">
                            神姫グリーンバス「西谷」バス停下車すぐ
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* 地図 */}
                <div>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-[hsl(var(--primary))]">地図</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <MapPin className="w-12 h-12 mx-auto mb-2" />
                          <p>兵庫県丹波篠山市西谷575-1</p>
                          <p className="text-sm mt-2">Google Mapsで開く</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sasayama">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 基本情報 */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-[hsl(var(--primary))]">基本情報</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">住所</p>
                          <p className="text-muted-foreground">
                            〒669-2321<br />
                            兵庫県丹波篠山市黒岡5
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">電話番号</p>
                          <p className="text-muted-foreground">079-552-1181</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">受付時間</p>
                          <div className="text-muted-foreground space-y-1">
                            <p>平日: 8:30〜11:30</p>
                            <p>休診日: 土日祝・年末年始</p>
                            <p className="text-sm">※受付時間は平日8:30〜17:00</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-[hsl(var(--primary))]">交通アクセス</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Car className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">お車でお越しの方</p>
                          <p className="text-muted-foreground">
                            舞鶴若狭自動車道「丹南篠山口IC」より約10分<br />
                            駐車場完備
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Train className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">電車でお越しの方</p>
                          <p className="text-muted-foreground">
                            JR福知山線「篠山口駅」よりタクシーで約10分
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Bus className="w-6 h-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">バスでお越しの方</p>
                          <p className="text-muted-foreground">
                            神姫グリーンバス「篠山営業所」バス停下車 徒歩5分
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* 地図 */}
                <div>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-[hsl(var(--primary))]">地図</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <MapPin className="w-12 h-12 mx-auto mb-2" />
                          <p>兵庫県丹波篠山市黒岡5</p>
                          <p className="text-sm mt-2">Google Mapsで開く</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Access;
