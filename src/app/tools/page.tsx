import Link from "next/link"
import { Calendar, CreditCard, Percent, Scale, GraduationCap, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const calculatorTools = [
  {
    name: "Age Calculator",
    description: "Calculate your exact age in years, months, and days",
    icon: Calendar,
    href: "/tools/age-calculator",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "EMI Calculator",
    description: "Calculate your loan EMI with interest rates",
    icon: CreditCard,
    href: "/tools/emi-calculator",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Percentage Calculator",
    description: "Calculate percentages, increases, and decreases",
    icon: Percent,
    href: "/tools/percentage-calculator",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index and health status",
    icon: Scale,
    href: "/tools/bmi-calculator",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "GPA Converter",
    description: "Convert between different GPA scales and systems",
    icon: GraduationCap,
    href: "/tools/gpa-calculator",
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "AdSense Revenue Calculator",
    description: "Estimate your AdSense earnings and revenue",
    icon: DollarSign,
    href: "/tools/adsense-calculator",
    color: "from-yellow-500 to-orange-500",
  },
]

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Calculator Tools</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of professional calculator tools. All free, accurate, and easy to use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculatorTools.map((tool) => {
            const IconComponent = tool.icon
            return (
              <Link key={tool.name} href={tool.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-800">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">{tool.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
