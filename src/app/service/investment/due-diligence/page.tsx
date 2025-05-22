'use client';

import { motion } from 'framer-motion';
import { Search, FileText, Scale, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const features = [
	{
		icon: Search,
		title: 'Comprehensive Review',
		description: 'Thorough analysis of business operations.',
	},
	{
		icon: FileText,
		title: 'Documentation Review',
		description: 'Detailed review of legal documents.',
	},
	{
		icon: Scale,
		title: 'Risk Assessment',
		description: 'Evaluation of legal and business risks.',
	},
	{
		icon: Shield,
		title: 'Compliance Check',
		description: 'Verification of regulatory compliance.',
	},
	{
		icon: AlertTriangle,
		title: 'Issue Identification',
		description: 'Early detection of potential problems.',
	},
	{
		icon: CheckCircle,
		title: 'Reporting',
		description: 'Comprehensive due diligence reports.',
	},
];

const dueDiligencePoints = [
	'Legal documentation review',
	'Corporate structure analysis',
	'Compliance verification',
	'Risk assessment',
	'Financial review support',
	'Recommendations report',
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
						Due Diligence
						<span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
							✦
						</span>
						<span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">
							✦
						</span>
					</h1>
					<p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
						Comprehensive Investment Due Diligence Support
					</p>
				</motion.div>
			</motion.section>

			{/* Main Content */}
			<section className="py-32 px-4 md:px-16 lg:px-24">
				<div className="max-w-6xl mx-auto space-y-32">
					{/* Overview and Features sections following standard pattern */}
					{/* ... Add the overview section with dueDiligencePoints */}
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
