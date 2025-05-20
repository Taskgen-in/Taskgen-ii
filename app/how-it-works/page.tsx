import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary/10 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h1>
          <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl">
            Learn how our platform helps you earn money from the comfort of your home.
          </p>
        </div>
      </div>

      {/* Step by Step Process */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Simple 4-Step Process</h2>
              <p className="mt-4 text-gray-500">
                Our platform makes it easy to start earning money from home with just four simple steps.
              </p>
              <div className="mt-8 space-y-8">
                {[
                  {
                    title: "Register",
                    description:
                      "Sign up with a one-time fee of ₹199. This gives you lifetime access to our platform with no recurring charges.",
                  },
                  {
                    title: "Select Tasks",
                    description:
                      "Browse available tasks and choose ones that match your skills and interests. New tasks are added daily.",
                  },
                  {
                    title: "Complete Work",
                    description:
                      "Submit your completed tasks for review. Our team will check your work to ensure it meets our quality standards.",
                  },
                  {
                    title: "Get Paid",
                    description:
                      "Once your work is approved, you'll receive payment directly to your account. Payments are processed within 3-5 business days.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold">{step.title}</h3>
                      <p className="mt-1 text-gray-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/register">
                  <Button size="lg">Register Now</Button>
                </Link>
              </div>
            </div>
            <div className="space-y-8">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">Types of Tasks</h3>
                <div className="mt-4 space-y-4">
                  {[
                    {
                      title: "AI Prompt Generation",
                      description: "Create creative prompts for AI image and text generation tools.",
                    },
                    {
                      title: "Puzzle Solving",
                      description: "Solve logical puzzles and explain your reasoning.",
                    },
                    {
                      title: "AI Training",
                      description: "Help train AI models by reviewing and annotating content.",
                    },
                    {
                      title: "Data Categorization",
                      description: "Categorize various types of data into appropriate groups.",
                    },
                    {
                      title: "Content Summarization",
                      description: "Read articles and create concise summaries.",
                    },
                  ].map((task, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">{task.title}</h4>
                        <p className="text-sm text-gray-500">{task.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">Weekly Training Sessions</h3>
                <p className="mt-2 text-gray-500">
                  We conduct weekly online training sessions to help you improve your skills and increase your earning
                  potential.
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    "Learn new techniques for completing tasks efficiently",
                    "Understand how to meet quality standards for higher approval rates",
                    "Get tips from top earners on our platform",
                    "Ask questions and get real-time answers from our team",
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-gray-500">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Potential */}
      <section className="bg-primary/5 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Earning Potential</h2>
            <p className="mt-4 text-gray-500">
              Your earnings depend on the number and complexity of tasks you complete. Here's what you can expect:
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                level: "Beginner",
                tasks: "1-2 hours daily",
                earnings: "₹5,000 - ₹10,000 monthly",
                details: ["Simple tasks", "Basic skills required", "Flexible timing"],
              },
              {
                level: "Intermediate",
                tasks: "2-4 hours daily",
                earnings: "₹10,000 - ₹20,000 monthly",
                details: ["Mixed complexity tasks", "Some specialized skills", "Consistent work schedule"],
              },
              {
                level: "Advanced",
                tasks: "4+ hours daily",
                earnings: "₹20,000+ monthly",
                details: ["Complex tasks", "Specialized skills", "Dedicated work hours"],
              },
            ].map((tier, index) => (
              <div key={index} className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">{tier.level}</h3>
                <div className="mt-2 text-2xl font-bold text-primary">{tier.earnings}</div>
                <p className="mt-1 text-sm text-gray-500">{tier.tasks}</p>
                <ul className="mt-4 space-y-2">
                  {tier.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-500">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-500">Find answers to common questions about our work-from-home platform.</p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {[
              {
                question: "Is this a legitimate way to earn money?",
                answer:
                  "Yes, our platform provides real tasks that need human input. Companies pay us to get these tasks completed, and we distribute the work to our users.",
              },
              {
                question: "How soon can I start earning after registration?",
                answer:
                  "You can start accepting tasks immediately after completing your registration. Your first payment will be processed after your initial tasks are approved.",
              },
              {
                question: "What if my work is rejected?",
                answer:
                  "If your work is rejected, you'll receive feedback on why it didn't meet our standards. You can use this feedback to improve and ensure future submissions are approved.",
              },
              {
                question: "Can I work from my mobile phone?",
                answer:
                  "Yes, our platform is mobile-friendly, but some tasks may be easier to complete on a computer or tablet with a larger screen.",
              },
              {
                question: "Is there a limit to how much I can earn?",
                answer:
                  "There's no cap on earnings. The more tasks you complete (and get approved), the more you'll earn. Some of our top performers earn ₹30,000+ monthly.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="font-bold">{faq.question}</h3>
                <p className="mt-2 text-gray-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Ready to Start Earning?</h2>
            <p className="mt-4 text-gray-500">
              Join thousands of people who are already earning from the comfort of their homes.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
