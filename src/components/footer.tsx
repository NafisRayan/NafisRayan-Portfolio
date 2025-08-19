"use client"
import { Github, Linkedin, Mail } from "lucide-react"
import { WhatsappIcon } from "@/components/ui/whatsapp-icon"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/nafisrayan", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/NafisRayan", icon: Github },
    { name: "WhatsApp", href: "https://wa.me/8801931999190", icon: WhatsappIcon },
    { name: "Email", href: "mailto:nafisrayan123@gmail.com", icon: Mail },  ]
  
  return (
    <motion.footer
      className="w-full border-t bg-white/95 dark:bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5, once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Brand/Logo section */}
          <div className="flex items-center gap-2 text-center lg:text-left">
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              RocketLab
            </span>
            <span className="hidden sm:inline text-sm text-muted-foreground">
              | Software Solutions
            </span>
          </div>
  
          {/* Social links - Center */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-muted rounded-md"
                  aria-label={link.name}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              )
            })}
          </div>          {/* Credit text - Right */}
          <div className="text-xs sm:text-sm text-muted-foreground text-center lg:text-right">
            © {currentYear} RocketLab. All rights reserved.
            <div className="text-xs mt-1">
              Design That Solve Real Life Problems.
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
