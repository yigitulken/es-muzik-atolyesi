"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MessageCircle, MapPin, Clock, Instagram, Mail, Send } from "lucide-react"

export default function IletisimPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    instrument: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
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
                WhatsApp üzerinden hızlıca ilk değerlendirme alabilirsiniz.
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
                            Fotoğraf göndererek hızlıca ön değerlendirme alın
                          </p>
                          <Button className="mt-3 gap-2" size="sm" asChild>
                            <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
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
                          href="tel:+905551234567" 
                          className="mt-1 block text-muted-foreground hover:text-foreground"
                        >
                          +90 555 123 45 67
                        </a>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                        <Mail className="size-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">E-posta</h3>
                        <a 
                          href="mailto:info@esatolye.com" 
                          className="mt-1 block text-muted-foreground hover:text-foreground"
                        >
                          info@esatolye.com
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
                        <p className="mt-1 text-muted-foreground">
                          Örnek Mahallesi, Atölye Sokak No: 12<br />
                          Kadıköy, İstanbul
                        </p>
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
                          <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                          <p>Cumartesi: 10:00 - 15:00</p>
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
                          href="https://instagram.com/esatolye" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-1 block text-muted-foreground hover:text-foreground"
                        >
                          @esatolye
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
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground">
                            Ad Soyad
                          </label>
                          <Input
                            id="name"
                            placeholder="Adınız"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-foreground">
                            Telefon
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="05XX XXX XX XX"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          E-posta
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="ornek@email.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="instrument" className="text-sm font-medium text-foreground">
                          Enstrüman Türü
                        </label>
                        <Input
                          id="instrument"
                          placeholder="Örn: Akustik Piyano, Keman, Elektro Gitar"
                          value={formState.instrument}
                          onChange={(e) => setFormState({ ...formState, instrument: e.target.value })}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                          Mesajınız
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Enstrümanınızla ilgili sorunu veya ihtiyacınızı kısaca açıklayın..."
                          rows={5}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full gap-2">
                        <Send className="size-4" />
                        Gönder
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="border-t border-border">
          <div className="aspect-[21/9] w-full bg-muted">
            <div className="flex size-full items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto size-12 text-muted-foreground/30" />
                <p className="mt-2 text-muted-foreground">Harita burada görüntülenecek</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
