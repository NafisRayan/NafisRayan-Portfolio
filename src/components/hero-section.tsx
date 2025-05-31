"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Code, Smartphone, Brain, Box } from "lucide-react"

const skills = [
  { name: "Web Development", icon: Code },
  { name: "App Development", icon: Smartphone },
  { name: "AI Solutions", icon: Brain },
  { name: "3D Experiences", icon: Box },
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
              building Web, Mobile, and 3D applications
            </p>          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <Button size="lg" className="text-base px-6 lg:px-8 py-3 lg:py-4" asChild>
              <a href="#about">Learn More</a>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-6 lg:px-8 py-3 lg:py-4" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Client Logos */}
          <div className={`w-full max-w-7xl mx-auto ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <p className="text-sm text-muted-foreground mb-6 text-center">Trusted by amazing clients</p>
            <div className="relative overflow-hidden">
              <div className="flex animate-slide-carousel space-x-8 items-center">
                {/* First set of logos */}
                {[
                  'BoctoCrop.png',
                  'ByteSlack.png',
                  'CollegeMastermind.png',
                  'CreativeCentralian.png',
                  'EcoMart.png',
                  'LNP.png',
                  'Micratto.png',
                  'Middler.png',
                  'PetSquadTV.png',
                  'Photoreviser.png',
                  'ReviewSensical.png',
                  'Ultra Engineering.png'
                ].map((logo, index) => (                <div
                  key={`first-${logo}`}
                  className="flex-shrink-0 flex items-center justify-center p-3 transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={`/client/${logo}`}
                    alt={`${logo.replace('.png', '').replace(/([A-Z])/g, ' $1').trim()} logo`}
                    className="h-6 w-auto sm:h-8 md:h-10 object-contain 
                               filter brightness-0 saturate-100 
                               dark:filter dark:brightness-0 dark:invert
                               opacity-70 hover:opacity-100 transition-all duration-300"
                  />
                </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[
                  'BoctoCrop.png',
                  'ByteSlack.png',
                  'CollegeMastermind.png',
                  'CreativeCentralian.png',
                  'EcoMart.png',
                  'LNP.png',
                  'Micratto.png',
                  'Middler.png',
                  'PetSquadTV.png',
                  'Photoreviser.png',
                  'ReviewSensical.png',
                  'Ultra Engineering.png'
                ].map((logo, index) => (                <div
                  key={`second-${logo}`}
                  className="flex-shrink-0 flex items-center justify-center p-3 transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={`/client/${logo}`}
                    alt={`${logo.replace('.png', '').replace(/([A-Z])/g, ' $1').trim()} logo`}
                    className="h-6 w-auto sm:h-8 md:h-10 object-contain 
                               filter brightness-0 saturate-100 
                               dark:filter dark:brightness-0 dark:invert
                               opacity-70 hover:opacity-100 transition-all duration-300"
                  />
                </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isLoaded ? 'animate-pulse-slow' : 'opacity-0'}`} style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
