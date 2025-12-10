import Navigation from "@/components/shared/navigation"
import Hero from "@/components/hero"
import BeforeAfter from "@/components/before-after"
import Industries from "@/components/home/industries"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/home/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/shared/footer"

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <Hero />
      <BeforeAfter />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
