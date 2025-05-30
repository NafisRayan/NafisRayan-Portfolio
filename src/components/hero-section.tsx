"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Code, Smartphone, Database, Brain, Box } from "lucide-react"

const skills = [
  { name: "MERN Stack", icon: Code },
  { name: "React Native", icon: Smartphone },
  { name: "Flask-Django", icon: Database },
  { name: "AI & ML", icon: Brain },
  { name: "Three.js", icon: Box },
]

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col items-center text-center space-y-8 lg:space-y-12 max-w-5xl mx-auto">
          {/* Main heading */}
          <div className={`space-y-4 lg:space-y-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Nafis
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Innovative Software Developer,{" "}
              <br className="hidden sm:inline" />
              building web and mobile applications
            </p>
          </div>

          {/* Skills badges */}
          <div className={`flex flex-wrap justify-center gap-3 lg:gap-4 max-w-3xl ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}>
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2 animate-fade-in"
                  style={{
                    animationDelay: `${(index + 1) * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="whitespace-nowrap">{skill.name}</span>
                </Badge>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <Button size="lg" className="text-base px-6 lg:px-8 py-3 lg:py-4" asChild>
              <a href="#about">Learn More</a>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-6 lg:px-8 py-3 lg:py-4" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isLoaded ? 'animate-pulse-slow' : 'opacity-0'}`} style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
