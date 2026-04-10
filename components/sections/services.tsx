import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Piyano, Akort, Mekanik Tamir ve Tel Değişimi",
    description: "Akustik piyanolar için akort, mekanik ayar, tuş regülasyonu, kopmuş tel değişimi ve bas tellerde özel tel sarımı.",
    image: "/uploads/hizmet-piyano.jpg",
    href: "/hizmetler#piyano",
  },
  {
    title: "Keman, Viyola ve Viyolonsel Hizmetleri",
    description: "Yaylı enstrümanlarda köprü, eşik, ses direği ve burgu ayarları; tel düzeni, gövde kontrolü ve çatlak onarımı.",
    image: "/uploads/hizmet-yayli.jpg",
    href: "/hizmetler#yayli",
  },
  {
    title: "Arşe, Kıl Değişimi ve Tamiri",
    description: "Arşe için kıl değişimi, doğru gerginlik ve dengeli kıl dağılımı; kırık ve yıpranmış arşelerde tamir işlemleri.",
    image: "/uploads/hero-arse-kil-degisimi.jpg",
    href: "/hizmetler#arse",
  },
  {
    title: "Gitar Tamiri, Onarım ve Bakım",
    description: "Perde düzenleme, sap ve çatlak onarımı, elektronik bakım ve komple setup ile gitarlarınızı ilk günkü haline kavuşturuyoruz.",
    image: "/uploads/hizmet-gitar.jpg",
    href: "/hizmetler#gitar",
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
