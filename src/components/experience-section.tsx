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
	return (
		<section id="experience" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
			<div className="container mx-auto">
				<div className="text-center mb-16">
					<span className="text-sm text-primary px-4 py-2 rounded-full bg-primary/10 inline-block mb-4">
						Career Path
					</span>
					<h1 className="text-4xl sm:text-5xl font-bold text-foreground">
						Professional Experience
					</h1>
				</div>

				<div className="max-w-4xl mx-auto space-y-12">
					{experiences.map((experience, index) => (
						<div key={index} className="relative">
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
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
