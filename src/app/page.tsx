import Link from "next/link";
import {
	Calculator,
	Calendar,
	CreditCard,
	Percent,
	Scale,
	GraduationCap,
	DollarSign,
	Info,
	FileText,
	Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const calculatorTools = [
	{
		name: "Age Calculator",
		description: "Calculate your exact age in years, months, and days",
		icon: Calendar,
		href: "/tools/age-calculator",
		color: "from-blue-500 to-cyan-500",
	},
	{
		name: "EMI Calculator",
		description: "Calculate your loan EMI with interest rates",
		icon: CreditCard,
		href: "/tools/emi-calculator",
		color: "from-green-500 to-emerald-500",
	},
	{
		name: "Percentage Calculator",
		description: "Calculate percentages, increases, and decreases",
		icon: Percent,
		href: "/tools/percentage-calculator",
		color: "from-purple-500 to-pink-500",
	},
	{
		name: "BMI Calculator",
		description: "Calculate your Body Mass Index and health status",
		icon: Scale,
		href: "/tools/bmi-calculator",
		color: "from-orange-500 to-red-500",
	},
	{
		name: "GPA Converter",
		description: "Convert between different GPA scales and systems",
		icon: GraduationCap,
		href: "/tools/gpa-calculator",
		color: "from-indigo-500 to-blue-500",
	},
	{
		name: "AdSense Revenue Calculator",
		description: "Estimate your AdSense earnings and revenue",
		icon: DollarSign,
		href: "/tools/adsense-revenue-calculator",
		color: "from-yellow-500 to-orange-500",
	},
	{
		name: "Tip Calculator",
		description: "Calculate tip, increases, and decreases",
		icon: Percent,
		href: "/tools/tip-calculator",
		color: "from-purple-500 to-pink-500",
	},
	{
		name: "Compound Interest Calculator",
		description: "Calculate your compound interest with interest rates",
		icon: CreditCard,
		href: "/tools/compound-interest-calculator",
		color: "from-green-500 to-emerald-500",
	},
];

const features = [
	{
		title: "Accurate Calculations",
		description:
			"All our calculators use precise mathematical formulas to ensure accurate results every time.",
		icon: Calculator,
	},
	{
		title: "User-Friendly Interface",
		description:
			"Clean, intuitive design makes it easy for anyone to use our calculation tools effectively.",
		icon: Info,
	},
	{
		title: "Mobile Responsive",
		description:
			"Access all calculators seamlessly across desktop, tablet, and mobile devices.",
		icon: FileText,
	},
	{
		title: "Free to Use",
		description:
			"All our calculator tools are completely free with no hidden charges or subscriptions.",
		icon: Shield,
	},
];

export default function HomePage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
			{/* Hero Section */}
			<section className='relative py-20 px-4 text-center'>
				<div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl mx-4'></div>
				<div className='relative max-w-4xl mx-auto'>
					<h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6'>
						Calculator Tools Hub
					</h1>
					<p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
						Your one-stop destination for all essential calculators.
						Fast, accurate, and completely free to use.
					</p>
					<Button
						size='lg'
						className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'>
						Explore Calculators
					</Button>
				</div>
			</section>

			{/* Calculator Tools Grid */}
			<section className='py-16 px-4'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>
						Our Calculator Tools
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{calculatorTools.map((tool) => {
							const IconComponent = tool.icon;
							return (
								<Link key={tool.name} href={tool.href}>
									<Card className='h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm'>
										<CardHeader className='text-center'>
											<div
												className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center`}>
												<IconComponent className='w-8 h-8 text-white' />
											</div>
											<CardTitle className='text-xl font-semibold text-gray-800'>
												{tool.name}
											</CardTitle>
										</CardHeader>
										<CardContent>
											<CardDescription className='text-center text-gray-600'>
												{tool.description}
											</CardDescription>
										</CardContent>
									</Card>
								</Link>
							);
						})}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className='py-16 px-4 bg-white/50'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>
						Why Choose Our Calculators?
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{features.map((feature) => {
							const IconComponent = feature.icon;
							return (
								<div
									key={feature.title}
									className='text-center'>
									<div className='w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center'>
										<IconComponent className='w-6 h-6 text-white' />
									</div>
									<h3 className='text-lg font-semibold mb-2 text-gray-800'>
										{feature.title}
									</h3>
									<p className='text-gray-600 text-sm'>
										{feature.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 px-4'>
				<div className='max-w-4xl mx-auto text-center'>
					<h2 className='text-3xl font-bold mb-6 text-gray-800'>
						Ready to Start Calculating?
					</h2>
					<p className='text-xl text-gray-600 mb-8'>
						Choose from our collection of professional-grade
						calculators and get instant, accurate results.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button
							size='lg'
							className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'>
							Browse All Tools
						</Button>
						<Button
							size='lg'
							variant='outline'
							className='border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent'>
							Learn More
						</Button>
					</div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className='py-16 px-4 bg-white/50'>
				<div className='max-w-6xl mx-auto'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
						<div>
							<div className='text-3xl font-bold text-blue-600 mb-2'>
								50K+
							</div>
							<div className='text-gray-600'>Monthly Users</div>
						</div>
						<div>
							<div className='text-3xl font-bold text-green-600 mb-2'>
								1M+
							</div>
							<div className='text-gray-600'>
								Calculations Done
							</div>
						</div>
						<div>
							<div className='text-3xl font-bold text-purple-600 mb-2'>
								6
							</div>
							<div className='text-gray-600'>
								Calculator Tools
							</div>
						</div>
						<div>
							<div className='text-3xl font-bold text-orange-600 mb-2'>
								99.9%
							</div>
							<div className='text-gray-600'>Accuracy Rate</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className='py-16 px-4'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>
						What Our Users Say
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<Card className='bg-white/80 backdrop-blur-sm'>
							<CardContent className='p-6'>
								<div className='flex items-center mb-4'>
									<div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold'>
										S
									</div>
									<div className='ml-3'>
										<div className='font-semibold'>
											Sarah Johnson
										</div>
										<div className='text-sm text-gray-600'>
											Financial Advisor
										</div>
									</div>
								</div>
								<p className='text-gray-600 italic'>
									&quot;The EMI calculator is incredibly
									accurate and helps me provide quick
									estimates to my clients. Love the clean
									interface!&quot;
								</p>
							</CardContent>
						</Card>
						<Card className='bg-white/80 backdrop-blur-sm'>
							<CardContent className='p-6'>
								<div className='flex items-center mb-4'>
									<div className='w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold'>
										M
									</div>
									<div className='ml-3'>
										<div className='font-semibold'>
											Mike Chen
										</div>
										<div className='text-sm text-gray-600'>
											Student
										</div>
									</div>
								</div>
								<p className='text-gray-600 italic'>
									&quot;The GPA converter saved me so much
									time when applying to universities abroad.
									Simple and reliable!&quot;
								</p>
							</CardContent>
						</Card>
						<Card className='bg-white/80 backdrop-blur-sm'>
							<CardContent className='p-6'>
								<div className='flex items-center mb-4'>
									<div className='w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold'>
										A
									</div>
									<div className='ml-3'>
										<div className='font-semibold'>
											Alex Rivera
										</div>
										<div className='text-sm text-gray-600'>
											Blogger
										</div>
									</div>
								</div>
								<p className='text-gray-600 italic'>
									&quot;The AdSense calculator gives me
									realistic revenue projections. Perfect for
									planning my content strategy!&quot;
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-16 px-4 bg-white/50'>
				<div className='max-w-4xl mx-auto'>
					<h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>
						Frequently Asked Questions
					</h2>
					<div className='space-y-4'>
						<Card>
							<CardHeader>
								<CardTitle className='text-lg'>
									Are all calculators completely free?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600'>
									Yes, all our calculator tools are 100% free
									to use with no hidden charges,
									subscriptions, or registration required.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className='text-lg'>
									How accurate are the calculations?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600'>
									Our calculators use industry-standard
									formulas and are regularly tested for
									accuracy. However, for important decisions,
									we recommend consulting with professionals.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className='text-lg'>
									Do you store my calculation data?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600'>
									No, we don&apos;t store any personal data.
									All calculations are performed locally in
									your browser for complete privacy.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	);
}
