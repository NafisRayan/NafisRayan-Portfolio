"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { SplineScene } from "@/components/ui/spline"
import { motion } from "framer-motion"

function LazySplineBackground() {
  const [showSpline, setShowSpline] = React.useState(false);
  const [hasLoadedOnce, setHasLoadedOnce] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Check if device is mobile based on screen width
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    // Check session storage to see if Spline has already been loaded in this session
    const hasSplineLoaded = sessionStorage.getItem('splineLoaded') === 'true';
    if (hasSplineLoaded) {
      setShowSpline(true);
      setHasLoadedOnce(true);
    }
  }, []);

  React.useEffect(() => {
    if (!ref.current || isMobile) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSpline(true);
          setHasLoadedOnce(true);
          // Mark in session storage that Spline has been loaded
          sessionStorage.setItem('splineLoaded', 'true');
        } else {
          setShowSpline(false); // Hide Spline when out of view to free resources
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isMobile]);

  // Do not render Spline on mobile devices
  if (isMobile) return null;

  // Implement lazy loading: Only render SplineScene initially when needed, but keep mounted after first load
  return (
    <div ref={ref} className="absolute inset-0 z-0">
      {hasLoadedOnce && (
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className={`w-full h-full pointer-events-auto ${showSpline ? 'block' : 'hidden'}`}
        />
      )}
    </div>
  );
}

const clientLogos = [
  'BoctoCrop.png',
  'ByteSlack.png',
  'CollegeMastermind.png',
  'NuvroAI.svg',
  'CreativeCentralian.png',
  'EcoMart.png',
  'LNP.png',
  'Micratto.png',
  'Middler.png',
  'PetSquadTV.png',
  'Photoreviser.png',
  'ReviewSensical.png',
  'Ultra Engineering.png'
];

export function HeroSection() {
  const scrollToNextSection = React.useCallback(() => {
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 bg-white dark:bg-black overflow-hidden">
      {/* 3D Robot Background */}
      <LazySplineBackground />
      {/* Main Content */}
      <div className="relative z-10 w-full pointer-events-none">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 lg:space-y-12 max-w-5xl mx-auto">
            <motion.div
              className="space-y-3 sm:space-y-4 lg:space-y-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-tight">
                Hello, I am{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Nafis Rayan
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Innovative Software Developer,{" "}
                <br className="hidden sm:inline" />
                building Web, Mobile, and 3D applications.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.6, once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            >
              <Button size="lg" className="text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 pointer-events-auto" asChild>
                <a href="#hire-me">Learn More</a>
              </Button>
              <Button variant="outline" size="lg" className="text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 pointer-events-auto" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
            {/* Client Logos */}
            <motion.div
              className="w-full max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            >
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 text-center">Trusted by amazing clients</p>
              <div className="relative overflow-hidden">
                <div className="flex animate-slide-carousel space-x-4 sm:space-x-6 lg:space-x-8 items-center">
                  {/* First set of logos */}
                  {clientLogos.map((logo) => (
                    <div
                      key={`first-${logo}`}
                      className="flex-shrink-0 flex items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:scale-110 pointer-events-auto"
                    >
                      <Image
                        src={`/client/${logo}`}
                        alt={`${logo.replace('.png', '').replace(/([A-Z])/g, ' $1').trim()} logo`}
                        width={120}
                        height={40}
                        loading="lazy"
                        className="h-5 w-auto sm:h-6 md:h-8 lg:h-10 object-contain filter brightness-0 saturate-100 dark:filter dark:brightness-0 dark:invert opacity-70 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {clientLogos.map((logo) => (
                    <div
                      key={`second-${logo}`}
                      className="flex-shrink-0 flex items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:scale-110 pointer-events-auto"
                    >
                      <Image
                        src={`/client/${logo}`}
                        alt={`${logo.replace('.png', '').replace(/([A-Z])/g, ' $1').trim()} logo`}
                        width={120}
                        height={40}
                        className="h-5 w-auto sm:h-6 md:h-8 lg:h-10 object-contain filter brightness-0 saturate-100 dark:filter dark:brightness-0 dark:invert opacity-70 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            {/* Scroll indicator */}
            <motion.button
              onClick={scrollToNextSection}
              className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full hover:bg-muted/50 transition-all duration-300 hover:scale-110 cursor-pointer group pointer-events-auto"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5, once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              aria-label="Scroll to next section"
            >
              <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
