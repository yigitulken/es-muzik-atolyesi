import { Button } from "@/components/ui/button"
import { Camera, ArrowRight } from "lucide-react"

const serviceTags = [
  "Piyano bakım ve akort",
  "Yaylı enstrüman onarım",
  "Gitar bakım ve ayar",
  "Gerçek atölye işçiliği",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
              Enstrümanınıza hak ettiği özeni veren atölye
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              ES Atölye; piyano, keman, viyola, viyolonsel ve gitar gibi enstrümanlar için bakım, onarım, ayar ve akort hizmetleri sunar. Her işlemde doğru tespit, özenli işçilik ve güvenilir süreç yaklaşımıyla çalışır.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                <Camera className="size-5" />
                Fotoğraf Göndererek Sor
              </Button>
              <Button variant="outline" size="lg" className="gap-2 group">
                Hizmetleri İncele
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {serviceTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted lg:aspect-square">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
