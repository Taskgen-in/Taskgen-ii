// lib/generateVerificationEmailHtml.ts
export async function generateVerificationEmailHtml(code: string, purpose: "login" | "registration") {
  const title = purpose === "login" ? "Login Verification Code" : "Registration Verification Code";
  const message =
    purpose === "login"
      ? "Use this code to complete your login process."
      : "Use this code to verify your email address and complete your registration.";

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
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
        .code {
          font-size: 32px;
          font-weight: bold;
          letter-spacing: 5px;
          text-align: center;
          margin: 30px 0;
          color: #3b82f6;
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
        <h1>${title}</h1>
        <p>Hello,</p>
        <p>${message}</p>
        <div class="code">${code}</div>
        <p>This code will expire in 10 minutes for security reasons.</p>
        <p>If you didn't request this code, please ignore this email.</p>
        <div class="footer">
          <p>&copy; 2025 TaskGen.in. All rights reserved.</p>
          <p>This is an automated message, please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
