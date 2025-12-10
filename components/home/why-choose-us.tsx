"use client"

import { REASONS, PROCESS } from "@/lib/constants"

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              We're not another agency. Here's what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {REASONS.map((reason, idx) => {
              const Icon = reason.icon
              return (
                <div key={idx} className="p-6 bg-card border border-border rounded-lg">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-foreground/70">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Our Process */}
        <div className="bg-card/50 rounded-lg p-8 md:p-12 border border-border">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A straightforward, transparent process from discovery to launch and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {PROCESS.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
                {idx < PROCESS.length - 1 && (
                  <div className="hidden md:flex items-center justify-center h-12 absolute left-full top-6">
                    <div className="w-12 h-1 bg-primary/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
