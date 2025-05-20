import { ArrowRight } from "lucide-react"

export default function HowItWorksSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="how-it-works">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[800px]">
            <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              Simple Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Our streamlined 4-step process makes it easy to start earning from home.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "1",
              title: "Register",
              description: "Complete your profile with a one-time fee of ₹199 for lifetime access.",
            },
            {
              step: "2",
              title: "Take Training",
              description: "Complete our free AI task training to understand how to perform quality work.",
            },
            {
              step: "3",
              title: "Complete Tasks",
              description:
                "Select and complete tasks based on your skills and interests, from data entry to AI training.",
            },
            {
              step: "4",
              title: "Receive Payment",
              description: "Get paid directly to your account once your work is approved.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm relative bg-white"
            >
              <div className="absolute -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-medium">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mt-4">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              {index < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-blue-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
