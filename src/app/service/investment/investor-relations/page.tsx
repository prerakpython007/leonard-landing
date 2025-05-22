'use client';

import { motion } from 'framer-motion';
import { Users, FileText, HandshakeIcon, MessageSquare, BarChart, Bell } from 'lucide-react';
import Link from 'next/link';

const features = [
	{
		icon: Users,
		title: 'Investor Management',
		description: 'Strategic investor relationship handling.',
	},
	{
		icon: FileText,
		title: 'Documentation',
		description: 'Comprehensive investor documentation.',
	},
	{
		icon: HandshakeIcon,
		title: 'Communication',
		description: 'Effective investor communications.',
	},
	{
		icon: MessageSquare,
		title: 'Updates & Reports',
		description: 'Regular investor updates and reporting.',
	},
	{
		icon: BarChart,
		title: 'Performance Reports',
		description: 'Clear performance communication.',
	},
	{
		icon: Bell,
		title: 'Compliance Alerts',
		description: 'Timely regulatory compliance updates.',
	},
];

const relationPoints = [
	'Investor communications',
	'Documentation management',
	'Reporting structures',
	'Compliance updates',
	'Performance reporting',
	'Stakeholder engagement',
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
						Investor Relations
						<span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
							✦
						</span>
						<span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
							✦
						</span>
					</h1>
					<p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
						Strategic Investor Communication & Management
					</p>
				</motion.div>
			</motion.section>

			{/* Main Content */}
			<section className="py-32 px-4 md:px-16 lg:px-24">
				<div className="max-w-6xl mx-auto space-y-32">
					{/* Overview and Features sections following standard pattern */}
					{/* ... Add the overview section with relationPoints */}
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
