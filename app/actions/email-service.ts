// lib/mail.ts or wherever you keep it

"use server"

import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  try {
    if (process.env.NODE_ENV === "development") {
      console.log("==== EMAIL CONTENT ====")
      console.log(`To: ${to}`)
      console.log(`Subject: ${subject}`)
      console.log(`Body: ${html}`)
      console.log("======================")
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("Gmail credentials missing - mock email sent")
      return { success: true, messageId: "mock-email", mock: true }
    }

    const info = await transporter.sendMail({
      from: `"TaskGen.in" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    })

    console.log("Email sent:", info.messageId)

    return {
      success: true,
      messageId: info.messageId,
    }
  } catch (error: any) {
    console.error("Error sending email:", error)
    return {
      success: false,
      messageId: null,
      error: error.message,
    }
  }
}
