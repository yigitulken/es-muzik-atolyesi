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
                backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              ES Atölye Hakkında
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              ES Atölye, enstrüman bakım, onarım ve akort süreçlerine özenli ve dikkatli yaklaşan bir atölyedir. Piyano, yaylı enstrümanlar ve gitar gibi farklı yapıya sahip enstrümanlarda, her birinin ihtiyaç duyduğu teknik hassasiyet dikkate alınarak çalışılır. Buradaki yaklaşım yalnızca müdahale etmek değil; enstrümanın karakterini, kullanım konforunu ve güvenilirliğini koruyarak doğru sonucu sunmaktır.
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
