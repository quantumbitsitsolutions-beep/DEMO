"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-12 md:p-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Get a personalized AI site audit and consultation from our experts. Free for the next 50 qualified leads.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition flex items-center gap-2"
          >
            Book Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
