"use client"

import { useEffect, useState, use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { instrumentTypeLabels } from "@/lib/validations/submission"
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  Mail,
  Loader2,
  Send,
  Trash2,
  ImageIcon,
  Calendar,
  User,
  FileText,
} from "lucide-react"
import { toast } from "sonner"

interface Note {
  id: number
  content: string
  createdAt: string
}

interface SubmissionDetail {
  id: string
  name: string
  phone: string
  email: string | null
  instrumentType: string
  description: string
  photos: string[]
  source: string
  status: string
  priority: string
  estimatedCost: string | null
  createdAt: string
  updatedAt: string
  completedAt: string | null
  notes: Note[]
}

const statusOptions = [
  { value: "new", label: "Yeni" },
  { value: "reviewed", label: "Incelendi" },
  { value: "contacted", label: "Iletisime Gecildi" },
  { value: "completed", label: "Tamamlandi" },
]

const priorityOptions = [
  { value: "low", label: "Dusuk" },
  { value: "normal", label: "Normal" },
  { value: "high", label: "Yuksek" },
  { value: "urgent", label: "Acil" },
]

export default function BasvuruDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const router = useRouter()
  const [data, setData] = useState<SubmissionDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [newNote, setNewNote] = useState("")
  const [addingNote, setAddingNote] = useState(false)
  const [estimatedCost, setEstimatedCost] = useState("")

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/admin/submissions/${id}`)
      if (!res.ok) throw new Error()
      const json = await res.json()
      setData(json)
      setEstimatedCost(json.estimatedCost || "")
    } catch {
      toast.error("Basvuru yuklenemedi")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  const updateField = async (field: string, value: string) => {
    try {
      const res = await fetch(`/api/admin/submissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: value }),
      })
      if (!res.ok) throw new Error()
      const updated = await res.json()
      setData((prev) => (prev ? { ...prev, ...updated, notes: prev.notes } : prev))
      toast.success("Guncellendi")
    } catch {
      toast.error("Guncelleme basarisiz")
    }
  }

  const addNote = async () => {
    if (!newNote.trim()) return
    setAddingNote(true)
    try {
      const res = await fetch(`/api/admin/submissions/${id}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: newNote }),
      })
      if (!res.ok) throw new Error()
      const note = await res.json()
      setData((prev) =>
        prev ? { ...prev, notes: [note, ...prev.notes] } : prev
      )
      setNewNote("")
      toast.success("Not eklendi")
    } catch {
      toast.error("Not eklenemedi")
    } finally {
      setAddingNote(false)
    }
  }

  const deleteNote = async (noteId: number) => {
    try {
      await fetch(`/api/admin/submissions/${id}/notes/${noteId}`, {
        method: "DELETE",
      })
      setData((prev) =>
        prev
          ? { ...prev, notes: prev.notes.filter((n) => n.id !== noteId) }
          : prev
      )
      toast.success("Not silindi")
    } catch {
      toast.error("Not silinemedi")
    }
  }

  const deleteSubmission = async () => {
    try {
      await fetch(`/api/admin/submissions/${id}`, { method: "DELETE" })
      toast.success("Basvuru silindi")
      router.push("/admin/basvurular")
    } catch {
      toast.error("Silinemedi")
    }
  }

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="size-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (!data) {
    return (
      <div className="text-center text-muted-foreground">
        Basvuru bulunamadi.
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/admin/basvurular">
              <ArrowLeft className="size-5" />
            </Link>
          </Button>
          <div>
            <h1 className="font-serif text-2xl font-semibold">{data.name}</h1>
            <p className="text-sm text-muted-foreground">
              {new Date(data.createdAt).toLocaleDateString("tr-TR", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm" className="gap-2">
              <Trash2 className="size-4" />
              Sil
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Basvuruyu silmek istediginize emin misiniz?</AlertDialogTitle>
              <AlertDialogDescription>
                Bu islem geri alinamaz. Basvuru ve tum notlari kalici olarak silinecektir.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Vazgec</AlertDialogCancel>
              <AlertDialogAction onClick={deleteSubmission}>
                Sil
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column: Info + Controls */}
        <div className="space-y-6 lg:col-span-1">
          {/* Customer Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <User className="size-4" />
                Musteri Bilgileri
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Telefon</p>
                <a href={`tel:${data.phone}`} className="font-medium hover:underline">
                  {data.phone}
                </a>
              </div>
              {data.email && (
                <div>
                  <p className="text-xs text-muted-foreground">E-posta</p>
                  <a href={`mailto:${data.email}`} className="font-medium hover:underline">
                    {data.email}
                  </a>
                </div>
              )}
              <div>
                <p className="text-xs text-muted-foreground">Enstruman</p>
                <p className="font-medium">
                  {instrumentTypeLabels[
                    data.instrumentType as keyof typeof instrumentTypeLabels
                  ] || data.instrumentType}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Kaynak</p>
                <p className="font-medium">
                  {data.source === "photo_upload" ? "Fotograf Gonderimi" : "Iletisim Formu"}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1 gap-1" asChild>
                  <a href={`tel:${data.phone}`}>
                    <Phone className="size-3.5" />
                    Ara
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="flex-1 gap-1" asChild>
                  <a
                    href={`https://wa.me/${data.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-3.5" />
                    WA
                  </a>
                </Button>
                {data.email && (
                  <Button size="sm" variant="outline" className="flex-1 gap-1" asChild>
                    <a href={`mailto:${data.email}`}>
                      <Mail className="size-3.5" />
                      Mail
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Status & Priority */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Yonetim</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">
                  Durum
                </label>
                <Select
                  value={data.status}
                  onValueChange={(v) => updateField("status", v)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">
                  Oncelik
                </label>
                <Select
                  value={data.priority}
                  onValueChange={(v) => updateField("priority", v)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {priorityOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">
                  Tahmini Maliyet (TL)
                </label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={estimatedCost}
                    onChange={(e) => setEstimatedCost(e.target.value)}
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateField("estimatedCost", estimatedCost)}
                  >
                    Kaydet
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Description + Photos + Notes */}
        <div className="space-y-6 lg:col-span-2">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <FileText className="size-4" />
                Aciklama
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-sm leading-relaxed">
                {data.description}
              </p>
            </CardContent>
          </Card>

          {/* Photos */}
          {data.photos.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <ImageIcon className="size-4" />
                  Fotograflar ({data.photos.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {data.photos.map((url, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedPhoto(url)}
                      className="group relative aspect-square overflow-hidden rounded-lg border border-border"
                    >
                      <img
                        src={url}
                        alt={`Fotograf ${i + 1}`}
                        className="size-full object-cover transition-transform group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Photo Lightbox */}
          <Dialog
            open={!!selectedPhoto}
            onOpenChange={() => setSelectedPhoto(null)}
          >
            <DialogContent className="max-w-3xl p-2">
              {selectedPhoto && (
                <img
                  src={selectedPhoto}
                  alt="Fotograf buyuk gorunum"
                  className="w-full rounded-md object-contain"
                />
              )}
            </DialogContent>
          </Dialog>

          {/* Notes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Calendar className="size-4" />
                Notlar ({data.notes.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add Note */}
              <div className="flex gap-2">
                <Textarea
                  placeholder="Not ekleyin..."
                  rows={2}
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  disabled={addingNote}
                />
                <Button
                  size="icon"
                  className="shrink-0 self-end"
                  onClick={addNote}
                  disabled={!newNote.trim() || addingNote}
                >
                  {addingNote ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Send className="size-4" />
                  )}
                </Button>
              </div>

              {/* Notes List */}
              {data.notes.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Henuz not eklenmemis.
                </p>
              ) : (
                <div className="space-y-3">
                  {data.notes.map((note) => (
                    <div
                      key={note.id}
                      className="group flex items-start justify-between rounded-md border border-border p-3"
                    >
                      <div>
                        <p className="text-sm">{note.content}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {new Date(note.createdAt).toLocaleDateString("tr-TR", {
                            day: "numeric",
                            month: "long",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-7 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                        onClick={() => deleteNote(note.id)}
                      >
                        <Trash2 className="size-3.5 text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
