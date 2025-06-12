"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, CircleDot } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "Tech-Dojo",
    location: "Dhaka, Bangladesh · Hybrid",
    period: "May 2024 - Present",
    responsibilities: [
      "Collaborated with a team to develop scalable applications using MERN stack",
      "Integrated ThreeJS for 3D rendering and interactive web experiences",
      "Developed Android and iOS applications using React Native",
      "Improved database performance by optimizing algorithms, SQL queries, and MongoDB operations",
    ],
    technologies: ["MERN Stack", "ThreeJS", "React Native", "SQLite", "MongoDB", "MySQL", "GCP"],
  },
  {
    title: "Software Engineer Intern",
    company: "Tech-Dojo",
    location: "Dhaka, Bangladesh · Onsite",
    period: "Feb 2024 - Apr 2024",
    responsibilities: [
      "Assisted in developing scalable applications using MERN stack",
      "Contributed to integrating ThreeJS for 3D rendering and interactive web experiences",
      "Assisted in developing Android and iOS applications using React Native",
      "Participated in improving database performance by optimizing algorithms, SQL queries, and NoSQL database operations",
    ],
    technologies: ["MERN Stack", "ThreeJS", "React Native", "SQLite", "MongoDB", "MySQL", "GCP"],
  },
  {
    title: "Autonomous & AI Engineer",
    company: "BRACU Mongol-Tori",
    location: "Dhaka, Bangladesh · Onsite",
    period: "Dec 2022 - Jan 2024",
    responsibilities: [
      "Designed and implemented AI algorithms for Mars rover navigation and task execution",
      "Developed and tested firmware for rover localization and rescue missions",
      "Integrated LiDAR, IMU, and camera systems to enhance environmental perception and enable accurate mapping and navigation",
      "Conducted simulations using ROS and Gazebo to validate algorithms and firmware, before hardware deployment",
    ],
    technologies: ["AI", "ROS", "Gazebo", "LiDAR", "IMU", "Firmware Development"],
  },
  {
    title: "AI & Firmware Engineer",
    company: "BRACU Dichari",
    location: "Dhaka, Bangladesh · Onsite",
    period: "Dec 2022 - Jan 2024",
    responsibilities: [
      "Built AI-powered robots for rescue missions with IoT components",
      "Developed navigation algorithms using Python and OpenCV to ensure real-time telemetry",
      "Integrated ultrasonic, infrared, and GPS sensors to enhance situational awareness and improve robot autonomy",
      "Conducted field tests and optimized algorithms for reliability and efficiency in challenging terrains",
    ],
    technologies: ["AI", "Python", "OpenCV", "IoT", "GPS", "Robotics"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="pt-12 sm:pt-16 lg:pt-24 pb-0 mb-6 sm:mb-9 lg:mb-14 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 inline-block mb-3 sm:mb-4">
            Career Path
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Professional Experience
          </h1>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="p-4 sm:p-6 border border-border/50 bg-card shadow-sm">
              {/* Mobile-first responsive layout */}
              <div className="flex flex-col lg:grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-8">
                {/* Top section on mobile, Left column on desktop - Date and Location */}
                <div className="space-y-2 lg:order-1">
                  <div className="flex items-center gap-2 text-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium text-sm sm:text-base">{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm sm:text-base">{experience.location}</span>
                  </div>
                </div>

                {/* Bottom section on mobile, Right column on desktop - Experience details */}
                <div className="lg:order-2">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    {experience.company}
                  </p>

                  <ul className="space-y-2 sm:space-y-3">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex gap-2 sm:gap-3">
                        <CircleDot className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-sm sm:text-base">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs sm:text-sm px-2 sm:px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
