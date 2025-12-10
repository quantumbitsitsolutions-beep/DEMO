"use client"

const testimonials = [
  {
    quote:
      "Quantum Bits I T Solutions transformed our lead generation overnight. The AI chatbot increased qualified leads by 150% in just 2 months. Exceptional team!",
    author: "Ahmed Al-Mansouri",
    role: "CEO, Dubai Realty Group",
    company: "Real Estate",
  },
  {
    quote:
      "The automation they built saved us 20+ hours every week. Our appointment no-show rate dropped from 35% to 7%. Highly recommended.",
    author: "Dr. Sarah Mitchell",
    role: "Practice Manager, Premier Medical Clinic",
    company: "Healthcare",
  },
  {
    quote:
      "Best investment we've made in our marketing infrastructure. Their AI integrations are intelligent and actually work. Great support too.",
    author: "James Rodriguez",
    role: "Founder, Creative Solutions Agency",
    company: "Marketing",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-0 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Client Success Stories</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
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
