"use client"

import React from "react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-16 text-muted-foreground">Skills & Experience</h1>

        <div className="space-y-16">
          {/* Full Stack Development */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-light text-foreground">
              Full Stack Development
            </h2>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-muted-foreground">Web & Server Technologies</span>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Tech-Dojo, I collaborated with a team to develop scalable applications using the MERN stack,
                gaining hands-on experience with modern web development. I also improved database performance
                by optimizing algorithms and SQL queries, demonstrating my ability to handle both frontend and backend challenges.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notable projects include DecentAI, a comprehensive platform built using ReactJS and Flask that combines
                blockchain technology with AI for community engagement, and PortalUp, a web-based file upload system
                with ReactJS frontend and NodeJS backend.
              </p>
              <p className="text-lg text-muted-foreground">
                Technologies: MERN Stack, Next.js, React, Nuxt.js, Vue.js, Node.js, Express, TypeScript, Python, Flask, Django
              </p>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-light text-foreground">
              Android & iOS Development
            </h2>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-muted-foreground">Mobile Technologies</span>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Developed various mobile applications using React Native at Tech-Dojo, including Android and iOS
                applications. Created GoFlix-AndroidTV, a sophisticated mobile streaming application with React Native
                and Expo, featuring a Netflix-like experience with robust video player and offline capabilities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Also developed ReactNative-Browser, a mobile browser application with customized browsing features,
                demonstrating my ability to create complex, user-friendly mobile interfaces.
              </p>
              <p className="text-lg text-muted-foreground">
                Technologies: React Native, Flutter, Cross-platform Mobile Apps, Native Development, Mobile UI/UX
              </p>
            </div>
          </div>

          {/* 3D Development */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-light text-foreground">
              3D Simulation & Game Development
            </h2>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-muted-foreground">3D Technologies & AI Integration</span>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Integrated ThreeJS for 3D rendering and interactive web experiences at Tech-Dojo. Created VRIA,
                an innovative VR Assistant application combining ThreeJS for 3D visualization with YOLO for AR
                visual context processing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At BRACU Mongol-Tori and Dichari, I designed AI algorithms for Mars rover navigation and developed
                firmware for rover localization. Built AI-powered rescue robots with IoT components and implemented
                navigation algorithms using Python and OpenCV for real-time telemetry.
              </p>
              <p className="text-lg text-muted-foreground">
                Technologies: Three.js, Blender, WebGL, Game Engines, Computer Graphics, 3D Modeling, AI Integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
