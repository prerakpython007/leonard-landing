'use client';

import { motion } from 'framer-motion';
import { PieChart, Users, Scale, Settings, Shield, FileText } from 'lucide-react';
import Link from 'next/link';

const features = [
	{
		icon: PieChart,
		title: 'Equity Planning',
		description: 'Strategic equity structure design.',
	},
	{
		icon: Users,
		title: 'Stakeholder Alignment',
		description: 'Balancing stakeholder interests.',
	},
	{
		icon: Scale,
		title: 'Fair Distribution',
		description: 'Equitable equity allocation.',
	},
	{
		icon: Settings,
		title: 'Structure Design',
		description: 'Custom equity structure creation.',
	},
	{
		icon: Shield,
		title: 'Rights Protection',
		description: 'Safeguarding shareholder rights.',
	},
	{
		icon: FileText,
		title: 'Documentation',
		description: 'Comprehensive equity documentation.',
	},
];

const equityPoints = [
	'Equity structure design',
	'Share class planning',
	'Vesting schedules',
	'Option pools',
	'Rights allocation',
	'Dilution protection',
];

export default function EquityStructuringPage() {
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
						Equity Structuring
						<span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
							✦
						</span>
						<span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
							✦
						</span>
					</h1>
					<p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
						Strategic Equity Structure Design & Implementation
					</p>
				</motion.div>
			</motion.section>

			{/* Main Content */}
			<section className="py-32 px-4 md:px-16 lg:px-24">
				<div className="max-w-6xl mx-auto space-y-32">
					{/* Overview and Features sections following standard pattern */}
					{/* ... Add the overview section with equityPoints */}
					{/* ... Add the features grid section */}
					{/* ... Add the additional information section */}
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
