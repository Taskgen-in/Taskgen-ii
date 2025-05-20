// app/api/send-verification/route.ts
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";
import { generateVerificationEmailHtml } from "@/lib/generateVerificationEmailHtml";

export async function POST(req: Request) {
  const { email, code, purpose = "registration" } = await req.json();

  try {
    const html = await generateVerificationEmailHtml(code, purpose);
    const result = await sendEmail({
      to: email,
      subject: "Your Verification Code",
      html,
    });

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("API error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

