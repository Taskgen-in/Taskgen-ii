import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-center pt-4">Registration Successful!</CardTitle>
          <CardDescription className="text-center">
            Your account has been created and you're ready to start earning.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4 bg-primary/5">
            <h3 className="font-medium mb-2">What's Next?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">1.</span>
                <span>Login to your account and complete your profile</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                <span>Browse available tasks in your dashboard</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                <span>Join the upcoming weekly training session</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Your First Session</h3>
            <p className="text-sm text-gray-500 mb-2">Your first training session is scheduled for:</p>
            <p className="font-medium">Saturday, 10:00 AM IST</p>
            <p className="text-sm text-gray-500 mt-2">You'll receive an email with the meeting link.</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link href="/dashboard" className="w-full">
            <Button className="w-full">Go to Dashboard</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
