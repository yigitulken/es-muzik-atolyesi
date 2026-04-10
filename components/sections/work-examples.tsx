import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const examples = [
  {
    category: "Piyano",
    description: "Akort dengesizliği ve genel mekanik kontrol sonrası daha dengeli ve güvenilir kullanım sağlandı.",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    category: "Keman",
    description: "Köprü ve genel ayar müdahalesiyle çalım dengesi iyileştirildi.",
    image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=2070&auto=format&fit=crop",
  },
  {
    category: "Gitar",
    description: "Sap ayarı, fret kontrolü ve entonasyon işlemleri sonrası daha temiz ve rahat çalım elde edildi.",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2070&auto=format&fit=crop",
  },
]

export function WorkExamplesSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Atölyeden Örnek İşler
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Yapılan işin niteliğini en iyi, gerçek örnekler anlatır. Aşağıda farklı enstrüman gruplarından bazı işlemleri görebilirsiniz.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-border bg-background"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${example.image}')` }}
                />
              </div>
              <div className="p-6">
                <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {example.category}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {example.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="gap-2 group" asChild>
            <Link href="/islerimiz">
              Tüm İşleri Gör
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
