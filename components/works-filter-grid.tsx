"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Guitar, Piano, type LucideIcon } from "lucide-react"

type CategoryId = "all" | "piyano" | "yayli" | "gitar"

const categories: { id: CategoryId; name: string }[] = [
  { id: "all", name: "Tümü" },
  { id: "piyano", name: "Piyano" },
  { id: "yayli", name: "Yaylı Enstrümanlar" },
  { id: "gitar", name: "Gitar" },
]

type Work = {
  id: number
  category: Exclude<CategoryId, "all">
  icon: LucideIcon
  image?: string
  title: string
  description: string
  details: string
}

const works: Work[] = [
  {
    id: 1,
    category: "piyano",
    icon: Piano,
    image: "/works/akustik-piyano-akort.png",
    title: "Akustik Piyano Akort - Genel Bakım",
    description: "Akort dengesizliği ve genel mekanik kontrol sonrası daha dengeli ve güvenilir kullanım sağlandı.",
    details: "Tuşe temizliği, mekanik kontrol, akort ve ton dengeleme işlemleri uygulandı.",
  },
  {
    id: 2,
    category: "piyano",
    icon: Piano,
    image: "/works/piyano-mekanik-onarim.png",
    title: "Piyano Mekanik Onarım",
    description: "Bazı tuşlarda yaşanan sertlik ve tepki gecikmesi sorunu giderildi.",
    details: "Çekiç mekanizması kontrolü, yay ayarları ve yağlama işlemleri yapıldı.",
  },
  {
    id: 3,
    category: "yayli",
    icon: Music,
    image: "/works/keman-kopru-ayar.png",
    title: "Yaylı Köprü ve Ayar",
    description: "Köprü ve genel ayar müdahalesiyle çalım dengesi iyileştirildi.",
    details: "Köprü konumu düzeltildi, tel yükseklikleri ayarlandı, burgular kontrol edildi.",
  },
  {
    id: 4,
    category: "yayli",
    icon: Music,
    image: "/works/arse-kil-degisimi.png",
    title: "Arşe Kıl Değişimi",
    description: "Yıpranmış arşe kılları yenilenerek temiz ton ve dengeli çalım yeniden kazandırıldı.",
    details: "Eski kıllar sökülüp kaliteli at kılı takımı ile değiştirildi, gerginlik ve reçine tutunumu için son kondisyonlama yapıldı.",
  },
  {
    id: 5,
    category: "yayli",
    icon: Music,
    image: "/works/yayli-kirik-tamiri.png",
    title: "Yaylı Kırık Tamiri",
    description: "Gövdede oluşan çatlak ve kırık onarılarak yapısal bütünlük ile ton karakteri yeniden kazandırıldı.",
    details: "Kırık bölge hizalanıp özel yapıştırıcıyla birleştirildi, iç destek uygulandı ve yüzey rötuşunun ardından akort stabilitesi kontrol edildi.",
  },
  {
    id: 6,
    category: "gitar",
    icon: Guitar,
    image: "/works/gitar-bakim-onarim.jpeg",
    title: "Gitar & Elektro Gitar Bakım & Onarımı",
    description: "Sap ayarı, fret kontrolü ve entonasyon işlemleri sonrası daha temiz ve rahat çalım elde edildi.",
    details: "Truss rod ayarı, aksiyon düzenlemesi, entonasyon ve pickup yükseklik ayarları yapıldı.",
  },
  {
    id: 7,
    category: "gitar",
    icon: Guitar,
    image: "/works/gitar-kirik-tamiri.png",
    title: "Gitar Kırık Tamiri",
    description: "Sap ya da gövdede oluşan kırık profesyonel yöntemle onarılarak çalım güvenliği ve ton bütünlüğü yeniden sağlandı.",
    details: "Kırık bölge temizlenip uygun tutkalla hizalandı, sıkıştırma ve kuruma sonrası yüzey rötuşu yapılarak dayanıklılık kontrol edildi.",
  },
  {
    id: 8,
    category: "gitar",
    icon: Guitar,
    image: "/works/gitar-kopru-tamiri.jpeg",
    title: "Gitar Köprü Tamiri",
    description: "Yerinden kalkmış ya da hasar almış köprü yeniden sabitlenerek tel gerginliği ve tonun doğal aktarımı sağlandı.",
    details: "Köprü sökülüp yapışma yüzeyi temizlendi, uygun tutkalla yeniden yapıştırıldı; hizalama ve entonasyon ayarı kontrol edildi.",
  },
  {
    id: 9,
    category: "piyano",
    icon: Piano,
    image: "/works/piyano-tel-sarim-degisim.jpeg",
    title: "Piyano Tel Sarım & Değişim",
    description: "Kopmuş ve yıpranmış teller yenisiyle değiştirilerek net, dengeli ton ile akort stabilitesi geri kazandırıldı.",
    details: "Uygun çap ve sarımda yeni tel hazırlanıp takıldı, kontrollü germe ve ton dengelemesinin ardından nihai akort yapıldı.",
  },
]

const categoryLabels: Record<Exclude<CategoryId, "all">, string> = {
  piyano: "Piyano",
  yayli: "Yaylı",
  gitar: "Gitar",
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
            {filtered.map((work) => (
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
                      <work.icon className="size-16 text-muted-foreground/30" />
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
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
