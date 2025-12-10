"use client"

import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { useState } from "react"
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/constants/blog"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts")

  const filteredPosts =
    activeCategory === "All Posts" ? BLOG_POSTS : BLOG_POSTS.filter((post) => post.category === activeCategory)

  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Blog</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Insights, tips, and strategies on AI automation, lead generation, and growing your business smarter.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="pb-8 border-b border-border hover:bg-card/50 transition p-4 rounded-lg cursor-pointer"
                    >
                      <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {post.date}
                          </span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition">
                        {post.title}
                      </h2>

                      <p className="text-foreground/70 text-lg mb-4">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground/60">By {post.author}</span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition"
                        >
                          Read More
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-foreground/60 text-lg">No posts found in this category.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <div className="space-y-3">
                  {BLOG_CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition ${
                        activeCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
