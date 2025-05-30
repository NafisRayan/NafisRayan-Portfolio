"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Smartphone, Globe, Brain, Eye, Gamepad2, Monitor } from "lucide-react"

const projects = [
  {
    title: "GoFlix AndroidTV",
    description: "GoFlix is a mobile streaming app inspired by Netflix, built with React Native and Expo, offering features like a custom video player, dynamic content categories, real-time comments, and offline viewing. It includes search with real-time filtering, adaptive layouts, and bottom tab navigation. App also keeps tracks of user history.",
    icon: Smartphone,
    tags: ["#react-native", "#redux", "#nodejs", "#video-player", "#netflix-clone", "#ott", "#expo", "#playback-controls", "#audio-api-player", "#cli"],
    sourceCode: "#",
    demoUrl: "#",
  },
  {
    title: "AIContextChat App",
    description: "Application is built using Streamlit, offering real-time chat functionality and advanced AI capabilities. It supports file uploads (PDF, TXT, DOCX), web scraping to gather information from websites, and integrates Google's Generative AI model for intelligent responses.",
    icon: Brain,
    tags: ["#python", "#nlp", "#ai", "#chatbot", "#scraping", "#file-upload", "#pandas", "#beautifulsoup", "#chat-application", "#streamlit", "#gemeni"],
    sourceCode: "#",
    demoUrl: "#",
  },
  {
    title: "ThreeJS Demo Works",
    description: "These projects demonstrates multi-purpose and cross-platform app and game development capabilities by leveraging Three.js to create an interactive 3D scene, integrating real-time object detection via YOLO algorithm, and building a responsive web interface using Flask.",
    icon: Gamepad2,
    tags: ["#Three.js", "#JavaScript", "#HandTracking", "#WebGL", "#GLTF/GLB", "#Node.js", "#Express.js", "#Python Flask", "#Tailwind CSS"],
    sourceCode: "#",
    demoUrl: "#",
  },
  {
    title: "DecentAI App",
    description: "DecentAI is a web app combining blockchain and AI to enhance decentralized community engagement and policy discussions. It features a React frontend, Python backend, and utilizes NLP and LLM for sentiment analysis, trend detection, and content moderation.",
    icon: Globe,
    tags: ["#react-flask", "#nlp-llm", "#sentiment-analysis", "#content-moderation", "#generative-ai", "#group-chats", "#polls-surveys", "#data-visualization"],
    sourceCode: "#",
    demoUrl: "#",
  },
  {
    title: "ReactNative Browser",
    description: "This mobile browser application, developed with React Native, offers users a customizable browsing experience on their mobile devices. Key features include web content display via the WebView component, URL navigation with support for direct URL entry and search queries.",
    icon: Monitor,
    tags: ["#react", "#android", "#ios", "#app", "#mobile", "#browser", "#react-native", "#async storage", "#webview", "#cli", "#expo"],
    sourceCode: "#",
    demoUrl: "#",
  },
  {
    title: "YoloEYE App",
    description: "This project utilizes YOLO (You Only Look Once) models for object detection tasks. It provides a user-friendly interface built with Streamlit, allowing users to easily upload images or video streams to see object detections in real-time.",
    icon: Eye,
    tags: ["#opencv", "#python", "#machine-learning", "#computer-vision", "#camera input", "#image-processing", "#yolo", "#Ultralytics", "#object-detection", "#tensorflow", "#streamlit", "#voice-output", "#artificial-intelligence"],
    sourceCode: "#",
    demoUrl: "#",
  },
]

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 grid-dots">
      <div className="container mx-auto">
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">My work</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Projects.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card
                key={project.title}
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl leading-tight">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm sm:text-base leading-relaxed line-clamp-4">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4 lg:space-y-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 6).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 6 && (
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        +{project.tags.length - 6} more
                      </Badge>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.sourceCode} className="flex items-center justify-center gap-2">
                        <Github className="h-4 w-4" />
                        <span>Source Code</span>
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demoUrl} className="flex items-center justify-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
