import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function AITrainingPage() {
  return (
    <>
      <SiteHeader />
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Model Training Module</h1>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl">
              Contribute to the development of advanced AI models and earn from your expertise.
            </p>
          </div>
        </div>

        {/* Overview Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">What is AI Model Training?</h2>
                <p className="mt-4 text-gray-500">
                  AI model training is the process of teaching artificial intelligence systems to recognize patterns,
                  make decisions, and perform specific tasks. This requires large amounts of properly labeled data and
                  human verification to ensure the models learn correctly.
                </p>
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-bold">How You'll Contribute</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Data Labeling & Annotation",
                        description:
                          "Label images, text, and other data to help AI models understand what they're seeing or reading.",
                      },
                      {
                        title: "Data Verification",
                        description: "Review and verify labeled data to ensure its accuracy and consistency.",
                      },
                      {
                        title: "Model Testing",
                        description: "Test AI models with specific inputs and provide feedback on their performance.",
                      },
                      {
                        title: "Content Moderation",
                        description: "Review AI-generated content to ensure it meets quality and safety standards.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold">{item.title}</h3>
                          <p className="mt-1 text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">AI Training Task Types</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-blue-50 p-4">
                      <h4 className="font-bold text-blue-700">Image Classification</h4>
                      <p className="mt-2 text-sm text-gray-600">
                        Categorize images into predefined classes to help AI models recognize visual content.
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">Average Payment</span>
                        <span className="text-sm font-bold text-blue-700">₹2 - ₹5 per task</span>
                      </div>
                    </div>

                    <div className="rounded-lg border bg-blue-50 p-4">
                      <h4 className="font-bold text-blue-700">Object Detection</h4>
                      <p className="mt-2 text-sm text-gray-600">
                        Identify and locate objects within images by drawing bounding boxes around them.
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">Average Payment</span>
                        <span className="text-sm font-bold text-blue-700">₹3 - ₹7 per task</span>
                      </div>
                    </div>

                    <div className="rounded-lg border bg-blue-50 p-4">
                      <h4 className="font-bold text-blue-700">Text Classification</h4>
                      <p className="mt-2 text-sm text-gray-600">
                        Categorize text samples to help AI models understand language context and meaning.
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">Average Payment</span>
                        <span className="text-sm font-bold text-blue-700">₹1.5 - ₹4 per task</span>
                      </div>
                    </div>

                    <div className="rounded-lg border bg-blue-50 p-4">
                      <h4 className="font-bold text-blue-700">Audio Transcription</h4>
                      <p className="mt-2 text-sm text-gray-600">
                        Listen to audio clips and transcribe them accurately to train speech recognition models.
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">Average Payment</span>
                        <span className="text-sm font-bold text-blue-700">₹4 - ₹10 per task</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-4">
                The Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How AI Training Works</h2>
              <p className="mt-4 text-gray-500 md:text-lg">
                Our AI training process is designed to be straightforward and accessible, even if you have no technical
                background.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-4">
              {[
                {
                  title: "Onboarding & Training",
                  description:
                    "Complete our specialized AI training module to understand task requirements and quality standards.",
                  icon: "📚",
                },
                {
                  title: "Task Selection",
                  description:
                    "Choose from available AI training tasks based on your interest, skills, and availability.",
                  icon: "📋",
                },
                {
                  title: "Task Completion",
                  description:
                    "Follow clear guidelines to complete tasks accurately, with access to support if needed.",
                  icon: "✅",
                },
                {
                  title: "Review & Payment",
                  description: "Receive payment for approved tasks based on complexity and volume completed.",
                  icon: "💰",
                },
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-gray-500">{step.description}</p>

                  {index < 3 && (
                    <div className="absolute top-8 left-[calc(100%-8px)] hidden w-[calc(100%-16px)] border-t-2 border-dashed border-gray-300 md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Requirements */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-4">
                  Requirements
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills You Need</h2>
                <p className="mt-4 text-gray-500 md:text-lg">
                  AI training tasks are designed to be accessible to most people with basic computer skills. Here's what
                  you'll need:
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      title: "Basic Computer Skills",
                      description: "Comfortable using a computer, web browser, and following online instructions.",
                    },
                    {
                      title: "Attention to Detail",
                      description: "Ability to follow guidelines precisely and maintain consistency across tasks.",
                    },
                    {
                      title: "Good Judgment",
                      description: "Making sound decisions when categorizing or labeling ambiguous content.",
                    },
                    {
                      title: "Reliable Internet Connection",
                      description: "Stable internet connection to access the platform and complete tasks.",
                    },
                    {
                      title: "Time Management",
                      description: "Ability to complete tasks within deadlines while maintaining quality.",
                    },
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                      <div>
                        <h3 className="font-bold">{skill.title}</h3>
                        <p className="text-gray-500">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Tools Provided</h3>
                  <p className="mt-2 text-gray-500">
                    We provide all the necessary tools and interfaces to complete AI training tasks effectively:
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold">User-friendly Interfaces</h4>
                        <p className="text-sm text-gray-500">
                          Intuitive web-based tools designed for efficient task completion.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold">Comprehensive Guidelines</h4>
                        <p className="text-sm text-gray-500">
                          Clear instructions for each task type with examples and best practices.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold">Training Materials</h4>
                        <p className="text-sm text-gray-500">
                          Video tutorials and documentation to help you get started quickly.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold">Support System</h4>
                        <p className="text-sm text-gray-500">
                          Access to mentors and community forums for assistance when needed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-lg bg-blue-50 p-4">
                    <h4 className="font-bold text-blue-700">No Technical Skills Required</h4>
                    <p className="mt-2 text-sm text-gray-600">
                      You don't need programming knowledge or AI expertise to contribute effectively. Our platform is
                      designed for people from all backgrounds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="bg-white py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-4">
                See It In Action
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Example Tasks</h2>
              <p className="mt-4 text-gray-500 md:text-lg">
                Here are some examples of the types of AI training tasks you might work on:
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Image Classification</h3>
                <div className="mt-4 aspect-video rounded-lg bg-gray-100 flex items-center justify-center">
                  <img
                    src="/ai-image-classification-interface.png"
                    alt="Image Classification Interface Example"
                    className="rounded-lg"
                  />
                </div>
                <p className="mt-4 text-gray-500">
                  In this task, you would identify what objects appear in images and select the appropriate categories.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium">Difficulty: Easy</span>
                  <span className="text-sm font-medium">Avg. Payment: ₹3 per image</span>
                </div>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Text Sentiment Analysis</h3>
                <div className="mt-4 aspect-video rounded-lg bg-gray-100 flex items-center justify-center">
                  <img src="/ai-sentiment-analysis-interface.png" alt="Text Sentiment Interface Example" className="rounded-lg" />
                </div>
                <p className="mt-4 text-gray-500">
                  Categorize text samples as positive, negative, or neutral to help train sentiment analysis models.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium">Difficulty: Medium</span>
                  <span className="text-sm font-medium">Avg. Payment: ₹2.5 per sample</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-12 md:py-16 lg:py-20 text-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Training AI?</h2>
              <p className="mt-4 text-blue-100 md:text-xl">
                Join our platform today and begin contributing to cutting-edge AI models while earning from the comfort
                of your home.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto px-8 font-medium bg-white text-blue-700 hover:bg-blue-50"
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto px-8 font-medium border-white text-white hover:bg-blue-700/20"
                  >
                    Learn About Other Tasks
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
