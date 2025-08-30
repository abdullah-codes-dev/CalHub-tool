import Link from "next/link"
import { Calculator, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">CalcHub</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted destination for professional calculator tools. We provide accurate, fast, and free
              calculation solutions for all your needs.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@calchub.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-400 hover:text-white transition-colors">
                  Calculator Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Calculator Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/age-calculator" className="text-gray-400 hover:text-white transition-colors">
                  Age Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/emi-calculator" className="text-gray-400 hover:text-white transition-colors">
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/bmi-calculator" className="text-gray-400 hover:text-white transition-colors">
                  BMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/percentage-calculator" className="text-gray-400 hover:text-white transition-colors">
                  Percentage Calculator
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CalcHub. All rights reserved. Built with precision and care.</p>
        </div>
      </div>
    </footer>
  )
}
