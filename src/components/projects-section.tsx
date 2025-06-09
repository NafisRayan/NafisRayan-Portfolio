"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Brain, Box, Eye, Smartphone, CreditCard, Activity, TrendingUp, Users, Gamepad2, ShoppingCart, GraduationCap, LayoutDashboard, Github } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const projects = [
	{
		title: "E-commerce Platform",
		description: "Full-featured e-commerce solution with comprehensive product catalog, advanced shopping cart functionality, secure payment integration using Stripe, and complete order management system. Features include user authentication, inventory tracking, order processing, and responsive design for optimal shopping experience across all devices.",
		icon: ShoppingCart,
		image: "/projects/E-commerce Platform.png",
tags: ["ecommerce", "react", "nodejs", "stripe", "mongodb", "responsive"],
		sourceCode: "https://github.com/NafisRayan/GoMert-Ecommerce",
		demoUrl: "go-mert-ecommerce.vercel.app",
	},
	{
		title: "Admin Dashboard",
		description: "Modern admin panel dashboard built with ShadcnUI in NextJS featuring light/dark mode, responsive design, and accessibility. Includes built-in sidebar component, global search command, 10+ pages, and custom components. Created as reusable collection for future projects with code adapted from ShadcnUI examples.",
		icon: LayoutDashboard,
		image: "/projects/Admin Dashboard.png",
		tags: ["react", "light-theme", "admin", "dark-theme", "reactjs", "nextjs", "admin-dashboard", "admin-panel", "shadcn-ui", "shadcn"],
		sourceCode: "https://github.com/NafisRayan/AdminPanel-Shadcn",
		demoUrl: "admin-panel-demo-five.vercel.app",
	},
	{
		title: "Fitness Tracking App",
		description: "Comprehensive fitness application featuring advanced workout tracking, detailed progress monitoring, social networking features, and personalized training plans. Built with React Native for cross-platform compatibility, includes SQLite database for local storage, wellness insights, and motivation tools for achieving fitness goals effectively.",
		icon: Activity,
		image: "/projects/Fitness Tracking App.png",
tags: ["fitness", "mobile", "tracking", "health", "react-native", "sqlite", "wellness"],
		sourceCode: "https://github.com/NafisRayan/FitUp-ReactNative",
		demoUrl: "https://github.com/NafisRayan/FitUp-ReactNative",
	},
	{
		title: "Educational Learning Platform",
		description: "Interactive e-learning platform with comprehensive course management system, detailed progress tracking, and collaborative learning features for students and educators. Built with React and NodeJS, includes Firebase integration, learning management system capabilities, assessment tools, and real-time communication features for enhanced education.",
		icon: GraduationCap,
		image: "/projects/ducational Learning Platform.png",
		tags: ["education", "e-learning", "react", "nodejs", "firebase", "lms"],
		sourceCode: "https://github.com/NafisRayan/EdTech",
		demoUrl: "https://ed-tech-rouge.vercel.app/",
	},
	{
		title: "Social Media Dashboard",
		description: "Unified social media management platform featuring advanced content scheduling, comprehensive analytics dashboard, engagement tracking across multiple platforms, and seamless API integrations. Provides content creators and businesses with powerful tools for managing their social media presence and analyzing performance metrics effectively.",
		icon: Users,
		image: "/projects/Social Media Dashboard.png",
tags: ["social-media", "dashboard", "analytics", "content", "scheduling", "apis"],
		sourceCode: "https://github.com/NafisRayan/chatCOMsystem",
		demoUrl: "https://github.com/NafisRayan/chatCOMsystem",
	},
	{
		title: "Ecommerce Flutter App",
		description: "Modern cross-platform e-commerce mobile application built with Flutter and Dart, featuring intuitive product browsing, advanced shopping cart functionality, comprehensive user profiles, and seamless shopping experience. Optimized for both iOS and Android platforms with responsive design and smooth performance across devices.",
		icon: Smartphone,
		image: "/projects/Ecommerce-Flutter.png",
tags: ["flutter", "dart", "mobile", "ecommerce", "cross-platform", "ios", "android"],
		sourceCode: "https://github.com/nafisrayan/ecommerce-flutter",
		demoUrl: "https://github.com/nafisrayan/ecommerce-flutter",
	},
	{
		title: "AI-Powered Customer Support",
		description: "Intelligent customer support system featuring advanced AI chatbots, automated ticket routing, and sentiment analysis for enhanced customer experience. Built with React and NodeJS, includes natural language processing, machine learning algorithms, and real-time communication for improved customer service and support efficiency.",
		icon: Brain,
		image: "/projects/AI-Powered Customer Support.png",
tags: ["ai", "nlp", "chatbot", "react", "nodejs", "machine-learning"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "Fintech Mobile App",
		description: "Secure mobile financial application featuring comprehensive account management, detailed transaction history, advanced budgeting tools, and encrypted payment processing. Built with React Native and Supabase backend, includes banking integrations, financial analytics, security features, and user-friendly interface for seamless financial management experience.",
		icon: Smartphone,
		image: "/projects/Fintech Mobile App.png",
tags: ["fintech", "react-native", "mobile", "payments", "security", "supabase", "banking"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "HealthCare Dashboard",
		description: "Modern React-based healthcare web application built with Vite and Tailwind CSS for managing patient health data. Features interactive blood pressure charts, detailed diagnosis history, and comprehensive patient management tools. Utilizes Chart.js for data visualization with responsive design principles for optimal healthcare workflow.",
		icon: Activity,
		image: "/projects/Health Dashboard.png",
		tags: ["healthcare", "react", "dashboard", "vite", "tailwind", "chartjs", "responsive", "patient-data"],
		sourceCode: "https://github.com/NafisRayan/HealthCare-Dashboard",
		demoUrl: "health-care-dashboard-sigma.vercel.app",
	},
	{
		title: "Crypto Trading Platform",
		description: "Advanced cryptocurrency trading platform featuring real-time market data, comprehensive portfolio management, and secure transaction processing. Built with React and WebSocket technology for live updates, includes blockchain integration, trading analytics, charting tools, and robust security measures for safe cryptocurrency trading experience.",
		icon: CreditCard,
		image: "/projects/Crypto Trading Platform.png",
tags: ["crypto", "trading", "blockchain", "react", "websockets", "fintech"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "AR Product Visualization",
		description: "Innovative augmented reality application for immersive product visualization, allowing customers to view and interact with products in their real environment before making purchase decisions. Built with WebXR and ThreeJS technology for mobile devices, enhancing e-commerce experience through cutting-edge AR technology.",
		icon: Eye,
		image: "/projects/AR Product Visualization.png",
tags: ["ar", "webxr", "threejs", "mobile", "ecommerce", "visualization"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "3D Lego Simulation",
		description: "A modern web-based 3D Lego simulation game built with **Next.js 15**, **React 19**, and **Three.js**. Create, modify, and explore virtual Lego structures using an elegant UI and immersive 3D environment.",
		icon: Box,
		image: "/projects/Lego Simulation.png",
tags: ["nextjs", "react", "threejs", "3d", "lego", "simulation"],
		sourceCode: "https://github.com/NafisRayan/Lego-Blocks-Game",
		demoUrl: "https://lego-blocks-game.vercel.app",
	},
	{
		title: "Revenue Tracking App",
		description: "Comprehensive business intelligence dashboard for revenue tracking, advanced financial analytics, and performance monitoring with real-time insights. Features interactive charts, reporting tools, business metrics analysis, data visualization capabilities, and dashboard functionality for effective business decision-making and financial management strategies.",
		icon: TrendingUp,
		image: "/projects/Revenue Tracking and Management App.png",
tags: ["analytics", "dashboard", "revenue", "business", "charts", "reporting"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "Virtual Reality Game",
		description: "Immersive virtual reality gaming experience featuring interactive 3D environments, realistic physics simulation, and engaging multiplayer capabilities. Built with WebXR and ThreeJS technology, includes advanced gaming mechanics, collision detection, real-time networking, and optimized performance for smooth VR gameplay across devices.",
		icon: Gamepad2,
		image: "/projects/Virtual Reality Game.png",
		tags: ["vr", "webxr", "gaming", "threejs", "physics", "multiplayer"],
		sourceCode: "https://github.com/NafisRayan/FPS-Game-ThreeJS",
		demoUrl: "https://nafisrayan.github.io/FPS-Game-ThreeJS/",
	},
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Smoother calculation with reduced multiplier for gentler movement
        const currentOffset = Math.max(0, -rect.top) * 0.02;
        setScrollOffset(currentOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (    <section id="projects" ref={sectionRef} className="pt-12 sm:pt-16 lg:pt-24 pb-0 mb-3 sm:mb-4 lg:mb-6 px-4 sm:px-6 lg:px-8 grid-dots">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
					<span className="text-xs sm:text-sm text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 inline-block mb-3 sm:mb-4">
						My Portfolio
					</span>
					<h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground">
						Featured Projects
					</h1>
				</div><div className="max-w-6xl mx-auto relative stacking-container">
					{projects.map((project, index) => {
						const Icon = project.icon
						return (
							<div 
								key={project.title}
								className="stacking-item transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"								style={{
									zIndex: 100 + index,
									transform: `translateY(${index * 10 - scrollOffset}px)`,
									transformOrigin: 'center top'
								}}
							><Card
									className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer overflow-hidden py-0 stacking-card h-full"
								>
								<div className="flex flex-col lg:grid lg:grid-cols-1 xl:grid-cols-2 gap-0 h-full">
									{/* Project Image */}
									<div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden order-1 xl:order-1">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
										/>
										<div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-1.5 sm:p-2 rounded-lg bg-background/90 backdrop-blur-sm">
											<Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
										</div>
									</div>

									{/* Project Content */}
									<div className="p-4 sm:p-6 lg:p-6 xl:p-8 order-2 xl:order-2 flex flex-col h-full">
										<CardHeader className="p-0 pb-3 sm:pb-4">
											<CardTitle className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight mb-2 sm:mb-3">
												{project.title}
											</CardTitle>
											<CardDescription className="text-sm sm:text-base lg:text-lg leading-relaxed">
												{project.description}
											</CardDescription>
										</CardHeader>

										<CardContent className="p-0 flex flex-col h-full justify-between">
											{/* Tags */}
											<div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
												{project.tags.slice(0, 6).map((tag) => (
													<Badge
														key={tag}
														variant="outline"
														className="text-xs px-2 sm:px-3 py-1"
													>
														{tag}
													</Badge>
												))}
												{project.tags.length > 6 && (
													<Badge
														variant="outline"
														className="text-xs px-2 sm:px-3 py-1"
													>
														+{project.tags.length - 6} more
													</Badge>
												)}
											</div>

											{/* Action buttons */}
											<div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2">
												<Button
													variant="outline"
													size="sm"
													className="flex-1 h-9 sm:h-10"
													asChild
												>
													<a
														href={project.sourceCode}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center justify-center gap-2"
													>
														<Github className="h-3 w-3 sm:h-4 sm:w-4" />
														<span className="text-sm">Source Code</span>
													</a>
												</Button>
												<Button 
													size="sm" 
													className="flex-1 h-9 sm:h-10" 
													asChild
												>
													<a
														href={project.demoUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center justify-center gap-2"
													>
														<ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
														<span className="text-sm">Live Demo</span>
													</a>
												</Button>
											</div>
										</CardContent>
									</div>
								</div>
							</Card>
							</div>
						)
					})}
				</div>
			</div>		</section>
	)
}
