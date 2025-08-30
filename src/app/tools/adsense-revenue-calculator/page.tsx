"use client";

import { useState } from "react";
import { DollarSign } from "lucide-react";
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

export default function AdSenseCalculator() {
	const [pageViews, setPageViews] = useState("");
	const [ctr, setCtr] = useState("");
	const [cpc, setCpc] = useState("");
	const [result, setResult] = useState<{
		dailyRevenue: number;
		monthlyRevenue: number;
		yearlyRevenue: number;
		clicks: number;
	} | null>(null);

	const calculateRevenue = () => {
		const views = Number.parseFloat(pageViews);
		const clickRate = Number.parseFloat(ctr) / 100;
		const costPerClick = Number.parseFloat(cpc);

		if (!views || !clickRate || !costPerClick) return;

		const clicks = views * clickRate;
		const dailyRevenue = clicks * costPerClick;
		const monthlyRevenue = dailyRevenue * 30;
		const yearlyRevenue = dailyRevenue * 365;

		setResult({
			dailyRevenue: Math.round(dailyRevenue * 100) / 100,
			monthlyRevenue: Math.round(monthlyRevenue * 100) / 100,
			yearlyRevenue: Math.round(yearlyRevenue * 100) / 100,
			clicks: Math.round(clicks * 100) / 100,
		});
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-8'>
					<div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center'>
						<DollarSign className='w-8 h-8 text-white' />
					</div>
					<h1 className='text-4xl font-bold text-gray-800 mb-4'>
						AdSense Revenue Calculator
					</h1>
					<p className='text-xl text-gray-600'>
						Estimate your AdSense earnings and revenue potential
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<Card>
						<CardHeader>
							<CardTitle>Enter Your Website Stats</CardTitle>
							<CardDescription>
								Provide your traffic and performance metrics
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<Label htmlFor='pageViews'>
									Daily Page Views
								</Label>
								<Input
									id='pageViews'
									type='number'
									placeholder='e.g., 1000'
									value={pageViews}
									onChange={(e) =>
										setPageViews(e.target.value)
									}
								/>
							</div>

							<div>
								<Label htmlFor='ctr'>
									Click-Through Rate (CTR) %
								</Label>
								<Input
									id='ctr'
									type='number'
									step='0.01'
									placeholder='e.g., 1.5 (typical range: 0.5-3%)'
									value={ctr}
									onChange={(e) => setCtr(e.target.value)}
								/>
							</div>

							<div>
								<Label htmlFor='cpc'>
									Cost Per Click (CPC) $
								</Label>
								<Input
									id='cpc'
									type='number'
									step='0.01'
									placeholder='e.g., 0.50 (typical range: $0.20-$2.00)'
									value={cpc}
									onChange={(e) => setCpc(e.target.value)}
								/>
							</div>

							<Button
								onClick={calculateRevenue}
								className='w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600'
								disabled={!pageViews || !ctr || !cpc}>
								Calculate Revenue
							</Button>
						</CardContent>
					</Card>

					{result && (
						<Card>
							<CardHeader>
								<CardTitle>Revenue Estimates</CardTitle>
								<CardDescription>
									Your potential AdSense earnings
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									<div className='text-center p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg'>
										<div className='text-3xl font-bold text-yellow-600 mb-2'>
											${result.dailyRevenue}
										</div>
										<div className='text-sm text-gray-600'>
											Daily Revenue
										</div>
									</div>

									<div className='grid grid-cols-1 gap-4'>
										<div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
											<span className='text-gray-600'>
												Daily Clicks
											</span>
											<span className='font-semibold'>
												{result.clicks}
											</span>
										</div>
										<div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
											<span className='text-gray-600'>
												Monthly Revenue
											</span>
											<span className='font-semibold text-green-600'>
												${result.monthlyRevenue}
											</span>
										</div>
										<div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
											<span className='text-gray-600'>
												Yearly Revenue
											</span>
											<span className='font-semibold text-green-600'>
												${result.yearlyRevenue}
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
						<CardTitle>AdSense Revenue Factors</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='prose max-w-none'>
							<p className='text-gray-600 mb-4'>
								AdSense revenue depends on several factors. Our
								calculator provides estimates based on your
								input metrics.
							</p>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<h3 className='text-lg font-semibold mb-2'>
										Key Factors:
									</h3>
									<ul className='list-disc list-inside space-y-1 text-gray-600'>
										<li>
											<strong>Traffic Quality:</strong>{" "}
											Organic traffic typically performs
											better
										</li>
										<li>
											<strong>Niche:</strong> Finance,
											insurance, and tech have higher CPCs
										</li>
										<li>
											<strong>Geography:</strong> Traffic
											from developed countries earns more
										</li>
										<li>
											<strong>Ad Placement:</strong>{" "}
											Above-the-fold ads perform better
										</li>
										<li>
											<strong>Seasonality:</strong> Q4
											typically has higher rates
										</li>
									</ul>
								</div>
								<div>
									<h3 className='text-lg font-semibold mb-2'>
										Optimization Tips:
									</h3>
									<ul className='list-disc list-inside space-y-1 text-gray-600'>
										<li>
											Focus on high-quality, original
											content
										</li>
										<li>Optimize ad placement and sizes</li>
										<li>Target high-value keywords</li>
										<li>Improve website loading speed</li>
										<li>Use responsive ad units</li>
									</ul>
								</div>
							</div>
							<p className='text-sm text-gray-500 mt-4'>
								<strong>Disclaimer:</strong> These are estimates
								only. Actual earnings may vary significantly
								based on numerous factors including content
								quality, audience demographics, and market
								conditions.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
