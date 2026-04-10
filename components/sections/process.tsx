const steps = [
  {
    number: "1",
    title: "İlk bilgi paylaşımı",
    description: "Enstrüman türünü ve yaşadığınız sorunu bize iletin.",
  },
  {
    number: "2",
    title: "Ön değerlendirme",
    description: "Fotoğraf ve kısa açıklama ile ilk değerlendirme yapılır.",
  },
  {
    number: "3",
    title: "Kontrol ve tespit",
    description: "Enstrüman atölyede incelenir, ihtiyaç duyulan işlem netleştirilir.",
  },
  {
    number: "4",
    title: "Uygulama",
    description: "Bakım, onarım, ayar veya akort işlemleri özenle gerçekleştirilir.",
  },
  {
    number: "5",
    title: "Teslim",
    description: "Son kontroller tamamlanır ve enstrüman güvenle teslim edilir.",
  },
]

export function ProcessSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Süreç Nasıl İlerliyor?
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Enstrümanın durumunu anlamak ve doğru müdahaleyi uygulamak için süreci açık ve düzenli biçimde yürütürüz.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
          
          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Step Number */}
                <div className="relative z-10 mb-4 flex size-12 items-center justify-center rounded-full border-2 border-primary bg-background font-serif text-lg font-semibold text-primary">
                  {step.number}
                </div>
                {/* Step Content */}
                <h3 className="mb-2 font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <p className="mx-auto mt-12 max-w-2xl text-center text-muted-foreground italic">
          Amacımız yalnızca sorunu gidermek değil, enstrümanı yeniden güvenle kullanılabilir hale getirmektir.
        </p>
      </div>
    </section>
  )
}
