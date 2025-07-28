"use client"

import Image from "next/image"
import { Card, CardBody, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Brain, Box, Eye, Smartphone, CreditCard, Activity, TrendingUp, Users, Gamepad2, ShoppingCart, GraduationCap, LayoutDashboard, Github } from "lucide-react"
import projectsData from "@/data/projects.json"

// Icon mapping to convert string names to Lucide React components
const iconMap = {
  ShoppingCart,
  LayoutDashboard,
  Activity,
  GraduationCap,
  Users,
  Smartphone,
  Brain,
  CreditCard,
  Eye,
  Box,
  TrendingUp,
  Gamepad2,
}

// Define the project type
interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  tags: string[];
  sourceCode: string;
  demoUrl: string;
}

// Transform the JSON data to include the actual icon components
const projects = projectsData.projects.map((project: Project) => ({
  ...project,
  icon: iconMap[project.icon as keyof typeof iconMap] || ShoppingCart
}))

export function ProjectsSection() {
  return (
    <section id="projects" className="pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 inline-block mb-3 sm:mb-4">
            My Portfolio
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Featured Projects
          </h1>
        </div>
        <div className="max-w-6xl mx-auto space-y-6">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <div key={project.title}>
                <Card className="group cursor-pointer overflow-hidden h-full bg-white/80 dark:bg-black/80 backdrop-blur-sm">
								<div className="flex flex-col md:flex-row h-full">
									{/* Image Section */}
									<div className="relative w-full md:w-1/2 aspect-[16/10] md:aspect-auto">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-fill"
										/>
										<div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-1.5 sm:p-2 rounded-lg bg-white/90 dark:bg-black/90 backdrop-blur-sm">
											<Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
										</div>
									</div>

									{/* Content Section */}
									<CardBody>
										<div className="flex flex-col h-full">
											<CardHeader className="p-0 pb-3 sm:pb-4">
												<CardTitle className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight mb-2 sm:mb-3">
													{project.title}
												</CardTitle>
												<CardDescription className="text-sm sm:text-base lg:text-lg leading-relaxed">
													{project.description}
												</CardDescription>
											</CardHeader>

											<CardContent className="p-0 flex flex-col flex-grow justify-between">
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
									</CardBody>
								</div>
							</Card>
							       </div>
							     )
							   })}
							 </div>
						</div>
				</section>
		)
}
