"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { instrumentTypeLabels } from "@/lib/validations/submission"
import {
  Search,
  Loader2,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Eye,
} from "lucide-react"

interface Submission {
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
  createdAt: string
}

const statusConfig: Record<string, { label: string; variant: "default" | "secondary" | "outline" | "destructive" }> = {
  new: { label: "Yeni", variant: "default" },
  reviewed: { label: "Incelendi", variant: "secondary" },
  contacted: { label: "Iletisime Gecildi", variant: "outline" },
  completed: { label: "Tamamlandi", variant: "secondary" },
}

const priorityConfig: Record<string, { label: string; variant: "default" | "secondary" | "outline" | "destructive" }> = {
  low: { label: "Dusuk", variant: "secondary" },
  normal: { label: "Normal", variant: "outline" },
  high: { label: "Yuksek", variant: "default" },
  urgent: { label: "Acil", variant: "destructive" },
}

export default function BasvurularPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [total, setTotal] = useState(0)

  // Filters
  const [statusFilter, setStatusFilter] = useState("all")
  const [instrumentFilter, setInstrumentFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchInput, setSearchInput] = useState("")

  const fetchSubmissions = useCallback(async () => {
    setLoading(true)
    const params = new URLSearchParams({
      page: page.toString(),
      limit: "20",
    })
    if (statusFilter !== "all") params.set("status", statusFilter)
    if (instrumentFilter !== "all") params.set("instrument", instrumentFilter)
    if (searchQuery) params.set("q", searchQuery)

    try {
      const res = await fetch(`/api/admin/submissions?${params}`)
      const data = await res.json()
      setSubmissions(data.submissions)
      setTotalPages(data.totalPages)
      setTotal(data.total)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [page, statusFilter, instrumentFilter, searchQuery])

  useEffect(() => {
    fetchSubmissions()
  }, [fetchSubmissions])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setPage(1)
    setSearchQuery(searchInput)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-semibold">Basvurular</h1>
        <p className="mt-1 text-muted-foreground">
          Toplam {total} basvuru
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <form onSubmit={handleSearch} className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Ad, telefon veya e-posta ara..."
            className="pl-9"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
        <Select
          value={statusFilter}
          onValueChange={(v) => {
            setStatusFilter(v)
            setPage(1)
          }}
        >
          <SelectTrigger className="w-full sm:w-44">
            <SelectValue placeholder="Durum" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tum Durumlar</SelectItem>
            <SelectItem value="new">Yeni</SelectItem>
            <SelectItem value="reviewed">Incelendi</SelectItem>
            <SelectItem value="contacted">Iletisime Gecildi</SelectItem>
            <SelectItem value="completed">Tamamlandi</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={instrumentFilter}
          onValueChange={(v) => {
            setInstrumentFilter(v)
            setPage(1)
          }}
        >
          <SelectTrigger className="w-full sm:w-44">
            <SelectValue placeholder="Enstruman" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tum Enstrumanlar</SelectItem>
            <SelectItem value="piyano">Piyano</SelectItem>
            <SelectItem value="yayli">Yayli Enstrumanlar</SelectItem>
            <SelectItem value="gitar">Gitar</SelectItem>
            <SelectItem value="diger">Diger</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex h-40 items-center justify-center">
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
        </div>
      ) : submissions.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            Basvuru bulunamadi.
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden overflow-x-auto rounded-md border border-border md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tarih</TableHead>
                  <TableHead>Ad Soyad</TableHead>
                  <TableHead>Enstruman</TableHead>
                  <TableHead>Durum</TableHead>
                  <TableHead>Oncelik</TableHead>
                  <TableHead className="text-center">Foto</TableHead>
                  <TableHead className="text-right">Islemler</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.map((sub) => (
                  <TableRow key={sub.id}>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(sub.createdAt).toLocaleDateString("tr-TR")}
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{sub.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {sub.phone}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      {instrumentTypeLabels[
                        sub.instrumentType as keyof typeof instrumentTypeLabels
                      ] || sub.instrumentType}
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusConfig[sub.status]?.variant || "secondary"}>
                        {statusConfig[sub.status]?.label || sub.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={priorityConfig[sub.priority]?.variant || "outline"}>
                        {priorityConfig[sub.priority]?.label || sub.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      {sub.photos.length > 0 ? (
                        <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                          <ImageIcon className="size-3.5" />
                          {sub.photos.length}
                        </span>
                      ) : (
                        <span className="text-sm text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" className="size-8" asChild>
                          <a href={`tel:${sub.phone}`}>
                            <Phone className="size-3.5" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="size-8" asChild>
                          <a
                            href={`https://wa.me/${sub.phone.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="size-3.5" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="size-8" asChild>
                          <Link href={`/admin/basvurular/${sub.id}`}>
                            <Eye className="size-3.5" />
                          </Link>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-3 md:hidden">
            {submissions.map((sub) => (
              <Link key={sub.id} href={`/admin/basvurular/${sub.id}`}>
                <Card className="transition-colors hover:bg-secondary/30">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{sub.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {instrumentTypeLabels[
                            sub.instrumentType as keyof typeof instrumentTypeLabels
                          ] || sub.instrumentType}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(sub.createdAt).toLocaleDateString("tr-TR")}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge variant={statusConfig[sub.status]?.variant || "secondary"} className="text-xs">
                          {statusConfig[sub.status]?.label || sub.status}
                        </Badge>
                        {sub.photos.length > 0 && (
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <ImageIcon className="size-3" />
                            {sub.photos.length}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Sayfa {page} / {totalPages}
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  <ChevronLeft className="size-4" />
                  Onceki
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Sonraki
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
