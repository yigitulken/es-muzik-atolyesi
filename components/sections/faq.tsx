"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Enstrümanı getirmeden önce fotoğraf gönderebilir miyim?",
    answer: "Evet. İlk değerlendirme için fotoğraf ve kısa açıklama ile bize ulaşabilirsiniz.",
  },
  {
    question: "Hangi enstrümanlarla ilgileniyorsunuz?",
    answer: "Piyano, keman, viyola, viyolonsel ve gitar başta olmak üzere belirli enstrüman gruplarında bakım, onarım ve akort hizmetleri sunuyoruz.",
  },
  {
    question: "Yalnızca akort hizmeti alabilir miyim?",
    answer: "Uygun enstrüman gruplarında yalnızca akort veya ayar hizmeti de sağlanabilir.",
  },
  {
    question: "İşlem süresi neye göre değişir?",
    answer: "Süre, enstrümanın durumuna ve gerekli müdahalenin kapsamına göre belirlenir.",
  },
  {
    question: "Fiyat bilgisi nasıl veriliyor?",
    answer: "İlk değerlendirme sonrasında işlem kapsamına göre bilgi paylaşılır.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Sık Sorulan Sorular
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
