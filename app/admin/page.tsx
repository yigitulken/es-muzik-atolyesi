"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { instrumentTypeLabels } from "@/lib/validations/submission"
import {
  Inbox,
  Search,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  Loader2,
} from "lucide-react"

interface Stats {
  statusCounts: Record<string, number>
  instrumentCounts: { instrumentType: string; count: number }[]
  recentSubmissions: {
    id: string
    name: string
    instrumentType: string
    status: string
    createdAt: string
  }[]
  total: number
}

const statusConfig: Record<
  string,
  { label: string; icon: React.ElementType; color: string }
> = {
  new: { label: "Yeni", icon: Inbox, color: "text-blue-600 bg-blue-50" },
  reviewed: {
    label: "Incelendi",
    icon: Search,
    color: "text-amber-600 bg-amber-50",
  },
  contacted: {
    label: "Iletisime Gecildi",
    icon: PhoneCall,
    color: "text-purple-600 bg-purple-50",
  },
  completed: {
    label: "Tamamlandi",
    icon: CheckCircle2,
    color: "text-green-600 bg-green-50",
  },
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="size-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="text-center text-muted-foreground">
        Veriler yuklenemedi.
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold">Pano</h1>
        <p className="mt-1 text-muted-foreground">
          Basvurularin genel gorunumu
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(statusConfig).map(([key, config]) => {
          const Icon = config.icon
          const count = stats.statusCounts[key] || 0
          return (
            <Card key={key}>
              <CardContent className="flex items-center gap-4 p-6">
                <div
                  className={cn(
                    "flex size-12 items-center justify-center rounded-full",
                    config.color
                  )}
                >
                  <Icon className="size-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{config.label}</p>
                  <p className="text-2xl font-bold">{count}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Instrument Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-lg">
            Enstruman Turune Gore Dagilim
          </CardTitle>
        </CardHeader>
        <CardContent>
          {stats.instrumentCounts.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Henuz basvuru bulunmuyor.
            </p>
          ) : (
            <div className="space-y-3">
              {stats.instrumentCounts.map((item) => {
                const percentage =
                  stats.total > 0
                    ? Math.round((item.count / stats.total) * 100)
                    : 0
                return (
                  <div key={item.instrumentType} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>
                        {instrumentTypeLabels[
                          item.instrumentType as keyof typeof instrumentTypeLabels
                        ] || item.instrumentType}
                      </span>
                      <span className="text-muted-foreground">
                        {item.count} ({percentage}%)
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Submissions */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-serif text-lg">Son Basvurular</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/admin/basvurular" className="gap-1">
              Tumunu Gor
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          {stats.recentSubmissions.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Henuz basvuru bulunmuyor.
            </p>
          ) : (
            <div className="space-y-3">
              {stats.recentSubmissions.map((sub) => (
                <Link
                  key={sub.id}
                  href={`/admin/basvurular/${sub.id}`}
                  className="flex items-center justify-between rounded-md border border-border p-3 transition-colors hover:bg-secondary/50"
                >
                  <div>
                    <p className="font-medium">{sub.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {instrumentTypeLabels[
                        sub.instrumentType as keyof typeof instrumentTypeLabels
                      ] || sub.instrumentType}{" "}
                      &middot;{" "}
                      {new Date(sub.createdAt).toLocaleDateString("tr-TR")}
                    </p>
                  </div>
                  <Badge
                    variant={sub.status === "new" ? "default" : "secondary"}
                  >
                    {statusConfig[sub.status]?.label || sub.status}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ")
}
