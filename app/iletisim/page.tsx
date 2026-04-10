"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PhotoDropzone } from "@/components/photo-dropzone"
import { usePhotoUpload } from "@/hooks/use-photo-upload"
import { instrumentTypes, instrumentTypeLabels } from "@/lib/validations/submission"
import { Phone, MessageCircle, MapPin, Clock, Instagram, Send, Loader2, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

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

export default function IletisimPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [instrumentType, setInstrumentType] = useState("")
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const { photos, addFiles, removePhoto, reset, uploadedUrls, isUploading } =
    usePhotoUpload()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          instrumentType,
          description: message,
          photos: uploadedUrls,
          source: "contact_form",
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Gönderim başarısız oldu")
      }

      setSuccess(true)
      toast.success("Mesajınız başarıyla gönderildi!")
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Bir hata oluştu. Lütfen tekrar deneyin."
      )
    } finally {
      setSubmitting(false)
    }
  }

  const handleReset = () => {
    setName("")
    setEmail("")
    setPhone("")
    setInstrumentType("")
    setMessage("")
    setSuccess(false)
    reset()
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
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

        {/* Contact Content */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Info */}
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
                    {/* WhatsApp */}
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

                    {/* Phone */}
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

                    {/* Address */}
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

                    {/* Hours */}
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

                    {/* Instagram */}
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

                {/* Contact Form */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">Mesaj Gönderin</CardTitle>
                    <CardDescription>
                      Formu doldurarak bize ulaşabilirsiniz. En kısa sürede yanıt vereceğiz.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {success ? (
                      <div className="flex flex-col items-center py-8 text-center">
                        <CheckCircle2 className="mb-4 size-16 text-green-500" />
                        <h3 className="font-serif text-xl font-semibold">
                          Mesajınız Gönderildi!
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          En kısa sürede sizinle iletişime geçeceğiz.
                        </p>
                        <Button variant="outline" className="mt-6" onClick={handleReset}>
                          Yeni Mesaj Gönder
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-foreground">
                              Ad Soyad *
                            </label>
                            <Input
                              id="name"
                              placeholder="Adınız"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                              disabled={submitting}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-foreground">
                              Telefon *
                            </label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="05XX XXX XX XX"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              required
                              disabled={submitting}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-foreground">
                            E-posta *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="ornek@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={submitting}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">
                            Enstrüman Türü *
                          </label>
                          <Select value={instrumentType} onValueChange={setInstrumentType} disabled={submitting}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Enstrüman türünü seçin" />
                            </SelectTrigger>
                            <SelectContent>
                              {instrumentTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {instrumentTypeLabels[type]}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-foreground">
                            Mesajınız *
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Enstrümanınızla ilgili sorunu veya ihtiyacınızı kısaca açıklayın..."
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            disabled={submitting}
                          />
                        </div>

                        {/* Photo Upload */}
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">
                            Fotoğraflar (isteğe bağlı)
                          </label>
                          <PhotoDropzone
                            photos={photos}
                            onAddFiles={addFiles}
                            onRemove={removePhoto}
                            maxFiles={5}
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full gap-2"
                          disabled={submitting || isUploading}
                        >
                          {submitting ? (
                            <Loader2 className="size-4 animate-spin" />
                          ) : (
                            <Send className="size-4" />
                          )}
                          Gönder
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
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
