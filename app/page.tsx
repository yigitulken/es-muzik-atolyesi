import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { TrustBandSection } from "@/components/sections/trust-band"
import { ServicesSection } from "@/components/sections/services"
import { ProblemsSection } from "@/components/sections/problems"
import { ProcessSection } from "@/components/sections/process"
import { WorkExamplesSection } from "@/components/sections/work-examples"
import { AboutSection } from "@/components/sections/about"
import { WhyUsSection } from "@/components/sections/why-us"

import { FinalCTASection } from "@/components/sections/final-cta"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBandSection />
        <ServicesSection />
        <ProblemsSection />
        <ProcessSection />
        <WorkExamplesSection />
        <AboutSection />
        <WhyUsSection />

        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
