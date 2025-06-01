"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const clientLogos = [
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
  ]
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 lg:space-y-12 max-w-5xl mx-auto">
          <div className={`space-y-3 sm:space-y-4 lg:space-y-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Nafis Rayan
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Innovative Software Developer,{" "}
              <br className="hidden sm:inline" />
              building Web, Mobile, and 3D applications.
            </p>
          </div>
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <Button size="lg" className="text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4" asChild>
              <a href="#hire-me">Learn More</a>
            </Button>
            <Button variant="outline" size="lg" className="text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>          {/* Client Logos */}
          <div className={`w-full max-w-7xl mx-auto ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 text-center">Trusted by amazing clients</p>
            <div className="relative overflow-hidden">
              <div className="flex animate-slide-carousel space-x-4 sm:space-x-6 lg:space-x-8 items-center">
                {/* First set of logos */}
                {clientLogos.map((logo) => (
                  <div
                    key={`first-${logo}`}
                    className="flex-shrink-0 flex items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                  >
                    <Image
                      src={`/client/${logo}`}
                      alt={`${logo.replace('.png', '').replace(/([A-Z])/g, ' $1').trim()} logo`}
                      width={120}
                      height={40}
                      className="h-5 w-auto sm:h-6 md:h-8 lg:h-10 object-contain filter brightness-0 saturate-100 dark:filter dark:brightness-0 dark:invert opacity-70 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clientLogos.map((logo) => (
                  <div
                    key={`second-${logo}`}
                    className="flex-shrink-0 flex items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                  >
                    <Image
                      src={`/client/${logo}`}
                      alt={`${logo.replace('.png', '').replace(/([A-Z])/g, ' $1').trim()} logo`}
                      width={120}
                      height={40}
                      className="h-5 w-auto sm:h-6 md:h-8 lg:h-10 object-contain filter brightness-0 saturate-100 dark:filter dark:brightness-0 dark:invert opacity-70 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 ${isLoaded ? 'animate-pulse-slow' : 'opacity-0'}`} style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
