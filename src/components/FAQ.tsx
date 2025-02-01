import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Typically, we deliver MVPs in 4-8 weeks, depending on the complexity and scope of your project.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, scalable technologies including React, Node.js, and cloud services, tailored to your specific needs.",
  },
  {
    question: "Do you offer post-MVP support?",
    answer:
      "Yes, we offer various support packages to help you maintain and scale your MVP after launch.",
  },
  {
    question: "How much does an MVP cost?",
    answer:
      "Our MVP packages start at $4,999, with pricing varying based on your specific requirements and feature set.",
  },
  {
    question: "What happens after the MVP is built?",
    answer:
      "We help you deploy the MVP, gather user feedback, and can continue supporting you as you scale.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};