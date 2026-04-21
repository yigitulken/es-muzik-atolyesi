import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PhotoUploadButton } from "@/components/photo-upload-button"
import { WorksFilterGrid } from "@/components/works-filter-grid"
import Link from "next/link"

export const metadata = {
  title: "İşlerimiz | ES Atölye",
  description: "ES Atölye'den örnek işler. Piyano, yaylı enstrüman ve gitar bakım, onarım ve ayar örnekleri.",
}

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

        <WorksFilterGrid />

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
                <PhotoUploadButton size="lg" />
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
