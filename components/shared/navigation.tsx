"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NAV_LINKS } from "@/lib/constants/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-primary">
          Quantum Bits
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link, idx) => (
            <Link key={idx} href={link.href} className="text-foreground/80 hover:text-foreground transition">
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card p-4 flex flex-col gap-4">
          {NAV_LINKS.map((link, idx) => (
            <Link key={idx} href={link.href} className="text-foreground/80 hover:text-foreground transition">
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition w-fit"
          >
            Book Demo
          </Link>
        </div>
      )}
    </nav>
  )
}
