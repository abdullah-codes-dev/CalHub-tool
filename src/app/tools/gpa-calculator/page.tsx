"use client";

import { useState } from "react";
import Head from "next/head";
import { GraduationCap } from "lucide-react";
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function GPAConverter() {
	const [gpa, setGpa] = useState("");
	const [fromScale, setFromScale] = useState("");
	const [toScale, setToScale] = useState("");
	const [result, setResult] = useState<number | null>(null);

	const scales = {
		"4.0": { max: 4.0, name: "4.0 Scale (US)" },
		"5.0": { max: 5.0, name: "5.0 Scale (Weighted)" },
		"10.0": { max: 10.0, name: "10.0 Scale (India)" },
		"100": { max: 100, name: "Percentage (100)" },
	};

	const convertGPA = () => {
		const inputGPA = Number.parseFloat(gpa);
		const fromMax = scales[fromScale as keyof typeof scales]?.max;
		const toMax = scales[toScale as keyof typeof scales]?.max;

		if (!inputGPA || !fromMax || !toMax || fromScale === toScale) return;

		const percentage = (inputGPA / fromMax) * 100;
		const convertedGPA = (percentage / 100) * toMax;

		setResult(Math.round(convertedGPA * 100) / 100);
	};

	return (
		<>
			{/* ✅ SEO + Canonical */}
			<Head>
				<title>GPA Calculator & Converter | JazzCasher</title>
				<meta
					name="description"
					content="Easily convert your GPA between 4.0, 5.0, 10.0, and percentage scales using our free GPA Calculator & Converter tool."
				/>
				<link rel="canonical" href="https://www.jazzcasher.site/tools/gpa-calculator" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="GPA Calculator & Converter | JazzCasher" />
				<meta
					property="og:description"
					content="Free GPA Calculator to convert your GPA between 4.0, 5.0, 10.0, and percentage grading systems."
				/>
				<meta property="og:url" content="https://www.jazzcasher.site/tools/gpa-calculator" />
			</Head>

			<div className='min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-12 px-4'>
				<div className='max-w-4xl mx-auto'>
					<div className='text-center mb-8'>
						<div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center'>
							<GraduationCap className='w-8 h-8 text-white' />
						</div>
						<h1 className='text-4xl font-bold text-gray-800 mb-4'>GPA Converter</h1>
						<p className='text-xl text-gray-600'>Convert between different GPA scales and systems</p>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
						<Card>
							<CardHeader>
								<CardTitle>GPA Conversion</CardTitle>
								<CardDescription>Convert your GPA between different grading scales</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div>
									<Label htmlFor='gpa'>Enter GPA</Label>
									<Input
										id='gpa'
										type='number'
										step='0.01'
										placeholder='e.g., 3.5'
										value={gpa}
										onChange={(e) => setGpa(e.target.value)}
									/>
								</div>

								<div>
									<Label htmlFor='fromScale'>From Scale</Label>
									<Select value={fromScale} onValueChange={setFromScale}>
										<SelectTrigger>
											<SelectValue placeholder='Select source scale' />
										</SelectTrigger>
										<SelectContent>
											{Object.entries(scales).map(([key, scale]) => (
												<SelectItem key={key} value={key}>
													{scale.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>

								<div>
									<Label htmlFor='toScale'>To Scale</Label>
									<Select value={toScale} onValueChange={setToScale}>
										<SelectTrigger>
											<SelectValue placeholder='Select target scale' />
										</SelectTrigger>
										<SelectContent>
											{Object.entries(scales).map(([key, scale]) => (
												<SelectItem key={key} value={key}>
													{scale.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>

								<Button
									onClick={convertGPA}
									className='w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600'
									disabled={!gpa || !fromScale || !toScale}>
									Convert GPA
								</Button>
							</CardContent>
						</Card>

						{result !== null && (
							<Card>
								<CardHeader>
									<CardTitle>Conversion Result</CardTitle>
									<CardDescription>Your converted GPA</CardDescription>
								</CardHeader>
								<CardContent>
									<div className='space-y-4'>
										<div className='text-center p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg'>
											<div className='text-4xl font-bold text-indigo-600 mb-2'>{result}</div>
											<div className='text-sm text-gray-600'>
												{gpa} on {scales[fromScale as keyof typeof scales]?.name} = {result} on {scales[toScale as keyof typeof scales]?.name}
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
