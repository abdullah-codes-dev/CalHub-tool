"use client"

import { useState } from "react"
import { DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState("")
  const [tipPercentage, setTipPercentage] = useState([18])
  const [numberOfPeople, setNumberOfPeople] = useState("1")
  const [result, setResult] = useState<{
    tipAmount: number
    totalAmount: number
    perPersonAmount: number
    tipPerPerson: number
  } | null>(null)

  const calculateTip = () => {
    const bill = Number.parseFloat(billAmount)
    const tip = tipPercentage[0]
    const people = Number.parseInt(numberOfPeople)

    if (!bill || !people) return

    const tipAmount = (bill * tip) / 100
    const totalAmount = bill + tipAmount
    const perPersonAmount = totalAmount / people
    const tipPerPerson = tipAmount / people

    setResult({
      tipAmount: Math.round(tipAmount * 100) / 100,
      totalAmount: Math.round(totalAmount * 100) / 100,
      perPersonAmount: Math.round(perPersonAmount * 100) / 100,
      tipPerPerson: Math.round(tipPerPerson * 100) / 100,
    })
  }

  const quickTipButtons = [10, 15, 18, 20, 25]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Tip Calculator</h1>
          <p className="text-xl text-gray-600">Calculate tips and split bills easily</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Bill Details</CardTitle>
              <CardDescription>Enter your bill information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="billAmount">Bill Amount ($)</Label>
                <Input
                  id="billAmount"
                  type="number"
                  step="0.01"
                  placeholder="e.g., 85.50"
                  value={billAmount}
                  onChange={(e) => setBillAmount(e.target.value)}
                />
              </div>

              <div>
                <Label>Tip Percentage: {tipPercentage[0]}%</Label>
                <div className="mt-2">
                  <Slider
                    value={tipPercentage}
                    onValueChange={setTipPercentage}
                    max={30}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="flex gap-2 mt-3">
                  {quickTipButtons.map((tip) => (
                    <Button
                      key={tip}
                      variant="outline"
                      size="sm"
                      onClick={() => setTipPercentage([tip])}
                      className={tipPercentage[0] === tip ? "bg-green-100 border-green-500" : ""}
                    >
                      {tip}%
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="numberOfPeople">Number of People</Label>
                <Input
                  id="numberOfPeople"
                  type="number"
                  min="1"
                  placeholder="e.g., 4"
                  value={numberOfPeople}
                  onChange={(e) => setNumberOfPeople(e.target.value)}
                />
              </div>

              <Button
                onClick={calculateTip}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                disabled={!billAmount || !numberOfPeople}
              >
                Calculate Tip
              </Button>
            </CardContent>
          </Card>

          {result && (
            <Card>
              <CardHeader>
                <CardTitle>Tip Calculation</CardTitle>
                <CardDescription>Your tip and bill breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">${result.tipAmount}</div>
                      <div className="text-sm text-gray-600">Total Tip</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">${result.totalAmount}</div>
                      <div className="text-sm text-gray-600">Total Bill</div>
                    </div>
                  </div>

                  {Number.parseInt(numberOfPeople) > 1 && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-800">${result.tipPerPerson}</div>
                        <div className="text-sm text-gray-600">Tip per Person</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-800">${result.perPersonAmount}</div>
                        <div className="text-sm text-gray-600">Total per Person</div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bill Amount:</span>
                      <span className="font-semibold">${billAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tip ({tipPercentage[0]}%):</span>
                      <span className="font-semibold">${result.tipAmount}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t pt-2">
                      <span>Total:</span>
                      <span>${result.totalAmount}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
