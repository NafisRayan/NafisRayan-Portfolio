import { Github, Linkedin, Mail } from "lucide-react"
import { WhatsappIcon } from "@/components/ui/whatsapp-icon"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/nafisrayan", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/NafisRayan", icon: Github },
    { name: "WhatsApp", href: "https://wa.me/8801931999190", icon: WhatsappIcon },
    { name: "Email", href: "mailto:nafisrayan123@gmail.com", icon: Mail },
  ]

  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-8">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Brand/Logo section */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Nafis
            </span>
            <span className="hidden sm:inline text-sm text-muted-foreground">
              | Software Developer
            </span>
          </div>

          {/* Social links - Center */}
          <div className="flex items-center gap-4">
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
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>

          {/* Credit text - Right */}
          <div className="text-sm text-muted-foreground text-center lg:text-right">
            © {currentYear} Nafis Rayan. All rights reserved.
            <div className="text-xs mt-1">
              Design That Solve Real Life Problems.
            </div>          </div>
        </div>
      </div>
    </footer>
  )
}
