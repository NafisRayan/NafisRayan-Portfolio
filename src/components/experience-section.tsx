"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, CircleDot } from "lucide-react"

const experiences = [
  {
    title: "React Native Developer",
    company: "Nuvro AI",
    location: "Remote",
    period: "Jun 2025 – Present",
    role: "Lead Android/iOS Developer",
    responsibilities: [
      "Led the development of Android and iOS applications using React Native.",
      "Architected and maintained cross-platform mobile codebases for high performance and scalability.",
      "Collaborated with designers and backend engineers to deliver seamless user experiences.",
      "Implemented CI/CD pipelines and managed app store deployments."
    ],
    technologies: ["React Native", "Android", "iOS", "CI/CD", "Mobile Architecture"]
  },
  {
    title: "Software Engineer",
    company: "Tech-Dojo",
    location: "Dhaka, Bangladesh",
    period: "Feb 2024 – Jun 2025",
    responsibilities: [
      "Collaborated with a team to develop scalable applications using MERN stack.",
      "Integrated ThreeJS for 3D & VR simulations and interactive web experiences.",
      "Developed Android and iOS applications using React Native.",
      "Improved database performance by optimizing algorithms, and SQL queries.",
    ],
    technologies: ["MERN Stack", "ThreeJS", "React Native", "Database Optimization"],
  },
  {
    title: "Full Stack Developer",
    company: "College Mastermind",
    location: "Arizona, USA (Remote)",
    period: "April 2023 – Jan 2024",
    responsibilities: [
      "Developed the platform using MERN stack, Tailwind CSS and RESTful APIs.",
      "Dashboard to manage student data, consultant assignments, and admissions tracking.",
      "Integrated scheduling, email, and document-sharing APIs to streamline workflows.",
      "Tested and deployed the app using Vercel-Heroku, set up version control, and ensured reliability.",
    ],
    technologies: ["MERN Stack", "Tailwind CSS", "RESTful APIs", "Vercel", "Heroku"],
  },
  {
    title: "AI & Firmware Engineer",
    company: "BRACU Dichari & Mongol-Tori",
    location: "Dhaka, Bangladesh",
    period: "Jan 2022 – March 2023",
    responsibilities: [
      "Designed and implemented AI algorithms for rover navigation and autonomous rescue missions.",
      "Developed and tested embedded firmware for rover localization, and telemetry.",
      "Engineered AI-powered robots equipped with IoT components for intelligent rescue operations.",
      "Utilized OpenCV for navigation and image-processing algorithms enabling real-time telemetry.",
    ],
    technologies: ["AI", "Firmware", "IoT", "OpenCV", "Robotics"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
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
            <Card key={index} className="p-4 sm:p-6 border border-border/50 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm">
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
