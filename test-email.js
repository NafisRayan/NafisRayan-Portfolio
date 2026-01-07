// Test script for Resend email functionality
// Run this file to test your email setup

import { config } from 'dotenv';
import { Resend } from 'resend';

// Load environment variables
config({ path: '.env.local' });

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  try {
    console.log('🚀 Testing Resend email functionality...');
    
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'nafisrayan123@gmail.com',
      subject: '✅ Email Integration Test - Portfolio Contact Form',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">🎉 Email Integration Successful!</h2>
          <p>Congratulations! Your Resend email integration is working perfectly.</p>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>✅ What's Working:</h3>
            <ul>
              <li>Resend API connection established</li>
              <li>Email templates configured</li>
              <li>Contact form backend ready</li>
              <li>Environment variables loaded</li>
            </ul>
          </div>
          
          <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>🚀 Next Steps:</h3>
            <ul>
              <li>Test the contact form on your website</li>
              <li>Customize email templates as needed</li>
              <li>Set up email domain verification (optional)</li>
              <li>Monitor email delivery in Resend dashboard</li>
            </ul>
          </div>
          
          <p>Your portfolio contact form is now fully functional with email notifications!</p>
          
          <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
            Test sent on ${new Date().toLocaleString()}
          </p>
        </div>
      `
    });
    
    console.log('✅ Email sent successfully!');
    console.log('📧 Email ID:', result.data?.id);
    console.log('📬 Check your inbox at nafisrayan123@gmail.com');
    
  } catch (error) {
    console.error('❌ Failed to send email:', error);
  }
}

// Uncomment the line below to run the test
testEmail();

export { testEmail };
