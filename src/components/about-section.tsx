"use client"

import React from "react"

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 inline-block mb-3 sm:mb-4">
            About Me
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Bringing Ideas to Life with{" "}
            <span className="text-primary">Code & Creativity</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto pt-6 sm:pt-8 leading-relaxed">
            I&apos;m a skilled software developer specializing in modern web technologies and AI applications.
            With expertise in multiple programming languages and frameworks, I create efficient, scalable solutions
            that make a real impact.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Do You Like <span className="text-primary">Logo</span>? I Do Too!
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I believe in building things systematically, piece by piece. Whether it&apos;s code or 3D models,
              I enjoy the creative process of bringing complex ideas to life.
            </p>
          </div>

          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://lego-blocks-game.vercel.app/"
              className="w-full h-full border-0"
              title="Lego Blocks Game"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
