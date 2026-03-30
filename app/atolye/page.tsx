import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Eye, Target, Shield, MessageSquare, Wrench } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Atölye | ES Atölye",
  description: "ES Atölye hakkında. Piyano, yaylı enstrümanlar ve gitar için özenli bakım, onarım ve akort hizmetleri sunan atölyemizi tanıyın.",
}

const values = [
  {
    icon: Heart,
    title: "Özen",
    description: "Her enstrümana aynı dikkat ve özenle yaklaşılır.",
  },
  {
    icon: Eye,
    title: "Titizlik",
    description: "Detaylara gösterilen hassasiyet, işin kalitesini belirler.",
  },
  {
    icon: Target,
    title: "Doğru Tespit",
    description: "Sorunun kaynağını doğru anlamak, çözümün temelidir.",
  },
  {
    icon: Shield,
    title: "Güvenilir Süreç",
    description: "Her adımda tutarlı ve güvenilir bir iş akışı izlenir.",
  },
  {
    icon: MessageSquare,
    title: "Şeffaf İletişim",
    description: "Kullanıcı, süreç boyunca bilgilendirilir.",
  },
  {
    icon: Wrench,
    title: "Usta İşi Yaklaşım",
    description: "Deneyim ve teknik bilgi bir arada uygulanır.",
  },
]

const approach = [
  {
    title: "Enstrüman türüne göre doğru yaklaşım",
    description: "Her enstrümanın yapısı aynı değildir; müdahale buna göre şekillenir.",
  },
  {
    title: "Detay odaklı çalışma",
    description: "Bakım ve onarım süreçleri yalnızca görünür soruna değil, genel kullanım dengesine göre ele alınır.",
  },
  {
    title: "Bilgilendiren iletişim",
    description: "Süreç boyunca kullanıcı ne yapıldığını ve neden yapıldığını bilir.",
  },
  {
    title: "İşlev ve hassasiyet dengesi",
    description: "Amaç yalnızca çalışır hale getirmek değil, doğru hissiyatı ve konforu geri kazandırmaktır.",
  },
]

export default function AtolyePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                ES Atölye Hakkında
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Enstrüman bakım, onarım ve akort süreçlerine özenli ve dikkatli yaklaşan bir atölye.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Image Placeholder */}
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                  <div className="flex size-full items-center justify-center bg-secondary/50">
                    <Wrench className="size-24 text-muted-foreground/30" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex flex-col justify-center space-y-6">
                  <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground">
                    Gerçek Atölye, Gerçek İşçilik
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      ES Atölye, enstrüman bakım, onarım ve akort süreçlerine özenli ve dikkatli 
                      yaklaşan bir atölyedir.
                    </p>
                    <p>
                      Piyano, yaylı enstrümanlar ve gitar gibi farklı yapıya sahip enstrümanlarda, 
                      her birinin ihtiyaç duyduğu teknik hassasiyet dikkate alınarak çalışılır.
                    </p>
                    <p>
                      Buradaki yaklaşım yalnızca müdahale etmek değil; enstrümanın karakterini, 
                      kullanım konforunu ve güvenilirliğini koruyarak doğru sonucu sunmaktır.
                    </p>
                  </div>
                  <Button className="w-fit" asChild>
                    <Link href="/iletisim">
                      İletişime Geç
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-y border-border bg-secondary/30 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                Değerlerimiz
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Her işlemde bu değerler rehberimiz olur.
              </p>
            </div>
            
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div 
                  key={value.title}
                  className="rounded-lg border border-border/50 bg-card p-6 transition-colors hover:border-border"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                  Neden ES Atölye?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Enstrümanınıza güvenle teslim edebileceğiniz bir yaklaşım.
                </p>
              </div>
              
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {approach.map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                Atölyeyi ziyaret edin
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Enstrümanınızla ilgili sorularınız için bize ulaşabilir veya atölyemizi ziyaret edebilirsiniz.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/iletisim">
                    İletişime Geç
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
                    WhatsApp&apos;tan Yaz
                  </a>
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
