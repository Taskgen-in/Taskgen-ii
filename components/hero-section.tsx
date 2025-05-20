import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-500/20 px-3 py-1 text-sm font-medium text-white mb-4">
                Professional Work-From-Home Platform
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Earn From Home With Flexible Tasks
              </h1>
              <p className="max-w-[600px] text-blue-100 md:text-xl mt-4">
                Join our network of professionals working remotely on diverse tasks including data entry, content
                creation, and AI model training. No technical background required.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Link href="/register">
                <Button size="lg" className="px-8 font-medium bg-white text-blue-700 hover:bg-blue-50">
                  Start Earning Today
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 font-medium border-white text-blue-700 hover:bg-blue-700/20"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
            <img
              alt="Work from home illustration"
              className="mx-auto relative z-10"
              src="/home-office-laptop.png"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
