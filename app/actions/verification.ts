"use server"

import { cookies } from "next/headers"
import { sendEmail } from "@/lib/mail";
//import { sendEmail, generateVerificationEmailHtml } from "./email-service"
import { generateVerificationEmailHtml } from "@/lib/generateVerificationEmailHtml";
import { db } from "@/lib/db"
import { hash, compare } from "bcryptjs"

// Generate a verification token
export async function generateVerificationToken(email: string) {
  const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)

  await db.query(
    "INSERT INTO verification_tokens (email, token, expires) VALUES (?, ?, ?)",
    [email, token, expires]
  )

  return token
}

// Generate a 6-digit verification code
export async function generateVerificationCode(email: string) {
  try {
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    const expires = new Date(Date.now() + 10 * 60 * 1000)

    await db.query(
      "UPDATE users SET verificationCode = ?, verificationExpiry = ? WHERE email = ?",
      [code, expires, email]
    )

    if (process.env.NODE_ENV === "development") {
  const cookieStore = await cookies(); // ✅ await cookies() once
  cookieStore.set(`debug_code_${email.replace(/[^a-zA-Z0-9]/g, "_")}`, code, {
    expires,
    path: "/",
    sameSite: "strict",
    secure: false,
  });
}


    return code
  } catch (error) {
    console.error("Error generating verification code:", error)
    throw new Error("Failed to generate verification code")
  }
}

// Verify email using token
export async function verifyEmail(token: string) {
  const [rows]: any = await db.query("SELECT * FROM verification_tokens WHERE token = ?", [token])
  const verificationToken = rows[0]

  if (!verificationToken) {
    return { success: false, message: "Invalid verification token" }
  }

  if (new Date(verificationToken.expires) < new Date()) {
    await db.query("DELETE FROM verification_tokens WHERE id = ?", [verificationToken.id])
    return { success: false, message: "Verification token has expired" }
  }

  await db.query("UPDATE users SET emailVerified = true WHERE email = ?", [verificationToken.email])
  await db.query("DELETE FROM verification_tokens WHERE id = ?", [verificationToken.id])

  return {
    success: true,
    message: "Email verified successfully",
    email: verificationToken.email,
  }
}

// Verify 6-digit code
export async function verifyCode(email: string, code: string) {
  const [rows]: any = await db.query(
    "SELECT verificationCode, verificationExpiry FROM users WHERE email = ?",
    [email]
  )
  const user = rows[0]

  if (!user || !user.verificationCode || !user.verificationExpiry) {
    return { success: false, message: "No verification code found for this email" }
  }

  if (new Date(user.verificationExpiry) < new Date()) {
    await db.query("UPDATE users SET verificationCode = NULL, verificationExpiry = NULL WHERE email = ?", [email])
    return { success: false, message: "Verification code has expired" }
  }

  if (code !== user.verificationCode) {
    return { success: false, message: "Invalid verification code" }
  }

  await db.query(
    "UPDATE users SET emailVerified = true, verificationCode = NULL, verificationExpiry = NULL WHERE email = ?",
    [email]
  )

  // if (process.env.NODE_ENV === "development") {
  //   cookies().delete(`debug_code_${email.replace(/[^a-zA-Z0-9]/g, "_")}`)
  // }

const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

const cookieStore = await cookies();
cookieStore.set(`debug_code_${email.replace(/[^a-zA-Z0-9]/g, "_")}`, code, {
  expires, // ✅ now it works
  path: "/",
  sameSite: "strict",
});


  return { success: true, message: "Code verified successfully", email }
}

// Send email with token link
export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`

  const html = `...` // (Same email HTML as before)

  return await sendEmail({
    to: email,
    subject: "Verify Your Email Address - TaskGen.in",
    html,
  })
}

// Send 6-digit verification code via email
export async function sendVerificationCode(email: string, code: string, purpose: "login" | "registration") {
  try {
    const subject = purpose === "login" ? "Your Login Verification Code" : "Complete Your Registration";
    const html = await generateVerificationEmailHtml(code, purpose); // ✅ Await here

    await sendEmail({
      to: email,
      subject,
      html,
    });

    return { success: true };
  } catch (error: unknown) {
  return {
    success: false,
    message: "An error occurred during registration. Please try again.",
    error: error instanceof Error ? error.message : String(error),
  };
}
}






// Register user
export async function registerUser(userData: {
  name: string
  email: string
  phone: string
  password: string
}) {
  try {
    const [rows]: any = await db.query("SELECT id FROM users WHERE email = ?", [userData.email])
    if (rows?.length > 0) {
      return { success: false, message: "User with this email already exists" }
    }

    const hashedPassword = await hash(userData.password, 12)

    const result: any = await db.query(
      "INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)",
      [userData.name, userData.email, userData.phone || "", hashedPassword]
    )

    return { success: true, userId: result.insertId }
  } catch (error) {
  return {
    success: false,
    message: "An error occurred during registration. Please try again.",
    error: error instanceof Error ? error.message : String(error),
  };
}
}

// Authenticate user
export async function authenticateUser(email: string, password: string) {
  try {
    const [rows]: any = await db.query("SELECT id, password FROM users WHERE email = ?", [email])
    const user = rows[0]

    if (!user) {
      return { success: false, message: "Invalid email or password" }
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      return { success: false, message: "Invalid email or password" }
    }

    return { success: true, userId: user.id }
  } catch (error) {
  return {
    success: false,
    message: "An error occurred during registration. Please try again.",
    error: error instanceof Error ? error.message : String(error),
  };
}
}
