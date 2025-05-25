"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const experiences = [
	{
		year: '2013',
		title: 'Firm Establishment',
		description: 'Founded in Mumbai with a vision to provide excellent IP services.',
		icon: '🏛️',
	},
	{
		year: '2015',
		title: 'International Expansion',
		description: 'Extended services to international clients across 25+ countries.',
		icon: '🌏',
	},
	{
		year: '2018',
		title: 'Digital Innovation',
		description: 'Implemented AI-driven legal research and documentation systems.',
		icon: '💡',
	},
	{
		year: '2023',
		title: 'Industry Leadership',
		description: 'Recognized as one of India\'s top IP law firms.',
		icon: '⭐',
	},
];

const Experience = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<section className="min-h-screen bg-gradient-to-b from-[#EEEEEE] to-white rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden">
			{/* Background Stars */}
			<span className="absolute left-[5%] sm:left-0 top-[20%] sm:top-[45%] text-[#00ADB5] text-[80px] sm:text-[120px] md:text-[200px] lg:text-[300px] opacity-10 -z-10">
				✦
			</span>
			<span className="absolute right-[5%] sm:right-0 top-[20%] sm:top-[45%] text-[#00ADB5] text-[80px] sm:text-[120px] md:text-[200px] lg:text-[300px] opacity-10 -z-10">
				✦
			</span>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Title Section */}
				<motion.div
					className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#393E46] tracking-wider">
						<span className="text-[#00ADB5] block sm:inline mb-2 sm:mb-0 sm:mr-2">
							OUR
						</span>
						<span className="inline-block">JOURNEY</span>
					</h2>
				</motion.div>

				{/* Mobile View */}
				<div className="block md:hidden space-y-4 sm:space-y-6">
					{experiences.map((exp, index) => (
						<motion.div
							key={exp.year}
							className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
						>
							<div className="flex items-start gap-3 sm:gap-4">
								<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#00ADB5]/10 rounded-full flex items-center justify-center">
									<span className="text-xl sm:text-2xl">{exp.icon}</span>
								</div>
								<div className="flex-1 min-w-0">
									<div className="flex items-center gap-2 mb-1 sm:mb-2">
										<span className="text-[#00ADB5] text-xs">✦</span>
										<span className="text-[#00ADB5] font-bold text-sm sm:text-base">
											{exp.year}
										</span>
									</div>
									<h3 className="text-[#222831] text-base sm:text-lg font-bold mb-1 sm:mb-2">
										{exp.title}
									</h3>
									<p className="text-[#393E46] text-xs sm:text-sm leading-relaxed">
										{exp.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Desktop Timeline */}
				<div ref={ref} className="hidden md:block relative">
					<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#00ADB5]/20" />

					{experiences.map((exp, index) => (
						<motion.div
							key={exp.year}
							className={`flex items-center justify-${
								index % 2 === 0 ? 'end' : 'start'
							} w-full mb-16`}
							initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{ delay: 0.3 * index, duration: 0.5 }}
						>
							<div
								className={`w-5/12 ${
									index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
								}`}
							>
								<div
									className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 ${
										index % 2 === 0 ? 'mr-4' : 'ml-4'
									}`}
								>
									<div
										className={`flex items-center gap-4 ${
											index % 2 === 0 ? 'flex-row-reverse' : ''
										}`}
									>
										<div className="flex-shrink-0 w-12 h-12 bg-[#00ADB5]/10 rounded-full flex items-center justify-center">
											<span className="text-2xl">{exp.icon}</span>
										</div>
										<div>
											<span className="text-[#00ADB5] text-sm font-semibold block">
												{exp.year}
											</span>
											<h3 className="text-[#222831] text-lg font-bold">
												{exp.title}
											</h3>
										</div>
									</div>
									<p className="text-gray-600 mt-3 text-sm leading-relaxed">
										{exp.description}
									</p>
								</div>
							</div>

							<div className="absolute left-1/2 transform -translate-x-1/2">
								<div className="w-4 h-4 rounded-full bg-[#00ADB5] border-4 border-white" />
							</div>
						</motion.div>
					))}
				</div>

				{/* Contact Section */}
				<motion.div
					className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-8 sm:pt-12 md:pt-16 border-t border-[#00ADB5]/10"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<div className="text-center max-w-3xl mx-auto">
						<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#393E46] tracking-wider mb-4 sm:mb-6">
							<span className="text-[#00ADB5] block sm:inline mb-2 sm:mb-0 sm:mr-2">
								GET IN
							</span>
							TOUCH
						</h2>
						<p className="text-[#393E46] mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
							Having questions about our services? We're here to help you protect
							and grow your business.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
							<a
								href="mailto:info@leonardsolutions.in"
								className="flex items-center gap-2 text-[#00ADB5] hover:text-[#222831] transition-colors text-sm sm:text-base"
							>
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								info@leonardsolutions.in
							</a>
							<a
								href="tel:+919876543210"
								className="flex items-center gap-2 text-[#00ADB5] hover:text-[#222831] transition-colors text-sm sm:text-base"
							>
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								+91 98765 43210
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Experience;
