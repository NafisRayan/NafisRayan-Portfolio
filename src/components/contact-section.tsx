"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, Cloud } from "lucide-react"
import { WhatsappIcon } from "@/components/ui/whatsapp-icon"

export function ContactSection() {  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",    projectTitle: "",
    bigIdea: "",
    helpNeeded: [] as string[],
  })
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }
    
    if (!formData.projectTitle.trim()) {
      errors.projectTitle = "Project title is required"
    }
    
    if (!formData.bigIdea.trim()) {
      errors.bigIdea = "Please describe your project idea"
    } else if (formData.bigIdea.trim().length < 10) {
      errors.bigIdea = "Please provide more details about your project (at least 10 characters)"
    }
    
    if (formData.helpNeeded.length === 0) {
      errors.helpNeeded = "Please select at least one service you need help with"
    }
    
    return errors
  }

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      helpNeeded: prev.helpNeeded.includes(service)
        ? prev.helpNeeded.filter(item => item !== service)        : [...prev.helpNeeded, service]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")
    
    // Validate form
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return    }
    
    setIsLoading(true)
    
    try {
      // Create form data for submission
      const submissionData = {
        ...formData,
        file: uploadedFile,
        timestamp: new Date().toISOString()
      }
      
      // Submit to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }
      
      // Success
      console.log("Form submitted successfully:", result)
      
      // Reset form and show success
      setFormData({ name: "", email: "", projectTitle: "", bigIdea: "", helpNeeded: [] })
      setUploadedFile(null)
      setFormErrors({})
      setIsSubmitted(true)
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
      
    } catch (error) {
      setSubmitError("Failed to send message. Please try again or contact me directly.")
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
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
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitError("File size must be less than 5MB")
        return
      }
      
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        setSubmitError("Please upload only images, PDFs, or Word documents")
        return
      }
      
      setUploadedFile(file)
      setSubmitError("")
    }
  }
  const removeFile = () => {
    setUploadedFile(null)
  }

  const services = [
    "Website Development",
    "Mobile App Development", 
    "UX/UI Design",
    "3D or AR/VR Experience",
    "AI or Chatbot Integration",
    "Something Else"
  ]
  return (
    <section id="contact" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm text-primary px-4 py-2 rounded-full bg-primary/10 inline-block mb-4">
            Contact Me
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Work Together on Your Next Project
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have an idea you want to bring to life? I&apos;m here to help you create something amazing. Get in 
            touch and let&apos;s discuss how we can make your vision a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Social Links */}
          <div className="order-1 lg:order-1 space-y-6">            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground">Feel free to reach out directly...

</h3>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Card key={link.name} className="border border-border/50 bg-transparent hover:shadow-md transition-all duration-300">
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
                          <h4 className="font-semibold group-hover:text-primary transition-colors text-sm sm:text-base text-foreground">
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
            <Card className="border border-border/50 bg-transparent">
              <CardContent className="p-4 sm:p-6">
                <h4 className="font-semibold mb-2 text-sm sm:text-base text-foreground">Quick Response</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to reach out on LinkedIn for faster communication.
                </p>
                <br />
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Whether you&apos;re looking to collaborate on a project, need technical 
                  consultation, or just want to connect, I&apos;m always open to meaningful 
                  conversations. Let&apos;s build something amazing together!
                </p>
              </CardContent>
            </Card></div>          {/* Contact Form */}
          <div className="order-2 lg:order-2">
            <Card className="border border-border/50 bg-transparent shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Send me a message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="What's your good name?"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`h-12 ${formErrors.name ? 'border-red-500' : ''}`}
                        required
                      />
                      {formErrors.name && (
                        <p className="text-sm text-red-500">{formErrors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="What's your web address?"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`h-12 ${formErrors.email ? 'border-red-500' : ''}`}
                        required
                      />
                      {formErrors.email && (
                        <p className="text-sm text-red-500">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                    {/* Project Title */}
                  <div className="space-y-2">
                    <Label htmlFor="projectTitle" className="text-sm font-medium text-foreground">What&apos;s Your Project Called?</Label>
                    <Input
                      id="projectTitle"
                      name="projectTitle"
                      placeholder="e.g. Social App 2.0"
                      value={formData.projectTitle}
                      onChange={handleInputChange}
                      className={`h-12 ${formErrors.projectTitle ? 'border-red-500' : ''}`}
                      required
                    />
                    {formErrors.projectTitle && (
                      <p className="text-sm text-red-500">{formErrors.projectTitle}</p>
                    )}
                  </div>
                  
                  {/* Big Idea */}
                  <div className="space-y-2">
                    <Label htmlFor="bigIdea" className="text-sm font-medium text-foreground">What&apos;s the Big Idea?</Label>
                    <Textarea
                      id="bigIdea"
                      name="bigIdea"
                      placeholder="Tell us about your project..."
                      value={formData.bigIdea}
                      onChange={handleInputChange}
                      rows={4}
                      className={`resize-none ${formErrors.bigIdea ? 'border-red-500' : ''}`}
                      required
                    />
                    {formErrors.bigIdea && (
                      <p className="text-sm text-red-500">{formErrors.bigIdea}</p>
                    )}
                  </div>
                  
                  {/* Help Needed */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-foreground">What Do You Need Help With?</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <label key={service} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.helpNeeded.includes(service)}
                            onChange={() => handleCheckboxChange(service)}
                            className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
                          />
                          <span className="text-sm text-foreground">{service}</span>
                        </label>
                      ))}
                    </div>
                    {formErrors.helpNeeded && (
                      <p className="text-sm text-red-500">{formErrors.helpNeeded}</p>
                    )}
                  </div>
                    {/* File Upload */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground">Want to Share Us Something?</Label>
                    {!uploadedFile ? (
                      <div 
                        className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-muted/30 hover:border-border/70 transition-colors cursor-pointer"
                        onClick={() => document.getElementById('file-upload')?.click()}
                      >
                        <Cloud className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                        <p className="text-xs text-muted-foreground">Images, PDFs, or Word documents (max 5MB)</p>
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          accept="image/*,.pdf,.doc,.docx"
                          onChange={handleFileUpload}
                        />
                      </div>
                    ) : (
                      <div className="border border-border rounded-lg p-4 bg-muted/30">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Cloud className="h-6 w-6 text-primary" />
                            <div>
                              <p className="text-sm font-medium text-foreground">{uploadedFile.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={removeFile}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800">
                      <p className="text-sm text-red-600 dark:text-red-400">{submitError}</p>
                    </div>
                  )}                  {/* Success Message */}
                  {isSubmitted && (
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800">
                      <p className="text-sm text-green-600 dark:text-green-400">
                        🎉 Your message has been sent successfully! I'll get back to you within 24 hours.
                      </p>
                      <p className="text-xs text-green-500 dark:text-green-300 mt-1">
                        📧 Check your email for a confirmation message with next steps.
                      </p>
                    </div>
                  )}
                    <Button type="submit" className="w-full h-12" disabled={isLoading || isSubmitted}>
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Launching...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center gap-2">
                        ✅ Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        🚀 Launch My Idea
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
