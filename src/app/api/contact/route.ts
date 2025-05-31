import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    // Validate required fields
    const { name, email, projectTitle, bigIdea, helpNeeded } = body
    
    if (!name || !email || !projectTitle || !bigIdea || !helpNeeded?.length) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
      // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to user
    
    // Send email notification using Resend
    try {
      const emailData = await resend.emails.send({
        from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
        to: process.env.CONTACT_EMAIL || 'nafisrayan123@gmail.com',
        subject: `New Project Inquiry: ${projectTitle}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
              🚀 New Project Inquiry
            </h2>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Project Title:</strong> ${projectTitle}</p>
            </div>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #374151;">Project Details</h3>
              <p><strong>The Big Idea:</strong></p>
              <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
                ${bigIdea}
              </p>
            </div>
            
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #374151;">Services Needed</h3>
              <ul style="margin: 0; padding-left: 20px;">
                ${helpNeeded.map((service: string) => `<li>${service}</li>`).join('')}
              </ul>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              <p>This message was sent from your portfolio contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.</p>
            </div>
          </div>
        `
      })
      
      console.log('Email sent successfully:', emailData)
      
      // Send confirmation email to the user
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
        to: email,
        subject: 'Thanks for reaching out! - Nafis Rayan',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
              Thanks for reaching out, ${name}! 👋
            </h2>
            
            <p>I've received your project inquiry for <strong>"${projectTitle}"</strong> and I'm excited to learn more about your idea!</p>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #374151;">What's Next?</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>I'll review your project details carefully</li>
                <li>I'll get back to you within 24 hours</li>
                <li>We can schedule a call to discuss your vision</li>
                <li>I'll provide a tailored proposal for your project</li>
              </ul>
            </div>
            
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0;"><strong>💡 Quick Tip:</strong> Feel free to send any additional files, mockups, or references that might help me understand your vision better!</p>
            </div>
            
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Check out my <a href="https://github.com/NafisRayan" style="color: #2563eb;">GitHub</a> for my latest work</li>
              <li>Connect with me on <a href="https://linkedin.com/in/nafisrayan" style="color: #2563eb;">LinkedIn</a></li>
              <li>Reach out on <a href="https://wa.me/8801931999190" style="color: #2563eb;">WhatsApp</a> for urgent queries</li>
            </ul>
            
            <p>Looking forward to bringing your ideas to life!</p>
            
            <p style="margin-top: 30px;">
              Best regards,<br>
              <strong>Nafis Rayan</strong><br>
              <em>Full-Stack Developer & Digital Innovation Specialist</em>
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
              <p>This is an automated confirmation email. If you have any immediate questions, please reply to this email or contact me directly.</p>
            </div>
          </div>
        `
      })
      
    } catch (emailError) {
      console.error('Failed to send email:', emailError)
      // Don't fail the entire request if email fails
      // Just log the error and continue
    }
    
    // Log the submission for record keeping
    console.log('New contact form submission:', {
      name,
      email,
      projectTitle,
      bigIdea,
      helpNeeded,
      timestamp: new Date().toISOString()
    })
    
    return NextResponse.json(
      { 
        message: 'Message sent successfully! I\'ll get back to you soon.',
        success: true 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
