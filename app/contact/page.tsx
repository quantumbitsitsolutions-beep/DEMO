"use client"

import type React from "react"

import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    package: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! We\'ll get back to you within 24 hours.' })
        setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", package: "", message: "" })
      } else {
        throw new Error(data.error || 'Submission failed')
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again or contact us directly.' })
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Connect</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Ready to transform your business? Reach out to our team. We'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-card border border-border rounded-lg text-center">
              <Mail className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-foreground/70">qbits4u@gmail.com</p>
            </div>
            <div className="p-8 bg-card border border-border rounded-lg text-center">
              <Phone className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-foreground/70">+91-7850932744</p>
            </div>
            <div className="p-8 bg-card border border-border rounded-lg text-center">
              <MapPin className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Locations</h3>
              <p className="text-foreground/70">Worldwide</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8">Get Your Free 15-Min Consultation</h2>

            {/* Status Message */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400' 
                  : 'bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Interested Package</label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select a package</option>
                    <option value="ai-chatbot">AI Chatbot Only - $199 </option>
                    <option value="3-page">3-Page Website - $499/ </option>
                    <option value="4-7-page">4-7 Page Website - $799 </option>
                    <option value="7-12-page"> 7-12 Page Website - $1,499 </option>
                    <option value="custom">Custom Solution </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tell Us About Your Project</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  disabled={isSubmitting}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="What challenges are you facing? What are your goals?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
              </button>
            </form>

            <p className="text-center text-sm text-foreground/60 mt-6">
              Or book directly:{" "}
              <a href="#" className="text-primary hover:underline">
                calendly.com/quantumbits
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
