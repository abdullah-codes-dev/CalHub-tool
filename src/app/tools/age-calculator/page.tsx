"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
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

export default function AgeCalculator() {
	const [birthDate, setBirthDate] = useState("");
	const [result, setResult] = useState<{
		years: number;
		months: number;
		days: number;
		totalDays: number;
		totalWeeks: number;
		totalMonths: number;
	} | null>(null);

	const calculateAge = () => {
		if (!birthDate) return;

		const birth = new Date(birthDate);
		const today = new Date();

		let years = today.getFullYear() - birth.getFullYear();
		let months = today.getMonth() - birth.getMonth();
		let days = today.getDate() - birth.getDate();

		if (days < 0) {
			months--;
			const lastMonth = new Date(
				today.getFullYear(),
				today.getMonth(),
				0
			);
			days += lastMonth.getDate();
		}

		if (months < 0) {
			years--;
			months += 12;
		}

		const totalDays = Math.floor(
			(today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24)
		);
		const totalWeeks = Math.floor(totalDays / 7);
		const totalMonths = years * 12 + months;

		setResult({
			years,
			months,
			days,
			totalDays,
			totalWeeks,
			totalMonths,
		});
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-8'>
					<div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center'>
						<Calendar className='w-8 h-8 text-white' />
					</div>
					<h1 className='text-4xl font-bold text-gray-800 mb-4'>
						Age Calculator
					</h1>
					<p className='text-xl text-gray-600'>
						Calculate your exact age in years, months, and days
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<Card>
						<CardHeader>
							<CardTitle>Enter Your Birth Date</CardTitle>
							<CardDescription>
								Select your date of birth to calculate your age
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<Label htmlFor='birthdate'>Date of Birth</Label>
								<Input
									id='birthdate'
									type='date'
									value={birthDate}
									onChange={(e) =>
										setBirthDate(e.target.value)
									}
									max={new Date().toISOString().split("T")[0]}
								/>
							</div>
							<Button
								onClick={calculateAge}
								className='w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
								disabled={!birthDate}>
								Calculate Age
							</Button>
						</CardContent>
					</Card>

					{result && (
						<Card>
							<CardHeader>
								<CardTitle>Your Age</CardTitle>
								<CardDescription>
									Detailed breakdown of your age
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									<div className='text-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg'>
										<div className='text-3xl font-bold text-blue-600 mb-2'>
											{result.years} Years,{" "}
											{result.months} Months,{" "}
											{result.days} Days
										</div>
									</div>

									<div className='grid grid-cols-2 gap-4'>
										<div className='text-center p-4 bg-gray-50 rounded-lg'>
											<div className='text-2xl font-bold text-gray-800'>
												{result.totalDays}
											</div>
											<div className='text-sm text-gray-600'>
												Total Days
											</div>
										</div>
										<div className='text-center p-4 bg-gray-50 rounded-lg'>
											<div className='text-2xl font-bold text-gray-800'>
												{result.totalWeeks}
											</div>
											<div className='text-sm text-gray-600'>
												Total Weeks
											</div>
										</div>
										<div className='text-center p-4 bg-gray-50 rounded-lg'>
											<div className='text-2xl font-bold text-gray-800'>
												{result.totalMonths}
											</div>
											<div className='text-sm text-gray-600'>
												Total Months
											</div>
										</div>
										<div className='text-center p-4 bg-gray-50 rounded-lg'>
											<div className='text-2xl font-bold text-gray-800'>
												{result.years}
											</div>
											<div className='text-sm text-gray-600'>
												Total Years
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
						<CardTitle>How to Use the Age Calculator</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='prose max-w-none'>
							<p className='text-gray-600 mb-4'>
								Our age calculator helps you determine your
								exact age in years, months, and days. Simply
								enter your birth date and get instant results.
							</p>
							<h3 className='text-lg font-semibold mb-2'>
								Features:
							</h3>
							<ul className='list-disc list-inside space-y-1 text-gray-600'>
								<li>
									Calculate exact age in years, months, and
									days
								</li>
								<li>
									View total days, weeks, and months lived
								</li>
								<li>
									Accurate calculations considering leap years
								</li>
								<li>
									Easy-to-use interface with instant results
								</li>
							</ul>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
