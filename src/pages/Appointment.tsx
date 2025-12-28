import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Clock, 
  Phone,
  Calendar,
  Stethoscope,
  AlertCircle,
  CheckCircle,
  Building2
} from 'lucide-react';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Appointment = () => {
  const [selectedHospital, setSelectedHospital] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");

  // にしき記念病院の診療科
  const nishikiDepartments = [
    { value: "internal", label: "内科（年中無休）" },
    { value: "orthopedics", label: "整形外科" },
    { value: "ophthalmology", label: "眼科" },
    { value: "dermatology", label: "皮膚科" },
    { value: "psychosomatic", label: "心療内科（予約制）" },
    { value: "psychiatry", label: "精神科（予約制）" },
    { value: "neurology", label: "神経内科（予約制）" },
    { value: "neurosurgery", label: "脳神経外科（予約制）" },
    { value: "plastic", label: "形成外科（予約制）" },
    { value: "cardiology", label: "循環器内科（予約制）" },
    { value: "geriatrics", label: "老年内科（予約制）" },
  ];

  // ささやま医療センターの診療科
  const sasayamaDepartments = [
    { value: "internal", label: "内科" },
    { value: "cardiology", label: "循環器内科" },
    { value: "gastroenterology", label: "消化器内科" },
    { value: "pulmonology", label: "呼吸器内科" },
    { value: "pediatrics", label: "小児科" },
    { value: "orthopedics", label: "整形外科" },
    { value: "anesthesiology", label: "麻酔科" },
    { value: "radiology", label: "放射線科" },
    { value: "rehabilitation", label: "リハビリテーション科" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[hsl(var(--primary)/0.05)] to-[hsl(var(--accent)/0.05)] bg-white">
        <div className="relative z-10 container mx-auto px-4 text-center text-black">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            外来受付・予約
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            各診療科の受付時間、予約方法をご案内します
          </p>
        </div>
      </section>

      {/* 病院選択 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* 病院選択 */}
            <Card className="border-l-4 border-[hsl(var(--primary))]">
              <CardHeader>
                <CardTitle className="text-2xl text-black flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-[hsl(var(--primary))]" />
                  病院を選択
                </CardTitle>
                <CardDescription className="text-base text-gray-700">
                  受診される病院を選択してください
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedHospital} onValueChange={(value) => {
                  setSelectedHospital(value);
                  setSelectedDepartment("");
                }}>
                  <SelectTrigger className="w-full text-lg py-6">
                    <SelectValue placeholder="病院を選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nishiki" className="text-base py-3">にしき記念病院</SelectItem>
                    <SelectItem value="sasayama" className="text-base py-3">ささやま医療センター</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* 診療科選択 */}
            {selectedHospital && (
              <Card className="border-l-4 border-[hsl(var(--primary))]">
                <CardHeader>
                  <CardTitle className="text-2xl text-black flex items-center gap-3">
                    <Stethoscope className="w-8 h-8 text-[hsl(var(--primary))]" />
                    診療科を選択
                  </CardTitle>
                  <CardDescription className="text-base text-gray-700">
                    受診される診療科を選択してください
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="w-full text-lg py-6">
                      <SelectValue placeholder="診療科を選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      {(selectedHospital === "nishiki" ? nishikiDepartments : sasayamaDepartments).map((dept) => (
                        <SelectItem key={dept.value} value={dept.value} className="text-base py-3">
                          {dept.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            )}

            {/* 受付時間 */}
            {selectedHospital && (
              <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center gap-3">
                      <Clock className="w-8 h-8 text-[hsl(var(--primary))]" />
                      受付時間
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedHospital === "nishiki" && selectedDepartment === "internal" && (
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="font-semibold text-black mb-2">内科（年中無休）</p>
                        <div className="text-gray-700 space-y-1 text-base">
                          <p>月・水・木・金: 9:00-12:00 / 17:00-19:00</p>
                          <p>火曜日: 9:00-12:00 / 17:30-19:00</p>
                          <p>土日祝: 9:00-12:00 / 14:00-17:00</p>
                        </div>
                      </div>
                    )}
                    {selectedHospital === "nishiki" && selectedDepartment === "orthopedics" && (
                      <div className="p-4 bg-green-50 rounded-lg">
                        <p className="font-semibold text-black mb-2">整形外科</p>
                        <div className="text-gray-700 space-y-1 text-base">
                          <p>月・火・水・金: 9:00-12:00 / 16:00-18:30</p>
                        </div>
                      </div>
                    )}
                    {selectedHospital === "nishiki" && selectedDepartment === "ophthalmology" && (
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="font-semibold text-black mb-2">眼科</p>
                        <div className="text-gray-700 space-y-1 text-base">
                          <p>月・水・木・金: 9:00-12:00 / 15:00-17:00</p>
                          <p>火曜日: 9:00-12:00</p>
                        </div>
                      </div>
                    )}
                    {selectedHospital === "nishiki" && selectedDepartment === "dermatology" && (
                      <div className="p-4 bg-green-50 rounded-lg">
                        <p className="font-semibold text-black mb-2">皮膚科</p>
                        <div className="text-gray-700 space-y-1 text-base">
                          <p>金曜日: 16:30-19:00</p>
                        </div>
                      </div>
                    )}
                    {selectedHospital === "nishiki" && (selectedDepartment === "psychosomatic" || 
                      selectedDepartment === "psychiatry" || 
                      selectedDepartment === "neurology" ||
                      selectedDepartment === "neurosurgery" ||
                      selectedDepartment === "plastic" ||
                      selectedDepartment === "cardiology" ||
                      selectedDepartment === "geriatrics") && (
                      <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                        <p className="font-semibold text-amber-700 mb-2">予約制診療科</p>
                        <p className="text-gray-700 text-base">
                          この診療科は完全予約制です。診療時間内（9:00-19:00）にお電話でご予約ください。
                        </p>
                      </div>
                    )}
                    {selectedHospital === "sasayama" && selectedDepartment && (
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="font-semibold text-black mb-2">外来受付</p>
                        <div className="text-gray-700 space-y-1 text-base">
                          <p>平日: 8:30〜11:30</p>
                          <p className="text-sm mt-2">※診療科によって診療日時が異なる場合があります</p>
                        </div>
                      </div>
                    )}
                    {selectedHospital === "sasayama" && (
                      <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                        <p className="font-semibold text-amber-700 mb-2">休診日</p>
                        <p className="text-gray-700 text-base">土曜、日曜、祝日、年末年始（12月29日〜1月3日）</p>
                      </div>
                    )}
                    {!selectedDepartment && (
                      <div className="p-4 bg-gray-50 rounded-lg text-center">
                        <p className="text-gray-700 text-base">診療科を選択すると、受付時間が表示されます</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

            {/* 予約方法 */}
            {selectedHospital && (
              <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center gap-3">
                      <Calendar className="w-8 h-8 text-[hsl(var(--primary))]" />
                      予約方法
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3 p-4 border rounded-lg">
                      <Phone className="w-6 h-6 text-[hsl(var(--primary))] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-black mb-2">お電話でのご予約</p>
                        {selectedHospital === "nishiki" && (
                          <>
                            <p className="text-gray-700 text-base mb-2">TEL: 079-593-1352</p>
                            <p className="text-gray-700 text-base">受付時間: 9:00〜19:00</p>
                          </>
                        )}
                        {selectedHospital === "sasayama" && (
                          <>
                            <p className="text-gray-700 text-base mb-2">TEL: 079-552-1181</p>
                            <p className="text-gray-700 text-base">受付時間: 平日 8:30〜17:00</p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-start gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <p className="font-semibold text-black">初診の方もご予約いただけます</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        {selectedHospital === "nishiki" && (
                          <p className="text-gray-700 text-sm">休暇により休診となる診療科がありますので、来院前にお問い合わせください</p>
                        )}
                        {selectedHospital === "sasayama" && (
                          <p className="text-gray-700 text-sm">診療科によって診療日時が異なる場合がありますので、事前にお問い合わせください</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

            {/* アクセス */}
            {selectedHospital && (
              <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center gap-3">
                      <Building2 className="w-8 h-8 text-[hsl(var(--primary))]" />
                      病院情報
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-black mb-2">所在地</p>
                      {selectedHospital === "nishiki" && (
                        <p className="text-gray-700 text-base">〒669-2721 兵庫県丹波篠山市西谷575番地の1</p>
                      )}
                      {selectedHospital === "sasayama" && (
                        <p className="text-gray-700 text-base">〒669-2321 兵庫県丹波篠山市黒岡5</p>
                      )}
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-black mb-2">お問い合わせ</p>
                      {selectedHospital === "nishiki" && (
                        <p className="text-gray-700 text-base">TEL: 079-593-1352</p>
                      )}
                      {selectedHospital === "sasayama" && (
                        <p className="text-gray-700 text-base">TEL: 079-552-1181</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Appointment;
