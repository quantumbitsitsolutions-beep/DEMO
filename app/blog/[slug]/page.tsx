import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Same blog posts array (in production, this would come from a database)
const blogPosts = [
  {
    id: 1,
    title: "How AI Chatbots Can Save Your Business 40 Hours Per Week",
    excerpt:
      "Learn how intelligent chatbots can handle customer inquiries automatically, freeing up your team to focus on high-value work.",
    category: "AI Automation",
    date: "November 10, 2025",
    readTime: "5 min read",
    author: "Quantum Bits I T Solutions Team",
    slug: "ai-chatbots-save-time",
    content: `
      <h2>Introduction</h2>
      <p>In today's fast-paced business environment, efficiency is everything. Most companies are drowning in customer inquiries, support tickets, and repetitive questions that consume precious time and resources.</p>
      
      <h2>The Challenge</h2>
      <p>Your support team spends countless hours answering the same questions over and over. Common issues like "What are your hours?", "How do I reset my password?", or "Where's my order?" consume valuable time that could be spent on complex, high-value interactions.</p>
      
      <h2>The Solution: AI Chatbots</h2>
      <p>AI-powered chatbots are intelligent systems that can handle a large volume of customer inquiries automatically, 24/7. They can:</p>
      <ul>
        <li>Answer frequently asked questions instantly</li>
        <li>Handle multiple conversations simultaneously</li>
        <li>Learn from interactions and improve over time</li>
        <li>Route complex issues to human agents</li>
        <li>Reduce response time from hours to seconds</li>
      </ul>
      
      <h2>Real Results</h2>
      <p>Companies implementing AI chatbots have reported:</p>
      <ul>
        <li>40-60% reduction in support ticket volume</li>
        <li>70% decrease in response time</li>
        <li>35% improvement in customer satisfaction</li>
        <li>Millions in annual cost savings</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>If you're looking to save time, reduce costs, and improve customer satisfaction simultaneously, AI chatbots are a no-brainer investment. Let's discuss how we can implement this for your business.</p>
    `,
  },
  {
    id: 2,
    title: "The Ultimate Guide to Lead Qualification Automation",
    excerpt:
      "Discover how to automatically score and qualify leads using AI, so your sales team focuses only on hot prospects.",
    category: "Lead Generation",
    date: "November 8, 2025",
    readTime: "8 min read",
    author: "Quantum Bits I T Solutions Team",
    slug: "lead-qualification-automation",
    content: `
      <h2>Why Lead Qualification Matters</h2>
      <p>Not all leads are created equal. Manually qualifying leads is a time-consuming process that often leads to hot prospects being ignored while salespeople chase cold leads.</p>
      
      <h2>The Problem with Manual Qualification</h2>
      <p>Traditional lead qualification methods are slow, inconsistent, and prone to human bias. Sales teams waste valuable time on leads that aren't ready to buy.</p>
      
      <h2>Automated Lead Scoring</h2>
      <p>AI-powered lead scoring systems can analyze hundreds of data points instantly, automatically qualifying leads based on:</p>
      <ul>
        <li>Engagement level</li>
        <li>Company size and industry</li>
        <li>Previous interactions</li>
        <li>Website behavior</li>
        <li>Email engagement</li>
      </ul>
      
      <h2>Implementation Steps</h2>
      <p>We help you set up automated lead qualification by integrating your CRM, website analytics, and email platforms with AI scoring systems.</p>
      
      <h2>Results You'll See</h2>
      <p>Our clients typically experience 2-3x more qualified leads, 50% faster sales cycles, and increased close rates.</p>
    `,
  },
  {
    id: 3,
    title: "Why Your Business Needs an AI-Powered Website",
    excerpt:
      "Traditional websites are outdated. Learn how AI integration can transform your website into a revenue-generating machine.",
    category: "Web Development",
    date: "November 5, 2025",
    readTime: "6 min read",
    author: "Quantum Bits I T Solutions Team",
    slug: "ai-powered-websites",
    content: `
      <h2>The Evolution of Web Technology</h2>
      <p>Traditional websites are static information portals. AI-powered websites are dynamic, personalized, revenue-generating machines.</p>
      
      <h2>What Makes a Website AI-Powered?</h2>
      <p>An AI-powered website features intelligent elements that learn from visitor behavior and adapt in real-time.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Personalized content recommendations</li>
        <li>Smart chatbot assistance</li>
        <li>Automated lead capture</li>
        <li>Real-time analytics</li>
        <li>Predictive user experience</li>
      </ul>
      
      <h2>Business Impact</h2>
      <p>Our AI-powered websites typically deliver 3-5x more leads, 40% higher conversion rates, and significantly improved user engagement.</p>
    `,
  },
  {
    id: 4,
    title: "Automation ROI: Real Numbers from Real Clients",
    excerpt:
      "Stop guessing about automation benefits. See the actual ROI from businesses that implemented AI-driven automation systems.",
    category: "Case Study",
    date: "November 1, 2025",
    readTime: "7 min read",
    author: "Quantum Bits I T Solutions Team",
    slug: "automation-roi-real-numbers",
    content: `
      <h2>Introduction</h2>
      <p>When considering automation investments, the question isn't "Can we afford it?" but rather "Can we afford not to?"</p>
      
      <h2>Real Client Results</h2>
      <p>We've worked with dozens of businesses across industries. Here's what they achieved:</p>
      
      <h2>Case Study Results</h2>
      <ul>
        <li>Real Estate Agency: 300% ROI in 6 months with AI lead qualification</li>
        <li>Medical Clinic: 40% reduction in no-shows with automated reminders</li>
        <li>Consulting Firm: 2x lead conversion with automated follow-ups</li>
      </ul>
      
      <h2>Calculating Your ROI</h2>
      <p>The ROI from automation typically comes from reduced labor costs, increased revenue, and improved efficiency. Most businesses break even within 3-6 months.</p>
    `,
  },
  {
    id: 5,
    title: "The Cost of NOT Automating Your Business Processes",
    excerpt: "Manual processes are expensive. Calculate how much time and money you're wasting without automation.",
    category: "Business Strategy",
    date: "October 28, 2025",
    readTime: "5 min read",
    author: "Quantum Bits I T Solutions Team",
    slug: "cost-of-not-automating",
    content: `
      <h2>Hidden Costs of Manual Processes</h2>
      <p>Every manual process in your business has a hidden cost. It's not just the time spent—it's the opportunity cost.</p>
      
      <h2>The Real Impact</h2>
      <p>Manual data entry, email follow-ups, invoice processing, and customer service consume hours each week that could be spent on growth.</p>
      
      <h2>Let's Calculate</h2>
      <p>If one employee spends 10 hours per week on repetitive tasks, that's 520 hours per year. At an average salary, that's $26,000 in wasted resources—just for one person.</p>
      
      <h2>Multiplied Across Your Team</h2>
      <p>When you multiply this across your entire team, the cost becomes staggering. Automation could save your business tens of thousands of dollars annually.</p>
    `,
  },
  {
    id: 6,
    title: "AI Integration Best Practices for Service-Based Businesses",
    excerpt:
      "A practical guide to implementing AI in your business without disrupting operations or overwhelming your team.",
    category: "Implementation",
    date: "October 25, 2025",
    readTime: "9 min read",
    author: "Quantum Bits I T Solutions Team",
    slug: "ai-integration-best-practices",
    content: `
      <h2>Phase 1: Assessment</h2>
      <p>Start by identifying the most time-consuming, repetitive processes in your business. These are your best candidates for automation.</p>
      
      <h2>Phase 2: Planning</h2>
      <p>Create a clear implementation roadmap with milestones, timelines, and success metrics.</p>
      
      <h2>Phase 3: Implementation</h2>
      <p>We implement AI solutions in phases to minimize disruption and allow your team to adapt gradually.</p>
      
      <h2>Phase 4: Optimization</h2>
      <p>After implementation, we continuously monitor and optimize the AI systems based on real-world performance.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Start small with high-impact processes</li>
        <li>Train your team thoroughly</li>
        <li>Monitor results closely</li>
        <li>Scale gradually</li>
        <li>Continuously optimize</li>
      </ul>
    `,
  },
]

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main className="bg-background min-h-screen">
        <Navigation />
        <section className="pt-32 pb-16 px-4 md:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8">Post Not Found</h1>
            <Link href="/blog" className="text-primary font-semibold">
              Back to Blog
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
          <Link href="/blog" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Post Header */}
      <section className="pb-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-foreground/60 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {post.date}
              </span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-foreground/70">{post.excerpt}</p>

            <div className="mt-8 flex items-center gap-4 text-sm text-foreground/60">
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="pb-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert max-w-none">
            <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
              {post.content.split("</h2>").map((section, idx) => {
                if (!section.trim()) return null
                return (
                  <div key={idx} className="space-y-4">
                    {section.includes("<h2>") && (
                      <h2 className="text-2xl font-bold mt-8">{section.split("<h2>")[1]}</h2>
                    )}
                    {section
                      .split("<p>")
                      .slice(1)
                      .map((para, pidx) => (
                        <p key={pidx} className="text-foreground/70">
                          {para.split("</p>")[0]}
                        </p>
                      ))}
                    {section.includes("<ul>") && (
                      <ul className="space-y-2 ml-6">
                        {section
                          .split("<li>")
                          .slice(1)
                          .map((item, iidx) => (
                            <li key={iidx} className="list-disc text-foreground/70">
                              {item.split("</li>")[0]}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
