import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function VerificationSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-lg bg-white">
        <CardHeader className="space-y-1">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-center pt-4">Email Verified!</CardTitle>
          <CardDescription className="text-center">
            Your email has been successfully verified.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4 bg-primary/5">
            <h3 className="font-medium mb-2">What's Next?</h3>
            <p className="text-sm text-gray-500 mb-4">
              Continue to your dashboard to complete your profile and access tasks.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link href="/dashboard" className="w-full">
            <Button className="w-full">Continue to Dashboard</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
