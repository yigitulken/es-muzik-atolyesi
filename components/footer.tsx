import Link from "next/link"
import Image from "next/image"
import { Phone, MessageCircle, MapPin, Clock, Instagram } from "lucide-react"

const quickLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Atölye", href: "/atolye" },
  { name: "İşlerimiz", href: "/islerimiz" },

  { name: "İletişim", href: "/iletisim" },
]

const services = [
  { name: "Piyano Bakım ve Akort", href: "/hizmetler#piyano" },
  { name: "Yaylı Enstrümanlar", href: "/hizmetler#yayli" },
  { name: "Arşe Kıl Değişimi", href: "/hizmetler#arse" },
  { name: "Gitar Bakım ve Ayar", href: "/hizmetler#gitar" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/atolye_logo.png"
                alt="ES Müzik Atölyesi Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Piyano, yaylı çalgılar, arşe ve gitar için bakım, onarım, akort ve teknik destek hizmetleri.
            </p>
            <a
              href="https://www.instagram.com/esmuzikatolye/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="size-5" />
              @esmuzikatolye
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Hızlı Menü
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Hizmetler
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              İletişim
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+905058900477"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-4" />
                  +90 505 890 04 77
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/905058900477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Kılıçreis+Mah.+320/1+Sk.+No:32+Konak+İzmir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0" />
                  Kılıçreis Mah. 320/1 Sk. No:32 Konak/İzmir
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="size-4" />
                  Pzt - Cmt: 10:00 - 19:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ES Müzik Atölyesi. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
