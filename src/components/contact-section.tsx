"use client"

import React, { useState } from "react"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react"
import { WhatsappIcon } from "@/components/ui/whatsapp-icon"

export function ContactSection() {  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    helpWith: [] as string[],
    file: null as File | null,
    name: "",
    email: "",
  })
  const [showToast, setShowToast] = useState(false)
  const toastTimeout = useRef<NodeJS.Timeout | null>(null)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (helpType: string) => {
    setFormData(prev => ({
      ...prev,
      helpWith: prev.helpWith.includes(helpType)
        ? prev.helpWith.filter(h => h !== helpType)
        : [...prev.helpWith, helpType]
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({
      ...prev,
      file
    }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setFormData({
      projectName: "",
      description: "",
      helpWith: [],
      file: null,
      name: "",
      email: "",
    })
    setIsLoading(false)
    setShowToast(true)
    if (toastTimeout.current) clearTimeout(toastTimeout.current)
    toastTimeout.current = setTimeout(() => setShowToast(false), 3500)
    // You would typically handle the actual form submission here
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
    <section
      id="contact"
      className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#e0e7ff] via-[#f0fdfa] to-[#fdf2f8] dark:from-[#18181b] dark:via-[#23272f] dark:to-[#18181b] overflow-hidden animate-fade-in"
      style={{ minHeight: '100vh' }}
    >
      {/* Glassmorphism background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60 pointer-events-none animate-float" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl opacity-60 pointer-events-none animate-float2" />

      {/* Toast notification */}
      {showToast && (
        <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2 bg-white/90 dark:bg-zinc-900/90 border border-primary/30 shadow-lg rounded-xl px-6 py-3 flex items-center gap-3 animate-fade-in-up">          <span className="bg-green-100 dark:bg-green-900 rounded-full p-1"><Send className="h-4 w-4 text-green-600 dark:text-green-400 animate-bounce" /></span>
          <span className="font-medium text-green-700 dark:text-green-300">Project idea launched successfully!</span>
        </div>
      )}      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Links - Now on the left */}
          <div className="order-1 space-y-6 lg:space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Connect with me</h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
                Find me on these platforms or feel free to reach out directly.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon
                return (
                  <Card
                    key={link.name}
                    className="hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-0 group animate-fade-in-up"
                    style={{ transitionDelay: `${idx * 60}ms` }}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <a
                        href={link.href}
                        className="flex items-center gap-4 group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0 animate-bounce-on-hover">
                          <Icon className="h-6 w-6 text-primary group-hover:scale-125 transition-transform duration-300" />
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

            {/* Bigger Quick Response card for symmetry */}
            <Card className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-0 animate-fade-in-up">
              <CardContent className="p-6 sm:p-8">
                <h4 className="font-semibold mb-3 text-lg sm:text-xl">Quick Response</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to reach out on LinkedIn for faster communication.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Whether you&apos;re looking to collaborate on a project, need technical consultation, 
                  or just want to connect, I&apos;m always open to meaningful conversations. 
                  Let&apos;s build something amazing together!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - Now on the right */}
          <Card className="order-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-2xl border-0 animate-fade-in-up p-0 overflow-hidden">
            <div className="flex flex-col items-center justify-center pt-8 pb-2 px-6 border-b border-primary/10 bg-gradient-to-r from-primary/10 to-transparent">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-3 shadow-lg">
                <Mail className="h-10 w-10 text-primary animate-fade-in-up" />
              </div>
              <h2 className="text-2xl font-bold mb-1">Send me a message</h2>
              <p className="text-muted-foreground text-sm mb-2 text-center max-w-xs">Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
            </div>
            <CardContent className="p-6 lg:p-8"><form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Project Name */}
                <div className="space-y-2">
                  <Label htmlFor="projectName" className="text-sm font-medium">What's Your Project Called? <span className="text-red-500">(Required)</span></Label>
                  <Input
                    id="projectName"
                    name="projectName"
                    placeholder="e.g., Space App 2.0"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    className="h-11"
                    required
                  />
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium">What's the Big Idea? <span className="text-red-500">(Required)</span></Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Tell us about your project..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="resize-none"
                    required
                  />
                </div>

                {/* Help Categories */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">What Do You Need Help With?</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Website Development",
                      "Mobile App Development", 
                      "UI/UX Design",
                      "3D or AR/VR Experience",
                      "AI or ChatBot Integration",
                      "Something Else"
                    ].map((helpType) => (
                      <label
                        key={helpType}
                        className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.helpWith.includes(helpType)}
                          onChange={() => handleCheckboxChange(helpType)}
                          className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                        />
                        <span className="text-sm font-medium">{helpType}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="file" className="text-sm font-medium">Want to Show Us Something?</Label>
                  <div className="flex items-center justify-center w-full">
                    <label htmlFor="file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          {formData.file ? formData.file.name : (
                            <>
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </>
                          )}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input
                        id="file"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept="image/*,.pdf,.doc,.docx"
                      />
                    </label>
                  </div>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Your Name <span className="text-red-500">(Required)</span></Label>
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
                    <Label htmlFor="email" className="text-sm font-medium">Email Address <span className="text-red-500">(Required)</span></Label>
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
                </div>                {/* Submit Button */}
                <div className="flex justify-center mt-6">
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto px-8 py-3 rounded-md text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white transition-colors flex items-center justify-center gap-2 border-0" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Launching...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        🚀 Launch My Idea
                      </span>
                    )}
                  </Button>
                </div>
              </form>            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801931999190"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center animate-fade-in-up hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <WhatsappIcon className="h-7 w-7 animate-bounce" />
      </a>

      {/* Animations (TailwindCSS custom classes, add to your global CSS if not present) */}
      {/*
        .animate-fade-in { animation: fadeIn 1s both; }
        .animate-fade-in-up { animation: fadeInUp 1s both; }
        .animate-bounce-on-hover:hover { animation: bounce 0.7s; }
        .animate-float { animation: float 6s ease-in-out infinite alternate; }
        .animate-float2 { animation: float2 7s ease-in-out infinite alternate; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes float { 0% { transform: translateY(0); } 100% { transform: translateY(30px); } }
        @keyframes float2 { 0% { transform: translateY(0); } 100% { transform: translateY(-30px); } }
      */}
    </section>
  )
}
