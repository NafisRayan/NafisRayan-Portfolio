"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, CircleDot } from "lucide-react"
import { useState, useEffect, useRef } from "react"

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
			"Improved database performance by optimizing algorithms, and SQL queries",
		],
		technologies: ["MERN Stack", "ThreeJS", "React Native", "SQL"],
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
			"Participated in improving database performance by optimizing algorithms, and SQL queries",
		],
		technologies: ["MERN Stack", "ThreeJS", "React Native", "SQL"],
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
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate offset: how much the section top has scrolled past the viewport top
        // Apply a factor to control the speed of upward movement (e.g., 0.05 for 5% of scroll speed)
        const currentOffset = Math.max(0, -rect.top) * 0.05;
        setScrollOffset(currentOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
					<span className="text-sm text-primary px-4 py-2 rounded-full bg-primary/10 inline-block mb-4">
						Career Path
					</span>
					<h1 className="text-4xl sm:text-5xl font-bold text-foreground">
						Professional Experience
					</h1>
				</div>				<div className="max-w-6xl mx-auto relative stacking-container">
					{experiences.map((experience, index) => (						<div 
							key={index}
className="stacking-item transition-all ease-out"
style={{
  zIndex: 100 + index,
  transform: `translateY(${index * 10 - scrollOffset}px)`, /* Reduced initial offset */
  transformOrigin: 'center top'
}}
>
<Card className="relative p-6 border border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow duration-200 stacking-card">
							<div className="grid grid-cols-[200px_1fr] gap-8">
								{/* Left column - Date and Location */}
								<div className="space-y-2">
									<div className="flex items-center gap-2 text-foreground">
										<Calendar className="h-4 w-4" />
										<span className="font-medium">{experience.period}</span>
									</div>
									<div className="flex items-center gap-2 text-muted-foreground">
										<MapPin className="h-4 w-4" />
										<span>{experience.location}</span>
									</div>
								</div>

								{/* Right column - Experience details */}
								<div>
									<h3 className="text-xl font-bold mb-1">
										{experience.title}
									</h3>
									<p className="text-lg text-muted-foreground mb-4">
										{experience.company}
									</p>

									<ul className="space-y-3">
										{experience.responsibilities.map(
											(responsibility, idx) => (
												<li key={idx} className="flex gap-3">
													<CircleDot className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
													<span className="text-muted-foreground">
														{responsibility}
													</span>
												</li>
											)
										)}
									</ul>

									<div className="mt-4 flex flex-wrap gap-2">
										{experience.technologies.map((tech, idx) => (
											<Badge
												key={idx}
												variant="secondary"
											>
												{tech}
											</Badge>
										))}
									</div>								</div>
							</div>
						</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
