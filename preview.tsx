"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Logo Component
const Logo = ({ size = "md" }) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  }

  return (
    <div className="flex items-center">
      <div className="relative flex items-center">
        <span className={`font-sans font-bold ${sizeClasses[size]} text-blue-600`}>
          task<span className="text-gray-800">gen</span>
          <span className="text-blue-600 text-sm">.in</span>
        </span>
        <div className="absolute -bottom-1 right-7 w-6 h-1 bg-blue-600 rounded-full"></div>
      </div>
    </div>
  )
}

// Site Header Component
const SiteHeader = () => {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo size="md" />
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-blue-600">
            How It Works
          </a>
          <a href="#" className="text-sm font-medium hover:text-blue-600">
            AI Training
          </a>
          <a href="#" className="text-sm font-medium hover:text-blue-600">
            Task Types
          </a>
          <a href="#" className="text-sm font-medium hover:text-blue-600">
            Testimonials
          </a>
          <a href="#" className="text-sm font-medium hover:text-blue-600">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium hover:text-blue-600">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm bg-transparent hover:bg-gray-100 rounded">Sign In</button>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded">Register</button>
        </div>
      </div>
    </header>
  )
}

// Email Template Preview
const EmailTemplate = () => {
  return (
    <div className="border rounded-lg overflow-hidden max-w-md mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="bg-blue-600 text-white p-4">
        <h2 className="text-xl font-bold">TaskGen.in</h2>
      </div>
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Verification Code</h1>
        <p className="mb-4">Hello,</p>
        <p className="mb-4">Use this code to verify your email address and complete your registration.</p>
        <div className="text-3xl font-bold tracking-wider text-center my-6 text-blue-600">123456</div>
        <p className="text-sm text-gray-600 mb-2">This code will expire in 10 minutes for security reasons.</p>
        <p className="text-sm text-gray-600">If you didn't request this code, please ignore this email.</p>
        <div className="mt-8 pt-4 border-t text-xs text-gray-500 text-center">
          <p>© 2023 TaskGen.in. All rights reserved.</p>
          <p>This is an automated message, please do not reply to this email.</p>
        </div>
      </div>
    </div>
  )
}

// Payment Page Preview
const PaymentPage = () => {
  return (
    <div className="border rounded-lg overflow-hidden max-w-md mx-auto">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold">Registration Payment</h2>
        <p className="text-sm text-gray-600">Complete your one-time registration payment of ₹199</p>
      </div>
      <div className="p-6 space-y-4">
        <div className="rounded-lg border p-4 bg-blue-50">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Registration Fee</p>
              <p className="text-sm text-gray-500">One-time payment</p>
            </div>
            <p className="text-2xl font-bold">₹199</p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">UPI Payment Details</h3>
          <div className="p-3 border rounded-lg">
            <p className="text-sm">
              <span className="font-medium">UPI ID:</span> taskgenin@ybl
            </p>
            <p className="text-sm">
              <span className="font-medium">Merchant Name:</span> TaskGen.in
            </p>
            <p className="text-sm">
              <span className="font-medium">Description:</span> Registration
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 border-t">
        <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Pay ₹199 with UPI</button>
      </div>
    </div>
  )
}

// Main Preview Component
export default function Preview() {
  const [activeTab, setActiveTab] = useState("logo")

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">TaskGen.in Rebranding Preview</CardTitle>
          <CardDescription className="text-center">
            See how your platform will look after the name change from NextGen.in to TaskGen.in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="logo">Logo</TabsTrigger>
              <TabsTrigger value="header">Site Header</TabsTrigger>
              <TabsTrigger value="email">Email Template</TabsTrigger>
              <TabsTrigger value="payment">Payment Page</TabsTrigger>
            </TabsList>

            <TabsContent value="logo" className="mt-4 flex justify-center items-center p-12 border rounded-lg">
              <div className="space-y-12">
                <div className="text-center mb-8">
                  <p className="text-sm text-gray-500 mb-4">Standard Size</p>
                  <Logo size="md" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-4">Large Size</p>
                  <Logo size="lg" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="header" className="mt-4">
              <div className="border rounded-lg overflow-hidden">
                <SiteHeader />
              </div>
            </TabsContent>

            <TabsContent value="email" className="mt-4">
              <EmailTemplate />
            </TabsContent>

            <TabsContent value="payment" className="mt-4">
              <PaymentPage />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
