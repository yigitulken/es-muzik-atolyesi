import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, MapPin, Clock, Instagram } from "lucide-react"
import { ContactForm } from "./contact-form"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/seo/schemas"

const PHONE_DISPLAY = "+90 505 890 04 77"
const PHONE_TEL = "+905058900477"
const PHONE_WA = "905058900477"
const ADDRESS_LINE_1 = "Kılıçreis Mah. 320/1 Sk. No:32"
const ADDRESS_LINE_2 = "Konak / İzmir"
const ADDRESS_QUERY = "Kılıçreis Mah. 320/1 Sk. No:32 Konak İzmir"
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_QUERY)}`
const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS_QUERY)}&t=&z=16&ie=UTF8&iwloc=&output=embed`
const INSTAGRAM_URL = "https://www.instagram.com/esmuzikatolye/"
const INSTAGRAM_HANDLE = "@esmuzikatolye"

export const metadata: Metadata = {
  title: "İletişim — İzmir Konak Müzik Atölyesi",
  description:
    "ES Müzik Atölyesi iletişim bilgileri. Kılıçreis Mah. Konak/İzmir adresindeki atölyemize WhatsApp, telefon veya form ile ulaşabilirsiniz. Pzt-Cmt 10:00-19:00.",
  alternates: {
    canonical: "/iletisim",
  },
  openGraph: {
    title: "İletişim | ES Müzik Atölyesi — İzmir Konak",
    description:
      "ES Müzik Atölyesi iletişim bilgileri. WhatsApp, telefon veya form ile ulaşın. Kılıçreis Mah. Konak/İzmir.",
    url: "/iletisim",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | ES Müzik Atölyesi",
    description: "İzmir Konak müzik atölyesi iletişim bilgileri.",
  },
}

export default function IletisimPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim", path: "/iletisim" },
        ])}
      />
      <Header />
      <main>
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                İletişim
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Enstrümanınızla ilgili sorularınız için bize ulaşın. Fotoğraf ve kısa açıklama ile
                WhatsApp üzerinden hızlıca ön değerlendirme alabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                      Bize Ulaşın
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      En hızlı yanıt için WhatsApp tercih edilebilir.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Card className="border-primary/20 bg-primary/5">
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <MessageCircle className="size-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">WhatsApp</h3>
                          <p className="mt-1 text-muted-foreground">
                            Fotoğraf göndererek hızlıca ön değerlendirme alın.
                          </p>
                          <Button className="mt-3 gap-2" size="sm" asChild>
                            <a href={`https://wa.me/${PHONE_WA}`} target="_blank" rel="noopener noreferrer">
                              <MessageCircle className="size-4" />
                              WhatsApp&apos;tan Yaz
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex items-start gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                        <Phone className="size-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Telefon</h3>
                        <a
                          href={`tel:${PHONE_TEL}`}
                          className="mt-1 block text-muted-foreground hover:text-foreground"
                        >
                          {PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                        <MapPin className="size-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Adres</h3>
                        <a
                          href={MAPS_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 block text-muted-foreground hover:text-foreground"
                        >
                          {ADDRESS_LINE_1}
                          <br />
                          {ADDRESS_LINE_2}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                        <Clock className="size-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Çalışma Saatleri</h3>
                        <div className="mt-1 space-y-1 text-muted-foreground">
                          <p>Pazartesi - Cumartesi: 10:00 - 19:00</p>
                          <p>Pazar: Kapalı</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                        <Instagram className="size-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Instagram</h3>
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 block text-muted-foreground hover:text-foreground"
                        >
                          {INSTAGRAM_HANDLE}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="aspect-[21/9] w-full bg-muted">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ES Müzik Atölyesi konumu"
              className="size-full"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
