"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { HERO_STATS } from "@/lib/constants/home"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 md:px-0">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
          <p className="text-primary text-sm font-medium">Affordable AI Solutions for Growing Businesses</p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Let's Build Your <span className="text-primary">AI-Powered</span> Future
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
          We're a dedicated team building cutting-edge AI websites and automations for businesses just like yours.
          Whether you're looking to capture more leads, save time on repetitive tasks, or modernize your operations—
          we've got the expertise to make it happen. Let's discuss what's possible for your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition flex items-center gap-2"
          >
            Get Free Consultation <ArrowRight size={20} />
          </Link>
          <Link
            href="#services"
            className="border border-foreground/30 text-foreground px-8 py-4 rounded-full font-semibold hover:bg-foreground/5 transition"
          >
            See What's Possible
          </Link>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-border">
          {HERO_STATS.map((stat, idx) => (
            <div key={idx}>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
