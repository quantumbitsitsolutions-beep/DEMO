import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"


const portfolioProjects = [
  {
    id: 1,
    title: "Real Estate CRM with AI Lead Qualification",
    slug: "real-estate-crm",
    category: "AI Integration",
    description:
      "Built an intelligent CRM system that automatically qualifies and scores leads using AI, saving 15+ hours per week on manual qualification.",
    technologies: ["Next.js", "AI SDK", "Supabase", "Automation"],
    results: ["60% faster lead processing", "3x more qualified leads", "24/7 automation"],
    image: "/real-estate-crm-dashboard.jpg",
    fullDescription: `
      This is a comprehensive AI-powered CRM system built for a leading real estate agency. The system uses machine learning to automatically qualify leads based on dozens of data points, saving the team 15+ hours per week.
      
      The project included custom integrations with popular real estate platforms, automated email campaigns, and a beautiful dashboard for team management.
    `,
    challenge:
      "The agency was manually reviewing 200+ leads per week, missing hot prospects in the process and wasting valuable sales time.",
    solution:
      "We built an AI system that automatically scores leads based on property interests, response times, budget indicators, and past behavior. Hot leads are automatically assigned to top agents.",
    impact:
      "The agency now processes 200+ leads per week automatically, with their sales team focused only on the hottest prospects. Lead conversion increased by 3x.",
  },
  {
    id: 2,
    title: "Medical Clinic Appointment Automation",
    slug: "medical-clinic-automation",
    category: "Automation",
    description:
      "Developed an automated appointment booking system with AI-powered rescheduling and reminders integrated into their website.",
    technologies: ["React", "Node.js", "Twilio", "Calendar Integration"],
    results: ["40% reduction in no-shows", "Automated reminders", "Self-service booking 24/7"],
    image: "/medical-clinic-appointment-system.jpg",
    fullDescription: `
      This project involved building a complete appointment automation system for a busy medical clinic. The system handles bookings, sends SMS reminders, and automates rescheduling.
      
      Patients can book appointments 24/7 online, receive automated reminders 24 hours before their appointment, and easily reschedule if needed.
    `,
    challenge:
      "The clinic had a high no-show rate (35%) and spent 10+ hours per week manually calling patients to confirm appointments.",
    solution:
      "We implemented an automated system with SMS reminders, online booking, and automated rescheduling options. Patients get reminded 24 hours before their appointment.",
    impact:
      "No-shows dropped from 35% to 21%, saving the clinic significant time and money. Patient satisfaction increased due to convenient online booking.",
  },
  {
    id: 3,
    title: "Marketing Agency Analytics Dashboard",
    slug: "marketing-agency-dashboard",
    category: "Web Development",
    description:
      "Created a real-time analytics dashboard that aggregates data from 10+ marketing platforms, providing actionable insights.",
    technologies: ["Next.js", "Recharts", "API Integration", "Analytics"],
    results: ["Real-time data sync", "50+ metrics tracked", "Automated reports"],
    image: "/analytics-dashboard-business-intelligence.jpg",
    fullDescription: `
      This comprehensive analytics dashboard pulls data from Google Analytics, Facebook Ads, LinkedIn, HubSpot, and more, providing a unified view of all marketing performance metrics.
      
      The dashboard includes real-time data updates, custom report generation, and automated insights that help the agency make data-driven decisions.
    `,
    challenge:
      "The agency was manually compiling data from 10+ sources into spreadsheets every week, a process that took 15+ hours and was prone to errors.",
    solution:
      "We built an automated dashboard that pulls data in real-time from all their marketing platforms and presents it in an easy-to-understand format with automated insights.",
    impact:
      "Reporting time reduced from 15 hours to 30 minutes per week. The team now has real-time visibility into campaign performance and can make faster decisions.",
  },
  {
    id: 4,
    title: "E-commerce Product Recommendation Engine",
    slug: "ecommerce-recommendations",
    category: "AI Integration",
    description:
      "Implemented AI-driven product recommendations that personalize the shopping experience based on user behavior and preferences.",
    technologies: ["Next.js", "AI ML", "MongoDB", "Real-time Updates"],
    results: ["25% increase in AOV", "Higher engagement", "Personalized experience"],
    image: "/ecommerce-recommendation-engine.jpg",
    fullDescription: `
      This AI-powered recommendation engine analyzes customer behavior in real-time and suggests products that are most likely to result in a purchase.
      
      The system learns from every customer interaction and continuously improves its recommendations, resulting in higher conversion rates and increased average order value.
    `,
    challenge:
      "The e-commerce store had a generic product page with no personalization, resulting in low conversion rates and high cart abandonment.",
    solution:
      "We implemented an AI recommendation engine that learns from user behavior and suggests products tailored to each visitor.",
    impact:
      "Average order value increased by 25%, conversion rates improved by 18%, and customer engagement increased significantly.",
  },
  {
    id: 5,
    title: "Consultant Lead Capture System",
    slug: "consultant-lead-capture",
    category: "Web Development",
    description:
      "Built a sophisticated lead capture system with automated qualification, scoring, and CRM integration for B2B consulting.",
    technologies: ["Next.js", "Zapier", "Automation", "Email Integration"],
    results: ["2x lead capture rate", "Automated follow-ups", "CRM sync"],
    image: "/lead-generation-capture-system.jpg",
    fullDescription: `
      This comprehensive lead capture system was designed to maximize lead generation for a B2B consulting firm. It includes multiple lead capture points, automated qualification, and CRM integration.
      
      Every lead is automatically scored, qualified, and added to the appropriate email campaign based on their interests and behavior.
    `,
    challenge:
      "The consulting firm was getting leads but had no system to track or prioritize them. Many leads were being lost due to poor follow-up.",
    solution:
      "We built a lead capture system that automatically qualifies leads, scores them by potential value, and integrates with their email and CRM systems.",
    impact:
      "Lead capture rate doubled, follow-up time reduced by 80%, and the sales team can now focus on high-quality prospects.",
  },
  {
    id: 6,
    title: "Restaurant Ordering Platform with AI Chatbot",
    slug: "restaurant-ordering-platform",
    category: "AI Integration",
    description:
      "Developed a full-featured ordering platform with an AI chatbot that handles menu inquiries, recommendations, and order processing.",
    technologies: ["Next.js", "AI SDK", "Payment Integration", "Real-time Orders"],
    results: ["50% faster orders", "AI-powered support", "Integrated payments"],
    image: "/restaurant-ordering-platform-ai-chatbot.jpg",
    fullDescription: `
      This is a complete restaurant ordering solution with an intelligent chatbot that can help customers browse the menu, make recommendations based on their preferences, and process orders.
      
      The AI chatbot handles 80% of customer inquiries automatically, with seamless handoff to human staff when needed.
    `,
    challenge:
      "The restaurant was losing orders due to slow website ordering process and couldn't handle peak hour call volume.",
    solution:
      "We built an AI-powered ordering platform with a chatbot that can process orders, answer questions, and make recommendations 24/7.",
    impact:
      "Order processing time decreased by 50%, customer satisfaction increased, and the restaurant could handle 3x more volume without additional staff.",
  },
]

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = portfolioProjects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="bg-background min-h-screen">
        <Navigation />
        <section className="pt-32 pb-16 px-4 md:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8">Project Not Found</h1>
            <Link href="/portfolio" className="text-primary font-semibold">
              Back to Portfolio
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      {/* Back Link */}
      <div className="pt-32 px-4 md:px-0">
        <div className="max-w-4xl mx-auto mb-8">
          <Link href="/portfolio" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Project Header */}
      <section className="pb-12 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              {project.category}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-foreground/70">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="pb-12 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src={project.image || "/placeholder.svg?height=400&width=800&query=project"}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="pb-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Challenge */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">Challenge</h3>
              <p className="text-foreground/70">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">Solution</h3>
              <p className="text-foreground/70">{project.solution}</p>
            </div>

            {/* Impact */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">Impact</h3>
              <p className="text-foreground/70">{project.impact}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <div key={tech} className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="bg-primary/10 border border-primary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6">Results</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {project.results.map((result, idx) => (
                <div key={idx}>
                  <p className="text-lg font-semibold text-primary mb-2">{result.split(" ")[0]}</p>
                  <p className="text-foreground/70">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for Your Success Story?</h3>
            <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
              Let's build something amazing for your business. Your project could be the next success story.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
