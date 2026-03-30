"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageCircle, Camera } from "lucide-react"

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Atölye", href: "/atolye" },
  { name: "İşlerimiz", href: "/islerimiz" },
  { name: "Sık Sorulan Sorular", href: "/sss" },
  { name: "İletişim", href: "/iletisim" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
              ES Atölye
            </span>
            <span className="hidden text-[10px] text-muted-foreground sm:block">
              Piyano, yaylı ve gitar enstrümanları için bakım, onarım ve akort
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground" asChild>
              <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                <span className="sr-only sm:not-sr-only">WhatsApp</span>
              </a>
            </Button>
            <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
              <Camera className="size-4" />
              Fotoğraf Gönder
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
                <span className="sr-only">Menüyü aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 pt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-6 flex flex-col gap-3">
                  <Button className="w-full gap-2" asChild>
                    <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="size-4" />
                      WhatsApp&apos;tan Yaz
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Camera className="size-4" />
                    Fotoğraf Gönder
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
