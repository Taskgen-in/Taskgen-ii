import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="faq">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[800px]">
            <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              Common Questions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Find answers to common questions about our AI training platform.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "What types of tasks will I be working on?",
                answer:
                  "Our platform offers diverse task categories including data entry, content writing, virtual assistance, online research, transcription services, and specialized AI training tasks. You can choose tasks that match your skills and interests.",
              },
              {
                question: "Do I need technical AI knowledge to contribute?",
                answer:
                  "No technical background is required. We provide comprehensive training for all task types. You'll learn everything you need to know through our onboarding and weekly training sessions.",
              },
              {
                question: "How much can I earn from AI training tasks?",
                answer:
                  "Earnings vary based on task complexity and your productivity. Many contributors earn ₹10,000-₹20,000 monthly working part-time, while dedicated full-time contributors can earn significantly more.",
              },
              {
                question: "What are the AI development sessions?",
                answer:
                  "We conduct weekly online training sessions led by AI experts to help you understand new task types, learn about AI developments, and implement strategies to increase your earnings.",
              },
              {
                question: "Is the ₹199 a one-time fee or recurring?",
                answer:
                  "The ₹199 is a one-time registration fee that provides lifetime access to our AI training platform. There are no recurring charges or hidden fees.",
              },
              {
                question: "How is my work evaluated?",
                answer:
                  "Your submissions are reviewed by our AI quality assurance team within 24-48 hours. We use both automated systems and human review to ensure accuracy. Once approved, payment will be processed according to our payment schedule.",
              },
              {
                question: "Can I work on AI training tasks from my mobile phone?",
                answer:
                  "While some basic tasks can be completed on mobile devices, we recommend using a computer for most AI training tasks to ensure accuracy and efficiency. A stable internet connection is also essential.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="py-4 font-medium text-left hover:no-underline hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="py-4 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
