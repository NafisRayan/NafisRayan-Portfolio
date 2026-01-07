import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { uploadToCloudinary } from '@/lib/cloudinary'

export async function POST(req: NextRequest) {
  try {
    // Parse FormData
    const formData = await req.formData()
    
    // Extract form fields
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const projectTitle = formData.get('projectTitle') as string
    const bigIdea = formData.get('bigIdea') as string
    const helpNeededStr = formData.get('helpNeeded') as string
    const file = formData.get('file') as File | null
    
    // Parse helpNeeded array
    const helpNeeded = helpNeededStr ? JSON.parse(helpNeededStr) : []
    
    // Validate required fields
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
      // Process file if uploaded
    let fileInfo = null

    if (file && file.size > 0) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'File size must be less than 5MB' },
          { status: 400 }
        )
      }      // Validate file type - only images allowed
      const allowedTypes = [
        'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        return NextResponse.json(
          { error: 'Please upload only image files (JPEG, PNG, GIF, SVG, WebP)' },
          { status: 400 }
        )
      }
        try {
        // Convert file to buffer
        const fileBuffer = Buffer.from(await file.arrayBuffer())
        
        // Upload to Cloudinary
        const uploadResult = await uploadToCloudinary(fileBuffer, file.name, file.type) as { secure_url: string; public_id: string }
        
        fileInfo = {
          name: file.name,
          size: file.size,
          type: file.type,
          cloudinaryUrl: uploadResult.secure_url,
          cloudinaryPublicId: uploadResult.public_id
        }
        

        
        console.log('Image uploaded to Cloudinary:', {
          url: uploadResult.secure_url,
          publicId: uploadResult.public_id
        })
        
      } catch (uploadError) {
        console.error('Failed to upload image to Cloudinary:', uploadError)
        return NextResponse.json(
          { error: 'Failed to upload image. Please try again.' },
          { status: 500 }
        )
      }
    }
      // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to user
    
    // Send email notification using Resend
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const emailData = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'nafisrayan123@gmail.com',
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
              </ul>            </div>
            
            ${fileInfo ? `
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #374151;">🖼️ Attached Image</h3>
              <p><strong>File Name:</strong> ${fileInfo.name}</p>
              <p><strong>File Size:</strong> ${(fileInfo.size / 1024 / 1024).toFixed(2)} MB</p>
              <p><strong>File Type:</strong> ${fileInfo.type}</p>
              
              <div style="margin: 15px 0; text-align: center;">
                <img src="${fileInfo.cloudinaryUrl}" alt="${fileInfo.name}" style="max-width: 100%; max-height: 400px; border-radius: 8px; border: 1px solid #e5e7eb;" />
              </div>
              
              <p><strong>View Original:</strong> <a href="${fileInfo.cloudinaryUrl}" target="_blank" style="color: #2563eb; text-decoration: none; background: #dbeafe; padding: 8px 16px; border-radius: 4px; display: inline-block; margin-top: 8px;">🔗 Open Full Size Image</a></p>
              
              <p style="margin-top: 15px; color: #059669; font-size: 14px;"><em>✅ Image has been securely uploaded to Cloudinary.</em></p>
            </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              <p>This message was sent from your portfolio contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.</p>
            </div>
          </div>
        `
      })
      
      console.log('Email sent successfully:', emailData)
      
      // Send confirmation email to the user
      await resend.emails.send({
        from: 'onboarding@resend.dev',
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
      fileInfo,
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
