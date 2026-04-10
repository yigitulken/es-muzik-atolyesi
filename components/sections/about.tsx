import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const values = [
  "Özen",
  "Titizlik",
  "Doğru tespit",
  "Güvenilir süreç",
  "Şeffaf iletişim",
  "Usta işi yaklaşım",
]

export function AboutSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted lg:aspect-square">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/uploads/about-atolye.png')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Lüthiyer | Sonat Tufan
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              1996’dan bu yana müzik, enstrüman bakımı ve onarımı alanında eğitim alan Sonat Tufan; farklı atölyelerde, usta lüthiyerlerle ve akademik isimlerle çalışarak piyano, gitar ve yaylı çalgılar üzerine uzmanlaştı. İzmir Devlet Opera ve Balesi’ndeki çalışmalarının ardından edindiği tüm birikimi ES Müzik Atölyesi çatısı altında bir araya getirdi.
            </p>

            {/* Values */}
            <div>
              <h3 className="mb-4 font-medium text-foreground">
                Çalışma yaklaşımımız
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="size-4 text-primary" />
                    {value}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <Button variant="outline" size="lg" className="gap-2 group" asChild>
                <Link href="/atolye">
                  Atölyeyi Tanıyın
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
