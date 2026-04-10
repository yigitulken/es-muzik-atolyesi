import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Guitar, Piano, Music2, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Hizmetler | ES Müzik Atölyesi",
  description: "Piyano akort ve mekanik tamir, yaylı çalgı onarımı, arşe kıl değişimi, gitar bakım ve onarım hizmetleri. Her enstrümana özel teknik yaklaşım.",
}

const services = [
  {
    id: "piyano",
    icon: Piano,
    label: "Piyano",
    title: "Piyano, Akort, Mekanik Tamir ve Tel Değişimi",
    description:
      "Akustik piyanolarınız için profesyonel akort, mekanik ayar, tuş regülasyonu ve ses düzenleme işlemlerini titizlikle gerçekleştiriyoruz. Kopmuş veya yıpranmış tellerin değişimi, bas tellerde özel tel sarımı ve hassas tel takma işlemleriyle piyanonuzun ses dengesini en doğru şekilde yeniden kuruyoruz.",
    details: [
      "Akort ve ton dengeleme",
      "Mekanik ayar ve reglaj",
      "Tuş regülasyonu",
      "Tuş keçe bakımı",
      "Çekiç ve mekanik parça bakımı",
      "Kopmuş tel değişimi",
      "Bas tellerde özel tel sarımı",
      "Oktavlar arası ses dengesi",
    ],
    image: "/uploads/hizmet-piyano.jpg",
  },
  {
    id: "yayli",
    icon: Music,
    label: "Yaylı Çalgılar",
    title: "Keman, Viyola ve Viyolonsel Hizmetleri",
    description:
      "Keman, viyola ve viyolonsel başta olmak üzere tüm yaylı çalgılarınız için köprü, eşik, ses direği ve burgu ayarlarını; tel düzeni, gövde kontrolü ve çatlak onarımlarını özenle yapıyoruz. Her enstrümanın karakterini koruyarak çalım rahatlığını ve ses dengesini geri kazandırıyoruz.",
    details: [
      "Köprü ayarı ve değişimi",
      "Eşik kontrolü ve bakımı",
      "Ses direği ayarı",
      "Burgu değişimi ve ayarı",
      "Tel değişimi ve düzeni",
      "Gövde çatlak onarımı",
      "Genel kontrol ve bakım",
    ],
    image: "/uploads/hizmet-yayli.jpg",
  },
  {
    id: "arse",
    icon: Music2,
    label: "Arşe",
    title: "Arşe, Kıl Değişimi ve Tamiri",
    description:
      "Arşeleriniz için kıl değişimi ve tamir hizmeti veriyoruz. Doğru gerginlik ve dengeli kıl dağılımıyla arşenizin performansını en üst seviyeye taşıyoruz. Kırık ya da yıpranmış arşelerinizde gereken müdahaleleri yaparak yeniden güvenle kullanılabilir hale getiriyoruz.",
    details: [
      "Kıl değişimi",
      "Doğru gerginlik ayarı",
      "Dengeli kıl dağılımı",
      "Arşe tamiri",
      "Kırık arşe onarımı",
      "Genel arşe bakımı",
    ],
    image: "/uploads/hero-arse-kil-degisimi.jpg",
  },
  {
    id: "gitar",
    icon: Guitar,
    label: "Gitar",
    title: "Gitar Tamiri, Onarım ve Bakım",
    description:
      "Klasik, akustik ve elektro gitarlarınız için perde düzenleme, perde değişimi, eşik ayarı, sap düzeltme, truss rod ayarı ve komple setup hizmetleri veriyoruz. Kırık sap onarımı, çatlak tamiri, açılmış birleşim noktalarının yeniden yapıştırılması ve cila rötuşlarıyla en zorlu hasarları bile özenle gideriyoruz. Elektronik bakım kapsamında manyetik değişimi, potansiyometre ve jack onarımı, kablo lehimleme ile gitarınızın sesini ve çalınabilirliğini ilk günkü haline kavuşturuyoruz.",
    details: [
      "Perde düzenleme ve fret tesviyesi",
      "Perde değişimi",
      "Eşik ayarı ve tel aksiyonu",
      "Sap düzeltme ve truss rod ayarı",
      "Entonasyon düzeltme",
      "Kırık sap ve çatlak onarımı",
      "Birleşim noktası yapıştırma",
      "Cila rötuşları",
      "Manyetik, pot ve jack değişimi",
      "Kablo lehimleme ve elektronik bakım",
      "Komple setup",
    ],
    image: "/uploads/hizmet-gitar.jpg",
  },
]

const additionalServices = [
  {
    title: "Detaylı Kontrol",
    description: "Enstrümanın mevcut durumunun kapsamlı incelenmesi ve ihtiyaç tespiti.",
  },
  {
    title: "Hassas Müdahale",
    description: "Sorun tespiti sonrası gereken ayar ve onarım işlemlerinin uygulanması.",
  },
  {
    title: "Parça Değişimi",
    description: "Yıpranmış veya hasarlı parçaların uygun alternatiflerle değiştirilmesi.",
  },
  {
    title: "Koruyucu Bakım",
    description: "Enstrümanın ömrünü uzatmaya yönelik düzenli bakım ve koruma işlemleri.",
  },
]

export default function HizmetlerPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Hizmet Alanlarımız
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Her enstrüman farklı bir yaklaşım ister. ES Müzik Atölyesi&apos;nde piyano, yaylı çalgılar,
                arşe ve gitar üzerine bakım, onarım, akort ve teknik destek hizmetleri; enstrümanın
                yapısına uygun teknik hassasiyetle ele alınır.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="space-y-16 lg:space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-24 flex flex-col gap-8 lg:gap-16 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } lg:items-center`}
                >
                  {/* Image */}
                  <div className="flex-1">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                      <div
                        className="size-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                        style={{ backgroundImage: `url('${service.image}')` }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
                      <service.icon className="size-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{service.label}</span>
                    </div>
                    
                    <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="gap-2" asChild>
                      <Link href="/iletisim">
                        Bilgi Al
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                Detaylı Kontrol ve Hassas Müdahale
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Sorun tespiti, ayar, parça değişimi ve enstrümanın kullanım konforunu geri kazandırmaya yönelik işlemler.
              </p>
            </div>
            
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {additionalServices.map((service) => (
                <Card key={service.title} className="border-border/50 bg-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                Enstrümanınızla ilgili bir sorun mu var?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fotoğraf ve kısa açıklama ile bize ulaşın. Uygun yönlendirmeyi birlikte yapalım.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
                    WhatsApp&apos;tan Yaz
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
