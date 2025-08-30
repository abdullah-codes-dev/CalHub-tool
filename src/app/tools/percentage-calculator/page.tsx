"use client";

import { useState } from "react";
import { Percent } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PercentageCalculator() {
	const [basicValue, setBasicValue] = useState("");
	const [basicPercent, setBasicPercent] = useState("");
	const [basicResult, setBasicResult] = useState<number | null>(null);

	const [increaseValue, setIncreaseValue] = useState("");
	const [increasePercent, setIncreasePercent] = useState("");
	const [increaseResult, setIncreaseResult] = useState<number | null>(null);

	const [changeOld, setChangeOld] = useState("");
	const [changeNew, setChangeNew] = useState("");
	const [changeResult, setChangeResult] = useState<number | null>(null);

	const calculateBasic = () => {
		const value = Number.parseFloat(basicValue);
		const percent = Number.parseFloat(basicPercent);
		if (!isNaN(value) && !isNaN(percent)) {
			setBasicResult((value * percent) / 100);
		}
	};

	const calculateIncrease = () => {
		const value = Number.parseFloat(increaseValue);
		const percent = Number.parseFloat(increasePercent);
		if (!isNaN(value) && !isNaN(percent)) {
			setIncreaseResult(value + (value * percent) / 100);
		}
	};

	const calculateChange = () => {
		const oldVal = Number.parseFloat(changeOld);
		const newVal = Number.parseFloat(changeNew);
		if (!isNaN(oldVal) && !isNaN(newVal) && oldVal !== 0) {
			setChangeResult(((newVal - oldVal) / oldVal) * 100);
		}
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-8'>
					<div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center'>
						<Percent className='w-8 h-8 text-white' />
					</div>
					<h1 className='text-4xl font-bold text-gray-800 mb-4'>
						Percentage Calculator
					</h1>
					<p className='text-xl text-gray-600'>
						Calculate percentages, increases, and decreases
					</p>
				</div>

				<Tabs defaultValue='basic' className='w-full'>
					<TabsList className='grid w-full grid-cols-3'>
						<TabsTrigger value='basic'>
							Basic Percentage
						</TabsTrigger>
						<TabsTrigger value='increase'>
							Percentage Increase
						</TabsTrigger>
						<TabsTrigger value='change'>
							Percentage Change
						</TabsTrigger>
					</TabsList>

					<TabsContent value='basic'>
						<Card>
							<CardHeader>
								<CardTitle>
									Calculate Percentage of a Number
								</CardTitle>
								<CardDescription>
									Find what percentage of a number equals
									another number
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div>
										<Label htmlFor='basicPercent'>
											Percentage (%)
										</Label>
										<Input
											id='basicPercent'
											type='number'
											placeholder='e.g., 25'
											value={basicPercent}
											onChange={(e) =>
												setBasicPercent(e.target.value)
											}
										/>
									</div>
									<div>
										<Label htmlFor='basicValue'>
											Of Value
										</Label>
										<Input
											id='basicValue'
											type='number'
											placeholder='e.g., 200'
											value={basicValue}
											onChange={(e) =>
												setBasicValue(e.target.value)
											}
										/>
									</div>
								</div>
								<Button
									onClick={calculateBasic}
									className='w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'>
									Calculate
								</Button>
								{basicResult !== null && (
									<div className='text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg'>
										<div className='text-3xl font-bold text-purple-600'>
											{basicResult}
										</div>
										<div className='text-sm text-gray-600'>
											{basicPercent}% of {basicValue} ={" "}
											{basicResult}
										</div>
									</div>
								)}
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value='increase'>
						<Card>
							<CardHeader>
								<CardTitle>
									Calculate Percentage Increase/Decrease
								</CardTitle>
								<CardDescription>
									Add or subtract a percentage from a number
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div>
										<Label htmlFor='increaseValue'>
											Original Value
										</Label>
										<Input
											id='increaseValue'
											type='number'
											placeholder='e.g., 100'
											value={increaseValue}
											onChange={(e) =>
												setIncreaseValue(e.target.value)
											}
										/>
									</div>
									<div>
										<Label htmlFor='increasePercent'>
											Percentage Change (%)
										</Label>
										<Input
											id='increasePercent'
											type='number'
											placeholder='e.g., 20 (use negative for decrease)'
											value={increasePercent}
											onChange={(e) =>
												setIncreasePercent(
													e.target.value
												)
											}
										/>
									</div>
								</div>
								<Button
									onClick={calculateIncrease}
									className='w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'>
									Calculate
								</Button>
								{increaseResult !== null && (
									<div className='text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg'>
										<div className='text-3xl font-bold text-purple-600'>
											{increaseResult.toFixed(2)}
										</div>
										<div className='text-sm text-gray-600'>
											{increaseValue}{" "}
											{Number.parseFloat(
												increasePercent
											) >= 0
												? "increased"
												: "decreased"}{" "}
											by{" "}
											{Math.abs(
												Number.parseFloat(
													increasePercent
												)
											)}
											% = {increaseResult.toFixed(2)}
										</div>
									</div>
								)}
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value='change'>
						<Card>
							<CardHeader>
								<CardTitle>
									Calculate Percentage Change
								</CardTitle>
								<CardDescription>
									Find the percentage change between two
									values
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div>
										<Label htmlFor='changeOld'>
											Original Value
										</Label>
										<Input
											id='changeOld'
											type='number'
											placeholder='e.g., 50'
											value={changeOld}
											onChange={(e) =>
												setChangeOld(e.target.value)
											}
										/>
									</div>
									<div>
										<Label htmlFor='changeNew'>
											New Value
										</Label>
										<Input
											id='changeNew'
											type='number'
											placeholder='e.g., 75'
											value={changeNew}
											onChange={(e) =>
												setChangeNew(e.target.value)
											}
										/>
									</div>
								</div>
								<Button
									onClick={calculateChange}
									className='w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'>
									Calculate
								</Button>
								{changeResult !== null && (
									<div className='text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg'>
										<div className='text-3xl font-bold text-purple-600'>
											{changeResult > 0 ? "+" : ""}
											{changeResult.toFixed(2)}%
										</div>
										<div className='text-sm text-gray-600'>
											Change from {changeOld} to{" "}
											{changeNew} ={" "}
											{changeResult.toFixed(2)}%{" "}
											{changeResult >= 0
												? "increase"
												: "decrease"}
										</div>
									</div>
								)}
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
