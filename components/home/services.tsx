"use client"

import { SERVICES_LIST } from "@/lib/constants/services"
import { Zap, Bot, Wrench, BarChart3 } from "lucide-react"

const iconMap: { [key: string]: any } = {
  Bot,
  Zap,
  Wrench,
  BarChart3,
}

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-0 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Complete AI and automation solutions tailored to your business needs. Here's exactly what we can build for
            you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service, idx) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={idx}
                className="p-8 bg-background border border-border rounded-lg hover:border-primary/50 transition group cursor-pointer"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>

                <div>
                  <p className="text-sm text-primary font-semibold mb-3">What's Included:</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, didx) => (
                      <li key={didx} className="text-sm text-foreground/70 flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
