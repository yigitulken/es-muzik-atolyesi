import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Eye, Target, Shield, MessageSquare, Wrench } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Atölye | ES Müzik Atölyesi",
  description: "Lüthiyer Sonat Tufan'ın eğitim yolculuğu ve ES Müzik Atölyesi hakkında. Piyano, yaylı çalgılar ve gitar için özenli bakım, onarım ve akort hizmetleri.",
}

const timeline = [
  {
    year: "1996",
    title: "İlk müzik eğitimi",
    description: "Emekli Devlet Opera ve Balesi trombon sanatçısı Abdullah Özkaya ile başladı; ardından Dz.K.K. Bando Komutanı Metin Tufan ile devam etti.",
  },
  {
    year: "2001",
    title: "Enstrüman bakım-onarım eğitimi",
    description: "Dz.K.K. Bandosu Bakım Onarım Atölyesi'nde lüthiyer Cemal Köksal ile çalışmaya başladı.",
  },
  {
    year: "2005",
    title: "Evrensel Müzikevi Onarım Atölyesi",
    description: "Kenan Turgut ile keman, gitar ve elektronik piyano bakım-onarımı üzerine eğitim aldı.",
  },
  {
    year: "2009 – 2011",
    title: "Akademik dönem",
    description: "Gazi Üniversitesi'nde Prof. Mehmet Akbulut ile akustik piyano akordu, reglajı ve tamiri; Bilkent'te Emre Ünlenen ile klasik gitar. Aynı dönemde Fame Müzik Dershanesi'nde gitar eğitmenliği.",
  },
  {
    year: "İzmir dönemi",
    title: "Duran Gezen Atölyesi",
    description: "Dokuz Eylül Konservatuvarı Piyano Bakım Onarım Bölümü öğretim görevlisi Duran Gezen'in atölyesinde çalıştı; vefatının ardından çalışmalarını sürdürdü. İsmet Tezcan ile klasik gitar eğitimine devam etti.",
  },
  {
    year: "2019 – 2022",
    title: "Bemol Müzikevi Atölyesi",
    description: "Enstrüman bakım ve onarımı alanında çalıştı.",
  },
  {
    year: "2022 – 2023",
    title: "MARYAS sertifikası",
    description: "Mustafa Ceylan ve Prof. Mehmet Akbulut'tan piyano akordu, reglajı ve mekaniği üzerine ileri seviye eğitim aldı; Aydın Halk Eğitim Merkezi'nde gitar eğitimi sertifikası kazandı.",
  },
  {
    year: "2024",
    title: "İzmir Devlet Opera ve Balesi",
    description: "Açılan sınavı kazanarak sözleşmeli piyano akordörü ve lüthiyer olarak göreve başladı; lüthiyer Nurettin Temizer ile çalışmalarına devam etti.",
  },
  {
    year: "Bugün",
    title: "ES Müzik Atölyesi",
    description: "Yıllar içinde edindiği birikim, eğitim ve atölye tecrübesini kendi anlayışı doğrultusunda bir araya getirerek ES Müzik Atölyesi'ni kurdu.",
  },
]

const bioParagraphs = [
  "İlk müzik eğitimime 1996 yılında, emekli Devlet Opera ve Balesi trombon sanatçısı Abdullah Özkaya ile başladım. Abdullah Özkaya'nın vefatının ardından müzik ve trombon eğitimime, Dz.K.K. Bando Komutanı Metin Tufan ile devam ettim.",
  "2001 yılından itibaren, Dz.K.K. Bandosu Bakım Onarım Atölyesi'nde görevli lüthiyer Cemal Köksal'dan enstrüman bakım ve onarımı üzerine eğitim almaya başladım. 2005 yılında Evrensel Müzikevi Onarım Atölyesi'nde Kenan Turgut ile çalışmalarıma devam ettim. Burada keman, gitar ve elektronik piyano bakım-onarımı üzerine eğitim aldım.",
  "2009–2011 yılları arasında, Gazi Üniversitesi Güzel Sanatlar Eğitimi Bölümü Müzik Eğitimi Anabilim Dalı Enstrüman Onarım ve Yapım Bölümü Başkanı Prof. Mehmet Akbulut ile akustik piyano akordu, reglajı ve tamiri üzerine çalışma fırsatı buldum. Aynı dönemde Bilkent Üniversitesi Sahne Sanatları Bölümü'nde Emre Ünlenen ile klasik gitar eğitimime devam ettim; bu süreçte Fame Müzik Dershanesi'nde gitar eğitmeni olarak görev aldım.",
  "Atölye ve eğitmenlik çalışmalarımı İzmir'e taşınıncaya kadar sürdürdüm. İzmir'de, Dokuz Eylül Konservatuvarı Piyano Bakım Onarım Bölümü öğretim görevlisi Duran Gezen'in atölyesinde çalışmaya başladım. Duran Gezen'in vefatının ardından atölye çalışmalarını devam ettirdim. Ayrıca Işılay Saygın Güzel Sanatlar Anadolu Lisesi öğretim görevlisi İsmet Tezcan ile klasik gitar eğitimime devam ettim.",
  "2019–2022 yılları arasında Bemol Müzikevi Atölyesi'nde enstrüman bakım ve onarımı alanında çalıştım. 2022–2023 yılları arasında MARYAS Piyano Atölyesi'nin açtığı eğitime katıldım; Mustafa Ceylan ve Prof. Mehmet Akbulut'tan piyano akordu, reglajı ve piyano mekaniği üzerine ileri seviye eğitim alarak sertifika kazandım. Bunun yanında Aydın Halk Eğitim Merkezi'nin düzenlediği gitar kurslarına katılarak gitar eğitimi sertifikası aldım.",
  "Gezen Sanat Merkezi'nde müzik eğitmenliği ve lüthiyerlik çalışmalarımı sürdürürken, 2024 yılında İzmir Devlet Opera ve Balesi'nde açılan sınavı kazanarak sözleşmeli piyano akordörü ve lüthiyer olarak çalışma hakkı elde ettim. İzmir Devlet Opera ve Balesi yaylı çalgı yapım bölümünde görevli lüthiyer Nurettin Temizer ile çalışmalarıma devam ettim.",
  "Yıllar içinde edindiğim birikim, eğitim ve atölye tecrübemi kendi anlayışım doğrultusunda bir araya getirerek ES Müzik Atölyesi'ni kurdum. Bugün ES Müzik Atölyesi bünyesinde; piyano, gitar, yaylı çalgılar ve diğer enstrümanlarda bakım, onarım, akort ve teknik destek hizmetlerini, uzun yıllara dayanan deneyimle sürdürmeye devam ediyorum.",
]

const values = [
  {
    icon: Heart,
    title: "Özen",
    description: "Her enstrümana aynı dikkat ve özenle yaklaşılır.",
  },
  {
    icon: Eye,
    title: "Titizlik",
    description: "Detaylara gösterilen hassasiyet, işin kalitesini belirler.",
  },
  {
    icon: Target,
    title: "Doğru Tespit",
    description: "Sorunun kaynağını doğru anlamak, çözümün temelidir.",
  },
  {
    icon: Shield,
    title: "Güvenilir Süreç",
    description: "Her adımda tutarlı ve güvenilir bir iş akışı izlenir.",
  },
  {
    icon: MessageSquare,
    title: "Şeffaf İletişim",
    description: "Kullanıcı, süreç boyunca bilgilendirilir.",
  },
  {
    icon: Wrench,
    title: "Usta İşi Yaklaşım",
    description: "Deneyim ve teknik bilgi bir arada uygulanır.",
  },
]

const approach = [
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

export default function AtolyePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Lüthiyer
              </span>
              <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Sonat Tufan
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                1996'dan bu yana müzik, enstrüman bakımı ve onarımı üzerine eğitim alarak; usta lüthiyerler ve akademik isimlerle çalışan, piyano, gitar ve yaylı çalgılarda uzmanlaşan bir lüthiyer.
              </p>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
                {/* Image */}
                <div className="lg:col-span-2">
                  <div className="sticky top-24 aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                    <div
                      className="size-full bg-cover bg-center"
                      style={{ backgroundImage: `url('/uploads/atolye-sonat.jpg')` }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3">
                  <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    Eğitim ve Yolculuk
                  </h2>
                  <p className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">
                    Sonat Tufan'ın kendi kaleminden
                  </p>
                  <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {bioParagraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="border-y border-border bg-secondary/30 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                Kilometre Taşları
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Eğitim, atölye ve sahne tecrübesinden seçilmiş duraklar.
              </p>
            </div>

            <div className="relative mx-auto mt-16 max-w-3xl">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

              <div className="space-y-10">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col gap-4 pl-12 md:flex-row md:items-start md:gap-8 md:pl-0 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 top-2 size-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2" />

                    {/* Year */}
                    <div className="md:flex-1 md:text-right md:[&:nth-child(odd)]:text-left">
                      <div className={`md:px-8 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:flex-1">
                      <div className={`rounded-lg border border-border bg-background p-5 md:px-8 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ES Müzik Atölyesi Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-block rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Atölye
              </span>
              <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                ES Müzik Atölyesi
              </h2>
              <div className="mx-auto mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Yılların eğitim, atölye ve sahne tecrübesi tek bir çatı altında bir araya geldi.
                  ES Müzik Atölyesi; piyano, gitar, yaylı çalgılar ve diğer enstrümanlarda bakım,
                  onarım, akort ve teknik destek hizmetlerini deneyime dayalı bir anlayışla sürdürür.
                </p>
                <p>
                  Her enstrümanın kendine özgü yapısı ve karakteri vardır. Atölyede bu farklılıklar
                  gözetilerek; yalnızca soruna değil, enstrümanın bütününe ve kullanıcıya doğru
                  hissiyatı geri kazandıracak çözüme odaklanılır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-y border-border bg-secondary/30 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                Değerlerimiz
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Her işlemde bu değerler rehberimiz olur.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-lg border border-border/50 bg-card p-6 transition-colors hover:border-border"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                  Neden ES Müzik Atölyesi?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Enstrümanınıza güvenle teslim edebileceğiniz bir yaklaşım.
                </p>
              </div>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {approach.map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                Atölyeyi ziyaret edin
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Enstrümanınızla ilgili sorularınız için bize ulaşabilir veya atölyemizi ziyaret edebilirsiniz.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/iletisim">
                    İletişime Geç
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
                    WhatsApp&apos;tan Yaz
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
