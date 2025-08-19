"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const methodologySteps = [
  {
    title: "Idea",
    description:
      "We meet with your team to know more about your project idea and goals. After that, our team will work together to create an action plan and proposal for your project.",
  },
  {
    title: "Research",
    description:
      "We will share with you a detailed questionnaire to do an in-depth analysis of your business. Once with that information, we will able to create a design that is tailor-made to reach your business goals.",
  },
  {
    title: "Design",
    description:
      "We are going to design a mockup or prototype of your website, and present it to you. Once with the initial mockup, we will start the revision process to perfect it.",
  },
  {
    title: "Develop",
    description:
      "We are going to develop your website using the best web development standards, so you have a perfectly responsive, lightning-fast, SEO-friendly, and highly conversion-oriented website.",
  },
  {
    title: "Launch",
    description:
      "When the project is completed, we will schedule a 2hr session to train your team on how to use, edit and take advantage of your new website. After that, we will help you with the launch process to ensure everything goes perfectly smoothly.",
  },
  {
    title: "Quality",
    description:
      "We perform thorough QA and testing across devices and browsers to catch and fix issues early. Accessibility, cross-browser compatibility, and performance checks ensure a polished final product.",
  },
  {
    title: "Growth",
    description:
      "After launch we monitor analytics, optimize for conversions and performance, and plan iterative improvements so your product continues to grow and deliver value.",
  },
  {
    title: "Support",
    description:
      "We don't complete the project and leave. Instead, we keep a close relationship and communication with your team so we can help you with any design or development needs in the long term.",
  },
];

export function MethodologySection() {
  return (
    <section
      id="methodology"
      className="pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.7, once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs sm:text-sm text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 inline-block mb-3 sm:mb-4">
            Our Process
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Methodology
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {methodologySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5, once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
            >
              <Card
                className={`h-full flex flex-col items-start text-left p-6 sm:p-8 border border-border/50 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-shadow duration-200`}
                style={{
                  position: "relative",
                  overflow: "visible",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  height: "400px"
                }}
              >
                {/* small circle in top-left (theme-aware) */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="block w-4 h-4 rounded-full border-2 border-black dark:border-white bg-transparent" aria-hidden />
                </div>

                {/* large index number in top-right (muted, theme-aware) */}
                <div style={{ position: 'absolute', top: 12, right: 20, zIndex: 0 }}>
                  <div className="font-extrabold text-black/10 dark:text-white/10" style={{ fontSize: 96, lineHeight: 1 }}>
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                </div>

                <CardHeader className="p-0 pb-15 z-20" style={{ marginTop: "10px" }}>
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                </CardHeader>

                <CardContent className="p-0 z-20" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
                  <div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {/* bottom spacer - no action link per request */}
                  <div className="mt-6" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}