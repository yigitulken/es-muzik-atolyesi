"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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

interface PhotoUploadModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PhotoUploadModal({ open, onOpenChange }: PhotoUploadModalProps) {
  const { photos, addFiles, removePhoto, reset, uploadedUrls, isUploading, hasErrors } =
    usePhotoUpload()

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [instrumentType, setInstrumentType] = useState("")
  const [description, setDescription] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const canSubmit =
    name.length >= 2 &&
    phone.length >= 10 &&
    instrumentType &&
    description.length >= 10 &&
    uploadedUrls.length > 0 &&
    !isUploading &&
    !hasErrors &&
    !submitting

  const handleSubmit = async () => {
    if (!canSubmit) return
    setSubmitting(true)

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          instrumentType,
          description,
          photos: uploadedUrls,
          source: "photo_upload",
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Gonderim basarisiz")
      }

      setSuccess(true)
      toast.success("Basvurunuz basariyla gonderildi!")

      setTimeout(() => {
        handleClose()
      }, 2000)
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Bir hata olustu. Tekrar deneyin."
      )
    } finally {
      setSubmitting(false)
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset after animation
    setTimeout(() => {
      setName("")
      setPhone("")
      setInstrumentType("")
      setDescription("")
      setSubmitting(false)
      setSuccess(false)
      reset()
    }, 300)
  }

  if (success) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle2 className="mb-4 size-16 text-green-500" />
            <h3 className="font-serif text-2xl font-semibold">
              Basvurunuz Alindi!
            </h3>
            <p className="mt-2 text-muted-foreground">
              En kisa surede sizinle iletisime gececegiz.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">
            Fotoğraf Gönder
          </DialogTitle>
          <DialogDescription>
            Enstrumaninizin fotograflarini yukleyin ve sorunu kisaca aciklayin.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Photos */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Fotograflar *</label>
            <PhotoDropzone
              photos={photos}
              onAddFiles={addFiles}
              onRemove={removePhoto}
              maxFiles={5}
            />
          </div>

          {/* Name & Phone */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="pu-name" className="text-sm font-medium">
                Ad Soyad *
              </label>
              <Input
                id="pu-name"
                placeholder="Adiniz"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="pu-phone" className="text-sm font-medium">
                Telefon *
              </label>
              <Input
                id="pu-phone"
                type="tel"
                placeholder="05XX XXX XX XX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* Instrument Type */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Enstruman Turu *</label>
            <Select value={instrumentType} onValueChange={setInstrumentType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Enstruman turunu secin" />
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

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="pu-desc" className="text-sm font-medium">
              Sorun Aciklamasi *
            </label>
            <Textarea
              id="pu-desc"
              placeholder="Enstrumaninizla ilgili sorunu veya ihtiyacinizi kisaca aciklayin..."
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={submitting}>
            Vazgec
          </Button>
          <Button
            className="gap-2"
            onClick={handleSubmit}
            disabled={!canSubmit}
          >
            {submitting ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Send className="size-4" />
            )}
            Gonder
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
