import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Calculator Tools Hub - Free Online Calculators",
	description:
		"Professional calculator tools including age, EMI, percentage, BMI, GPA, and AdSense revenue calculators. Fast, accurate, and free to use.",
	keywords:
		"calculator, online calculator, free calculator, age calculator, EMI calculator, BMI calculator, GPA calculator, percentage calculator, AdSense revenue calculator",
	authors: [{ name: "Calculator Tools Hub" }],
	robots: "index, follow",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning>
				<meta
					name='google-site-verification'
					content='sFQ_PiT6qifuFLt_QJrDzNoOpZK6WVAHHLcxjYg9pEo'
				/>
				{/* Google Analytics Script */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-SDY34EVLHH'
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-SDY34EVLHH');
						`,
					}}
				/>
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4367336734564969'
					crossOrigin='anonymous'
				/>
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
