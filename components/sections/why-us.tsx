const reasons = [
  {
    title: "Enstrüman türüne göre doğru yaklaşım",
    description: "Her enstrümanın yapısı aynı değildir; müdahale buna göre şekillenir.",
  },
  {
    title: "Detay odaklı çalışma",
    description: "Bakım ve onarım süreçleri yalnızca görünür soruna değil, genel kullanım dengesine göre ele alınır.",
  },
  {
    title: "Bilgilendiren iletişim",
    description: "Süreç boyunca kullanıcı ne yapıldığını ve neden yapıldığını bilir.",
  },
  {
    title: "İşlev ve hassasiyet dengesi",
    description: "Amaç yalnızca çalışır hale getirmek değil, doğru hissiyatı ve konforu geri kazandırmaktır.",
  },
]

export function WhyUsSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Neden ES Atölye?
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif text-sm font-semibold text-primary">
                {index + 1}
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
