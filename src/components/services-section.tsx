"use client"

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
  {
    area: "insights",
    title: "Web Development",
    subtitle: "Responsive, performant websites and web apps tailored to your product",
    heading: "Web",
  },
  {
    area: "overview",
    title: "Mobile App Development",
    subtitle: "Native and cross-platform mobile apps with polished UX and native capabilities",
    heading: "Mobile",
  },
  {
    area: "teamwork",
    title: "AR/VR Solutions",
    subtitle: "Immersive product visualizations, experiences and training simulations",
    heading: "AR/VR",
  },
  {
    area: "automation",
    title: "Games & Simulations",
    subtitle: "Interactive games, simulations and real-time experiences for web and devices",
    heading: "Games",
  },
  {
    area: "integration",
    title: "UI/UX Design",
    subtitle: "User-centered interfaces, prototypes and design systems for conversion and clarity",
    heading: "Design",
  },
  {
    area: "protection",
  title: "AI & ML Solutions",
  subtitle: "AI-driven features, models, and data pipelines for intelligent products",
  heading: "AI/ML",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs sm:text-sm text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 inline-block mb-3 sm:mb-4">Our Services</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground">Services We Provide</h1>
        </motion.div>

        {/* even grid: responsive 1 / 2 / 3 columns with equal row heights so all cards use space fairly */}
        <div className="rounded-2xl p-6 border border-border/30 bg-white/5 dark:bg-black/60" style={{ overflow: "hidden" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-2 gap-6 sm:gap-8" style={{ gridAutoRows: '1fr' }}>
            {services.map((s, idx) => {
              const placement: Record<string, string> = {
                // top row (desktop)
                insights: "lg:col-start-1 lg:col-span-2 lg:row-start-1",
                // make Mobile wider on large screens
                overview: "lg:col-start-3 lg:col-span-2 lg:row-start-1",
                // SEO stays at the end of the top row
                protection: "lg:col-start-5 lg:col-span-1 lg:row-start-1",
                // bottom row - place UI/UX at column 1 row 2 as requested
                integration: "lg:col-start-1 lg:col-span-1 lg:row-start-2",
                // Games (automation) start at col 2 and span 2 cols
                automation: "lg:col-start-2 lg:col-span-2 lg:row-start-2",
                // AR/VR (teamwork) fill the remaining two cols
                teamwork: "lg:col-start-4 lg:col-span-2 lg:row-start-2",
              };

              return (
                <motion.div
                  key={s.area}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.5, once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className={`h-full ${placement[s.area] ?? ''}`}
                >
                  <Card
                    className={`h-full flex flex-col items-start text-left p-6 sm:p-8 border border-border/50 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-shadow duration-200`}
                    style={{ borderRadius: 12 }}
                  >
                    <CardHeader className="p-0 pb-4">
                      <h3 className="text-sm text-primary/80 uppercase tracking-wide">{s.heading}</h3>
                      <div className="mt-3">
                        <h4 className="text-lg sm:text-xl font-bold text-foreground">{s.title}</h4>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0 mt-3 text-muted-foreground">
                      <p>{s.subtitle}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
            </div>
          </div>
      </div>
    </section>
  );
}

