import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo size="md" />
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/how-it-works" className="text-sm font-medium hover:text-blue-600">
            How It Works
          </Link>
          <Link href="/ai-training" className="text-sm font-medium hover:text-blue-600">
            AI Training
          </Link>
          <Link href="#features" className="text-sm font-medium hover:text-blue-600">
            Task Types
          </Link>
          {/*<Link href="#testimonials" className="text-sm font-medium hover:text-blue-600">
            Testimonials
          </Link>*/}
          <Link href="#pricing" className="text-sm font-medium hover:text-blue-600">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-blue-600">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Sign In
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
