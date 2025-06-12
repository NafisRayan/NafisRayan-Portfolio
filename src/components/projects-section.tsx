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
		description: "This full-featured e-commerce solution offers a comprehensive product catalog and advanced shopping cart. It features secure Stripe payment integration and a complete order management system. User authentication, inventory tracking, efficient order processing, and responsive design ensure an optimal shopping experience across all devices.",
		icon: ShoppingCart,
		image: "/projects/E-commerce Platform.png",
		tags: ["ecommerce", "react", "nodejs", "stripe", "mongodb", "responsive"],
		sourceCode: "https://github.com/NafisRayan/GoMert-Ecommerce",
		demoUrl: "https://go-mert-ecommerce.vercel.app",
	},
	{
		title: "E-commerce ReactNative",
		description: "This React Native e-commerce app, built with Expo, delivers a seamless mobile shopping experience. Key features include a detailed product catalog, intuitive shopping cart, secure user authentication, and efficient order management. Optimized for both iOS and Android, it showcases cross-platform development skills and provides a user-friendly interface.",
		icon: ShoppingCart,
		image: "/projects/E-commerce ReactNative.png",
		tags: ["react-native", "expo", "ecommerce", "mobile"],
		sourceCode: "https://github.com/NafisRayan/Ecommerce-Mobile",
		demoUrl: "https://github.com/NafisRayan/Ecommerce-Mobile",
	},
	{
		title: "Admin Dashboard",
		description: "This modern admin panel dashboard, built with ShadcnUI in Next.js, offers both light and dark modes. It features a responsive design and is highly accessible. Key components include a built-in sidebar, global search command, and over 10 pages with custom elements. It serves as a reusable collection for future projects.",
		icon: LayoutDashboard,
		image: "/projects/Admin Dashboard.png",
		tags: ["react", "light-theme", "admin", "dark-theme", "reactjs", "nextjs", "admin-dashboard", "admin-panel", "shadcn-ui", "shadcn"],
		sourceCode: "https://github.com/NafisRayan/AdminPanel-Shadcn",
		demoUrl: "https://admin-panel-demo-five.vercel.app",
	},
	{
		title: "Fitness Tracking App",
		description: "This comprehensive fitness application offers advanced workout tracking and detailed progress monitoring. It includes social networking features and personalized training plans. Built with React Native for cross-platform compatibility, it utilizes an SQLite database for local storage. Wellness insights and motivation tools help users achieve their fitness goals effectively.",
		icon: Activity,
		image: "/projects/Fitness Tracking App.png",
		tags: ["fitness", "mobile", "tracking", "health", "react-native", "sqlite", "wellness"],
		sourceCode: "https://github.com/NafisRayan/FitUp-ReactNative",
		demoUrl: "https://github.com/NafisRayan/FitUp-ReactNative",
	},
	{
		title: "Educational Learning Platform",
		description: "This interactive e-learning platform provides a comprehensive course management system and detailed progress tracking. It offers collaborative learning features for students and educators. Built with React and NodeJS, it includes Firebase integration and learning management system capabilities. Assessment tools and real-time communication features enhance the educational experience.",
		icon: GraduationCap,
		image: "/projects/ducational Learning Platform.png",
		tags: ["education", "e-learning", "react", "nodejs", "firebase", "lms"],
		sourceCode: "https://github.com/NafisRayan/EdTech",
		demoUrl: "https://ed-tech-rouge.vercel.app/",
	},
	{
	title: "Social Media Dashboard",
	description: "A comprehensive responsive social media analytics platform built with Next.js, React, and TypeScript. Features real-time insights, interactive data visualization, advanced user experience with keyboard shortcuts, theme switching, and WCAG compliance. Includes overview dashboard, profile analytics, post scheduling, engagement tracking, and export functionality for modern social media management.",
	icon: Users,
	image: "/projects/Social Media Dashboard.png",
	tags: ["social-media", "dashboard", "analytics", "content", "scheduling", "apis"],
	sourceCode: "https://github.com/NafisRayan/Social-Media-Dashboard",
	demoUrl: "https://social-media-dashboard-pink-tau.vercel.app/",
	},
	{
		title: "Ecommerce Flutter App",
		description: "This modern cross-platform e-commerce mobile application, built with Flutter and Dart, offers intuitive product browsing. It features advanced shopping cart functionality and comprehensive user profiles, ensuring a seamless shopping experience. Optimized for both iOS and Android platforms, it delivers responsive design and smooth performance across devices.",
		icon: Smartphone,
		image: "/projects/Ecommerce-Flutter.png",
		tags: ["flutter", "dart", "mobile", "ecommerce", "cross-platform", "ios", "android"],
		sourceCode: "https://github.com/nafisrayan/ecommerce-flutter",
		demoUrl: "https://github.com/nafisrayan/ecommerce-flutter",
	},
	{
		title: "AI-Powered Customer Support",
		description: "This intelligent customer support system features advanced AI chatbots and automated ticket routing. It utilizes sentiment analysis for enhanced customer experience. Built with React and NodeJS, it incorporates natural language processing and machine learning algorithms. Real-time communication improves customer service and support efficiency, providing a cutting-edge solution.",
		icon: Brain,
		image: "/projects/AI-Powered Customer Support.png",
		tags: ["ai", "nlp", "chatbot", "react", "nodejs", "machine-learning"],
		sourceCode: "https://github.com/NafisRayan/chatCOMsystem",
		demoUrl: "https://github.com/NafisRayan/chatCOMsystem",
	},
	{
		title: "Fintech Mobile App",
		description: "This secure mobile financial application offers comprehensive account management and detailed transaction history. It provides advanced budgeting tools and encrypted payment processing. Built with React Native and Supabase backend, it includes banking integrations and financial analytics. A user-friendly interface ensures a seamless financial management experience for users.",
		icon: Smartphone,
		image: "/projects/Fintech Mobile App.png",
		tags: ["fintech", "react-native", "mobile", "payments", "security", "supabase", "banking"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "HealthCare Dashboard",
		description: "This modern React-based healthcare web application, built with Vite and Tailwind CSS, manages patient health data effectively. It features interactive blood pressure charts and detailed diagnosis history. Comprehensive patient management tools and Chart.js data visualization, combined with responsive design, optimize the healthcare workflow.",
		icon: Activity,
		image: "/projects/Health Dashboard.png",
		tags: ["healthcare", "react", "dashboard", "vite", "tailwind", "chartjs", "responsive", "patient-data"],
		sourceCode: "https://github.com/NafisRayan/HealthCare-Dashboard",
		demoUrl: "https://health-care-dashboard-sigma.vercel.app",
	},
	{
		title: "Crypto Trading Platform",
		description: "This advanced cryptocurrency trading platform features real-time market data and comprehensive portfolio management. It offers secure transaction processing and is built with React and WebSocket technology for live updates. Blockchain integration, trading analytics, charting tools, and robust security measures ensure a safe trading experience.",
		icon: CreditCard,
		image: "/projects/Crypto Trading Platform.png",
		tags: ["crypto", "trading", "blockchain", "react", "websockets", "fintech"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "AR Product Visualization",
		description: "This innovative augmented reality application provides immersive product visualization. Customers can view and interact with products in their real environment before making purchase decisions. Built with WebXR and ThreeJS technology for mobile devices, it enhances the e-commerce experience through cutting-edge AR technology, creating a unique shopping journey.",
		icon: Eye,
		image: "/projects/AR Product Visualization.png",
		tags: ["ar", "webxr", "threejs", "mobile", "ecommerce", "visualization"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "3D Lego Simulation",
		description: "This modern web-based 3D Lego simulation game is built with Next.js 15, React 19, and Three.js. Users can create, modify, and explore virtual Lego structures using an elegant UI and immersive 3D environment. It offers a creative and engaging experience for Lego enthusiasts of all ages.",
		icon: Box,
		image: "/projects/Lego Simulation.png",
		tags: ["nextjs", "react", "threejs", "3d", "lego", "simulation"],
		sourceCode: "https://github.com/NafisRayan/Lego-Blocks-Game",
		demoUrl: "https://lego-blocks-game.vercel.app",
	},
	{
		title: "Revenue Tracking App",
		description: "This comprehensive business intelligence dashboard is designed for revenue tracking and advanced financial analytics. It offers performance monitoring with real-time insights. Interactive charts, reporting tools, business metrics analysis, and data visualization capabilities provide effective business decision-making and financial management strategies for businesses.",
		icon: TrendingUp,
		image: "/projects/Revenue Tracking and Management App.png",
		tags: ["analytics", "dashboard", "revenue", "business", "charts", "reporting"],
		sourceCode: "#",
		demoUrl: "#",
	},
	{
		title: "Virtual Reality Game",
		description: "This immersive virtual reality gaming experience features interactive 3D environments and realistic physics simulation. It offers engaging multiplayer capabilities and is built with WebXR and ThreeJS technology. Advanced gaming mechanics, collision detection, real-time networking, and optimized performance ensure smooth VR gameplay across various devices.",
		icon: Gamepad2,
		image: "/projects/Virtual Reality Game.png",
		tags: ["vr", "webxr", "gaming", "threejs", "physics", "multiplayer"],
		sourceCode: "https://github.com/NafisRayan/FPS-Game-ThreeJS",
		demoUrl: "https://nafisrayan.github.io/FPS-Game-ThreeJS/",
	}
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
  return (    <section id="projects" ref={sectionRef} className="pt-12 sm:pt-16 lg:pt-24 pb-0 mb-3 sm:mb-4 lg:mb-6 px-4 sm:px-6 lg:px-8 grid-dots bg-white dark:bg-black">
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
							>							<Card
									className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer overflow-hidden py-0 stacking-card h-full bg-white/80 dark:bg-black/80 backdrop-blur-sm"
								>
								<div className="flex flex-col lg:grid lg:grid-cols-1 xl:grid-cols-2 gap-0 h-full">
									{/* Project Image */}
									<div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden order-1 xl:order-1">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
										/>										<div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-1.5 sm:p-2 rounded-lg bg-white/90 dark:bg-black/90 backdrop-blur-sm">
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
<div className="flex sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2 flex-wrap">
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