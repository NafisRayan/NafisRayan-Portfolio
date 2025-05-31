interface ContactEmailTemplateProps {
  name: string
  email: string
  projectTitle: string
  bigIdea: string
  helpNeeded: string[]
}

export function ContactEmailTemplate({
  name,
  email,
  projectTitle,
  bigIdea,
  helpNeeded
}: ContactEmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#2563eb', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px' }}>
        🚀 New Project Inquiry
      </h2>
      
      <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
        <h3 style={{ marginTop: 0, color: '#374151' }}>Contact Information</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Project Title:</strong> {projectTitle}</p>
      </div>
      
      <div style={{ background: '#f0f9ff', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
        <h3 style={{ marginTop: 0, color: '#374151' }}>Project Details</h3>
        <p><strong>The Big Idea:</strong></p>
        <p style={{ 
          background: 'white', 
          padding: '15px', 
          borderRadius: '4px', 
          borderLeft: '4px solid #2563eb' 
        }}>
          {bigIdea}
        </p>
      </div>
      
      <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
        <h3 style={{ marginTop: 0, color: '#374151' }}>Services Needed</h3>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          {helpNeeded.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      
      <div style={{ 
        marginTop: '30px', 
        paddingTop: '20px', 
        borderTop: '1px solid #e5e7eb', 
        color: '#6b7280', 
        fontSize: '14px' 
      }}>
        <p>
          This message was sent from your portfolio contact form on{' '}
          {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}.
        </p>
      </div>
    </div>
  )
}

interface ConfirmationEmailTemplateProps {
  name: string
  projectTitle: string
}

export function ConfirmationEmailTemplate({ name, projectTitle }: ConfirmationEmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#2563eb', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px' }}>
        Thanks for reaching out, {name}! 👋
      </h2>
      
      <p>
        I&#39;ve received your project inquiry for <strong>&quot;{projectTitle}&quot;</strong> and I&#39;m excited to learn more about your idea!
      </p>
      
      <div style={{ background: '#f0f9ff', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
        <h3 style={{ marginTop: 0, color: '#374151' }}>What&#39;s Next?</h3>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>I&#39;ll review your project details carefully</li>
          <li>I&#39;ll get back to you within 24 hours</li>
          <li>We can schedule a call to discuss your vision</li>
          <li>I&#39;ll provide a tailored proposal for your project</li>
        </ul>
      </div>
      
      <div style={{ background: '#fef3c7', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
        <p style={{ margin: 0 }}>
          <strong>💡 Quick Tip:</strong> Feel free to send any additional files, mockups, or references that might help me understand your vision better!
        </p>
      </div>
      
      <p>In the meantime, feel free to:</p>
      <ul>
        <li>Check out my <a href="https://github.com/NafisRayan" style={{ color: '#2563eb' }}>GitHub</a> for my latest work</li>
        <li>Connect with me on <a href="https://linkedin.com/in/nafisrayan" style={{ color: '#2563eb' }}>LinkedIn</a></li>
        <li>Reach out on <a href="https://wa.me/8801931999190" style={{ color: '#2563eb' }}>WhatsApp</a> for urgent queries</li>
      </ul>
      
      <p>Looking forward to bringing your ideas to life!</p>
      
      <p style={{ marginTop: '30px' }}>
        Best regards,<br />
        <strong>Nafis Rayan</strong><br />
        <em>Full-Stack Developer & Digital Innovation Specialist</em>
      </p>
      
      <div style={{ 
        marginTop: '30px', 
        paddingTop: '20px', 
        borderTop: '1px solid #e5e7eb', 
        color: '#6b7280', 
        fontSize: '12px' 
      }}>
        <p>
          This is an automated confirmation email. If you have any immediate questions, please reply to this email or contact me directly.
        </p>
      </div>
    </div>
  )
}
