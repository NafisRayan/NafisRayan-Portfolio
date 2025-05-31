"use client"

import React from "react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-sm text-primary px-4 py-2 rounded-full bg-primary/10 inline-block mb-4">
            About Me
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Bringing Ideas to Life with{" "}
            <span className="text-primary">Code & Creativity</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto pt-8">
            I&apos;m a skilled software developer specializing in modern web technologies and AI applications.
            With expertise in multiple programming languages and frameworks, I create efficient, scalable solutions
            that make a real impact.
          </p>


        </div>

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">
              Do You Like <span className="text-primary">Logo</span>? I Do Too!
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            <a href="https://github.com/NafisRayan" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-primary underline">GitHub</a>
            <a href="https://linkedin.com/in/nafisrayan" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-primary underline">LinkedIn</a>
            <a href="https://wa.me/8801931999190" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-primary underline">WhatsApp</a>
            <a href="mailto:nafisrayan123@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-primary underline">Email</a>
          </div>
        </div>
      </div>
    </section>
  )
}
