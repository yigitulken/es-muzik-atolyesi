import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhotoUploadButton } from "@/components/photo-upload-button"
import { MessageCircle, Mail } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-primary-foreground md:text-4xl">
            Enstrümanınızla ilgili bir sorun mu var?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-primary-foreground/80">
            Fotoğraf ve kısa açıklama ile bize ulaşın. Uygun yönlendirmeyi birlikte yapalım.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="gap-2 bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" />
                WhatsApp&apos;tan Yaz
              </a>
            </Button>
            <PhotoUploadButton
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            />
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/iletisim">
                <Mail className="size-5" />
                İletişime Geç
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
