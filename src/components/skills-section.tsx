"use client"

import React from "react"
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa"
import { LiaVrCardboardSolid } from "react-icons/lia"
import { LuBrainCircuit } from "react-icons/lu"
import { motion } from "framer-motion"

export function SkillsSection() {
  return (
    <section id="hire-me" className="pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.7, once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs sm:text-sm text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 inline-block mb-3 sm:mb-4">
            Why Hire Me?
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What I Bring to the Table
          </h1>
        </motion.div>

        <div className="space-y-12 sm:space-y-16">
          {/* Full Stack Development */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-3 sm:space-y-4 md:w-3/4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-foreground">
                Full-Stack Developemnt
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <ul className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed space-y-2">
                  <li>• Comprehensive expertise with React, MERN stack, and modern web frameworks</li>
                  <li>• Database design and optimization across MongoDB, SQLite, Supabase, GCP, and Firebase</li>
                  <li>• Build scalable, efficient applications with exceptional performance and intuitive interfaces</li>
                  <li>• Tackle complex technical challenges with innovative solutions while maintaining standards</li>
                </ul>
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
            <div className="flex items-center justify-center md:w-1/4">
              <FaLaptopCode className="text-primary text-7xl sm:text-8xl md:text-9xl opacity-50" />
            </div>
          </motion.div>

          {/* Mobile Development */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className="space-y-3 sm:space-y-4 md:w-3/4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-foreground">
                Android/iOS Applications
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <ul className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed space-y-2">
                  <li>• Primary expertise in React Native development for cross-platform mobile applications</li>
                  <li>• Create efficient, high-performance apps for both Android and iOS using single codebase</li>
                  <li>• Leverage React Native&#39;s powerful ecosystem and JavaScript/TypeScript skills</li>
                  <li>• Build native-quality mobile experiences with clean code standards and Flutter experience</li>
                </ul>
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
            <div className="flex items-center justify-center md:w-1/4">
              <FaMobileAlt className="text-primary text-7xl sm:text-8xl md:text-9xl opacity-50" />
            </div>
          </motion.div>

          {/* 3D/VR Games & Simulations */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="space-y-3 sm:space-y-4 md:w-3/4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-foreground">
                3D/VR Games & Simulations
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <ul className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed space-y-2">
                  <li>• Specialize in creating immersive VR experiences using Three.js for interactive applications</li>
                  <li>• Professional 3D modeling and animations using tools like Blender and WebGL</li>
                  <li>• Combine technical proficiency with creative vision for stunning 3D games and simulations</li>
                  <li>• Push the boundaries to bring complex ideas to life through interactive environments</li>
                </ul>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Three.js</span>
                  <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Blender</span>
                  <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">WebGL</span>
                  <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">3D Animation</span>
                  <span className="text-xs sm:text-sm text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10 inline-block">Interactive Design</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center md:w-1/4">
              <LiaVrCardboardSolid className="text-primary text-7xl sm:text-8xl md:text-9xl opacity-50" />
            </div>
          </motion.div>

          {/* AI/ML Agents & Solutions */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="space-y-3 sm:space-y-4 md:w-3/4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-foreground">
                AI/ML Agents & Solutions
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <ul className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed space-y-2">
                  <li>• Develop intelligent machine learning solutions using Flask for robust backend services</li>
                  <li>• Create interactive AI interfaces with Gradio and Streamlit for seamless user experiences</li>
                  <li>• Build computer vision algorithms and autonomous systems with advanced AI technologies</li>
                  <li>• Solving real-world problems through powerful agent technologies like n8n and Langflow</li>
                </ul>
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
            <div className="flex items-center justify-center md:w-1/4">
              <LuBrainCircuit className="text-primary text-7xl sm:text-8xl md:text-9xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
