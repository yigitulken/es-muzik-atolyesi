import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PhotoUploadButton } from "@/components/photo-upload-button"
import { WorksFilterGrid } from "@/components/works-filter-grid"
import Link from "next/link"
import { JsonLd } from "@/components/json-ld"
import { itemListSchema, breadcrumbSchema } from "@/lib/seo/schemas"
import { works } from "@/lib/works"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "İşlerimiz — Piyano, Yaylı ve Gitar Onarım Örnekleri",
  description:
    "ES Müzik Atölyesi'nde yapılan piyano akort ve mekanik onarım, yaylı köprü ayarı, arşe kıl değişimi, gitar kırık tamiri ve köprü onarımı örnekleri.",
  keywords: [
    "piyano onarım örnekleri",
    "keman tamiri örnekleri",
    "gitar tamiri örnek",
    "enstrüman onarım portfolyo",
    "arşe kıl değişimi örnek",
  ],
  alternates: {
    canonical: "/islerimiz",
  },
  openGraph: {
    title: "İşlerimiz | ES Müzik Atölyesi",
    description:
      "Piyano, yaylı enstrüman ve gitar üzerinde yapılmış bakım, onarım ve ayar örnekleri.",
    url: "/islerimiz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "İşlerimiz | ES Müzik Atölyesi",
    description: "Enstrüman bakım ve onarım örneklerimiz.",
  },
}

export default function IslerimizPage() {
  return (
    <>
      <JsonLd
        data={[
          itemListSchema(works),
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/" },
            { name: "İşlerimiz", path: "/islerimiz" },
          ]),
        ]}
      />
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
