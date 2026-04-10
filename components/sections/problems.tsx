import { PhotoUploadButton } from "@/components/photo-upload-button"
import { Music, Music2, Music3 } from "lucide-react"

const problems = [
  {
    icon: Music,
    title: "Piyano için",
    issues: [
      "Akort kaçması",
      "Tuş sertliği veya dengesizliği",
      "Pedal problemleri",
      "Ses dengesizlikleri",
      "Genel bakım ihtiyacı",
    ],
  },
  {
    icon: Music2,
    title: "Yaylı enstrümanlar için",
    issues: [
      "Akort tutmama",
      "Burgularda zorluk",
      "Köprü veya eşik sorunları",
      "Gövdede açılma hissi",
      "Çalımı zorlaştıran ayarsızlık",
    ],
  },
  {
    icon: Music3,
    title: "Gitar için",
    issues: [
      "Cızırdama",
      "Yüksek tel aksiyonu",
      "Sap eğriliği",
      "Entonasyon problemi",
      "Elektronik arızalar",
      "Fret kaynaklı çalım sorunları",
    ],
  },
]

export function ProblemsSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Enstrümanınızda böyle sorunlar mı var?
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Sık karşılaşılan bakım, ayar ve onarım ihtiyaçlarından bazıları aşağıdadır. Sorunun teknik adını bilmeniz gerekmez. Fotoğraf ve kısa açıklama ile birlikte bize ulaştığınızda ilk değerlendirme yapılabilir.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((category, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-background p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                  <category.icon className="size-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.issues.map((issue, issueIndex) => (
                  <li
                    key={issueIndex}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <PhotoUploadButton size="lg" className="gap-2 bg-primary hover:bg-primary/90" />
        </div>
      </div>
    </section>
  )
}
