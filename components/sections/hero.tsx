"use client"

import { useState, useCallback, useEffect } from "react"
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
  },
  {
    title: "Arşe, Kıl Değişimi ve Tamiri",
    description:
      "Yaylı çalgılarınızın vazgeçilmezi olan arşeleriniz için kıl değişimi, kamış ayarı ve genel bakım hizmetleri sunuyoruz. Doğru gerginlik ve dengeli kıl dağılımıyla arşenizin performansını en üst seviyeye çıkarıyoruz.",
    image: "/uploads/hero-arse-kil-degisimi.jpg",
    alt: "Arşe kıl değişimi",
    imagePosition: "center 80%",
  },
  {
    title: "Gitar Tamiri, Onarım&Bakım",
    description:
      "Klasik, akustik ve elektro gitarlarınız için perde düzenleme, eşik ayarı, sap düzeltme, elektronik bakım ve komple setup hizmetleri veriyoruz. Gitarınızın çalınabilirliğini ve ses kalitesini yeniden kazanmasını sağlıyoruz.",
    image: "/uploads/hero-gitar-tamiri.jpg",
    alt: "Gitar tamiri ve onarım",
  },
  {
    title: "Piyano, Akort, Mekanik Tamir",
    description:
      "Akustik piyanolarınız için profesyonel akort, mekanik ayar, tuş regülasyonu ve ses düzenleme işlemlerini titizlikle gerçekleştiriyoruz. Piyanonuzun tonunu ve dokunuş hassasiyetini yeniden hayata döndürüyoruz.",
    image: "/uploads/hero-piyano-akort.jpg",
    alt: "Piyano akort ve mekanik tamir",
  },
  {
    title: "Tel Sarım ve Yedek Parça",
    description:
      "Piyano tel sarımı, bas tel üretimi ve orijinal yedek parça temini konusunda hizmet veriyoruz. Kopmuş veya yıpranmış tellerin yenilenmesi, çekiç ve mekanik parça değişimleriyle piyanonuzun ömrünü uzatıyoruz.",
    image: "/uploads/hero-tel-sarim.jpg",
    alt: "Piyano tel sarım",
  },
]

const serviceTags = [
  "Piyano bakım ve akort",
  "Yaylı enstrüman onarım",
  "Gitar bakım ve ayar",
  "Gerçek atölye işçiliği",
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
              <PhotoUploadButton size="lg" className="gap-2 bg-primary hover:bg-primary/90" label="Fotograf Gondererek Sor" />
              <Button variant="outline" size="lg" className="gap-2 group">
                Hizmetleri İncele
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {serviceTags.map((tag) => (
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
