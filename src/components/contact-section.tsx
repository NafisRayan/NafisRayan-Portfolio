"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, Cloud } from "lucide-react"
import { WhatsappIcon } from "@/components/ui/whatsapp-icon"

import { motion } from "framer-motion"

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectTitle: "",
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
        ? prev.helpNeeded.filter(item => item !== service)
        : [...prev.helpNeeded, service]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")
    
    // Validate form
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    setIsLoading(true)
    try {
      // Create FormData for file upload support
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('projectTitle', formData.projectTitle)
      formDataToSend.append('bigIdea', formData.bigIdea)
      formDataToSend.append('helpNeeded', JSON.stringify(formData.helpNeeded))
      formDataToSend.append('timestamp', new Date().toISOString())
      
      // Add file if uploaded
      if (uploadedFile) {
        formDataToSend.append('file', uploadedFile)
      }
      
      // Submit to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend // Don't set Content-Type header - let browser set it for FormData
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
      
      // Validate file type - only images allowed
      const allowedTypes = [
        'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        setSubmitError("Please upload only image files (JPEG, PNG, GIF, SVG, WebP)")
        return
      }
      
      setUploadedFile(file)
      setSubmitError("")
      console.log('File selected:', {
        name: file.name,
        type: file.type,
        size: file.size
      })
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
    <section id="contact" className="pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.7 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs sm:text-sm text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 inline-block mb-4">
            Contact Me
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Let&apos;s Work Together on Your Next Project
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have an idea you want to bring to life? I&apos;m here to help you create something amazing. Get in 
            touch and let&apos;s discuss how we can make your vision a reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Social Links */}
          <div className="order-1 lg:order-1 space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">Feel free to reach out directly...</h3>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              {socialLinks.map((link, i) => {
                const Icon = link.icon
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.7 }}
                    transition={{ duration: 0.7, delay: 0.05 + i * 0.07 }}
                  >
                    <Card className="border border-border/50 bg-white/80 dark:bg-black/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                      <CardContent className="p-3 sm:p-4 lg:p-6">
                        <a
                          href={link.href}
                          className="flex items-center gap-3 sm:gap-4 group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="p-2 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
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
                  </motion.div>
                )
              })}
            </div>
            
            {/* Additional contact info */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.7 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            >
              <Card className="border border-border/50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base text-foreground">Quick Response</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    I typically respond to messages within 24 hours. For urgent inquiries,
                    feel free to reach out on WhatsAPP for faster communication.
                  </p>
                  <br />
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Whether you&apos;re looking to collaborate on a project, need technical
                    consultation, or just want to connect, I&apos;m always open to meaningful
                    conversations. Let&apos;s build something amazing together!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <div className="order-2 lg:order-2">
            <Card className="border border-border/50 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader className="text-center pb-6 sm:pb-8 mt-6 sm:mt-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-foreground">Send me a message</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground">
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Name and Email */}
                    {/* Name and Email */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.7 }}
                      transition={{ duration: 0.7, delay: 0.10 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, y: 60 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false, amount: 0.7 }}
                          transition={{ duration: 0.7, delay: 0.10 }}
                        >
                          <Label htmlFor="name" className="text-sm font-medium text-foreground">Your Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="What&apos;s your good name?"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`h-10 sm:h-12 ${formErrors.name ? 'border-red-500' : ''}`}
                            required
                          />
                          {formErrors.name && (
                            <p className="text-sm text-red-500">{formErrors.name}</p>
                          )}
                        </motion.div>
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, y: 60 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false, amount: 0.7 }}
                          transition={{ duration: 0.7, delay: 0.13 }}
                        >
                          <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="What&apos;s your web address?"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`h-10 sm:h-12 ${formErrors.email ? 'border-red-500' : ''}`}
                            required
                          />
                          {formErrors.email && (
                            <p className="text-sm text-red-500">{formErrors.email}</p>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* Project Title */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.7 }}
                      transition={{ duration: 0.7, delay: 0.16 }}
                    >
                      <Label htmlFor="projectTitle" className="text-sm font-medium text-foreground">What&apos;s Your Project Called?</Label>
                      <Input
                        id="projectTitle"
                        name="projectTitle"
                        placeholder="e.g. Social App 2.0"
                        value={formData.projectTitle}
                        onChange={handleInputChange}
                        className={`h-10 sm:h-12 ${formErrors.projectTitle ? 'border-red-500' : ''}`}
                        required
                      />
                      {formErrors.projectTitle && (
                        <p className="text-sm text-red-500">{formErrors.projectTitle}</p>
                      )}
                    </motion.div>
                    
                    {/* Big Idea */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.7 }}
                      transition={{ duration: 0.7, delay: 0.19 }}
                    >
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
                    </motion.div>
                    
                    {/* Help Needed */}
                    <motion.div
                      className="space-y-2 sm:space-y-3"
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.7 }}
                      transition={{ duration: 0.7, delay: 0.22 }}
                    >
                      <Label className="text-sm font-medium text-foreground">What Do You Need Help With?</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {services.map((service, idx) => (
                          <motion.label
                            key={service}
                            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.7 }}
                            transition={{ duration: 0.7, delay: 0.23 + idx * 0.03 }}
                          >
                            <input
                              type="checkbox"
                              checked={formData.helpNeeded.includes(service)}
                              onChange={() => handleCheckboxChange(service)}
                              className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
                            />
                            <span className="text-sm text-foreground">{service}</span>
                          </motion.label>
                        ))}
                      </div>
                      {formErrors.helpNeeded && (
                        <p className="text-sm text-red-500">{formErrors.helpNeeded}</p>
                      )}
                    </motion.div>
                    
                    {/* File Upload */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.7 }}
                      transition={{ duration: 0.7, delay: 0.28 }}
                    >
                      <Label className="text-sm font-medium text-foreground">Share an Image with Us?</Label>
                      {!uploadedFile ? (
                        <div
                          className="border-2 border-dashed border-border rounded-lg p-4 sm:p-6 lg:p-8 text-center bg-muted/30 hover:border-border/70 transition-colors cursor-pointer"
                          onClick={() => document.getElementById('file-upload')?.click()}
                        >
                          <Cloud className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-muted-foreground mx-auto mb-3 sm:mb-4" />
                          <p className="text-muted-foreground mb-2 text-sm sm:text-base">Click to upload or drag and drop</p>
                          <p className="text-xs text-muted-foreground">Images only (JPEG, PNG, GIF, SVG, WebP) - max 5MB</p>
                          <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            accept="image/*"
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
                    </motion.div>

                  {/* Error Message */}
                  {submitError && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800">
                      <p className="text-sm text-red-600 dark:text-red-400">{submitError}</p>
                    </div>
                  )}
                  
                  {/* Success Message */}
                  {isSubmitted && (
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800">
                      <p className="text-sm text-green-600 dark:text-green-400">
                        🎉 Your message has been sent successfully! I&apos;ll get back to you within 24 hours.
                      </p>
                      <p className="text-xs text-green-500 dark:text-green-300 mt-1">
                        📧 Check your email for a confirmation message with next steps.
                      </p>
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full h-10 sm:h-12 mb-6" disabled={isLoading || isSubmitted}>
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
