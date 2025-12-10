import type React from "react"
import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"
import Services from "@/components/services"

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <Services />
      <Footer />
    </main>
  )
}