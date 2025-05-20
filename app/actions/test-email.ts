"use server"

import { sendEmail } from "./email-service"

export async function testEmailService(recipientEmail: string) {
  try {
    const result = await sendEmail({
      to: recipientEmail,
      subject: "Email Service Test - TaskGen.in",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h1 style="color: #3b82f6;">Email Service Test</h1>
          <p>This is a test email to confirm that your email service is working correctly.</p>
          <p>If you're receiving this, your MailerSend integration is properly configured!</p>
          <p style="margin-top: 30px; font-size: 12px; color: #666;">
            Sent from TaskGen.in platform
          </p>
        </div>
      `,
    })

    return result
  }  catch (error) {
  console.error("Test email error:", error);

  if (error instanceof Error) {
    return { success: false, error: error.message };
  }

  return { success: false, error: "Unknown error" };
}
}