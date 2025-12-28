import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Stethoscope } from 'lucide-react';

const Departments = () => {
  const nishikiDepartments = [
    { name: '内科', description: '一般内科診療、生活習慣病、感染症など幅広く対応。年中無休で診療しています。' },
    { name: '心療内科', description: 'ストレス関連疾患、不安障害、うつ病などの診療を行います。' },
    { name: '総合内科・消化器内科', description: '消化器系疾患の専門的な診断と治療を提供します。' },
    { name: '精神科', description: '精神疾患全般の診療を行い、患者様の心の健康をサポートします。' },
    { name: '呼吸器内科', description: '喘息、COPD、肺炎などの呼吸器疾患の診療を行います。' },
    { name: '脳神経外科', description: '脳血管障害、頭部外傷などの診断と治療を行います。' },
    { name: '整形外科', description: '骨折、関節疾患、腰痛、肩こりなどの運動器疾患の診療を行います。' },
    { name: '神経内科', description: 'パーキンソン病、認知症、脳卒中後遺症などの神経疾患の診療を行います。' },
    { name: '眼科', description: '白内障、緑内障、糖尿病網膜症などの眼科疾患の診療を行います。' },
    { name: '皮膚科', description: 'アトピー性皮膚炎、湿疹、水虫などの皮膚疾患の診療を行います。' },
    { name: '耳鼻咽喉科', description: '中耳炎、副鼻腔炎、めまいなどの耳鼻咽喉科疾患の診療を行います。' },
    { name: '放射線科', description: 'X線、CT、MRIなどの画像診断を行います。' },
    { name: 'リハビリテーション科', description: '理学療法、作業療法、言語療法などのリハビリテーションを提供します。' },
    { name: '形成外科', description: '外傷、熱傷、皮膚腫瘍などの形成外科的治療を行います。' },
    { name: '循環器内科', description: '高血圧、心不全、不整脈などの循環器疾患の診療を行います。' },
    { name: '老年内科', description: '高齢者特有の疾患や複数の疾患を持つ高齢者の総合的な診療を行います。' },
  ];

  const sasayamaDepartments = [
    { name: '内科', description: '一般内科診療から専門的な診療まで、幅広く対応します。' },
    { name: '循環器内科', description: '心臓・血管系疾患の専門的な診断と治療を提供します。' },
    { name: '消化器内科', description: '胃腸、肝臓、胆嚢、膵臓などの消化器疾患の診療を行います。' },
    { name: '呼吸器内科', description: '肺炎、喘息、COPDなどの呼吸器疾患の専門的な診療を行います。' },
    { name: '小児科', description: '小児の一般診療から予防接種、乳幼児健診まで対応します。' },
    { name: '整形外科', description: '骨折、関節疾患、スポーツ障害などの整形外科疾患の診療を行います。' },
    { name: '麻酔科', description: '手術時の麻酔管理、ペインクリニックを行います。' },
    { name: '放射線科', description: '各種画像診断、放射線治療を提供します。' },
    { name: 'リハビリテーション科', description: '回復期リハビリテーション病棟を有し、充実したリハビリテーションを提供します。' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(210 80% 45% / 0.9), hsl(150 50% 50% / 0.85)), url('https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?w=1920&auto=format&fit=crop&q=80')`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            診療科目
          </h1>
          <p className="text-xl md:text-2xl">
            幅広い診療科目で地域の健康をサポート
          </p>
        </div>
      </section>

      {/* 診療科目一覧 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="nishiki" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="nishiki" className="text-lg">にしき記念病院</TabsTrigger>
              <TabsTrigger value="sasayama" className="text-lg">ささやま医療センター</TabsTrigger>
            </TabsList>

            <TabsContent value="nishiki">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nishikiDepartments.map((dept) => (
                  <Card key={dept.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] rounded-full flex items-center justify-center flex-shrink-0">
                          <Stethoscope className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{dept.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{dept.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-[hsl(var(--primary))]">診療時間について</h3>
                <p className="text-muted-foreground">
                  内科は年中無休で診療しています。その他の診療科は予約制または特定の曜日・時間帯での診療となります。<br />
                  詳しい診療時間については、お電話（079-593-1352）でお問い合わせください。
                </p>
              </div>
            </TabsContent>

            <TabsContent value="sasayama">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sasayamaDepartments.map((dept) => (
                  <Card key={dept.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--secondary-light))] rounded-full flex items-center justify-center flex-shrink-0">
                          <Stethoscope className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{dept.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{dept.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-[hsl(var(--accent))]">診療時間について</h3>
                <p className="text-muted-foreground">
                  受付時間は平日8:30〜11:30です。休診日は土曜、日曜、祝日、年末年始（12月29日〜1月3日）です。<br />
                  診療科によって診療日時が異なる場合がありますので、詳しくはお電話（079-552-1181）でお問い合わせください。
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Departments;
