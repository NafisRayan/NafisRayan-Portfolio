"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardBody, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Brain, Box, Eye, Smartphone, CreditCard, Activity, TrendingUp, Users, Gamepad2, ShoppingCart, GraduationCap, LayoutDashboard, Github } from "lucide-react"
import projectsData from "@/data/projects.json"
import Carousel from "@/components/ui/carousel"
import React, { useState } from "react"

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
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="projects" className="pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs sm:text-sm text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 inline-block mb-3 sm:mb-4">
            My Portfolio
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Featured <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Projects</span>
          </h1>
        </motion.div>
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            slides={projects}
            index={currentIndex}
            setIndex={setCurrentIndex}
            renderSlide={(project, index, isActive) => {
              const Icon = project.icon
              return (
                <motion.div
                  whileHover={{ scale: isActive ? 1.02 : 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18
                  }}
                  className="transition-shadow duration-300 hover:shadow-lg"
                >
                  <Card className="relative cursor-pointer overflow-hidden w-full aspect-[4/3] group">
                    <div className="absolute inset-0 w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-1.5 sm:p-2 rounded-lg bg-white/90 dark:bg-black/90 backdrop-blur-sm z-10">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <CardHeader className="p-0 pb-3">
                          <CardTitle className="text-xl lg:text-2xl text-white leading-tight mb-2">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-sm lg:text-base text-white/90 leading-relaxed line-clamp-2">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="p-0 space-y-3">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 5).map((tag: string) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs px-2 py-1 bg-white/20 text-white border-white/30"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {project.tags.length > 5 && (
                              <Badge
                                variant="outline"
                                className="text-xs px-2 py-1 bg-white/20 text-white border-white/30"
                              >
                                +{project.tags.length - 5}
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex flex-row gap-2 sm:gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 h-9 bg-white/10 text-white border-white/30 hover:bg-white/20"
                              asChild
                            >
                              <a
                                href={project.sourceCode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                              >
                                <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span className="text-sm">Source</span>
                              </a>
                            </Button>
                            <Button
                              size="sm"
                              className="flex-1 h-9 bg-white text-black hover:bg-white/90"
                              asChild
                            >
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                              >
                                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span className="text-sm">Demo</span>
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            }}
          />
        </div>
			</div>
	</section>
)
}
