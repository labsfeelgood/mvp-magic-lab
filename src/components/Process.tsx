import { Check, Code, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Ideation",
    description: "We help refine your idea and create a solid foundation",
  },
  {
    icon: Check,
    title: "Validation",
    description: "Test assumptions and validate market fit",
  },
  {
    icon: Code,
    title: "Development",
    description: "Rapid development of your MVP with modern tech stack",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploy your MVP and start gathering real user feedback",
  },
];

export const Process = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          From Idea to MVP in Simple Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm hover:bg-secondary/70 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};