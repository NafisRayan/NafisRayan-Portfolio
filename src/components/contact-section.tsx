"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { WhatsappIcon } from "@/components/ui/whatsapp-icon"

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsLoading(false)
    
    // You would typically handle the actual form submission here
    alert("Message sent successfully!")
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/nafisrayan",
      icon: Linkedin,
      description: "Connect with me on LinkedIn"
    },
    {
      name: "GitHub",
      href: "https://github.com/NafisRayan", 
      icon: Github,
      description: "Check out my repositories"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/8801931999190",
      icon: WhatsappIcon,
      description: "Chat with me on WhatsApp"
    },
    {
      name: "Email",
      href: "mailto:nafisrayan123@gmail.com",
      icon: Mail,
      description: "Send me an email"
    }
  ]

  return (
    <section id="contact" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 grid-overlay">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm text-primary px-4 py-2 rounded-full bg-primary/10 inline-block mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Let&apos;s Connect
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="order-2 lg:order-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Mail className="h-5 w-5" />
                Send me a message
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="What's your good name?"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-11"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Your Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="What's your web address?"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-11"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="What do you want to say?"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="resize-none"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full h-11" disabled={isLoading}>
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="loading-dots">Sending</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Connect with me</h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
                Find me on these platforms or feel free to reach out directly.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Card key={link.name} className="hover:shadow-md transition-all duration-300 hover:scale-105">
                    <CardContent className="p-4 sm:p-6">
                      <a
                        href={link.href}
                        className="flex items-center gap-4 group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold group-hover:text-primary transition-colors text-sm sm:text-base">
                            {link.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Additional contact info */}
            <Card>
              <CardContent className="p-4 sm:p-6">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Quick Response</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to reach out on LinkedIn for faster communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
