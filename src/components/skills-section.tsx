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
            </h2>            <div className="space-y-4">
              <p className="text-md text-muted-foreground leading-relaxed">
                I bring comprehensive full-stack development expertise with a strong foundation in both frontend and backend technologies, particularly the MERN stack and modern web development frameworks that enable me to build scalable, efficient applications delivering exceptional user experiences. From optimizing database performance to creating intuitive user interfaces, I tackle complex technical challenges with innovative solutions, seamlessly integrating various technologies while maintaining clean, maintainable code that demonstrates my ability to handle end-to-end application development.
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
          </div>          {/* Mobile Development */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-light text-foreground">
              Android/iOS Applications
            </h2>          <div className="space-y-4">              <p className="text-md text-muted-foreground leading-relaxed">
                My primary expertise lies in React Native development, enabling me to create efficient, high-performance mobile applications for both Android and iOS platforms using a single codebase while leveraging React Native's powerful ecosystem and my JavaScript/TypeScript skills to build native-quality mobile experiences. With React Native as my main mobile development framework, I excel at creating complex, feature-rich applications while maintaining clean, maintainable code, and I also have experience with Flutter for specific project requirements, implementing offline capabilities, real-time features, and intuitive user interfaces that deliver exceptional mobile experiences across platforms.
              </p><div className="flex flex-wrap gap-2">
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">React Native</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">JavaScript</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">TypeScript</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Expo</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Android Development</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">iOS Development</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Flutter</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Mobile UI/UX</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Progressive Web Apps</span>
              </div>
            </div>
          </div>          {/* 3D Graphics Development */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-light text-foreground">
              3D Graphics & Game Development
            </h2>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-muted-foreground">3D Modeling & Interactive Visualization</span>
            </div>
            <div className="space-y-4">
              <p className="text-md text-muted-foreground leading-relaxed">
                I specialize in creating immersive 3D experiences using Three.js for interactive web applications and Blender for professional 3D modeling and animations. My expertise combines technical proficiency with creative vision to develop stunning 3D visualizations, interactive environments, and engaging visual experiences that push the boundaries of web-based graphics and bring complex ideas to life through compelling 3D presentations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Three.js</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Blender</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">3D Graphics</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">WebGL</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">3D Animation</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Interactive Design</span>
              </div>
            </div>
          </div>

          {/* AI Solutions */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-light text-foreground">
              AI/ML Solutions
            </h2>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-muted-foreground">Machine Learning & Intelligent Applications</span>
            </div>
            <div className="space-y-4">
              <p className="text-md text-muted-foreground leading-relaxed">
                I develop intelligent applications and machine learning solutions using Flask for robust backend services, while creating interactive AI interfaces with Gradio and Streamlit for seamless user experiences. From computer vision algorithms to autonomous systems, I combine advanced AI technologies with practical implementation skills to build powerful, user-friendly applications that leverage machine learning capabilities to solve real-world problems and deliver intelligent automation solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Flask</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Gradio</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Streamlit</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Computer Vision</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Machine Learning</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">AI Integration</span>
                <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10 inline-block">Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
