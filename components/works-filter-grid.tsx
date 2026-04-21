"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Guitar, Piano, type LucideIcon } from "lucide-react"
import { works, categoryLabels, type WorkCategory } from "@/lib/works"

type CategoryId = "all" | WorkCategory

const categories: { id: CategoryId; name: string }[] = [
  { id: "all", name: "Tümü" },
  { id: "piyano", name: "Piyano" },
  { id: "yayli", name: "Yaylı Enstrümanlar" },
  { id: "gitar", name: "Gitar" },
]

const categoryIcons: Record<WorkCategory, LucideIcon> = {
  piyano: Piano,
  yayli: Music,
  gitar: Guitar,
}

export function WorksFilterGrid() {
  const [selected, setSelected] = useState<CategoryId>("all")

  const filtered = selected === "all" ? works : works.filter((w) => w.category === selected)

  return (
    <>
      <section className="border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={category.id === selected ? "default" : "outline"}
                size="sm"
                onClick={() => setSelected(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((work) => {
              const Icon = categoryIcons[work.category]
              return (
              <Card key={work.id} className="group border-border/50 bg-card transition-all hover:border-border hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  {work.image ? (
                    <Image
                      src={work.image}
                      alt={work.title}
                      width={800}
                      height={600}
                      className="size-full object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center bg-secondary/50 transition-colors group-hover:bg-secondary/70">
                      <Icon className="size-16 text-muted-foreground/30" />
                    </div>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {categoryLabels[work.category]}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{work.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                  <CardDescription className="text-base">
                    {work.description}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">
                    {work.details}
                  </p>
                </CardContent>
              </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
