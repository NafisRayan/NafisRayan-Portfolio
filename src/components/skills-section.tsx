"use client"

import React from "react"

export function SkillsSection() {
  return (
    <section id="hire-me" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-sm text-primary px-4 py-2 rounded-full bg-primary/10 inline-block mb-4">
            Why Hire Me?
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            What I Bring to the Table
          </h1>
        </div>

        <div className="space-y-16">
          {/* Full Stack Development */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-light text-foreground">
              Full Stack Expertise
            </h2>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-muted-foreground">Web & Server Technologies</span>
            </div>
            <div className="space-y-4">
              <p className="text-md text-muted-foreground leading-relaxed">
                I bring comprehensive full-stack development expertise, with a strong foundation in both frontend and backend technologies. 
                My experience with the MERN stack and modern web development allows me to build scalable, efficient applications 
                that deliver exceptional user experiences.
              </p>
              <p className="text-md text-muted-foreground leading-relaxed">
                From optimizing database performance to creating intuitive user interfaces, I tackle complex technical 
                challenges with innovative solutions. My projects demonstrate my ability to seamlessly integrate 
                various technologies while maintaining clean, maintainable code.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">MERN Stack</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Next.js</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">React</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Node.js</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Express</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">TypeScript</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Python</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Flask</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Django</span>
              </div>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-light text-foreground">
              Cross-Platform Solutions
            </h2>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-muted-foreground">Mobile & Responsive Development</span>
            </div>
            <div className="space-y-4">
              <p className="text-md text-muted-foreground leading-relaxed">
                My expertise in React Native and cross-platform development enables me to create efficient, 
                high-performance mobile applications that work seamlessly across different devices. I understand 
                the importance of responsive design and optimal user experience on all platforms.
              </p>
              <p className="text-md text-muted-foreground leading-relaxed">
                I excel at creating complex, feature-rich applications while maintaining clean, maintainable code. 
                My experience includes implementing offline capabilities, real-time features, and intuitive user interfaces 
                that deliver exceptional mobile experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">React Native</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Cross-platform Development</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Mobile UI/UX</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Progressive Web Apps</span>
              </div>
            </div>
          </div>

          {/* Innovation & Integration */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-light text-foreground">
              Innovation & AI Integration
            </h2>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-muted-foreground">Advanced Technologies & Creative Solutions</span>
            </div>
            <div className="space-y-4">
              <p className="text-md text-muted-foreground leading-relaxed">
                I combine creativity with technical expertise to deliver innovative solutions. My experience with 
                ThreeJS, Computer Vision, and AI integration allows me to create immersive experiences and 
                intelligent applications that push technological boundaries.
              </p>
              <p className="text-md text-muted-foreground leading-relaxed">
                From developing AI algorithms for autonomous systems to creating interactive 3D visualizations, 
                I bring a unique blend of technical knowledge and creative problem-solving to every project. 
                I'm always eager to learn and adapt to new technologies, ensuring your project stays ahead of the curve.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Three.js</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Computer Vision</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Machine Learning</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">AI Integration</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">3D Graphics</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">WebGL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
