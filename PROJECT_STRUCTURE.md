# Project Structure Documentation

This document outlines the organized file structure for easy local management.

## Directory Structure

\`\`\`
project-root/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles
│   │
│   ├── about/
│   │   └── page.tsx               # About page
│   │
│   ├── blog/
│   │   ├── page.tsx               # Blog listing (uses BLOG_POSTS from constants)
│   │   └── [slug]/
│   │       └── page.tsx           # Individual blog post
│   │
│   ├── portfolio/
│   │   ├── page.tsx               # Portfolio grid (uses PORTFOLIO_PROJECTS from constants)
│   │   └── [slug]/
│   │       └── page.tsx           # Individual case study
│   │
│   ├── pricing/
│   │   └── page.tsx               # Pricing page (uses PRICING_PLANS from constants)
│   │
│   ├── contact/
│   │   └── page.tsx               # Contact form
│   │
│   └── terms/
│       └── page.tsx               # Terms & conditions
│
├── components/
│   ├── shared/
│   │   ├── navigation.tsx         # Navigation (uses NAV_LINKS from constants)
│   │   └── footer.tsx             # Footer (uses FOOTER_LINKS, SOCIAL_LINKS from constants)
│   │
│   ├── home/
│   │   ├── hero.tsx               # Hero section (uses HERO_STATS from constants)
│   │   ├── services.tsx           # Services section (uses SERVICES_LIST from constants)
│   │   ├── before-after.tsx       # Before/after comparison (uses BEFORE_AFTER from constants)
│   │   ├── industries.tsx         # Industries served (uses INDUSTRIES from constants)
│   │   ├── testimonials.tsx       # Testimonials (uses TESTIMONIALS from constants)
│   │   └── why-choose-us.tsx      # Why choose us & process (uses REASONS, PROCESS from constants)
│   │
│   ├── sections/
│   │   └── cta.tsx                # Call-to-action component
│   │
│   └── ui/                        # shadcn/ui components (auto-generated)
│
├── lib/
│   ├── constants/
│   │   ├── index.ts               # Central export file for all constants
│   │   ├── navigation.ts          # NAV_LINKS, FOOTER_LINKS, SOCIAL_LINKS
│   │   ├── home.ts                # HERO_STATS, WHY_CHOOSE_US, PROCESS_STEPS, BEFORE_AFTER
│   │   ├── services.ts            # SERVICES_LIST
│   │   ├── industries.ts          # INDUSTRIES
│   │   ├── testimonials.ts        # TESTIMONIALS
│   │   ├── reasons.ts             # REASONS (duplicated from home.ts for clarity)
│   │   ├── process.ts             # PROCESS (duplicated from home.ts for clarity)
│   │   ├── blog.ts                # BLOG_POSTS, BLOG_CATEGORIES
│   │   ├── portfolio.ts           # PORTFOLIO_PROJECTS
│   │   └── pricing.ts             # PRICING_PLANS, PRICING_NOTES
│   │
│   └── utils.ts                   # Utility functions (cn for className merging)
│
├── public/
│   ├── images/
│   │   ├── real-estate-crm-dashboard.jpg
│   │   ├── medical-clinic-appointment-system.jpg
│   │   ├── analytics-dashboard-business-intelligence.jpg
│   │   ├── ecommerce-recommendation-engine.jpg
│   │   ├── lead-generation-capture-system.jpg
│   │   └── restaurant-ordering-platform-ai-chatbot.jpg
│   │
│   └── placeholder.svg
│
└── Configuration Files
    ├── package.json
    ├── tsconfig.json
    ├── next.config.mjs
    ├── tailwind.config.js
    └── .env.local
\`\`\`

## How to Manage Content Locally

### 1. Adding/Editing Navigation Links
**File:** `lib/constants/navigation.ts`

\`\`\`typescript
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "/portfolio" },
  // Add more links here
]
\`\`\`

### 2. Adding/Editing Blog Posts
**File:** `lib/constants/blog.ts`

\`\`\`typescript
export const BLOG_POSTS = [
  {
    id: 1,
    title: "Your Post Title",
    excerpt: "Post description...",
    category: "AI Automation",
    date: "November 13, 2025",
    readTime: "5 min read",
    author: "Quantum Bits I T Solutions Team",
    slug: "your-post-slug",
  },
  // Add more posts here
]
\`\`\`

### 3. Adding/Editing Portfolio Projects
**File:** `lib/constants/portfolio.ts`

\`\`\`typescript
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Project Title",
    category: "AI Integration",
    description: "Project description...",
    technologies: ["Next.js", "AI SDK"],
    results: ["Result 1", "Result 2"],
    image: "/image-name.jpg",
    slug: "project-slug",
  },
  // Add more projects here
]
\`\`\`

### 4. Adding/Editing Testimonials
**File:** `lib/constants/testimonials.ts`

\`\`\`typescript
export const TESTIMONIALS = [
  {
    quote: "Client testimonial...",
    author: "Client Name",
    role: "Client Title",
    company: "Company/Industry",
  },
  // Add more testimonials here
]
\`\`\`

### 5. Adding/Editing Pricing Plans
**File:** `lib/constants/pricing.ts`

\`\`\`typescript
export const PRICING_PLANS = [
  {
    name: "Plan Name",
    pages: "3",
    price: "$999",
    description: "Plan description...",
    features: ["Feature 1", "Feature 2"],
    cta: "Get Started",
    highlighted: false,
  },
  // Add more plans here
]
\`\`\`

## Key Benefits of This Structure

1. **Centralized Data Management** - All content lives in `/lib/constants/`, making updates easy
2. **Component Reusability** - Components import from constants, avoiding duplication
3. **Easy to Scale** - Add new pages by creating constants and components following the pattern
4. **Clear Separation of Concerns** - Data separate from UI logic
5. **Maintainability** - Update content without touching component logic
6. **Type Safety** - Use TypeScript interfaces for better developer experience

## How to Add a New Service

1. Edit `/lib/constants/services.ts` and add to `SERVICES_LIST`
2. The `components/home/services.tsx` will automatically render it

## How to Add a New Testimonial

1. Edit `/lib/constants/testimonials.ts` and add to `TESTIMONIALS`
2. The `components/home/testimonials.tsx` will automatically render it

## Importing Constants in Components

All constants can be imported from the central export:

\`\`\`typescript
import {
  NAV_LINKS,
  BLOG_POSTS,
  PORTFOLIO_PROJECTS,
  TESTIMONIALS,
  SERVICES_LIST,
  // ... more exports
} from "@/lib/constants"
\`\`\`

## Quick Edit Guide

To update the website content:

1. Open the specific constants file in `/lib/constants/`
2. Edit the data array
3. Save the file
4. Changes automatically reflect in all components using that constant

No need to touch component files unless you're changing the design or layout!
