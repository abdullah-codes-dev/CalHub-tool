"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EMICalculator() {
	const [principal, setPrincipal] = useState("");
	const [rate, setRate] = useState("");
	const [tenure, setTenure] = useState("");
	const [result, setResult] = useState<{
		emi: number;
		totalAmount: number;
		totalInterest: number;
	} | null>(null);

	const calculateEMI = () => {
		const P = Number.parseFloat(principal);
		const R = Number.parseFloat(rate) / 12 / 100;
		const N = Number.parseFloat(tenure) * 12;

		if (!P || !R || !N) return;

		const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
		const totalAmount = emi * N;
		const totalInterest = totalAmount - P;

		setResult({
			emi: Math.round(emi),
			totalAmount: Math.round(totalAmount),
			totalInterest: Math.round(totalInterest),
		});
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-green-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-8'>
					<div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center'>
						<CreditCard className='w-8 h-8 text-white' />
					</div>
					<h1 className='text-4xl font-bold text-gray-800 mb-4'>
						EMI Calculator
					</h1>
					<p className='text-xl text-gray-600'>
						Calculate your loan EMI with interest rates
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<Card>
						<CardHeader>
							<CardTitle>Loan Details</CardTitle>
							<CardDescription>
								Enter your loan information to calculate EMI
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<Label htmlFor='principal'>
									Loan Amount (₹)
								</Label>
								<Input
									id='principal'
									type='number'
									placeholder='e.g., 500000'
									value={principal}
									onChange={(e) =>
										setPrincipal(e.target.value)
									}
								/>
							</div>
							<div>
								<Label htmlFor='rate'>
									Interest Rate (% per annum)
								</Label>
								<Input
									id='rate'
									type='number'
									step='0.1'
									placeholder='e.g., 8.5'
									value={rate}
									onChange={(e) => setRate(e.target.value)}
								/>
							</div>
							<div>
								<Label htmlFor='tenure'>
									Loan Tenure (Years)
								</Label>
								<Input
									id='tenure'
									type='number'
									placeholder='e.g., 20'
									value={tenure}
									onChange={(e) => setTenure(e.target.value)}
								/>
							</div>
							<Button
								onClick={calculateEMI}
								className='w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
								disabled={!principal || !rate || !tenure}>
								Calculate EMI
							</Button>
						</CardContent>
					</Card>

					{result && (
						<Card>
							<CardHeader>
								<CardTitle>EMI Calculation Results</CardTitle>
								<CardDescription>
									Your loan repayment details
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									<div className='text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg'>
										<div className='text-3xl font-bold text-green-600 mb-2'>
											₹{result.emi.toLocaleString()}
										</div>
										<div className='text-sm text-gray-600'>
											Monthly EMI
										</div>
									</div>

									<div className='grid grid-cols-1 gap-4'>
										<div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
											<span className='text-gray-600'>
												Principal Amount
											</span>
											<span className='font-semibold'>
												₹
												{Number.parseFloat(
													principal
												).toLocaleString()}
											</span>
										</div>
										<div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
											<span className='text-gray-600'>
												Total Interest
											</span>
											<span className='font-semibold text-red-600'>
												₹
												{result.totalInterest.toLocaleString()}
											</span>
										</div>
										<div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
											<span className='text-gray-600'>
												Total Amount
											</span>
											<span className='font-semibold'>
												₹
												{result.totalAmount.toLocaleString()}
											</span>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					)}
				</div>

				<Card className='mt-8'>
					<CardHeader>
						<CardTitle>About EMI Calculator</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='prose max-w-none'>
							<p className='text-gray-600 mb-4'>
								EMI (Equated Monthly Installment) is the fixed
								amount you pay every month towards your loan
								repayment. Our calculator uses the standard EMI
								formula to provide accurate results.
							</p>
							<h3 className='text-lg font-semibold mb-2'>
								Formula Used:
							</h3>
							<p className='text-gray-600 mb-4'>
								EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
							</p>
							<p className='text-sm text-gray-500'>
								Where P = Principal loan amount, R = Monthly
								interest rate, N = Number of monthly
								installments
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
