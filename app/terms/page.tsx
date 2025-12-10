import Navigation from "@/components/shared/navigation"
import Footer from "@/components/shared/footer"

export default function TermsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Terms & Conditions</h1>
          <p className="text-foreground/60 mb-12">Last Updated: November 2025</p>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
            {/* Section 1 */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">1. Pricing & Payment Terms</h2>
              <div className="space-y-4">
                <p>
                  All prices listed on our website are starting prices and serve as estimates. The final invoice amount
                  may vary based on project requirements and complexity.
                </p>
                <div className="bg-card border border-border p-4 rounded">
                  <h4 className="font-semibold mb-2">Price Variations Include:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>AI Usage Charges:</strong> Custom AI model training, advanced integrations, and machine
                      learning implementations
                    </li>
                    <li>
                      • <strong>Complexity Fees:</strong> Advanced features beyond standard offerings, custom automation
                      rules, and specialized functionality
                    </li>
                    <li>
                      • <strong>Integration Costs:</strong> Third-party API connections, CRM integrations, and complex
                      system connections
                    </li>
                    <li>
                      • <strong>Additional Revisions:</strong> Changes beyond the included revision rounds
                    </li>
                    <li>
                      • <strong>Rush Delivery:</strong> Expedited timelines may incur additional fees
                    </li>
                  </ul>
                </div>
                <p>
                  A detailed quote will be provided during your initial consultation before any work begins. Payment is
                  typically required 50% upfront and 50% upon completion.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">2. AI Usage & Complexity Charges</h2>
              <p>
                Our pricing model includes standard AI features. However, certain advanced AI capabilities may incur
                additional charges:
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">→</span>
                  <span>
                    <strong>Custom AI Models:</strong> Building specialized AI models trained on your data
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">→</span>
                  <span>
                    <strong>Advanced Chatbots:</strong> Multi-language support, sentiment analysis, and complex
                    conversation flows
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">→</span>
                  <span>
                    <strong>Predictive Analytics:</strong> Machine learning models for forecasting and data analysis
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">→</span>
                  <span>
                    <strong>API Rate Limits:</strong> High-volume AI API usage may require premium tier subscriptions
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">3. Project Scope & Complexity</h2>
              <p>The following factors may increase project costs:</p>
              <ul className="space-y-3 mt-4">
                <li className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">→</span>
                  <span>
                    <strong>Database Complexity:</strong> Complex data structures, custom databases, and advanced
                    queries
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">→</span>
                  <span>
                    <strong>Integration Challenges:</strong> Legacy system connections, custom API development, and
                    system compatibility issues
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">→</span>
                  <span>
                    <strong>Design Customization:</strong> Complex custom designs beyond template modifications
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">→</span>
                  <span>
                    <strong>Performance Requirements:</strong> High-traffic handling, custom caching, and optimization
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">4. Revision & Change Policy</h2>
              <p>
                Each plan includes a specific number of revision rounds. Additional revisions may incur extra charges at
                $75/hour. Significant scope changes or new features requested after project initiation may be billed
                separately.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">5. Timeline & Delivery</h2>
              <p>
                Delivery timelines are estimates. Rush delivery (reducing timeline by 50%) may incur a 25-50% rush fee.
                Delays caused by client feedback or approval delays may extend the timeline without additional charges.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">6. Support & Maintenance</h2>
              <p>
                Basic support is included during the project period. Extended support beyond the included period is
                available at $199-499/month depending on the plan. This includes bug fixes, updates, and technical
                assistance.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">7. Intellectual Property</h2>
              <p>
                Upon full payment, all custom code and design created specifically for your project becomes your
                property. We retain the right to use the work as a portfolio case study (with your permission).
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">8. Limitation of Liability</h2>
              <p>
                Quantum Bits I T Solutions is not liable for any damages resulting from the use or inability to use our
                services. Our liability is limited to the amount paid for services.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">9. Modifications to These Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting to the website. Your continued use of our services constitutes acceptance of these terms.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">10. Contact Us</h2>
              <p>If you have questions about these terms and conditions, please contact us at:</p>
              <div className="bg-card border border-border p-6 rounded mt-4 space-y-2">
                <p>
                  <strong>Email:</strong> hello@qbits4ugmail.com
                </p>
                <p>
                  <strong>Company:</strong> Quantum Bits I T Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
