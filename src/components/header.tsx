"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Download, Mail } from "lucide-react"
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
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-2 lg:px-3 xl:px-4 py-2 text-xs lg:text-sm xl:text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-muted/50 hover:scale-105 active:scale-95"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4">
              <ThemeToggle />
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-lg h-9 w-9 lg:h-10 lg:w-10 transition-all duration-300 hover:scale-105 active:scale-95"
                title="Download CV" 
                asChild
              >
                <a href="/NafisRayan_CV.pdf" download="NafisRayan_CV.pdf">
                  <Download className="h-4 w-4 lg:h-5 lg:w-5" />
                  <span className="sr-only">Download CV</span>
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-lg h-9 w-9 lg:h-10 lg:w-10 transition-all duration-300 hover:scale-105 active:scale-95"
                title="Contact Me" 
                asChild
              >
                <Link href="#contact">
                  <Mail className="h-4 w-4 lg:h-5 lg:w-5" />
                  <span className="sr-only">Contact Me</span>
                </Link>
              </Button>
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
