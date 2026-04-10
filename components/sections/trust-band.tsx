import { Wrench, MessageSquare, Heart, Settings } from "lucide-react"

const trustItems = [
  {
    icon: Wrench,
    title: "Gerçek atölye deneyimi",
    description: "Her enstrüman kendi yapısına ve ihtiyacına göre değerlendirilir.",
  },
  {
    icon: MessageSquare,
    title: "Şeffaf iletişim",
    description: "İşlem öncesinde sorun, ihtiyaç ve yaklaşım net biçimde paylaşılır.",
  },
  {
    icon: Heart,
    title: "Özenli uygulama",
    description: "Geçici çözümler yerine uzun ömürlü ve doğru müdahale hedeflenir.",
  },
  {
    icon: Settings,
    title: "Farklı enstrüman gruplarında hassasiyet",
    description: "Piyano, yaylılar ve gitar için farklı teknik ihtiyaçlar dikkate alınır.",
  },
]

export function TrustBandSection() {
  return (
    <section className="border-y border-border bg-card">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="mb-10 text-center font-serif text-2xl font-semibold text-foreground md:text-3xl">
          Titiz işçilik. Doğru müdahale. Güvenilir süreç.
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-3 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="size-5 text-primary" />
              </div>
              <h3 className="font-medium text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
