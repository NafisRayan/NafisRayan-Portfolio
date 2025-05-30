import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { WhatsappIcon } from "@/components/ui/whatsapp-icon"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/NafisRayan", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/nafisrayan", icon: Linkedin },
    { name: "WhatsApp", href: "https://wa.me/8801931999190", icon: WhatsappIcon },
    { name: "Email", href: "mailto:nafisrayan123@gmail.com", icon: Mail },
  ]

  return (
    <div className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground text-center sm:text-left">
            <span>© {currentYear} Nafis. Made with</span>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using NextJS & ShadCN</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Button key={link.name} variant="ghost" size="icon" asChild>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                </Button>
              )
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Built with modern web technologies • Open to new opportunities • 
            <a 
              href="#contact" 
              className="hover:text-foreground transition-colors ml-1 underline underline-offset-4"
            >
              Let&apos;s connect
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
