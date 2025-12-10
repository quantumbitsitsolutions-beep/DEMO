"use client"

export default function BeforeAfter() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">AI Integration Impact</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-red-400">Before AI Integration</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span className="text-foreground/70">Manual lead follow-ups taking hours daily</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span className="text-foreground/70">Appointment booking via email/phone only</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span className="text-foreground/70">Visitors leave without conversion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span className="text-foreground/70">Limited availability outside business hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span className="text-foreground/70">No data-driven insights on customer behavior</span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="bg-card border border-primary/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">After AI Integration</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground/70">AI chatbot qualifies and follows up automatically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground/70">Instant self-service booking 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground/70">Smart engagement keeps visitors engaged</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground/70">Always available for customer inquiries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground/70">Real-time analytics & conversion tracking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
