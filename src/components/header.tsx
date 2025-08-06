"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"

const navigation = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Why Hire Me", href: "#hire-me" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] p-2 sm:p-3 md:p-4 lg:p-6 transition-all duration-300">
      <div className="container mx-auto max-w-7xl">
        <motion.nav
          className={`
            backdrop-blur-md rounded-xl sm:rounded-2xl border transition-all duration-300
            ${isScrolled
              ? "bg-white/85 dark:bg-black/85 border-border/50 shadow-lg"
              : "bg-white/75 dark:bg-black/75 border-border/40 shadow-sm"
            }
          `}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ amount: 0.7 }}
        >
          <div className="flex h-14 sm:h-16 md:h-18 lg:h-20 items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
            
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center space-x-2 shrink-0 group">
              <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                Nafis
              </span>
              <span className="hidden sm:inline text-xs md:text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                | Software Developer
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-3">
              {navigation.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex items-center"
                >
                  <motion.div
                    variants={{
                      hover: { x: 8 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center w-full"
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 px-2 lg:px-3 xl:px-4 py-2 text-xs lg:text-sm xl:text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-muted/50 hover:scale-105 active:scale-95"
                    >
                      <motion.span
                        className="bg-primary rounded-full"
                        initial={{ width: 0, height: 0, opacity: 0 }}
                        variants={{
                          hover: {
                            width: "0.5em",
                            height: "0.5em",
                            opacity: 1
                          },
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                      {item.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4">
              <ThemeToggle />
              <motion.div
                className={`flex items-center rounded-full px-1 py-1 shadow-lg cursor-pointer transition ${mounted ? (theme === 'dark' ? 'bg-background' : 'bg-background') : ''} border border-border/50`}
                style={{ minWidth: '200px', minHeight: '48px' }}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                  rest: {},
                  hover: {},
                }}
              >
                <motion.div
                  className="flex items-center w-full"
                  style={{ width: '100%' }}
                  variants={{
                    rest: { flexDirection: "row" },
                    hover: { flexDirection: "row-reverse" }
                  }}
                  transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
                >
                  <button
                    className="flex items-center group"
                    style={{
                      outline: "none",
                      "--arrow-move": "190px",
                      "--rest-move": "40px",
                    } as React.CSSProperties}
                    onClick={() => {
                      document.querySelector("#contact")?.scrollIntoView({ behavior: 'smooth' });
                      const link = document.createElement('a');
                      link.href = '/NafisRayan_CV.pdf';
                      link.download = 'NafisRayan_CV.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <div
                      className={`z-10 flex items-center font-semibold text-base rounded-full px-6 py-2 transition-shadow shadow
                        ${mounted
                          ? theme === "dark"
                            ? "text-muted-foreground hover:text-foreground bg-primary/5"
                            : "text-muted-foreground hover:text-foreground bg-primary/5"
                          : ""
                        }
                        transition-transform duration-350
                        group-hover:translate-x-[var(--rest-move)]
                      `}
                    >
                      Get In Touch • Here
                    </div>
                    <span className="inline-flex items-center ml-2 mr-2 transition-transform duration-350 group-hover:-translate-x-[var(--arrow-move)]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </button>
                </motion.div>
              </motion.div>
            </div>            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center space-x-2 sm:space-x-3">
              <ThemeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-lg h-9 w-9 sm:h-10 sm:w-10 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-muted/70"
                  >
                    <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                  <SheetContent 
                  side="right" 
                  className="w-[280px] sm:w-[320px] backdrop-blur-md bg-white/95 dark:bg-black/95 border-l p-0"
                >
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border/50">
                      <span className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Menu
                      </span>
                    </div>
                    
                    {/* Mobile Navigation Links */}
                    <nav className="flex-1 px-4 sm:px-6 py-4 sm:py-6">
                      <div className="space-y-2">
                        {navigation.map((item, index) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center text-base sm:text-lg font-medium text-muted-foreground hover:text-foreground transition-all duration-300 py-3 sm:py-4 px-3 sm:px-4 rounded-xl hover:bg-muted/60 active:bg-muted/80 hover:scale-[1.02] active:scale-[0.98] group"
                            onClick={() => setIsOpen(false)}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </nav>

                    {/* Mobile Footer */}
                    <div className="border-t border-border/50 p-4 sm:p-6 space-y-3">
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="w-full rounded-xl text-sm sm:text-base h-12 sm:h-14 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" 
                        asChild
                      >
                        <a href="/NafisRayan_CV.pdf" download="NafisRayan_CV.pdf" onClick={() => setIsOpen(false)}>
                          Download CV
                        </a>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="lg"
                        className="w-full rounded-xl border border-border text-muted-foreground hover:text-foreground text-sm sm:text-base h-12 sm:h-14 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:border-primary/50 hover:bg-primary/5" 
                        asChild
                      >
                        <Link href="#contact" onClick={() => setIsOpen(false)}>
                          Contact Me
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </motion.nav>
      </div>
    </div>
  )
}
