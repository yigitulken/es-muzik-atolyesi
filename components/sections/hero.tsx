"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { PhotoUploadButton } from "@/components/photo-upload-button"
import useEmblaCarousel from "embla-carousel-react"

const heroSlides = [
  {
    title: "Piyano, Yaylı Çalgılar, Gitar, Bakım&Onarım ve Tamir",
    description:
      "ES Atölye olarak piyano, keman, viyola, viyolonsel ve gitar başta olmak üzere tüm enstrümanlarınız için profesyonel bakım, onarım ve tamir hizmeti sunuyoruz. Atölyemizde her enstrümana özenle yaklaşıyor, en doğru müdahaleyi uyguluyoruz.",
    image: "/uploads/hero-genel.jpg",
    alt: "ES Atölye dış görünüm",
    tags: [
      "Piyano bakım ve akort",
      "Yaylı enstrüman onarım",
      "Gitar bakım ve ayar",
      "Gerçek atölye işçiliği",
    ],
  },
  {
    title: "Arşe, Kıl Değişimi ve Tamiri",
    description:
      "Arşeleriniz için kıl değişimi ve tamir hizmeti veriyoruz. Doğru gerginlik ve dengeli kıl dağılımıyla arşenizin performansını en üst seviyeye taşıyoruz.",
    image: "/uploads/hero-arse-kil-degisimi.jpg",
    alt: "Arşe kıl değişimi",
    imagePosition: "center 80%",
    tags: [
      "Arşe kıl değişimi",
      "Arşe tamiri",
      "Dengeli kıl dağılımı",
      "Yaylı çalgı uzmanlığı",
    ],
  },
  {
    title: "Gitar Tamiri, Onarım&Bakım",
    description:
      "Klasik, akustik ve elektro gitarlarınız için perde düzenleme, perde değişimi, eşik ayarı, sap düzeltme, truss rod ayarı ve komple setup hizmetleri veriyoruz. Kırık sap onarımı, çatlak tamiri, açılmış birleşim noktalarının yeniden yapıştırılması ve cila rötuşlarıyla en zorlu hasarları bile özenle gideriyoruz. Elektronik bakım kapsamında manyetik değişimi, potansiyometre ve jack onarımı, kablo lehimleme ile gitarınızın sesini ve çalınabilirliğini ilk günkü haline kavuşturuyoruz.",
    image: "/uploads/hero-gitar-tamiri.jpg",
    alt: "Gitar tamiri ve onarım",
    tags: [
      "Perde düzenleme",
      "Sap & çatlak onarımı",
      "Elektronik bakım",
      "Komple setup",
    ],
  },
  {
    title: "Piyano, Akort, Mekanik Tamir ve Tel Değişimi",
    description:
      "Akustik piyanolarınız için profesyonel akort, mekanik ayar, tuş regülasyonu ve ses düzenleme işlemlerini titizlikle gerçekleştiriyoruz. Kopmuş veya yıpranmış tellerin değişimi, bas tellerde özel tel sarımı ve hassas tel takma işlemleriyle piyanonuzun ses dengesini en doğru şekilde yeniden kuruyoruz.",
    image: "/uploads/hero-piyano-akort.jpg",
    alt: "Piyano akort ve mekanik tamir",
    tags: [
      "Piyano akort",
      "Mekanik ayar",
      "Tuş regülasyonu",
      "Tel değişimi",
    ],
  },
  {
    title: "Tel Sarım ve Yedek Parça",
    description:
      "Piyano tel sarımı, bas tel üretimi ve orijinal yedek parça temini konusunda hizmet veriyoruz. Kopmuş veya yıpranmış tellerin yenilenmesi, çekiç ve mekanik parça değişimleriyle piyanonuzun ömrünü uzatıyoruz.",
    image: "/uploads/hero-tel-sarim.jpg",
    alt: "Piyano tel sarım",
    tags: [
      "Bas tel sarımı",
      "Orijinal yedek parça",
      "Çekiç değişimi",
      "Mekanik parça",
    ],
  },
]

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi])

  const currentSlide = heroSlides[selectedIndex]

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <h1
              key={`title-${selectedIndex}`}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl"
            >
              {currentSlide.title}
            </h1>
            <p
              key={`desc-${selectedIndex}`}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
            >
              {currentSlide.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <PhotoUploadButton size="lg" className="gap-2 bg-primary hover:bg-primary/90" label="Fotoğraf Göndererek Sorun" />
              <Button asChild variant="outline" size="lg" className="gap-2 group">
                <Link href="/hizmetler">
                  Hizmetleri İncele
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Service Tags */}
            <div
              key={`tags-${selectedIndex}`}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 flex flex-wrap gap-2 pt-4"
            >
              {currentSlide.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Image Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg" ref={emblaRef}>
              <div className="flex">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] min-w-0 flex-[0_0_100%] lg:aspect-square"
                  >
                    <div
                      className="absolute inset-0 bg-cover"
                      role="img"
                      aria-label={slide.alt}
                      style={{
                        backgroundImage: `url('${slide.image}')`,
                        backgroundPosition: slide.imagePosition || 'center center',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-background"
              aria-label="Önceki görsel"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-background"
              aria-label="Sonraki görsel"
            >
              <ChevronRight className="size-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`size-2 rounded-full transition-colors ${
                    index === selectedIndex
                      ? "bg-background"
                      : "bg-background/50"
                  }`}
                  aria-label={`Görsel ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
