'use client';

import { motion } from 'framer-motion';
import { HandshakeIcon, Scale, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const settlementServices = [
	{
		icon: HandshakeIcon,
		title: 'Negotiation Strategy',
		description: 'We develop strategies to secure the best possible settlement.',
	},
	{
		icon: MessageSquare,
		title: 'Mediation Support',
		description: 'We facilitate discussions to reach mutually beneficial agreements.',
	},
	{
		icon: Scale,
		title: 'Legal Oversight',
		description: 'We ensure settlements are legally sound and enforceable.',
	},
];

export default function SettlementNegotiationsPage() {
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
						Settlement Negotiations
						<span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
							✦
						</span>
						<span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
							✦
						</span>
					</h1>
					<p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
						Negotiate Favorable Settlements to Avoid Litigation
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
								Prolonged litigation can be costly and disruptive. At Leonard Corporate Solutions, we specialize in settlement negotiations, helping you achieve favorable outcomes and avoid the courtroom in India and worldwide.
							</p>
						</div>
					</motion.div>

					{/* Services Section */}
					<div>
						<h2 className="text-3xl font-bold text-center mb-12">
							<span className="text-[#00ADB5]">Our Settlement</span>{' '}
							<span className="text-[#222831]">Negotiation Services</span>
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{settlementServices.map((service, index) => (
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
								<h2 className="text-4xl font-bold mb-4">Settle Disputes Favorably with Expert Negotiations</h2>
								<p className="text-[#393E46] text-lg leading-relaxed mb-6">
									Settle disputes favorably. Contact us for settlement negotiation services today!
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