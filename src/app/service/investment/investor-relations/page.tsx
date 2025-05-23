'use client';

import { motion } from 'framer-motion';
import { Users, FileText, HandshakeIcon, MessageSquare, BarChart, Bell } from 'lucide-react';
import Link from 'next/link';

const investorServices = [
	{
		icon: MessageSquare,
		title: 'Communication Strategies',
		description: 'We help you craft clear updates and reports for investors.',
	},
	{
		icon: Bell,
		title: 'Compliance Management',
		description: 'We ensure adherence to investor agreements and regulations.',
	},
	{
		icon: HandshakeIcon,
		title: 'Conflict Resolution',
		description: 'We assist in resolving investor disputes amicably.',
	},
];

const investorBenefits = [
	'Build trust and transparency with your investors',
	'Ensure compliance to avoid legal and financial risks',
	'Strengthen relationships for future funding opportunities',
];

export default function InvestorRelationsPage() {
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
						Investor Relations Support
						<span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
							✦
						</span>
						<span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
							✦
						</span>
					</h1>
					<p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
						Build Strong Investor Relations with Legal Support
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
								Maintaining clear communication and compliance with investors is key to long-term success. At Leonard Corporate Solutions, we provide investor relations support, helping you manage communications and ensure compliance with legal requirements in India and internationally.
							</p>
						</div>
					</motion.div>

					{/* Services Section */}
					<div>
						<h2 className="text-3xl font-bold text-center mb-12">
							<span className="text-[#00ADB5]">Our Investor</span>{' '}
							<span className="text-[#222831]">Relations Services</span>
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{investorServices.map((service, index) => (
								<div key={index} className="bg-white p-6 rounded-lg shadow-md">
									<div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#00ADB5] text-white mx-auto mb-4">
										<service.icon className="h-8 w-8" />
									</div>
									<h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
									<p className="text-center text-[#393E46]">{service.description}</p>
								</div>
							))}
						</div>
					</div>

					{/* Benefits Section */}
					<motion.div className="relative max-w-3xl mx-auto px-8">
						<h2 className="text-3xl font-bold text-center mb-8">
							<span className="text-[#00ADB5]">Why Investor</span>{' '}
							<span className="text-[#222831]">Relations Matter</span>
						</h2>
						<ul className="space-y-4 list-none pl-5">
							{investorBenefits.map((benefit, index) => (
								<li key={index} className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]">
									{benefit}
								</li>
							))}
						</ul>
						<div className="mt-12 text-center">
							<p className="text-lg font-medium text-[#393E46]">
								Enhance your investor relations. Contact us for expert support today!
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
