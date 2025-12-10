"use client"

import { Zap, Bot, Wrench, BarChart3 } from "lucide-react"

const servicesList = [
  {
    icon: Bot,
    title: "AI-Powered Websites",
    description:
      "Custom websites with built-in AI chatbots, intelligent lead capture, and automation workflows. Your website becomes a 24/7 sales and support team.",
    details: [
      "Smart AI chatbots that answer customer questions instantly",
      "Automated lead qualification and follow-ups",
      "Real-time visitor analytics and engagement tracking",
      "Mobile-responsive design that converts",
    ],
  },
  {
    icon: Zap,
    title: "Business Automations",
    description:
      "Stop doing repetitive work. We automate client follow-ups, appointment booking, data entry, and lead qualification so you can focus on growing.",
    details: [
      "WhatsApp and email automation sequences",
      "Automated appointment scheduling and reminders",
      "Smart lead qualification workflows",
      "CRM and database synchronization",
    ],
  },
  {
    icon: Wrench,
    title: "AI Integrations & Upgrades",
    description:
      "Already have a website or tools? We upgrade them with modern AI features without starting from scratch.",
    details: [
      "Add AI chatbots to existing websites",
      "Integrate with your current CRM or database",
      "Implement dynamic content and personalization",
      "Connect multiple tools for seamless workflows",
    ],
  },
  {
    icon: BarChart3,
    title: "Ongoing Support & Optimization",
    description:
      "We don't disappear after launch. Get continuous improvements, performance monitoring, and new features added as you grow.",
    details: [
      "Monthly performance reports and analytics",
      "Proactive system monitoring and updates",
      "Regular feature additions and improvements",
      "Priority support for any issues",
    ],
  },
]

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
          {servicesList.map((service, idx) => {
            const Icon = service.icon
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
