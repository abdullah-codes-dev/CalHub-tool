import { Mail, Phone, MapPin, Clock } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function ContactPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl font-bold text-gray-800 mb-6'>
						Contact Us
					</h1>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						Have questions, suggestions, or need help with our
						calculators? We&apos;d love to hear from you!
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<div className='space-y-6'>
						<Card>
							<CardHeader>
								<CardTitle>Get in Touch</CardTitle>
								<CardDescription>
									Multiple ways to reach us
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='flex items-center space-x-3'>
									<div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
										<Mail className='w-5 h-5 text-blue-600' />
									</div>
									<div>
										<div className='font-medium'>Email</div>
										<div className='text-gray-600'>
											support@calchub.com
										</div>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
										<Phone className='w-5 h-5 text-green-600' />
									</div>
									<div>
										<div className='font-medium'>Phone</div>
										<div className='text-gray-600'>
											+1 (555) 123-4567
										</div>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
										<MapPin className='w-5 h-5 text-purple-600' />
									</div>
									<div>
										<div className='font-medium'>
											Address
										</div>
										<div className='text-gray-600'>
											123 Calculator Street
											<br />
											Math City, MC 12345
										</div>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
										<Clock className='w-5 h-5 text-orange-600' />
									</div>
									<div>
										<div className='font-medium'>
											Business Hours
										</div>
										<div className='text-gray-600'>
											Mon-Fri: 9AM-6PM EST
											<br />
											Sat-Sun: 10AM-4PM EST
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>
									Frequently Asked Questions
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									<div>
										<h3 className='font-medium mb-1'>
											Are the calculators free to use?
										</h3>
										<p className='text-sm text-gray-600'>
											Yes, all our calculators are
											completely free with no hidden
											charges.
										</p>
									</div>
									<div>
										<h3 className='font-medium mb-1'>
											Do you store my calculation data?
										</h3>
										<p className='text-sm text-gray-600'>
											No, all calculations are performed
											locally in your browser. We
											don&apos;t store any personal data.
										</p>
									</div>
									<div>
										<h3 className='font-medium mb-1'>
											Can I suggest new calculators?
										</h3>
										<p className='text-sm text-gray-600'>
											We welcome suggestions for new
											calculators. Contact us with your
											ideas.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
