import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { PORTFOLIO_PROJECTS } from "@/lib/constants/portfolio"

export default function PortfolioPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Our Work</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Real projects, real results. See how we've helped businesses automate operations, capture more leads, and
            scale with AI.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.slug}`}>
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition group cursor-pointer h-full">
                  {/* Project Image */}
                  <div className="relative h-48 bg-foreground/5 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg?height=192&width=400&query=project"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition">{project.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4">{project.description}</p>

                    {/* Results */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-primary mb-2">KEY RESULTS</p>
                      <ul className="space-y-1">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-foreground/60 flex gap-2">
                            <span className="text-primary">→</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-foreground/5 px-2 py-1 rounded text-xs text-foreground/60">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition">
                      View Case Study
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Your project could be next. Let's discuss how AI and automation can transform your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
