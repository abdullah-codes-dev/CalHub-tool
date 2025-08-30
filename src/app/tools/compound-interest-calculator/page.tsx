"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [time, setTime] = useState("")
  const [compound, setCompound] = useState("")
  const [monthlyContribution, setMonthlyContribution] = useState("")
  const [result, setResult] = useState<{
    finalAmount: number
    totalInterest: number
    totalContributions: number
    yearlyBreakdown: Array<{ year: number; amount: number; interest: number; contributions: number }>
  } | null>(null)

  const compoundFrequencies = {
    "1": "Annually",
    "2": "Semi-annually",
    "4": "Quarterly",
    "12": "Monthly",
    "365": "Daily",
  }

  const calculateCompoundInterest = () => {
    const P = Number.parseFloat(principal)
    const r = Number.parseFloat(rate) / 100
    const t = Number.parseFloat(time)
    const n = Number.parseFloat(compound)
    const PMT = Number.parseFloat(monthlyContribution) || 0

    if (!P || !r || !t || !n) return

    // Compound interest with regular contributions
    const A = P * Math.pow(1 + r / n, n * t)
    const contributionAmount = PMT * 12 * t
    const contributionCompound = ((PMT * (Math.pow(1 + r / n, n * t) - 1)) / (r / n)) * (n / 12)

    const finalAmount = A + contributionCompound
    const totalInterest = finalAmount - P - contributionAmount

    // Yearly breakdown
    const yearlyBreakdown = []
    for (let year = 1; year <= t; year++) {
      const yearAmount =
        P * Math.pow(1 + r / n, n * year) + ((PMT * (Math.pow(1 + r / n, n * year) - 1)) / (r / n)) * (n / 12)
      const yearContributions = PMT * 12 * year
      const yearInterest = yearAmount - P - yearContributions

      yearlyBreakdown.push({
        year,
        amount: Math.round(yearAmount),
        interest: Math.round(yearInterest),
        contributions: Math.round(yearContributions),
      })
    }

    setResult({
      finalAmount: Math.round(finalAmount),
      totalInterest: Math.round(totalInterest),
      totalContributions: Math.round(contributionAmount),
      yearlyBreakdown,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Compound Interest Calculator</h1>
          <p className="text-xl text-gray-600">Calculate compound interest with regular contributions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Investment Details</CardTitle>
              <CardDescription>Enter your investment information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="principal">Initial Investment ($)</Label>
                <Input
                  id="principal"
                  type="number"
                  placeholder="e.g., 10000"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="rate">Annual Interest Rate (%)</Label>
                <Input
                  id="rate"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 7.5"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="time">Investment Period (Years)</Label>
                <Input
                  id="time"
                  type="number"
                  placeholder="e.g., 20"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="compound">Compound Frequency</Label>
                <Select value={compound} onValueChange={setCompound}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(compoundFrequencies).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="monthlyContribution">Monthly Contribution ($)</Label>
                <Input
                  id="monthlyContribution"
                  type="number"
                  placeholder="e.g., 500 (optional)"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(e.target.value)}
                />
              </div>
              <Button
                onClick={calculateCompoundInterest}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                disabled={!principal || !rate || !time || !compound}
              >
                Calculate Growth
              </Button>
            </CardContent>
          </Card>

          {result && (
            <Card>
              <CardHeader>
                <CardTitle>Investment Growth</CardTitle>
                <CardDescription>Your investment projection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      ${result.finalAmount.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Final Amount</div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Initial Investment</span>
                      <span className="font-semibold">${Number.parseFloat(principal).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Total Contributions</span>
                      <span className="font-semibold">${result.totalContributions.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Interest Earned</span>
                      <span className="font-semibold text-green-600">${result.totalInterest.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {result && result.yearlyBreakdown.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Yearly Growth Breakdown</CardTitle>
              <CardDescription>See how your investment grows over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Year</th>
                      <th className="text-right p-2">Total Amount</th>
                      <th className="text-right p-2">Contributions</th>
                      <th className="text-right p-2">Interest Earned</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.yearlyBreakdown.map((row) => (
                      <tr key={row.year} className="border-b">
                        <td className="p-2">{row.year}</td>
                        <td className="text-right p-2 font-semibold">${row.amount.toLocaleString()}</td>
                        <td className="text-right p-2">${row.contributions.toLocaleString()}</td>
                        <td className="text-right p-2 text-green-600">${row.interest.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
