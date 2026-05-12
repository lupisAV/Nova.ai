import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { TrustedBy } from "@/components/sections/trusted-by"
import { Features } from "@/components/sections/features"
import { BentoGrid } from "@/components/sections/bento-grid"
import { Statistics } from "@/components/sections/statistics"
import { Integrations } from "@/components/sections/integrations"
import { Testimonials } from "@/components/sections/testimonials"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"
import { CTAFinal } from "@/components/sections/cta-final"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <BentoGrid />
        <Statistics />
        <Integrations />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
