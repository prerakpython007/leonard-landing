"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import React from 'react';

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

interface MountainJourneyBorderProps {
  className?: string;
  height?: number;
}

const MountainJourneyBorder: React.FC<MountainJourneyBorderProps> = ({ 
  className = '', 
  height = 200 
}) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ height: `${height}px` }}>
      {/* Background */}
      <div className="absolute inset-0 bg-transparent" />
      
      {/* Mountain layers */}
      <svg 
        className="absolute bottom-0 w-full h-full" 
        viewBox="0 0 1200 400" 
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Single clean mountain line */}
        <path
          d="M0,340 L60,335 L80,330 L95,333 L120,310 L135,315 L150,325 L165,322 L180,300 L195,305 L200,315 L215,312 L220,305 L235,308 L250,320 L265,318 L280,290 L295,293 L320,295 L335,292 L350,270 L365,273 L380,275 L395,272 L420,280 L445,275 L480,250 L510,245 L550,240 L585,235 L620,220 L655,215 L680,200 L715,195 L750,180 L785,175 L820,160 L855,155 L880,140 L915,135 L950,160 L970,180 L990,170 L1020,140 L1040,120 L1055,95 L1070,60 L1080,40 L1090,25 L1100,15 L1110,10 L1120,15 L1130,25 L1140,40 L1150,60 L1165,85 L1180,105 L1200,140"
          stroke="#00ADB5"
          strokeWidth="1"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const IndianFlag = () => (
	<div className="absolute" style={{ left: '92%', top: '5%', transform: 'translateX(-50%)' }}>
		<div className="relative">
			{/* Flag pole */}
			<div className="w-1 bg-gray-700 h-24 absolute left-1/2 transform -translate-x-1/2"></div>
			{/* Flag */}
			<div className="w-14 h-9 relative top-2 shadow-lg border border-gray-300">
				<div className="h-1/3 bg-orange-500"></div>
				<div className="h-1/3 bg-white flex items-center justify-center">
					<div className="w-2 h-2 border border-blue-600 rounded-full relative">
						<div className="absolute inset-0.5 border border-blue-600 rounded-full"></div>
					</div>
				</div>
				<div className="h-1/3 bg-green-600"></div>
			</div>
		</div>
	</div>
);

const Experience = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

	// Positions for timeline items along the mountain curve - adjusted for the rising mountain
	const timelinePositions = [
		{ left: '10%', top: '75%' },
		{ left: '30%', top: '65%' },
		{ left: '55%', top: '45%' },
		{ left: '80%', top: '15%' },
	];

	return (
		<section className="min-h-screen bg-[#EEEEEE] rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
			{/* Title Section */}
			 <motion.h1
        className="text-[#000000] text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-48 relative"
        style={{ 
          letterSpacing: "0.4em",
          textShadow: "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4), -14px 6px 0px rgba(40, 40, 40, 0.3), -18px 8px 0px rgba(20, 20, 20, 0.2)"
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        OUR JOURNEY
      </motion.h1>

			{/* Desktop Mountain Timeline - Reduced Width */}
			<div ref={ref} className="hidden lg:block relative h-96 mb-20 w-[90%] mx-auto">
				{/* Mountain Border - Reduced Width */}
				<MountainJourneyBorder height={384} />
				
				{/* Indian Flag */}
				<IndianFlag />

				{/* Milestone Points on Mountain */}
				<div className="absolute inset-0">
					{/* Milestone dots positioned exactly on the mountain curve based on SVG path */}
					{experiences.map((exp, index) => (
						<div 
							key={index}
							className="absolute w-4 h-4 bg-[#00ADB5] rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform duration-200" 
							style={{ 
								left: ['0%', '30%', '62%', '92.5%'][index], 
								top: ['85%', '68%', '45%', '2.5%'][index], 
								transform: 'translate(-50%, -50%)' 
							}}
							onMouseEnter={() => setHoveredPoint(index)}
							onMouseLeave={() => setHoveredPoint(null)}
						>
							{/* Hover Card */}
							{hoveredPoint === index && (
								<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/30 min-w-48 z-50">
									<div className="flex items-center gap-2 mb-1">
										<span className="text-lg">{exp.icon}</span>
										<span className="text-[#00ADB5] text-sm font-bold">{exp.year}</span>
									</div>
									<h4 className="text-[#222831] text-sm font-bold mb-1">{exp.title}</h4>
									<p className="text-[#393E46] text-xs leading-relaxed">{exp.description}</p>
									{/* Arrow pointing down */}
									<div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			<div className="max-w-6xl mx-auto relative z-10 h-full px-4 sm:px-6 md:px-8">
				{/* Mobile View */}
				<div className="block lg:hidden space-y-4 sm:space-y-6 mb-20">
					{experiences.map((exp, index) => (
						<motion.div
							key={exp.year}
							className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-white/20"
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
			</div>
		</section>
	);
};

export default Experience;
// 						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
// 							<a
// 								href="mailto:info@leonardsolutions.in"
// 								className="flex items-center gap-2 text-[#00ADB5] hover:text-[#222831] transition-colors text-sm sm:text-base"
// 							>
// 								<svg
// 									className="w-5 h-5"
// 									fill="none"
// 									stroke="currentColor"
// 									viewBox="0 0 24 24"
// 								>
// 									<path
// 										strokeLinecap="round"
// 										strokeLinejoin="round"
// 										strokeWidth={2}
// 										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
// 									/>
// 								</svg>
// 								info@leonardsolutions.in
// 							</a>
// 							<a
// 								href="tel:+919876543210"
// 								className="flex items-center gap-2 text-[#00ADB5] hover:text-[#222831] transition-colors text-sm sm:text-base"
// 							>
// 								<svg
// 									className="w-5 h-5"
// 									fill="none"
// 									stroke="currentColor"
// 									viewBox="0 0 24 24"
// 								>
// 									<path
// 										strokeLinecap="round"
// 										strokeLinejoin="round"
// 										strokeWidth={2}
// 										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
// 									/>
// 								</svg>
// 								+91 98765 43210
// 							</a>
// 						</div>
// 					</div>
// 				</motion.div>
// 			</div>
// 		</section>
// 	);
// };

// export default Experience;
// 									stroke="currentColor"
// 									viewBox="0 0 24 24"
// 								>
// 									<path
// 										strokeLinecap="round"
// 										strokeLinejoin="round"
// 										strokeWidth={2}
// 										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
// 									/>
// 								</svg>
// 								info@leonardsolutions.in
// 							</a>
// 							<a
// 								href="tel:+919876543210"
// 								className="flex items-center gap-2 text-[#00ADB5] hover:text-[#222831] transition-colors text-sm sm:text-base"
// 							>
// 								<svg
// 									className="w-5 h-5"
// 									fill="none"
// 									stroke="currentColor"
// 									viewBox="0 0 24 24"
// 								>
// 									<path
// 										strokeLinecap="round"
// 										strokeLinejoin="round"
// 										strokeWidth={2}
// 										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
// 									/>
// 								</svg>
// 								+91 98765 43210
// 							</a>
// 						</div>
// 					</div>
// 				</motion.div>
// 			</div>
// 		</section>
// 	);
// };

// export default Experience;
