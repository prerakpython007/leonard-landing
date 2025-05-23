'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Bell, HandshakeIcon } from 'lucide-react';
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

			{/* Hero Section */}
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
						{/* Corner Angles */}
						<div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
						<div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
						<div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
						<div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

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

					{/* Call to Action */}
					<section className="py-32 px-4 md:px-16 lg:px-24">
						<div className="max-w-6xl mx-auto">
							<motion.div
								className="relative max-w-3xl mx-auto px-8 text-center"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
							>
								<div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
								<div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
								<div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
								<div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />
								<h2 className="text-4xl font-bold mb-4">Enhance Investor Relations with Expert Support</h2>
								<p className="text-[#393E46] text-lg leading-relaxed mb-6">
									Enhance your investor relations. Contact us for expert support today!
								</p>
								<Link
									href="/contact-us"
									className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
								>
									Contact Us
									<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</Link>
							</motion.div>
						</div>
					</section>
				</div>
			</section>
		</div>
	);
}