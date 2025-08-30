import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl font-bold text-gray-800 mb-6'>
						Privacy Policy
					</h1>
					<p className='text-xl text-gray-600'>
						Last updated: January 2024
					</p>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>Your Privacy Matters</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='prose max-w-none space-y-6'>
							<section>
								<h2 className='text-xl font-semibold mb-3'>
									1. Information We Collect
								</h2>
								<p className='text-gray-600'>
									CalcHub is designed with privacy in mind. We
									do not collect, store, or transmit any
									personal information or calculation data.
									All calculations are performed locally in
									your web browser and are not sent to our
									servers.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold mb-3'>
									2. How We Use Information
								</h2>
								<p className='text-gray-600 mb-3'>
									Since we don&apos;t collect personal
									information, we don&apos;t use it. However,
									we may collect anonymous usage statistics
									such as:
								</p>
								<ul className='list-disc list-inside space-y-1 text-gray-600'>
									<li>Page views and popular calculators</li>
									<li>
										General geographic location (country
										level)
									</li>
									<li>Browser type and device information</li>
									<li>Referral sources</li>
								</ul>
								<p className='text-gray-600 mt-3'>
									This information helps us improve our
									service and is never linked to individual
									users.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold mb-3'>
									3. Cookies and Local Storage
								</h2>
								<p className='text-gray-600'>
									We may use cookies and local storage to
									enhance your experience by remembering your
									preferences (such as preferred units or
									themes). These are stored locally on your
									device and can be cleared at any time
									through your browser settings.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold mb-3'>
									4. Third-Party Services
								</h2>
								<p className='text-gray-600'>
									We may use third-party services for
									analytics and website functionality. These
									services may collect anonymous usage data in
									accordance with their own privacy policies.
									We ensure that any third-party services we
									use respect user privacy and do not collect
									personal information.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold mb-3'>
									5. Data Security
								</h2>
								<p className='text-gray-600'>
									Since we don&apos;t collect or store
									personal data, there&apos;s no personal
									information at risk. All calculations happen
									in your browser, ensuring that sensitive
									information never leaves your device.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold mb-3'>
									6. Children&apos;s Privacy
								</h2>
								<p className='text-gray-600'>
									Our service is suitable for all ages. Since
									we don&apos;t collect personal information,
									there are no special considerations for
									children&apos;s privacy beyond our general
									privacy practices.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold mb-3'>
									7. Changes to Privacy Policy
								</h2>
								<p className='text-gray-600'>
									We may update this privacy policy from time
									to time. We will notify users of any
									material changes by posting the new privacy
									policy on this page and updating the
									&quot;Last updated&quot; date.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold mb-3'>
									8. Contact Us
								</h2>
								<p className='text-gray-600'>
									If you have any questions about this Privacy
									Policy, please contact us at
									privacy@example.com.
								</p>
							</section>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
