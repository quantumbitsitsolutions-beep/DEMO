"use client"

const caseStudies = [
  {
    title: "Dubai Realty AI Website",
    category: "Real Estate",
    challenge: "Manual property inquiries, slow lead qualification",
    results: ["150% increase in qualified leads", "70% faster response time", "$2.5M in new sales attributed"],
    image: "/luxury-real-estate-office.png",
  },
  {
    title: "US Clinic Automation",
    category: "Healthcare",
    challenge: "Appointment scheduling bottleneck, no-shows",
    results: ["80% reduction in no-shows", "Automated reminders save 15 hours/week", "40% more patient bookings"],
    image: "/modern-medical-clinic.png",
  },
  {
    title: "Agency Lead Generator",
    category: "Marketing",
    challenge: "Low conversion rates, manual lead qualification",
    results: [
      "2.3x lead conversion improvement",
      "AI chatbot handles 95% of inquiries",
      "$500K revenue in first quarter",
    ],
    image: "/modern-creative-agency-workspace.jpg",
  },
]

export default function CaseStudies() {
  return (
    <section id="portfolio" className="py-20 px-4 md:px-0 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Case Studies</h2>
          <p className="text-xl text-foreground/70">Real results from real clients across industries</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition cursor-pointer group"
            >
              <div className="h-48 bg-muted relative overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <p className="text-primary text-sm font-semibold mb-2">{study.category}</p>
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>

                <div className="mb-4 pb-4 border-b border-border">
                  <p className="text-sm text-foreground/60">
                    <span className="text-foreground/40">Challenge: </span>
                    {study.challenge}
                  </p>
                </div>

                <ul className="space-y-2">
                  {study.results.map((result, ridx) => (
                    <li key={ridx} className="text-sm text-foreground/70 flex items-start gap-2">
                      <span className="text-primary">→</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
