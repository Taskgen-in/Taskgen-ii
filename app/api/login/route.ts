import { NextRequest, NextResponse } from "next/server";
import { authenticateUser } from "@/app/actions/verification"; // Your actual authenticate function

export async function POST(req: NextRequest) {
  const body = await req.json();
  // This function should return { success: true, userId: ... } on success
  const result = await authenticateUser(body.email, body.password);

  if (!result.success) {
    return NextResponse.json({ success: false, message: result.message });
  }

  // Get the userId from the result returned by authenticateUser
  const userId = String(result.userId);

  const response = NextResponse.json({ success: true, userId });
  response.cookies.set("user_id", userId, { path: "/", httpOnly: false });
  return response;
}
