import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Disclaimer</h1>
          <p className="text-xl text-gray-600">Important information about using our calculator tools</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Important Disclaimers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. General Disclaimer</h2>
                <p className="text-gray-600">
                  The information and calculations provided by CalcHub are for educational and informational purposes
                  only. While we strive for accuracy, we make no representations or warranties of any kind, express or
                  implied, about the completeness, accuracy, reliability, suitability, or availability of the
                  information, products, services, or related graphics contained on the website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Financial Calculations</h2>
                <p className="text-gray-600">
                  Our financial calculators (EMI, loan, investment calculators) provide estimates based on the
                  information you provide. These calculations should not be considered as financial advice. Always
                  consult with qualified financial professionals before making important financial decisions. Interest
                  rates, terms, and conditions may vary between lenders and institutions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Health-Related Calculations</h2>
                <p className="text-gray-600">
                  Health-related calculators (BMI, calorie calculators) provide general estimates and should not replace
                  professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or
                  other qualified health provider with any questions you may have regarding a medical condition.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Educational Calculations</h2>
                <p className="text-gray-600">
                  GPA converters and academic calculators provide approximate conversions between different grading
                  systems. Different institutions may have varying standards and requirements. Always verify with the
                  specific institution for accurate conversion requirements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Revenue Estimates</h2>
                <p className="text-gray-600">
                  AdSense and revenue calculators provide estimates based on general industry averages and your input
                  data. Actual earnings may vary significantly based on numerous factors including content quality,
                  audience demographics, market conditions, and platform policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
                <p className="text-gray-600">
                  In no event will CalcHub be liable for any loss or damage including without limitation, indirect or
                  consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits
                  arising out of, or in connection with, the use of this website or its calculators.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Accuracy and Updates</h2>
                <p className="text-gray-600">
                  While we make every effort to ensure our calculators are accurate and up-to-date, formulas, rates, and
                  standards may change over time. We recommend verifying important calculations with current official
                  sources or professional advisors.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. External Links</h2>
                <p className="text-gray-600">
                  Our website may contain links to external websites. We have no control over the nature, content, and
                  availability of those sites. The inclusion of any links does not necessarily imply a recommendation or
                  endorse the views expressed within them.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Professional Advice</h2>
                <p className="text-gray-600">
                  For important decisions involving finances, health, education, or legal matters, always consult with
                  qualified professionals in the relevant field. Our calculators are tools to assist with preliminary
                  calculations and should not replace professional consultation.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
