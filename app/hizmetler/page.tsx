import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Guitar, Piano, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Hizmetler | ES Atölye",
  description: "Piyano bakım ve akort, yaylı enstrüman onarım, gitar bakım ve ayar hizmetleri. Her enstrümana özel teknik yaklaşım.",
}

const services = [
  {
    id: "piyano",
    icon: Piano,
    title: "Piyano Bakım, Onarım ve Akort",
    description: "Akustik piyanolar için akort, mekanik kontrol, tuşe ve pedal sistemi kontrolleri, genel bakım ve gerekli onarımlar.",
    details: [
      "Akort ve ton dengeleme",
      "Mekanik sistem kontrolü ve bakımı",
      "Tuşe temizliği ve ayarı",
      "Pedal sistemi kontrolü",
      "Çekiç ve keçe bakımı",
      "Genel temizlik ve koruma",
    ],
    image: "/images/piano-service.jpg",
  },
  {
    id: "yayli",
    icon: Music,
    title: "Keman, Viyola ve Viyolonsel Hizmetleri",
    description: "Yaylı enstrümanlarda eşik, köprü, tel düzeni, burgular, gövde kontrolü ve genel bakım işlemleri.",
    details: [
      "Köprü ayarı ve değişimi",
      "Eşik kontrolü ve bakımı",
      "Burgu değişimi ve ayarı",
      "Tel değişimi ve düzeni",
      "Gövde kontrol ve onarım",
      "Ses direği ayarı",
    ],
    image: "/images/violin-service.jpg",
  },
  {
    id: "gitar",
    icon: Guitar,
    title: "Gitar Bakım, Ayar ve Onarım",
    description: "Sap ayarı, tel yüksekliği, entonasyon, fret sorunları, donanım ve elektronik kontroller, genel temizlik ve bakım.",
    details: [
      "Sap ayarı (truss rod)",
      "Tel yüksekliği (aksiyon) ayarı",
      "Entonasyon düzeltme",
      "Fret seviyeleme ve parlatma",
      "Elektronik kontrol ve onarım",
      "Donanım bakımı ve değişimi",
    ],
    image: "/images/guitar-service.jpg",
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
                Her enstrüman farklı bir yaklaşım ister. ES Atölye&apos;de bakım, onarım ve akort süreçleri, 
                enstrümanın yapısına uygun teknik hassasiyetle ele alınır.
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
                  className={`flex flex-col gap-8 lg:gap-16 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } lg:items-center`}
                >
                  {/* Image */}
                  <div className="flex-1">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                      <div className="flex size-full items-center justify-center bg-secondary/50">
                        <service.icon className="size-24 text-muted-foreground/30" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
                      <service.icon className="size-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Hizmet</span>
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
