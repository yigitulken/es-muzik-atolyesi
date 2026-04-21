"use client"

import { useState } from "react"
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
import { Send, Loader2, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

export function ContactForm() {
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
  )
}
