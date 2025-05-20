import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[800px]">
            <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Contributors Say</h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Hear from people who are helping train AI models through our platform.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {[
            {
              name: "Priya Sharma",
              title: "Data Annotation Specialist",
              location: "Mumbai",
              quote:
                "I've been annotating images and text for AI training models and earning ₹15,000 per month working just 3 hours daily. The tasks are interesting and I'm learning so much about AI.",
              rating: 5,
              image: "/indian-woman-smiling.png",
            },
            {
              name: "Rahul Verma",
              title: "Computer Science Student",
              location: "Delhi",
              quote:
                "As a student, I'm fascinated by AI. This platform lets me contribute to real AI models while earning enough to cover my expenses. The prompt engineering tasks are my favorite.",
              rating: 4,
              image: "/indian-man-glasses.png",
            },
            {
              name: "Anita Patel",
              title: "Content Moderation Expert",
              location: "Ahmedabad",
              quote:
                "The weekly training sessions have significantly enhanced my understanding of AI. I started with basic data labeling and now handle complex content moderation tasks that pay better.",
              rating: 5,
              image: "/indian-woman-long-hair.png",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm bg-white transition-all hover:shadow-md"
            >
              <div className="flex items-center space-x-1">
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
              </div>
              <p className="text-gray-600 italic">{testimonial.quote}</p>
              <div className="flex items-center space-x-4 mt-auto pt-4 border-t w-full">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-blue-600">{testimonial.title}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
