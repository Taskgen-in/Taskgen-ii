import { CheckCircle } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[800px]">
            <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              Diverse Task Categories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How You'll Earn</h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Our platform offers a variety of work-from-home opportunities to match your skills and interests.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AI Model Training",
              description:
                "Help train cutting-edge AI models through specialized tasks like data labeling and quality assessment.",
            },
            {
              title: "Content Creation",
              description:
                "Create blog posts, articles, and social media content for various businesses and industries.",
            },
            {
              title: "Data Entry & Processing",
              description: "Input, categorize, and validate data for businesses to maintain accurate records.",
            },
            {
              title: "Virtual Assistance",
              description: "Provide administrative support services remotely to businesses and professionals.",
            },
            {
              title: "Online Research",
              description: "Conduct thorough research on specific topics and compile comprehensive reports.",
            },
            {
              title: "Transcription Services",
              description: "Convert audio and video content into written text with accuracy and attention to detail.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-3 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md bg-white"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
