import { Calculator, Users, Award, Shield } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function AboutPage() {
	const features = [
		{
			icon: Calculator,
			title: "Accurate Calculations",
			description:
				"All our calculators use precise mathematical formulas and are regularly tested for accuracy.",
		},
		{
			icon: Users,
			title: "User-Friendly Design",
			description:
				"Clean, intuitive interfaces designed for users of all technical backgrounds.",
		},
		{
			icon: Award,
			title: "Professional Quality",
			description:
				"Built with professional-grade standards and best practices in web development.",
		},
		{
			icon: Shield,
			title: "Privacy Focused",
			description:
				"We don't store your personal data. All calculations are performed locally in your browser.",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl font-bold text-gray-800 mb-6'>
						About CalcHub
					</h1>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						Your trusted destination for professional calculator
						tools. We provide accurate, fast, and free calculation
						solutions for all your needs.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
					{features.map((feature) => {
						const IconComponent = feature.icon;
						return (
							<Card key={feature.title}>
								<CardHeader>
									<div className='w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center'>
										<IconComponent className='w-6 h-6 text-white' />
									</div>
									<CardTitle>{feature.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className='text-gray-600'>
										{feature.description}
									</CardDescription>
								</CardContent>
							</Card>
						);
					})}
				</div>

				<Card>
					<CardHeader>
						<CardTitle>Our Mission</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='prose max-w-none'>
							<p className='text-gray-600 mb-4'>
								At CalcHub, we believe that everyone should have
								access to reliable calculation tools without the
								hassle of complex software or expensive
								subscriptions. Our mission is to provide free,
								accurate, and easy-to-use calculators that help
								people make informed decisions in their personal
								and professional lives.
							</p>
							<p className='text-gray-600 mb-4'>
								Whether you&apos;re calculating your loan EMI,
								checking your BMI, converting your GPA, or
								estimating your AdSense revenue, our tools are
								designed to give you quick and accurate results.
								We continuously update and improve our
								calculators based on user feedback and the
								latest mathematical standards.
							</p>
							<h3 className='text-lg font-semibold mb-2 text-gray-800'>
								Why Choose CalcHub?
							</h3>
							<ul className='list-disc list-inside space-y-1 text-gray-600'>
								<li>100% free to use with no hidden charges</li>
								<li>No registration or sign-up required</li>
								<li>
									Mobile-responsive design works on all
									devices
								</li>
								<li>Regular updates and new tool additions</li>
								<li>Privacy-focused - no data collection</li>
								<li>Fast loading and reliable performance</li>
							</ul>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
