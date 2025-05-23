'use client';

import { motion } from 'framer-motion';
import { Shield, Briefcase, FileText, Scale, Search, Target } from 'lucide-react';
import Link from 'next/link';

const features = [
	{
		icon: Shield,
		title: 'Risk Assessment',
		description: 'Commercial risk evaluation.',
	},
	{
		icon: Briefcase,
		title: 'Strategy Development',
		description: 'Custom dispute strategies.',
	},
	{
		icon: FileText,
		title: 'Case Analysis',
		description: 'Comprehensive case review.',
	},
	{
		icon: Scale,
		title: 'Legal Planning',
		description: 'Strategic legal planning.',
	},
	{
		icon: Search,
		title: 'Evidence Management',
		description: 'Evidence collection and analysis.',
	},
	{
		icon: Target,
		title: 'Resolution Planning',
		description: 'Targeted resolution approaches.',
	},
];

const strategyPoints = [
	'Case assessment',
	'Strategy formulation',
	'Risk evaluation',
	'Evidence gathering',
	'Cost-benefit analysis',
	'Resolution planning',
];

const disputeServices = [
	{
		icon: Search,
		title: 'Dispute Analysis',
		description:
			'We assess the nature and impact of the dispute on your business.',
	},
	{
		icon: Briefcase,
		title: 'Strategic Planning',
		description: 'We create tailored plans to resolve disputes effectively.',
	},
	{
		icon: Scale,
		title: 'Execution Support',
		description:
			'We guide you through the resolution process, from negotiation to litigation.',
	},
];

const disputeBenefits = [
	'Protect your business from financial and reputational damage',
	'Resolve disputes with a clear, strategic approach',
	'Minimize disruptions to your operations during conflicts',
];

export default function CommercialDisputePage() {
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
						Commercial Dispute Strategy
						<span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
							✦
						</span>
						<span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
							✦
						</span>
					</h1>
					<p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
						Address Complex Disputes with Strategic Planning
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
								Commercial disputes can be complex and costly if not handled
								properly. At Leonard Corporate Solutions, we develop strategic
								plans to address commercial disputes, ensuring your business
								interests are protected in India and worldwide.
							</p>
							<ul className="space-y-4 list-none pl-5">
								{strategyPoints.map((item, index) => (
									<li
										key={index}
										className="relative pl-6 before:content-['✦'] before:absolute before:left-0 before:text-[#00ADB5]"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					</motion.div>

					{/* Services Section */}
					<div>
						<h2 className="text-3xl font-bold text-center mb-12">
							<span className="text-[#00ADB5]">Our Dispute</span>{' '}
							<span className="text-[#222831]">Strategy Services</span>
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{disputeServices.map((service, index) => (
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
									<p className="text-[#393E46]/80">
										{service.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>

					{/* Benefits Section */}
					<motion.div className="relative max-w-3xl mx-auto px-8">
						<h2 className="text-3xl font-bold text-center mb-8">
							<span className="text-[#00ADB5]">Why a Dispute</span>{' '}
							<span className="text-[#222831]">Strategy Matters</span>
						</h2>
						<ul className="space-y-4 list-none pl-5">
							{disputeBenefits.map((benefit, index) => (
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
								Tackle commercial disputes strategically. Contact us for dispute
								strategy services!
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Back Link */}
			<div className="container mx-auto px-4 py-8">
				<Link
					href="/service/litigation"
					className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
				>
					<span className="mr-2">←</span> Back to Litigation Services
				</Link>
			</div>
		</div>
	);
}
