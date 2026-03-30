import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Guitar, Piano } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "İşlerimiz | ES Atölye",
  description: "ES Atölye'den örnek işler. Piyano, yaylı enstrüman ve gitar bakım, onarım ve ayar örnekleri.",
}

const categories = [
  { id: "all", name: "Tümü" },
  { id: "piyano", name: "Piyano" },
  { id: "yayli", name: "Yaylı Enstrümanlar" },
  { id: "gitar", name: "Gitar" },
]

const works = [
  {
    id: 1,
    category: "piyano",
    icon: Piano,
    title: "Akustik Piyano Genel Bakım",
    description: "Akort dengesizliği ve genel mekanik kontrol sonrası daha dengeli ve güvenilir kullanım sağlandı.",
    details: "Tuşe temizliği, mekanik kontrol, akort ve ton dengeleme işlemleri uygulandı.",
  },
  {
    id: 2,
    category: "piyano",
    icon: Piano,
    title: "Piyano Mekanik Onarım",
    description: "Bazı tuşlarda yaşanan sertlik ve tepki gecikmesi sorunu giderildi.",
    details: "Çekiç mekanizması kontrolü, yay ayarları ve yağlama işlemleri yapıldı.",
  },
  {
    id: 3,
    category: "yayli",
    icon: Music,
    title: "Keman Köprü ve Ayar",
    description: "Köprü ve genel ayar müdahalesiyle çalım dengesi iyileştirildi.",
    details: "Köprü konumu düzeltildi, tel yükseklikleri ayarlandı, burgular kontrol edildi.",
  },
  {
    id: 4,
    category: "yayli",
    icon: Music,
    title: "Viyolonsel Eşik Değişimi",
    description: "Yıpranmış eşik değiştirilerek ses kalitesi ve çalım konforu artırıldı.",
    details: "Uygun malzeme ile yeni eşik hazırlandı ve montajı yapıldı.",
  },
  {
    id: 5,
    category: "yayli",
    icon: Music,
    title: "Viyola Burgu Değişimi",
    description: "Akort tutmayan burgular değiştirilerek stabilite sağlandı.",
    details: "Yeni burgular takıldı, delik uyumu kontrol edildi, tel düzeni yenilendi.",
  },
  {
    id: 6,
    category: "gitar",
    icon: Guitar,
    title: "Elektro Gitar Setup",
    description: "Sap ayarı, fret kontrolü ve entonasyon işlemleri sonrası daha temiz ve rahat çalım elde edildi.",
    details: "Truss rod ayarı, aksiyon düzenlemesi, entonasyon ve pickup yükseklik ayarları yapıldı.",
  },
  {
    id: 7,
    category: "gitar",
    icon: Guitar,
    title: "Akustik Gitar Fret Düzeltme",
    description: "Fret kaynaklı cızırdama sorunu giderilerek temiz ses elde edildi.",
    details: "Fret seviyeleme, taşlama ve parlatma işlemleri uygulandı.",
  },
  {
    id: 8,
    category: "gitar",
    icon: Guitar,
    title: "Klasik Gitar Eşik Ayarı",
    description: "Tel yüksekliği optimize edilerek çalım konforu artırıldı.",
    details: "Eşik yüksekliği ayarlandı, nut kontrol edildi, genel temizlik yapıldı.",
  },
  {
    id: 9,
    category: "piyano",
    icon: Piano,
    title: "Piyano Pedal Onarımı",
    description: "Düzgün çalışmayan pedal sistemi onarılarak işlevsellik sağlandı.",
    details: "Pedal mekanizması sökülüp temizlendi, yıpranmış parçalar değiştirildi.",
  },
]

export default function IslerimizPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Atölyeden Örnek İşler
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Yapılan işin niteliğini en iyi, gerçek örnekler anlatır. 
                Aşağıda farklı enstrüman gruplarından bazı işlemleri görebilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b border-border py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={category.id === "all" ? "default" : "outline"}
                  size="sm"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Works Grid */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((work) => (
                <Card key={work.id} className="group border-border/50 bg-card transition-all hover:border-border hover:shadow-md">
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <div className="flex size-full items-center justify-center bg-secondary/50 transition-colors group-hover:bg-secondary/70">
                      <work.icon className="size-16 text-muted-foreground/30" />
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {work.category === "piyano" && "Piyano"}
                        {work.category === "yayli" && "Yaylı"}
                        {work.category === "gitar" && "Gitar"}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{work.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <CardDescription className="text-base">
                      {work.description}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">
                      {work.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                Enstrümanınızla ilgili bir sorun mu var?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fotoğraf ve kısa açıklama ile bize ulaşın. İlk değerlendirmeyi birlikte yapalım.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
                    Fotoğraf Gönder
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/iletisim">
                    İletişime Geç
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
