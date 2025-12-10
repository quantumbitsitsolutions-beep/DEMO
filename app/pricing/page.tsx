import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "AI Chatbot Only",
      pages: "Add-on",
      price: "$199 + Ai expenses",
      description: "Perfect for existing websites needing AI customer support",
      features: [
        "Custom AI Chatbot Integration",
        "Multi-language Support",
        "Integration with Existing Website",
        "1 Month Dedicated Support",
        "2 Weeks Delivery",
      ],
      cta: "Get Started",
    },
    {
      name: "3-Page Website",
      pages: "3",
      price: "$499 + Ai expenses",
      description: "Perfect for service-based businesses just getting started",
      features: [
        "3 Custom Pages (Home, Services, Contact)",
        "Mobile Responsive Design",
        "1 Round of Revisions",
        "2 Weeks Delivery",
      ],
      cta: "Get Started",
    },
    {
      name: "4-7 Page Website",
      pages: "4-7",
      price: "$799 + Ai expenses",
      description: "Ideal for growing businesses with multiple services",
      features: [
        "4-7 Custom Pages (Home, Services, About, Blog, Portfolio, etc.)",
        "Advanced AI Chatbot Integration",
        "Portfolio/Case Studies Showcase",
        "Email & WhatsApp Integration",
        "2 Rounds of Revisions",
        "Ongoing Support (1 Month free)",
        "3 Weeks Delivery",
      ],
      cta: "Get Started",
    },
    {
      name: "7-12 Page Website",
      pages: "7-12",
      price: "$1,499 + Ai expenses",
      description: "Enterprise solution for complex business needs",
      features: [
        "7-12 Custom Pages with Custom Design",
        "Full AI Automation Suite",
        "Advanced Analytics Dashboard",
        "Automated Workflow Automation",
        "Email, WhatsApp, SMS Integration",
        "Unlimited Revisions",
        "3 Months Dedicated Support",
        "Monthly Performance Reports",
        "4-5 Weeks Delivery",
      ],
      cta: "Get Started",
    },
  ]

  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Simple, Transparent Pricing</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Choose the perfect plan for your business. All plans include AI automation and ongoing support.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-8 flex flex-col transition-all duration-300 cursor-pointer group bg-card hover:scale-105 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:bg-card/80"
              >
                {/* Plan Name and Price */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground transition-colors duration-300 group-hover:text-primary">
                    {plan.name}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4 group-hover:text-foreground/70 transition-colors duration-300">
                    {plan.description}
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-primary brightness-110">
                      {plan.price}
                    </span>
                    <span className="text-foreground/60 mb-1 group-hover:text-foreground/70 transition-colors duration-300">
                      for {plan.pages} pages
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      <span className="text-primary font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">✓</span>
                      <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="w-full py-3 rounded-full font-semibold text-center transition-all duration-300 border border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-md hover:border-primary/80"
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="bg-card border border-border rounded-lg p-8 max-w-3xl mx-auto hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-foreground">Important Note</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The prices listed above are starting prices for standard implementations.{" "}
              <strong>Final charges may vary</strong> based on:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex gap-3 hover:text-foreground transition-colors duration-200 cursor-default group/item">
                <span className="text-primary font-bold group-hover/item:scale-110 transition-transform duration-200">→</span>
                <span>
                  <strong>AI Usage & Complexity:</strong> Advanced AI integrations, custom model training, and complex
                  automations may incur additional fees.
                </span>
              </li>
              <li className="flex gap-3 hover:text-foreground transition-colors duration-200 cursor-default group/item">
                <span className="text-primary font-bold group-hover/item:scale-110 transition-transform duration-200">→</span>
                <span>
                  <strong>Custom Features:</strong> Unique integrations, third-party APIs, and specialized functionality
                  beyond standard offerings.
                </span>
              </li>
              <li className="flex gap-3 hover:text-foreground transition-colors duration-200 cursor-default group/item">
                <span className="text-primary font-bold group-hover/item:scale-110 transition-transform duration-200">→</span>
                <span>
                  <strong>Scope Changes:</strong> Additional revisions, pages, or features requested during development.
                </span>
              </li>
              <li className="flex gap-3 hover:text-foreground transition-colors duration-200 cursor-default group/item">
                <span className="text-primary font-bold group-hover/item:scale-110 transition-transform duration-200">→</span>
                <span>
                  <strong>Implementation Complexity:</strong> Your business requirements, existing systems, and
                  integration difficulty.
                </span>
              </li>
            </ul>
            <p className="text-foreground/80 mt-4 text-sm">
              We provide a detailed quote and timeline during your free consultation.{" "}
              <Link href="/terms" className="text-primary hover:underline hover:text-primary/80 transition-colors duration-200">
                See full terms and conditions
              </Link>
              .
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Get Started?</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Book a free consultation with our team to discuss your project and get a custom quote.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
