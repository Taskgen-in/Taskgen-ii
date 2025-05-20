"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Loader2, CreditCard, Smartphone } from "lucide-react"

export default function PaymentPage() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("upi")
  const [upiProvider, setUpiProvider] = useState("phonepe")
  const [isProcessing, setIsProcessing] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [showUpiOptions, setShowUpiOptions] = useState(false)

  useEffect(() => {
    // In a real app, you would retrieve this from your auth system
    const pendingRegistration = sessionStorage.getItem("pendingRegistration")
    if (pendingRegistration) {
      const userData = JSON.parse(pendingRegistration)
      setUserEmail(userData.email || "")
    }
  }, [])

  const handlePayment = () => {
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      router.push("/register/success")
    }, 2000)
  }

  const handleUpiPayment = () => {
    // In a real implementation, you would:
    // 1. Create a payment intent on your server
    // 2. Generate a UPI payment link or QR code
    // 3. Redirect the user to the appropriate app or show QR code

    if (upiProvider === "phonepe") {
      // PhonePe deep link format (this is a simplified example)
      // In production, you would generate this link on your server with proper parameters
      const merchantId = "TASKGENIN" // Your merchant ID
      const transactionId = "TXN" + Date.now()
      const amount = 199 // Amount in INR
      const redirectUrl = window.location.origin + "/register/success"

      // Create a PhonePe payment URL (simplified example)
      // In production, you would generate this on your server with proper security
      const phonePeUrl = `phonepe://pay?merchantId=${merchantId}&transactionId=${transactionId}&amount=${amount}&redirectUrl=${redirectUrl}`

      // Open PhonePe app if available, otherwise redirect to PhonePe website
      window.location.href = phonePeUrl
    } else if (upiProvider === "gpay") {
      // Google Pay deep link
      const gpayUrl = `upi://pay?pa=taskgenin@ybl&pn=TaskGen.in&am=199&cu=INR&tn=Registration`
      window.location.href = gpayUrl
    } else {
      // Generic UPI intent
      const upiUrl = `upi://pay?pa=taskgenin@ybl&pn=TaskGen.in&am=199&cu=INR&tn=Registration`
      window.location.href = upiUrl
    }
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

          <div className="space-y-4">
            <h3 className="font-medium">Select Payment Method</h3>
            <RadioGroup
              value={paymentMethod}
              onValueChange={(value) => {
                setPaymentMethod(value)
                setShowUpiOptions(value === "upi")
              }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2 rounded-lg border p-4">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer flex-1">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">UPI</p>
                    <p className="text-sm text-gray-500">Pay using any UPI app</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-lg border p-4">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Credit/Debit Card</p>
                    <p className="text-sm text-gray-500">Pay using Visa, Mastercard, RuPay</p>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {showUpiOptions && (
            <div className="space-y-4">
              <h3 className="font-medium">Select UPI App</h3>
              <div className="grid grid-cols-3 gap-3">
                <div
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border cursor-pointer ${upiProvider === "phonepe" ? "border-primary bg-primary/5" : ""}`}
                  onClick={() => setUpiProvider("phonepe")}
                >
                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                    <img src="/phonepe-logo.png" alt="PhonePe" className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-medium">PhonePe</span>
                </div>
                <div
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border cursor-pointer ${upiProvider === "gpay" ? "border-primary bg-primary/5" : ""}`}
                  onClick={() => setUpiProvider("gpay")}
                >
                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                    <img src="/gpay-logo.png" alt="Google Pay" className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-medium">Google Pay</span>
                </div>
                <div
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border cursor-pointer ${upiProvider === "other" ? "border-primary bg-primary/5" : ""}`}
                  onClick={() => setUpiProvider("other")}
                >
                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                    <img src="/upi-logo.png" alt="Other UPI" className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-medium">Other UPI</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={paymentMethod === "upi" ? handleUpiPayment : handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing Payment...
              </>
            ) : (
              `Pay ₹199 with ${paymentMethod === "upi" ? (upiProvider === "phonepe" ? "PhonePe" : upiProvider === "gpay" ? "Google Pay" : "UPI") : "Card"}`
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
