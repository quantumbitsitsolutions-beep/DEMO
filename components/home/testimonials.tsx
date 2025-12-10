"use client"

import { TESTIMONIALS } from "@/lib/constants/testimonials"

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-0 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Client Success Stories</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div key={idx} className="p-8 bg-background border border-border rounded-lg">
              <p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.quote}"</p>

              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
                <p className="text-sm text-primary mt-1">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
