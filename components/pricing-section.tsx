import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function PricingSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[800px]">
            <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              Investment
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Transparent, One-Time Fee</h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Begin your AI training journey with a minimal investment.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-md py-12">
          <div className="rounded-lg border bg-white shadow-lg">
            <div className="p-8">
              <h3 className="text-2xl font-bold">AI Contributor Registration</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-6xl font-bold">₹199</span>
                <span className="ml-1 text-xl font-medium text-gray-500">/lifetime</span>
              </div>
              <p className="mt-5 text-gray-600">Everything you need to start contributing to AI training.</p>
              <ul className="mt-8 space-y-4">
                {[
                  "Access to all AI training task categories",
                  "Weekly AI skill development sessions",
                  "Secure payment processing system",
                  "AI contributor community membership",
                  "No recurring fees or hidden charges",
                ].map((feature, index) => (
                  <li key={index} className="flex">
                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/register" className="mt-8 block w-full">
                <Button size="lg" className="w-full font-medium bg-blue-600 hover:bg-blue-700">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
