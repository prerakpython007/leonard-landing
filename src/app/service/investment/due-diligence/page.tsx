'use client';

import { motion } from 'framer-motion';
import { Search, FileText, Scale, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const diligenceServices = [
	{
		icon: FileText,
		title: 'Document Preparation',
		description: 'We compile all necessary legal and financial documents.',
	},
	{
		icon: AlertTriangle,
		title: 'Risk Assessment',
		description: 'We identify and address potential red flags before investors do.',
	},
	{
		icon: Search,
		title: 'Process Guidance',
		description: 'We guide you through the due diligence process step-by-step.',
	},
];

const diligenceBenefits = [
	'Impress investors with organized and transparent documentation',
	'Reduce delays in the funding process by addressing issues early',
	'Build credibility with thorough preparation',
];

export default function DueDiligencePage() {
	return (
		<div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[170px] font-montserrat overflow-hidden">
			{/* Grid Pattern */}
			<div
				className="fixed inset-0 pointer-events-none"
				style={{
					backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
        `,
					backgroundSize: '30px 30px',
				}}
			/>

			<motion.section className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24">
				{/* Corner Angles */}
				<div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#00ADB5] hidden lg:block" />
				<div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#00ADB5] hidden lg:block" />
				<div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#00ADB5] hidden lg:block" />
				<div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#00ADB5] hidden lg:block" />

				<motion.div className="max-w-7xl mx-auto text-center">
					<h1 className="text-6xl md:text-7xl font-extrabold text-[#222831] relative inline-block tracking-tight">
						Due Diligence Support
						<span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
							✦
						</span>
						<span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
							✦
						</span>
					</h1>
					<p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
						Prepare for Investor Due Diligence with Confidence
					</p>
				</motion.div>
			</motion.section>

			{/* Main Content */}
			<section className="py-32 px-4 md:px-16 lg:px-24">
				<div className="max-w-6xl mx-auto space-y-32">
					{/* Overview */}
					<motion.div className="relative max-w-3xl mx-auto px-8">
						{/* ...existing corner angles... */}

						<div className="text-[#393E46] space-y-6">
							<p className="text-lg leading-relaxed">
								Investor due diligence can make or break a funding round. At Leonard Corporate Solutions, we provide due diligence support, helping you prepare comprehensive legal documentation to ensure a smooth funding process for your startup in India and beyond.
							</p>
						</div>
					</motion.div>

					{/* Services Section */}
					<div>
						<h2 className="text-3xl font-bold text-center mb-12">
							<span className="text-[#00ADB5]">Our Due</span>{' '}
							<span className="text-[#222831]">Diligence Services</span>
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{diligenceServices.map((service, index) => (
								<motion.div
									key={service.title}
									className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<span className="absolute top-4 right-4 text-[#00ADB5] text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">
										✦
									</span>
									<div className="w-12 h-12 bg-[#00ADB5] rounded-lg flex items-center justify-center mb-4">
										<service.icon className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
										{service.title}
									</h3>
									<p className="text-[#393E46]/80">{service.description}</p>
								</motion.div>
							))}
						</div>
					</div>

					{/* Benefits Section */}
					<motion.div className="relative max-w-3xl mx-auto px-8">
						<h2 className="text-3xl font-bold text-center mb-8">
							<span className="text-[#00ADB5]">Benefits of</span>{' '}
							<span className="text-[#222831]">Due Diligence Support</span>
						</h2>
						<ul className="space-y-4 list-none pl-5">
							{diligenceBenefits.map((benefit, index) => (
								<li
									key={index}
									className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]"
								>
									{benefit}
								</li>
							))}
						</ul>
						<div className="mt-12 text-center">
							<p className="text-lg font-medium text-[#393E46]">
								Ace your due diligence. Contact us for due diligence support services today!
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Back Link */}
			<div className="container mx-auto px-4 py-8">
				<Link
					href="/service/investment"
					className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
				>
					<span className="mr-2">←</span> Back to Investment Services
				</Link>
			</div>
		</div>
	);
}
