'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const TEAM_MEMBERS = [
	{
		name: 'John Doe',
		position: 'Senior Partner',
		role: 'Intellectual Property',
	},
	{
		name: 'Jane Smith',
		position: 'Managing Partner',
		role: 'Corporate Law',
	},
	{
		name: 'Robert Johnson',
		position: 'Associate',
		role: 'Employment Law',
	},
	{
		name: 'Emily Williams',
		position: 'Senior Associate',
		role: 'Family Law',
	},
	{
		name: 'Michael Brown',
		position: 'Partner',
		role: 'IP Litigation',
	},
	{
		name: 'Sarah Davis',
		position: 'Counsel',
		role: 'Corporate Compliance',
	},
];

export default function OurTeamPage() {
	const heroRef = useRef<HTMLDivElement>(null);
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 600], [0, 120]);
	const gradientY = useTransform(scrollY, [0, 600], [0, 60]);
	const imgScale = useTransform(scrollY, [0, 600], [1, 1.08]);

	return (
		<div className="relative font-montserrat">
			{/* Hero Section */}
			<section ref={heroRef} className="relative h-[90vh] flex items-center justify-center bg-white overflow-hidden">
				{/* Sharper, bigger, more angular L-shaped blue gradients */}
				<motion.div
					className="absolute inset-0 pointer-events-none z-0"
					style={{ y: gradientY }}
				>
					{/* Left vertical bar - sharper angle, gradient more towards center */}
					<div
						className="absolute left-0 top-0 h-full w-[28vw] min-w-[180px]"
						style={{
							background: 'linear-gradient(180deg, #00ADB5 0%, transparent 70%)',
							clipPath: 'polygon(0 0, 100% 0, 55% 70%, 0 100%)',
							opacity: 0.22,
						}}
					/>
					{/* Bottom horizontal bar - sharper angle */}
					<div
						className="absolute left-0 bottom-0 w-full h-[22vw] min-h-[140px]"
						style={{
							background: 'linear-gradient(90deg, #00ADB5 0%, transparent 95%)',
							clipPath: 'polygon(0 100%, 0 0, 80% 60%, 100% 100%)',
							opacity: 0.22,
						}}
					/>
				</motion.div>
				<motion.div
					className="absolute inset-0 w-full h-full z-10"
					style={{ y, scale: imgScale }}
				>
					<img
						src="/our-team.png"
						alt="Our Team"
						className="object-cover w-full h-full"
						style={{ objectPosition: 'center 85%' }}
					/>
				</motion.div>
				<div className="text-center px-4 relative z-20 flex flex-col items-center justify-center w-full">
					<motion.h1
						className="font-montserrat text-white font-extrabold mb-6 tracking-[0.22em]"
						style={{
							fontSize: 'clamp(5rem, 18vw, 15rem)',
							textShadow:
								'0 4px 32px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.35), 0 1px 1px rgba(0,0,0,0.25)',
							letterSpacing: '0.22em',
						}}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
					>
						OUR TEAM
					</motion.h1>
				</div>
			</section>

			{/* Info Section */}
			<section className="relative bg-white px-4 py-36 md:px-16 lg:px-24 overflow-visible">
				<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative">
					{/* Left: Big paragraph */}
					<div className="flex-1 z-10">
						<h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#00ADB5] mb-8 font-montserrat leading-tight drop-shadow-lg">
							Who We Are
						</h2>
						<p className="text-2xl text-[#393E46] font-light max-w-2xl leading-relaxed">
							We are a diverse team of legal professionals, strategists, and innovators
							dedicated to delivering exceptional results for our clients. Our expertise
							spans intellectual property, corporate law, litigation, and more. <br /><br />
							At the heart of our practice is a commitment to integrity, innovation, and
							client success. We believe in building lasting relationships, understanding
							your unique needs, and providing tailored solutions that drive real impact.
							Our global perspective and decades of experience empower us to navigate
							complex legal landscapes and deliver results that matter.
						</p>
						<div className="flex flex-wrap gap-6 mt-10">
							<div className="flex items-center gap-3 bg-[#00ADB5]/10 px-4 py-2 rounded-full shadow-sm">
								<span className="w-3 h-3 bg-[#00ADB5] rounded-full"></span>
								<span className="text-[#393E46] font-semibold text-lg">
									Decades of Experience
								</span>
							</div>
							<div className="flex items-center gap-3 bg-[#00ADB5]/10 px-4 py-2 rounded-full shadow-sm">
								<span className="w-3 h-3 bg-[#00ADB5] rounded-full"></span>
								<span className="text-[#393E46] font-semibold text-lg">
									Client-Centric Approach
								</span>
							</div>
							<div className="flex items-center gap-3 bg-[#00ADB5]/10 px-4 py-2 rounded-full shadow-sm">
								<span className="w-3 h-3 bg-[#00ADB5] rounded-full"></span>
								<span className="text-[#393E46] font-semibold text-lg">
									Global Perspective
								</span>
							</div>
						</div>
					</div>
					{/* Right: Bigger question mark image */}
					<div className="flex-1 flex justify-center items-center z-10 mt-12 lg:mt-0">
						<div className="relative w-full max-w-[600px] h-[600px]">
							<img
								src="/question-mark.jpg"
								alt="Who We Are"
								className="object-contain w-full h-full"
								loading="eager"
								decoding="async"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Our Team Grid Section */}
			<section className="py-16 sm:py-32 bg-[#000000] px-4 md:px-16 lg:px-24 relative">
				<div className="max-w-7xl mx-auto">
					<motion.div
						className="text-center mb-12 sm:mb-16 relative"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<motion.h1
							className="font-montserrat text-[#ffffff] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-24 relative z-10 px-4"
							style={{
								letterSpacing: '0.3em',
								textShadow:
									'-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)',
							}}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
							viewport={{ once: true, margin: '0px 0px -100px 0px' }}
						>
							Meet Our Team
						</motion.h1>
						<p className="text-xl text-[#eeeeee]/80 mt-4 max-w-4xl mx-auto">
							Expert Professionals Dedicated to Your Intellectual Property & Corporate
							Law Needs
							<br />
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
						{TEAM_MEMBERS.map((member, index) => {
							// ...existing code for team cards...
							const bgColors = [
								'from-blue-50/80 to-blue-100/80',
								'from-green-50/80 to-green-100/80',
								'from-purple-50/80 to-purple-100/80',
								'from-orange-50/80 to-orange-100/80',
								'from-pink-50/80 to-pink-100/80',
								'from-indigo-50/80 to-indigo-100/80',
								'from-yellow-50/80 to-yellow-100/80',
								'from-red-50/80 to-red-100/80',
							];

							return (
								<div key={member.name} className="space-y-4">
									<motion.div
										className="group bg-white overflow-hidden transition-all duration-300 hover:shadow-xl relative min-h-[450px]"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.05 }}
										viewport={{ once: true }}
									>
										{/* Image Section */}
										<div
											className={`relative h-80 bg-gradient-to-br ${bgColors[index % bgColors.length]} overflow-visible`}
										>
											<div className="absolute inset-0 flex items-start justify-center pt-6">
												<div className="relative w-64 h-72 overflow-hidden">
													<Image
														src={`/people${(index % 15) + 1}.png`}
														alt={member.name}
														width={256}
														height={288}
														className="object-cover object-top w-full h-full"
														style={{
															objectPosition: 'center top',
														}}
													/>
												</div>
											</div>
										</div>
										{/* Content Section */}
										<div className="p-3 space-y-1 pt-4 h-24 flex flex-col justify-center">
											<h3 className="text-lg font-bold text-[#222831] text-center">
												{member.name}
											</h3>
											<div className="text-center">
												<p className="text-xs text-[#393E46] font-medium">
													{member.position}
												</p>
												<p className="text-xs text-[#00ADB5] font-semibold uppercase tracking-wider">
													{member.role}
												</p>
											</div>
										</div>
										{/* Hover Overlay */}
										<div
											className={`absolute inset-0 bg-gradient-to-br ${bgColors[index % bgColors.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between text-[#222831] p-6 pt-12`}
										>
											<div className="text-center mt-5">
												<h4 className="text-xl font-extrabold mb-3 text-center">
													Practice Areas
												</h4>
												<div className="text-center leading-tight">
													<p className="text-lg font-bold">Family Law</p>
													<p className="text-lg font-bold">
														Family Law Mediation
													</p>
													<p className="text-lg font-bold">Employment Law</p>
													<p className="text-lg font-bold">Intellectual Property</p>
													<p className="text-lg font-bold">Corporate Law</p>
												</div>
											</div>
											<div className="text-center">
												<p className="text-lg font-semibold cursor-pointer hover:underline">
													[Read full bio]
												</p>
											</div>
										</div>
									</motion.div>
									{/* Buttons below the card */}
									<div className="flex gap-2">
										<button className="flex-1 border border-[#00ADB5] text-[#00ADB5] py-2 px-3 text-xs font-medium hover:bg-[#00ADB5]/10 transition-colors duration-200">
											Read Full Bio
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
}


