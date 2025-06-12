"use client"

import React from "react"

export function SkillsSection() {
  return (
    <section id="hire-me" className="pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 inline-block mb-3 sm:mb-4">
            Why Hire Me?
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What I Bring to the Table
          </h1>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* Full Stack Development */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-foreground">
              Full Stack Expertise
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                I bring comprehensive full-stack development expertise with a strong foundation in both frontend and backend technologies, particularly the MERN stack and modern web frameworks. I excel in database design and optimization across multiple platforms including MongoDB, MySQL, SQLite, and modern cloud solutions like Supabase, GCP, and Firebase. I build scalable, efficient applications that deliver exceptional user experiences, from optimizing database performance to creating intuitive interfaces. I tackle complex technical challenges with innovative solutions while maintaining clean, maintainable code.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">MERN Stack</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Next.js</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">TypeScript</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Python</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">MongoDB</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">MySQL</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Supabase</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Firebase</span>
              </div>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-foreground">
              Android/iOS Applications
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                My primary expertise lies in React Native development, enabling me to create efficient, high-performance mobile applications for both Android and iOS platforms using a single codebase. I leverage React Native&apos;s powerful ecosystem and my JavaScript/TypeScript skills to build native-quality mobile experiences. I excel at creating complex, feature-rich applications while maintaining clean code, with additional experience in Flutter for specific project requirements.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">React Native</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">JavaScript</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">TypeScript</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Expo</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Flutter</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Mobile UI/UX</span>
              </div>
            </div>
          </div>

          {/* 3D Graphics Development */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-foreground">
              3D Graphics & Game Development
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                I specialize in creating immersive 3D experiences using Three.js for interactive web applications and Blender for professional 3D modeling and animations. My expertise combines technical proficiency with creative vision to develop stunning 3D visualizations and interactive environments. I push the boundaries of web-based graphics to bring complex ideas to life through compelling 3D presentations.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Three.js</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Blender</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">WebGL</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">3D Animation</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Interactive Design</span>
              </div>
            </div>
          </div>

          {/* AI Solutions */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-foreground">
              AI/ML Solutions
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                I develop intelligent applications and machine learning solutions using Flask for robust backend services, while creating interactive AI interfaces with Gradio and Streamlit for seamless user experiences. From computer vision algorithms to autonomous systems, I combine advanced AI technologies with practical implementation skills. I build powerful, user-friendly applications that leverage machine learning capabilities to solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Flask</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Gradio</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Streamlit</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Computer Vision</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Machine Learning</span>
                <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
