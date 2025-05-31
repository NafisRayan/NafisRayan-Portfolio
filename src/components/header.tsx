"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Github, Linkedin, FileText, Mail } from "lucide-react"
import { WhatsappIcon } from "@/components/ui/whatsapp-icon"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
   { name: "Why Hire Me", href: "#hire-me" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/NafisRayan", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/nafisrayan", icon: Linkedin },
  { name: "WhatsApp", href: "https://wa.me/8801931999190", icon: WhatsappIcon },
  { name: "Email", href: "mailto:nafisrayan123@gmail.com", icon: Mail },
  { name: "CV", href: "/NafisRayan_CV.pdf", icon: FileText },
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
    <div className="fixed top-0 left-0 right-0 z-[9999] p-4 transition-all duration-300">
      <div className="container mx-auto">        <nav 
          className={`
            backdrop-blur-md rounded-2xl border transition-all duration-300
            ${isScrolled 
              ? "bg-background/70 border-border/40 shadow-lg" 
              : "bg-background/70 border-border/30 shadow-sm"
            }
          `}
        >
          <div className="flex h-24 items-center justify-between px-6">
            <Link href="/" className="flex items-center space-x-2 shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Nafis
              </span>
              <span className="hidden sm:inline text-sm text-muted-foreground">
                | Software Developer
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              <ThemeToggle />
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Button key={link.name} variant="ghost" size="icon" className="rounded-lg" asChild>
                    <Link href={link.href}>
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{link.name}</span>
                    </Link>
                  </Button>
                )
              })}
            </div>

            <div className="flex lg:hidden items-center space-x-2">
              <ThemeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-lg">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 backdrop-blur-md bg-background/95">
                  <div className="flex flex-col space-y-6 mt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Menu</span>
                    </div>
                    
                    <nav className="flex flex-col space-y-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-muted/50"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>

                    <div className="border-t pt-4">
                      <div className="flex space-x-2">
                        {socialLinks.map((link) => {
                          const Icon = link.icon
                          return (
                            <Button key={link.name} variant="ghost" size="icon" className="rounded-lg" asChild>
                              <Link href={link.href}>
                                <Icon className="h-5 w-5" />
                                <span className="sr-only">{link.name}</span>
                              </Link>
                            </Button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
