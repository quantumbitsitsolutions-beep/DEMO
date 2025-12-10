"use client"

import { BEFORE_AFTER } from "@/lib/constants/home"

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
              {BEFORE_AFTER.before.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span className="text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-card border border-primary/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">After AI Integration</h3>
            <ul className="space-y-4">
              {BEFORE_AFTER.after.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
