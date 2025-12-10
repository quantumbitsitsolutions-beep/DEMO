import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">About Quantum Bits I T Solutions</h1>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To help service-based businesses in the USA and Dubai save time, generate more leads, and modernize
                their operations using intelligent AI systems integrated directly into their websites and workflows.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Why We're Different</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex gap-4">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong>AI-First Design:</strong> We don't just build websites—we architect intelligent systems that
                    work for you 24/7.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong>Automation Mindset:</strong> Every solution we create focuses on eliminating repetitive
                    tasks and saving time.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong>Outcome-Focused:</strong> We measure success by your results—leads, conversions, and revenue
                    growth.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong>Premium Support:</strong> Your success is our success. We provide ongoing optimization and
                    support.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Team</h2>
              <p className="text-lg leading-relaxed">
                We're a team of experienced AI developers, automation engineers, and business strategists who have
                worked with hundreds of businesses across industries. We combine technical expertise with deep business
                understanding to deliver solutions that actually drive results.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
              <p className="text-lg mb-6">
                Let's discuss how AI and automation can transform your business. Book a free consultation with our team
                today.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
