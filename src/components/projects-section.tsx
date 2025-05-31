"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Brain, Box, Eye, Smartphone, CreditCard, Activity, TrendingUp, Users, Gamepad2, ShoppingCart, GraduationCap } from "lucide-react"

const projects = [
	{
		title: "E-commerce Platform",
		description: "Full-featured e-commerce solution with product catalog, shopping cart, payment integration, and order management system.",
		icon: ShoppingCart,
		image: "/projects/E-commerce Platform.png",
tags: ["ecommerce", "react", "nodejs", "stripe", "mongodb", "responsive"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "Fitness Tracking App",
		description: "Comprehensive fitness application with workout tracking, progress monitoring, social features, and personalized training plans.",
		icon: Activity,
		image: "/projects/Fitness Tracking App.png",
tags: ["fitness", "mobile", "tracking", "health", "react-native", "wellness"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "Educational Learning Platform",
		description: "Interactive e-learning platform with course management, progress tracking, and collaborative learning features for students and educators.",
		icon: GraduationCap,
		image: "/projects/ducational Learning Platform.png",
tags: ["education", "e-learning", "react", "nodejs", "mongodb", "lms"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "Social Media Dashboard",
		description: "Unified social media management platform with content scheduling, analytics, engagement tracking, and multi-platform integration.",
		icon: Users,
		image: "/projects/Social Media Dashboard.png",
tags: ["social-media", "dashboard", "analytics", "content", "scheduling", "apis"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "AI-Powered Customer Support",
		description: "Intelligent customer support system with AI chatbots, automated ticket routing, and sentiment analysis for enhanced customer experience.",
		icon: Brain,
		image: "/projects/AI-Powered Customer Support.png",
tags: ["ai", "nlp", "chatbot", "react", "nodejs", "machine-learning"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "Fintech Mobile App",
		description: "Mobile financial application with account management, transaction history, budgeting tools, and secure payment processing.",
		icon: Smartphone,
		image: "/projects/Fintech Mobile App.png",
tags: ["fintech", "react-native", "mobile", "payments", "security", "banking"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "AI-Powered Health Dashboard",
		description: "Comprehensive health monitoring dashboard with AI insights, data visualization, and predictive analytics for personalized healthcare.",
		icon: Activity,
		image: "/projects/AI-Powered Health Dashboard.png",
tags: ["healthcare", "ai", "dashboard", "data-viz", "react", "analytics"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "Crypto Trading Platform",
		description: "Advanced cryptocurrency trading platform with real-time market data, portfolio management, and secure transaction processing.",
		icon: CreditCard,
		image: "/projects/Crypto Trading Platform.png",
tags: ["crypto", "trading", "blockchain", "react", "websockets", "fintech"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "AR Product Visualization",
		description: "Augmented reality application for product visualization, allowing customers to view products in their real environment before purchase.",
		icon: Eye,
		image: "/projects/AR Product Visualization.png",
tags: ["ar", "webxr", "threejs", "mobile", "ecommerce", "visualization"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "3D Product Configurator",
		description: "An interactive 3D product visualization tool that allows users to customize and configure products in real-time with advanced rendering capabilities.",
		icon: Box,
		image: "/projects/3D Product Configurator.png",
tags: ["threejs", "webgl", "3d", "react", "typescript", "customization"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "Revenue Tracking App",
		description: "Business intelligence dashboard for revenue tracking, financial analytics, and performance monitoring with real-time insights.",
		icon: TrendingUp,
		image: "/projects/Revenue Tracking and Management App.png",
tags: ["analytics", "dashboard", "revenue", "business", "charts", "reporting"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "Virtual Reality Game",
		description: "Immersive VR gaming experience with interactive environments, physics simulation, and multiplayer capabilities.",
		icon: Gamepad2,
		image: "/projects/Virtual Reality Game.png",
tags: ["vr", "webxr", "gaming", "threejs", "physics", "multiplayer"],
		sourceCode: "#",
		demoUrl: "#",
	},
]

export function ProjectsSection() {
	return (
		<section id="projects" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 grid-dots">
			<div className="container mx-auto">
				<div className="text-center mb-16">
					<span className="text-sm text-primary px-4 py-2 rounded-full bg-primary/10 inline-block mb-4">
						My Portfolio
					</span>
					<h1 className="text-4xl sm:text-5xl font-bold text-foreground">
						Featured Projects
					</h1>
				</div>

				<div className="space-y-8">
{projects.map((project) => {
const Icon = project.icon
return (							<Card
								key={project.title}
								className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden mx-auto max-w-6xl"
							>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
									{/* Project Image */}
									<div className="relative h-64 lg:h-full w-full overflow-hidden order-2 lg:order-1">
										<Image
											src={project.image}
											alt={project.title}
											fill
className="object-cover"
										/>
										<div className="absolute top-4 left-4 p-2 rounded-lg bg-background/90 backdrop-blur-sm">
											<Icon className="h-5 w-5 text-primary" />
										</div>
									</div>

									{/* Project Content */}
									<div className="p-6 lg:p-8 flex flex-col justify-center order-1 lg:order-2">
										<CardHeader className="p-0 pb-4">
											<CardTitle className="text-xl lg:text-2xl xl:text-3xl leading-tight mb-3">
												{project.title}
											</CardTitle>
											<CardDescription className="text-base lg:text-lg leading-relaxed">
												{project.description}
											</CardDescription>
										</CardHeader>

										<CardContent className="p-0 space-y-6">
											{/* Tags */}
											<div className="flex flex-wrap gap-2">
												{project.tags.slice(0, 6).map((tag) => (
													<Badge
														key={tag}
														variant="outline"
														className="text-xs px-3 py-1"
													>
														{tag}
													</Badge>
												))}
												{project.tags.length > 6 && (
													<Badge
														variant="outline"
														className="text-xs px-3 py-1"
													>
														+{project.tags.length - 6} more
													</Badge>
												)}
											</div>

											{/* Action buttons */}
											<div className="flex flex-col sm:flex-row gap-3 pt-2">
												<Button
													variant="outline"
													size="default"
													className="flex-1"
													asChild
												>
													<a
														href={project.sourceCode}
														className="flex items-center justify-center gap-2"
													>
														<Github className="h-4 w-4" />
														<span>Source Code</span>
													</a>
												</Button>
												<Button size="default" className="flex-1" asChild>
													<a
														href={project.demoUrl}
														className="flex items-center justify-center gap-2"
													>
														<ExternalLink className="h-4 w-4" />
														<span>Live Demo</span>
													</a>
												</Button>
											</div>
										</CardContent>
									</div>
								</div>
							</Card>
						)
					})}
				</div>
			</div>		</section>
	)
}
