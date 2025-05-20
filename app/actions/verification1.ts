"use server"

import { cookies } from "next/headers"
import { sendEmail, generateVerificationEmailHtml } from "./email-service"
import { prisma } from "@/lib/db"
import { hash, compare } from "bcryptjs"

// Generate a verification token for email verification
export async function generateVerificationToken(email: string) {
  // Generate a random token
  const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

  // Set expiration to 24 hours from now
  const expires = new Date()
  expires.setHours(expires.getHours() + 24)

  // Store the token in the database
  await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  })

  return token
}

// Generate a verification code for email verification
export async function generateVerificationCode(email: string) {
  try {
    // Generate a 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString()

    // Set expiration to 10 minutes from now
    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 10)

    // Store the code in the database
    await prisma.user.updateMany({
      where: { email },
      data: {
        verificationCode: code,
        verificationExpiry: expires,
      },
    })

    // For development purposes, also store the code in a session cookie
    // that can be accessed from the client for debugging
    if (process.env.NODE_ENV === "development") {
      cookies().set(`debug_code_${email.replace(/[^a-zA-Z0-9]/g, "_")}`, code, {
        expires,
        path: "/",
        sameSite: "strict",
        secure: false,
      })
    }

    return code
  } catch (error) {
    console.error("Error generating verification code:", error)
    throw new Error("Failed to generate verification code")
  }
}

// Verify an email using a token
export async function verifyEmail(token: string) {
  // Find the token in the database
  const verificationToken = await prisma.verificationToken.findUnique({
    where: { token },
  })

  if (!verificationToken) {
    return { success: false, message: "Invalid verification token" }
  }

  // Check if the token has expired
  if (new Date(verificationToken.expires) < new Date()) {
    // Delete the expired token
    await prisma.verificationToken.delete({
      where: { id: verificationToken.id },
    })
    return { success: false, message: "Verification token has expired" }
  }

  // Mark the user's email as verified
  await prisma.user.updateMany({
    where: { email: verificationToken.email },
    data: { emailVerified: true },
  })

  // Delete the used token
  await prisma.verificationToken.delete({
    where: { id: verificationToken.id },
  })

  return {
    success: true,
    message: "Email verified successfully",
    email: verificationToken.email,
  }
}

// Verify a code for email verification
export async function verifyCode(email: string, code: string) {
  // Find the user with the given email
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      verificationCode: true,
      verificationExpiry: true,
    },
  })

  if (!user || !user.verificationCode || !user.verificationExpiry) {
    return { success: false, message: "No verification code found for this email" }
  }

  // Check if the code has expired
  if (new Date(user.verificationExpiry) < new Date()) {
    // Clear the verification code
    await prisma.user.update({
      where: { email },
      data: {
        verificationCode: null,
        verificationExpiry: null,
      },
    })
    return { success: false, message: "Verification code has expired" }
  }

  // Check if the code matches
  if (code !== user.verificationCode) {
    return { success: false, message: "Invalid verification code" }
  }

  // Mark the user's email as verified and clear the verification code
  await prisma.user.update({
    where: { email },
    data: {
      emailVerified: true,
      verificationCode: null,
      verificationExpiry: null,
    },
  })

  // Also remove the debug code if it exists
  if (process.env.NODE_ENV === "development") {
    cookies().delete(`debug_code_${email.replace(/[^a-zA-Z0-9]/g, "_")}`)
  }

  return {
    success: true,
    message: "Code verified successfully",
    email,
  }
}

// Send a verification email with a token
export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Verify Your Email</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
        }
        .container {
          padding: 20px;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
        }
        .header {
          background-color: #3b82f6;
          color: white;
          padding: 10px 20px;
          border-radius: 5px 5px 0 0;
          margin-top: 20px;
        }
        .button {
          display: inline-block;
          background-color: #3b82f6;
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .footer {
          font-size: 12px;
          color: #666;
          text-align: center;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>TaskGen.in</h2>
        </div>
        <h1>Verify Your Email Address</h1>
        <p>Hello,</p>
        <p>Thank you for registering with TaskGen.in. Please click the button below to verify your email address:</p>
        <p><a href="${verificationUrl}" class="button">Verify Email Address</a></p>
        <p>Or copy and paste this link into your browser:</p>
        <p>${verificationUrl}</p>
        <p>This link will expire in 24 hours for security reasons.</p>
        <p>If you didn't create an account with us, please ignore this email.</p>
        <div class="footer">
          <p>&copy; 2023 TaskGen.in. All rights reserved.</p>
          <p>This is an automated message, please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `

  return await sendEmail({
    to: email,
    subject: "Verify Your Email Address - TaskGen.in",
    html,
  })
}

// Send a verification code via email
export async function sendVerificationCode(email: string, code: string, purpose: "login" | "registration") {
  try {
    const subject =
      purpose === "login" ? "Your TaskGen.in Login Verification Code" : "Your TaskGen.in Registration Verification Code"

    // Update to await the async function
    const html = await generateVerificationEmailHtml(code, purpose)

    return await sendEmail({
      to: email,
      subject,
      html,
    })
  } catch (error) {
    console.error("Error sending verification code:", error)
    return {
      success: false,
      error: error.message || "Failed to send verification code",
    }
  }
}

// Register a new user
export async function registerUser(userData: {
  name: string
  email: string
  phone: string
  password: string
}) {
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email },
    })

    if (existingUser) {
      return { success: false, message: "User with this email already exists" }
    }

    // Hash the password
    const hashedPassword = await hash(userData.password, 12)

    // Create the user
    const user = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        phone: userData.phone || "", // Ensure phone is not null
        password: hashedPassword,
      },
    })

    return { success: true, userId: user.id }
  } catch (error) {
    console.error("Registration error:", error)
    return {
      success: false,
      message: "An error occurred during registration. Please try again.",
      error: error.message,
    }
  }
}

// Authenticate a user
export async function authenticateUser(email: string, password: string) {
  try {
    // Find the user
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return { success: false, message: "Invalid email or password" }
    }

    // Compare passwords
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      return { success: false, message: "Invalid email or password" }
    }

    return { success: true, userId: user.id }
  } catch (error) {
    console.error("Authentication error:", error)
    return {
      success: false,
      message: "An error occurred during authentication. Please try again.",
      error: error.message,
    }
  }
}

