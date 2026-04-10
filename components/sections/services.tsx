import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Piyano Bakım, Onarım ve Akort",
    description: "Akustik piyanolar için akort, mekanik kontrol, tuşe ve pedal sistemi kontrolleri, genel bakım ve gerekli onarımlar.",
    image: "/uploads/hizmet-piyano.jpg",
    href: "/hizmetler/piyano",
  },
  {
    title: "Keman, Viyola ve Viyolonsel Hizmetleri",
    description: "Yaylı enstrümanlarda eşik, köprü, tel düzeni, burgular, gövde kontrolü ve genel bakım işlemleri.",
    image: "/uploads/hizmet-yayli.jpg",
    href: "/hizmetler/yayli",
  },
  {
    title: "Gitar Bakım, Ayar ve Onarım",
    description: "Sap ayarı, tel yüksekliği, entonasyon, fret sorunları, donanım ve elektronik kontroller, genel temizlik ve bakım.",
    image: "/uploads/hizmet-gitar.jpg",
    href: "/hizmetler/gitar",
  },
  {
    title: "Detaylı Kontrol ve Hassas Müdahale",
    description: "Sorun tespiti, ayar, parça değişimi ve enstrümanın kullanım konforunu geri kazandırmaya yönelik işlemler.",
    image: "/uploads/hizmet-detayli-kontrol.jpg",
    href: "/hizmetler/detayli-kontrol",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Hizmet Alanlarımız
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Her enstrüman farklı bir yaklaşım ister. ES Atölye&apos;de bakım, onarım ve akort süreçleri, enstrümanın yapısına uygun teknik hassasiyetle ele alınır.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Detayları Gör
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
