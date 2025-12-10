"use client"

import Link from "next/link"
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants/navigation"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-xl text-primary mb-4">Quantum Bits I T Solutions</h3>
            <p className="text-foreground/60 text-sm">
              AI-powered web development and automation for forward-thinking businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.services.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-foreground/60 hover:text-foreground transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.company.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-foreground/60 hover:text-foreground transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.legal.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-foreground/60 hover:text-foreground transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">© 2025 Quantum Bits I T Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {SOCIAL_LINKS.map((link, idx) => (
              <a key={idx} href={link.href} className="text-foreground/60 hover:text-foreground transition text-sm">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
