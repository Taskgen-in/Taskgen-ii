"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, CheckCircle, AlertCircle, Info } from "lucide-react"
import { testEmailService } from "@/app/actions/test-email"

export default function EmailTestPage() {
  const [email, setEmail] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [result, setResult] = useState<{
    success?: boolean
    error?: string
    mock?: boolean
    apiError?: string
    errorCode?: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSending(true)
    setResult(null)

    try {
      const testResult = await testEmailService(email)
      setResult(testResult)
    } catch (error) {
      setResult({ success: false, error: "An unexpected error occurred" })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-lg bg-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Email Service Test</CardTitle>
          <CardDescription className="text-center">Test your MailerSend integration</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {result?.success === true && !result.mock && (
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-600">Success!</AlertTitle>
                <AlertDescription className="text-green-600">
                  Test email sent successfully via MailerSend. Please check your inbox.
                </AlertDescription>
              </Alert>
            )}

            {result?.success === true && result.mock && (
              <Alert className="bg-yellow-50 border-yellow-200">
                <Info className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-600">Mock Email Sent</AlertTitle>
                <AlertDescription className="text-yellow-600">
                  The system is using the mock email service.
                  {result.apiError && (
                    <div className="mt-2">
                      <strong>API Error:</strong> {result.apiError}
                    </div>
                  )}
                </AlertDescription>
              </Alert>
            )}

            {result?.success === false && (
              <Alert className="bg-red-50 border-red-200">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertTitle className="text-red-600">Error</AlertTitle>
                <AlertDescription className="text-red-600">
                  {result.error || "Failed to send test email. Please check your configuration."}
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Recipient Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="rounded-lg border p-4 bg-primary/5">
              <h3 className="font-medium mb-2">MailerSend Domain Verification</h3>
              <p className="text-sm text-gray-500 mb-2">
                Before you can send emails with MailerSend, you must verify your domain:
              </p>
              <ol className="space-y-1 text-sm text-gray-500 list-decimal pl-5">
                <li>Log in to your MailerSend account</li>
                <li>
                  Go to <strong>Domains</strong> in the sidebar
                </li>
                <li>
                  Click <strong>Add a domain</strong>
                </li>
                <li>Enter your domain name (e.g., yourdomain.com)</li>
                <li>Add the required DNS records to your domain</li>
                <li>Wait for verification to complete</li>
                <li>
                  Update the sender email in <code>email-service.ts</code> to use your verified domain
                </li>
              </ol>
              <div className="mt-4 text-sm text-gray-500">
                <strong>Note:</strong> Until domain verification is complete, the system will use a mock email service
                in development.
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSending}>
              {isSending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending Test Email...
                </>
              ) : (
                "Send Test Email"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
