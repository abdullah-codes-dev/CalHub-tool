import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl font-bold text-gray-800 mb-6'>
						Terms of Service
					</h1>
					<p className='text-xl text-gray-600'>
						Last updated: January 2024
					</p>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>Terms and Conditions</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='prose max-w-none space-y-6'>
							<section>
								<h2 className='text-xl font-semibold mb-3'>
									1. Acceptance of Terms
								</h2>
								<p className='text-gray-600'>
									By accessing and using CalcHub (&quot;the
									Service&quot;), you accept and agree to be
									bound by the terms and provision of this
									agreement. If you do not agree to abide by
									the above, please do not use this service.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold mb-3'>
									2. Use License
								</h2>
								<p className='text-gray-600 mb-3'>
									Permission is granted to temporarily use
									CalcHub for personal, non-commercial
									transitory viewing only. This is the grant
									of a license, not a transfer of title, and
									under this license you may not:
								</p>
								<ul className='list-disc list-inside space-y-1 text-gray-600'>
									<li>modify or copy the materials</li>
									<li>
										use the materials for any commercial
										purpose or for any public display
									</li>
									<li>
										attempt to reverse engineer any software
										contained on the website
									</li>
									<li>
										remove any copyright or other
										proprietary notations from the materials
									</li>
								</ul>
							</section>

							<section>
								<h2 className='text-xl font-semibold mb-3'>
									3. Disclaimer
								</h2>
								<p className='text-gray-600'>
									The materials on CalcHub are provided on an
									&quot;as is&quot; basis. CalcHub makes no
									warranties, expressed or implied, and hereby
									disclaims and negates all other warranties
									including without limitation, implied
									warranties or conditions of merchantability,
									fitness for a particular purpose, or
									non-infringement of intellectual property or
									other violation of rights.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold mb-3'>
									4. Accuracy of Calculations
								</h2>
								<p className='text-gray-600'>
									While we strive to provide accurate
									calculations, CalcHub does not warrant that
									the results from our calculators are
									error-free or will meet your requirements.
									Users should verify important calculations
									independently and consult with professionals
									when making significant financial or health
									decisions.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold mb-3'>
									5. Limitations
								</h2>
								<p className='text-gray-600'>
									In no event shall CalcHub or its suppliers
									be liable for any damages (including,
									without limitation, damages for loss of data
									or profit, or due to business interruption)
									arising out of the use or inability to use
									CalcHub, even if CalcHub or its authorized
									representative has been notified orally or
									in writing of the possibility of such
									damage.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold mb-3'>
									6. Privacy Policy
								</h2>
								<p className='text-gray-600'>
									Your privacy is important to us. We do not
									collect, store, or share personal
									information from your use of our
									calculators. All calculations are performed
									locally in your browser.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold mb-3'>
									7. Modifications
								</h2>
								<p className='text-gray-600'>
									CalcHub may revise these terms of service at
									any time without notice. By using this
									website, you are agreeing to be bound by the
									then current version of these terms of
									service.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold mb-3'>
									8. Contact Information
								</h2>
								<p className='text-gray-600'>
									If you have any questions about these Terms
									of Service, please contact us at
									support@calchub.com.
								</p>
							</section>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
