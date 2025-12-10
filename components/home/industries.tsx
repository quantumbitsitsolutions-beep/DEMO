"use client"

import { INDUSTRIES } from "@/lib/constants/industries"

export default function Industries() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Industries We Serve</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border border-border rounded-lg text-center hover:border-primary/50 hover:bg-card/50 transition cursor-pointer group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">{industry.icon}</div>
              <h3 className="font-semibold text-foreground">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
