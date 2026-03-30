import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

export const metadata = {
  title: "Sık Sorulan Sorular | ES Atölye",
  description: "ES Atölye hakkında sık sorulan sorular. Enstrüman bakım, onarım ve akort süreçleri hakkında merak edilenler.",
}

const faqCategories = [
  {
    title: "Genel Sorular",
    faqs: [
      {
        question: "Enstrümanı getirmeden önce fotoğraf gönderebilir miyim?",
        answer: "Evet. İlk değerlendirme için fotoğraf ve kısa açıklama ile bize ulaşabilirsiniz. Bu sayede enstrümanınızın durumu hakkında ön bilgi edinebilir ve sonraki adımları birlikte planlayabiliriz.",
      },
      {
        question: "Hangi enstrümanlarla ilgileniyorsunuz?",
        answer: "Piyano, keman, viyola, viyolonsel ve gitar başta olmak üzere belirli enstrüman gruplarında bakım, onarım ve akort hizmetleri sunuyoruz. Her enstrüman grubuna özgü teknik ihtiyaçlar dikkate alınarak çalışılır.",
      },
      {
        question: "Atölyeye randevu almadan gelebilir miyim?",
        answer: "Randevulu çalışmayı tercih ediyoruz. Bu sayede enstrümanınıza ayrılacak süre önceden planlanabilir. Telefon veya WhatsApp üzerinden randevu oluşturabilirsiniz.",
      },
    ],
  },
  {
    title: "Hizmetler Hakkında",
    faqs: [
      {
        question: "Yalnızca akort hizmeti alabilir miyim?",
        answer: "Uygun enstrüman gruplarında yalnızca akort veya ayar hizmeti de sağlanabilir. Piyanolar için düzenli akort hizmeti, yaylı ve telli enstrümanlar için ayar hizmeti sunulmaktadır.",
      },
      {
        question: "Piyano akordu için eve gelinir mi?",
        answer: "Evet, piyano akort hizmeti için eve veya belirlenen adrese gelinmektedir. Randevu için önceden iletişime geçmeniz gerekmektedir.",
      },
      {
        question: "Enstrümanımda ne tür işlemler yapılabilir?",
        answer: "Bakım, onarım, ayar, akort, parça değişimi ve genel kontrol gibi işlemler yapılabilir. Enstrümanın durumuna göre ihtiyaç duyulan işlemler belirlenir.",
      },
    ],
  },
  {
    title: "Süreç ve Fiyatlandırma",
    faqs: [
      {
        question: "İşlem süresi neye göre değişir?",
        answer: "Süre, enstrümanın durumuna ve gerekli müdahalenin kapsamına göre belirlenir. Basit ayar işlemleri kısa sürede tamamlanabilirken, kapsamlı onarımlar daha uzun sürebilir. İlk değerlendirme sonrası tahmini süre hakkında bilgi verilir.",
      },
      {
        question: "Fiyat bilgisi nasıl veriliyor?",
        answer: "İlk değerlendirme sonrasında işlem kapsamına göre fiyat bilgisi paylaşılır. Enstrümanın durumu ve yapılacak işlemler netleştikten sonra kesin fiyat bildirilir.",
      },
      {
        question: "Garanti var mı?",
        answer: "Yapılan işlemlerin niteliğine göre belirli bir süre garanti sağlanmaktadır. Garanti kapsamı ve süresi işlem türüne göre değişiklik gösterebilir.",
      },
    ],
  },
  {
    title: "İletişim",
    faqs: [
      {
        question: "Size nasıl ulaşabilirim?",
        answer: "Telefon, WhatsApp veya iletişim formu üzerinden bize ulaşabilirsiniz. WhatsApp üzerinden fotoğraf göndererek hızlıca ilk değerlendirme alabilirsiniz.",
      },
      {
        question: "Çalışma saatleriniz nedir?",
        answer: "Hafta içi 09:00 - 18:00, Cumartesi 10:00 - 15:00 saatleri arasında hizmet vermekteyiz. Pazar günleri atölyemiz kapalıdır.",
      },
      {
        question: "Enstrümanımı kargolayabilir miyim?",
        answer: "Bazı enstrümanlar için kargo ile gönderim mümkündür, ancak bu konuda öncesinde mutlaka iletişime geçmenizi öneririz. Enstrümanın güvenli paketlenmesi ve taşınması konusunda bilgi verilecektir.",
      },
    ],
  },
]

export default function SSSPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Sık Sorulan Sorular
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Enstrüman bakım, onarım ve akort süreçleri hakkında merak edilenler.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl space-y-12">
              {faqCategories.map((category) => (
                <div key={category.title}>
                  <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category.title}-${index}`}
                        className="border-border"
                      >
                        <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                Başka sorularınız mı var?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Aradığınız cevabı bulamadıysanız bize doğrudan ulaşabilirsiniz.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
                    WhatsApp&apos;tan Yaz
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/iletisim">
                    İletişime Geç
                  </Link>
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
