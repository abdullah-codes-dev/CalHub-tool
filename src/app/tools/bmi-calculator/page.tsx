"use client";

import { useState } from "react";
import { Scale } from "lucide-react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function BMICalculator() {
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [unit, setUnit] = useState("metric");
	const [result, setResult] = useState<{
		bmi: number;
		category: string;
		color: string;
	} | null>(null);

	const getBMICategory = (bmi: number) => {
		if (bmi < 18.5)
			return { category: "Underweight", color: "text-blue-600" };
		if (bmi < 25)
			return { category: "Normal weight", color: "text-green-600" };
		if (bmi < 30)
			return { category: "Overweight", color: "text-yellow-600" };
		return { category: "Obese", color: "text-red-600" };
	};

	const calculateBMI = () => {
		let weightKg = Number.parseFloat(weight);
		let heightM = Number.parseFloat(height);

		if (!weightKg || !heightM) return;

		if (unit === "imperial") {
			weightKg = weightKg * 0.453592; // pounds to kg
			heightM = heightM * 0.0254; // inches to meters
		} else {
			heightM = heightM / 100; // cm to meters
		}

		const bmi = weightKg / (heightM * heightM);
		const categoryInfo = getBMICategory(bmi);

		setResult({
			bmi: Math.round(bmi * 10) / 10,
			category: categoryInfo.category,
			color: categoryInfo.color,
		});
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-8'>
					<div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center'>
						<Scale className='w-8 h-8 text-white' />
					</div>
					<h1 className='text-4xl font-bold text-gray-800 mb-4'>
						BMI Calculator
					</h1>
					<p className='text-xl text-gray-600'>
						Calculate your Body Mass Index and health status
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<Card>
						<CardHeader>
							<CardTitle>Enter Your Details</CardTitle>
							<CardDescription>
								Provide your weight and height to calculate BMI
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<Label>Unit System</Label>
								<RadioGroup
									value={unit}
									onValueChange={setUnit}
									className='flex space-x-4 mt-2'>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem
											value='metric'
											id='metric'
										/>
										<Label htmlFor='metric'>
											Metric (kg, cm)
										</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem
											value='imperial'
											id='imperial'
										/>
										<Label htmlFor='imperial'>
											Imperial (lbs, inches)
										</Label>
									</div>
								</RadioGroup>
							</div>

							<div>
								<Label htmlFor='weight'>
									Weight ({unit === "metric" ? "kg" : "lbs"})
								</Label>
								<Input
									id='weight'
									type='number'
									placeholder={
										unit === "metric"
											? "e.g., 70"
											: "e.g., 154"
									}
									value={weight}
									onChange={(e) => setWeight(e.target.value)}
								/>
							</div>

							<div>
								<Label htmlFor='height'>
									Height (
									{unit === "metric" ? "cm" : "inches"})
								</Label>
								<Input
									id='height'
									type='number'
									placeholder={
										unit === "metric"
											? "e.g., 175"
											: "e.g., 69"
									}
									value={height}
									onChange={(e) => setHeight(e.target.value)}
								/>
							</div>

							<Button
								onClick={calculateBMI}
								className='w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
								disabled={!weight || !height}>
								Calculate BMI
							</Button>
						</CardContent>
					</Card>

					{result && (
						<Card>
							<CardHeader>
								<CardTitle>Your BMI Result</CardTitle>
								<CardDescription>
									Body Mass Index calculation and category
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									<div className='text-center p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg'>
										<div className='text-4xl font-bold text-orange-600 mb-2'>
											{result.bmi}
										</div>
										<div
											className={`text-lg font-semibold ${result.color}`}>
											{result.category}
										</div>
									</div>

									<div className='space-y-2'>
										<h3 className='font-semibold'>
											BMI Categories:
										</h3>
										<div className='space-y-1 text-sm'>
											<div className='flex justify-between'>
												<span>Underweight</span>
												<span className='text-blue-600'>
													Below 18.5
												</span>
											</div>
											<div className='flex justify-between'>
												<span>Normal weight</span>
												<span className='text-green-600'>
													18.5 - 24.9
												</span>
											</div>
											<div className='flex justify-between'>
												<span>Overweight</span>
												<span className='text-yellow-600'>
													25 - 29.9
												</span>
											</div>
											<div className='flex justify-between'>
												<span>Obese</span>
												<span className='text-red-600'>
													30 and above
												</span>
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					)}
				</div>

				<Card className='mt-8'>
					<CardHeader>
						<CardTitle>About BMI</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='prose max-w-none'>
							<p className='text-gray-600 mb-4'>
								Body Mass Index (BMI) is a measure of body fat
								based on height and weight. It&apos;s a useful
								screening tool but doesn&apos;t directly measure
								body fat percentage.
							</p>
							<h3 className='text-lg font-semibold mb-2'>
								Important Notes:
							</h3>
							<ul className='list-disc list-inside space-y-1 text-gray-600'>
								<li>
									BMI may not be accurate for athletes with
									high muscle mass
								</li>
								<li>
									It doesn&apos;t account for age, gender, or
									muscle-to-fat ratio
								</li>
								<li>
									Consult healthcare professionals for
									comprehensive health assessment
								</li>
								<li>
									BMI is just one indicator of health, not a
									complete diagnosis
								</li>
							</ul>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
