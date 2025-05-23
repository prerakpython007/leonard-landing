"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const blogs = [
	{
		id: 1,
		title: "Understanding Intellectual Property Rights in the Digital Age",
		excerpt:
			"A comprehensive guide to protecting your digital assets and innovations in today's fast-paced technological landscape...",
		image: "/blog-1.png",
		date: "2024-01-15",
		category: "IP Rights",
	},
	{
		id: 2,
		title: "Trademark Registration: A Step-by-Step Guide",
		excerpt:
			"Everything you need to know about the trademark registration process, from initial search to final registration...",
		image: "/blog-2.png",
		date: "2024-01-10",
		category: "Trademarks",
	},
	{
		id: 3,
		title: "Patent Filing Strategies for Startups",
		excerpt:
			"Essential strategies and best practices for startups looking to protect their innovations through patents...",
		image: "/blog-3.webp",
		date: "2024-01-05",
		category: "Patents",
	},
]

export default function BlogsPage() {
	return (
		<div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[170px] font-montserrat overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
			{/* Grid Pattern Overlay */}
			<div
				className="fixed inset-0 pointer-events-none"
				style={{
					backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
					backgroundSize: "30px 30px",
				}}
			/>

			{/* Hero Section with Corner Angles */}
			<motion.section
				className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				{/* Corner Angles - Desktop only */}
				<div className="absolute top-8 left-8 hidden h-12 w-12 border-t-2 border-l-2 border-[#00ADB5] lg:block" />
				<div className="absolute top-8 right-8 hidden h-12 w-12 border-t-2 border-r-2 border-[#00ADB5] lg:block" />
				<div className="absolute bottom-8 left-8 hidden h-12 w-12 border-b-2 border-l-2 border-[#00ADB5] lg:block" />
				<div className="absolute bottom-8 right-8 hidden h-12 w-12 border-b-2 border-r-2 border-[#00ADB5] lg:block" />

				<motion.div
					className="max-w-7xl mx-auto text-center"
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
						Our Blog
						<span className="absolute top-1/2 -left-6 sm:-left-8 md:-left-12 lg:-left-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00ADB5] opacity-50 animate-pulse">
							✦
						</span>
						<span className="absolute top-1/2 -right-6 sm:-right-8 md:-right-12 lg:-right-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00ADB5] opacity-50 animate-pulse">
							✦
						</span>
					</h1>
					<p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
						Stay Updated with Insights on Intellectual Property Law
					</p>
				</motion.div>
			</motion.section>

			{/* Blog Posts Section */}
			<section className="py-12 sm:py-16 md:py-24 space-y-12 sm:space-y-16 md:space-y-24">
				<div className="max-w-7xl mx-auto">
					<motion.div
						className="text-center mb-8 sm:mb-12 md:mb-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222831] mb-4">
							Latest Blog Posts
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
						{blogs.map((blog, index) => (
							<motion.div
								key={blog.id}
								className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-white/95 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -5 }}
							>
								{/* Decorative elements */}
								<div className="absolute top-0 left-0 w-20 h-20 bg-[#00ADB5]/5 rounded-br-[100px]" />
								<div className="absolute top-4 left-4 w-2 h-2 bg-[#00ADB5] rounded-full" />

								<div className="relative h-48 sm:h-56 overflow-hidden">
									<Image
										src={blog.image}
										alt={blog.title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
									<div className="absolute top-4 right-4">
										<span className="px-4 py-1 bg-white/90 text-[#00ADB5] rounded-full text-sm font-medium">
											{blog.category}
										</span>
									</div>
								</div>

								<div className="p-4 sm:p-6 md:p-8">
									<div className="flex items-center gap-4 mb-4 text-sm text-[#393E46]/70">
										<div className="flex items-center gap-2">
											<span className="w-1 h-1 rounded-full bg-[#00ADB5]" />
											<span>
												{new Date(blog.date).toLocaleDateString("en-US", {
													month: "long",
													day: "numeric",
													year: "numeric",
												})}
											</span>
										</div>
										<div className="flex items-center gap-2">
											<span className="w-1 h-1 rounded-full bg-[#00ADB5]" />
											<span>5 min read</span>
										</div>
									</div>

									<h3 className="text-xl font-bold text-[#222831] mb-3 line-clamp-2">
										{blog.title}
									</h3>
									<p className="text-[#393E46]/80 mb-6 line-clamp-3">
										{blog.excerpt}
									</p>

									<Link
										href={`/blogs/${blog.id}`}
										className="inline-flex items-center text-[#222831] hover:text-[#00ADB5] transition-colors duration-300 font-medium group/link"
									>
										Read Article
										<ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
									</Link>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}