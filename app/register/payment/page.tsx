"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export default function PaymentPage() {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    const pendingRegistration = sessionStorage.getItem("pendingRegistration")
    if (pendingRegistration) {
      const userData = JSON.parse(pendingRegistration)
      setUserEmail(userData.email || "")
    }
  }, [])

  const handleConfirm = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      router.push("/register/verify-payment")
    }, 2000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Registration Payment</CardTitle>
          <CardDescription>
            Complete your one-time registration payment of ₹199 for{" "}
            {userEmail ? <span className="font-medium">{userEmail}</span> : "your account"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="rounded-lg border p-4 bg-primary/5">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Registration Fee</p>
                <p className="text-sm text-gray-500">One-time payment</p>
              </div>
              <p className="text-2xl font-bold">₹199</p>
            </div>
          </div>

          <div className="space-y-2 text-center">
            <p className="text-sm font-medium text-gray-700">Scan this QR code to pay via PhonePe</p>
            <Image
              src="/phonepe-qr.png"
              alt="PhonePe QR Code"
              width={250}
              height={250}
              className="mx-auto rounded-lg"
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full" onClick={handleConfirm} disabled={isProcessing}>
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              "I've Paid - Continue"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
