"use client"

import React, { useEffect, useState, useRef, useCallback, Suspense, lazy } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion'
import { cn } from '@/lib/utils'

// Lazy load Spline with delay for better initial performance
const Spline = lazy(() => 
  new Promise<typeof import('@splinetool/react-spline')>(resolve => {
    setTimeout(() => {
      import('@splinetool/react-spline').then(module => {
        resolve(module)
      })
    }, 1000) // Delay loading by 1 second
  })
)

// Device detection hook with proper types
function useDeviceDetection() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent
      const isMobileDevice = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
      setIsMobile(isMobileDevice)

      // Check for low-performance indicators with proper type checking
      interface NavigatorConnection {
        effectiveType?: string;
      }
      interface ExtendedNavigator extends Navigator {
        connection?: NavigatorConnection;
        deviceMemory?: number;
      }
      
      const nav = navigator as ExtendedNavigator
      const isSlowConnection = nav.connection?.effectiveType && 
        ['slow-2g', '2g', '3g'].includes(nav.connection.effectiveType)
      const hasLowMemory = nav.deviceMemory && nav.deviceMemory < 4
      const isOldDevice = /Android [1-6]\.|iPhone OS [1-9]_/i.test(userAgent)
      
      setIsLowPerformance(Boolean(isSlowConnection || hasLowMemory || isOldDevice))
    }

    checkDevice()
  }, [])

  return { isMobile, isLowPerformance }
}

// Optimized SplineScene Component with intersection observer
interface SplineSceneProps {
  scene: string
  className?: string
  shouldLoad: boolean
}

function SplineScene({ scene, className, shouldLoad }: SplineSceneProps) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldLoad) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsIntersecting(true)
          setHasLoaded(true)
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [shouldLoad, hasLoaded])

  if (!shouldLoad) {
    return (
      <div ref={ref} className={cn("w-full h-full", className)}>
        <div className="w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/10 animate-pulse" />
      </div>
    )
  }

  return (
    <div ref={ref} className={cn("w-full h-full", className)}>
      {isIntersecting ? (
        <Suspense 
          fallback={
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary/30"></div>
            </div>
          }
        >
          <Spline
            scene={scene}
            className="w-full h-full"
            onLoad={() => console.log('Spline loaded successfully')}
            onError={(error: unknown) => console.warn('Spline failed to load:', error)}
          />
        </Suspense>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/10 animate-pulse" />
      )}
    </div>
  )
}

// Fallback animated background for low-performance devices
function FallbackBackground({ className }: { className?: string }) {
  return (
    <div className={cn("w-full h-full relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,theme(colors.primary/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.primary/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,theme(colors.primary/0.08),transparent_50%)]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Spotlight Component
type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

function Spotlight({
  className,
  size = 200,
  springOptions = { bounce: 0 },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;

    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', () => setIsHovered(true));
    parentElement.addEventListener('mouseleave', () => setIsHovered(false));

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', () => setIsHovered(true));
      parentElement.removeEventListener('mouseleave', () =>
        setIsHovered(false)
      );
    };
  }, [parentElement, handleMouseMove]);
  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200',
        'from-white/20 via-white/10 to-transparent dark:from-white/30 dark:via-white/20 dark:to-transparent',
        isHovered ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  );
}

// Main HeroSection Component
export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { isMobile, isLowPerformance } = useDeviceDetection()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToNextSection = () => {
    const experienceSection = document.getElementById('experience')
    if (experienceSection) {
      experienceSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const clientLogos = [
    'BoctoCrop.png',
    'ByteSlack.png',
    'CollegeMastermind.png',
    'CreativeCentralian.png',
    'EcoMart.png',
    'LNP.png',
    'Micratto.png',
    'Middler.png',
    'PetSquadTV.png',
    'Photoreviser.png',
    'ReviewSensical.png',
    'Ultra Engineering.png'
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20">      {/* Spline 3D Background with Mouse Interaction */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-white dark:bg-black overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            size={300}
          />
          {(isMobile || isLowPerformance) ? (
            <FallbackBackground className="w-full h-full opacity-20 dark:opacity-30" />
          ) : (
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full opacity-20 dark:opacity-30 pointer-events-auto"
              shouldLoad={true}
            />
          )}
        </div>
      </div><div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10 pointer-events-none">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 lg:space-y-12 max-w-5xl mx-auto">
          <div className={`space-y-3 sm:space-y-4 lg:space-y-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'} pointer-events-auto`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Nafis Rayan
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Innovative Software Developer,{" "}
              <br className="hidden sm:inline" />
              building Web, Mobile, and 3D applications.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 ${isLoaded ? 'animate-slide-up' : 'opacity-0'} pointer-events-auto`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <Button size="lg" className="text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4" asChild>
              <a href="#hire-me">Learn More</a>
            </Button>
            <Button variant="outline" size="lg" className="text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
            {/* Client Logos */}
          <div className={`w-full max-w-7xl mx-auto ${isLoaded ? 'animate-fade-in' : 'opacity-0'} pointer-events-auto`} style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 text-center">Trusted by amazing clients</p>
            <div className="relative overflow-hidden">
              <div className="flex animate-slide-carousel space-x-4 sm:space-x-6 lg:space-x-8 items-center">
                {/* First set of logos */}
                {clientLogos.map((logo) => (
                  <div
                    key={`first-${logo}`}
                    className="flex-shrink-0 flex items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:scale-110"
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
                {/* Duplicate set for seamless loop */}
                {clientLogos.map((logo) => (
                  <div
                    key={`second-${logo}`}
                    className="flex-shrink-0 flex items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:scale-110"
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
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={scrollToNextSection}
            className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full hover:bg-muted/50 transition-all duration-300 hover:scale-110 cursor-pointer group ${isLoaded ? 'animate-pulse-slow' : 'opacity-0'} pointer-events-auto`} 
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
            aria-label="Scroll to next section"
          >
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}
