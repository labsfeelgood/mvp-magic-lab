import { Bot, Clock, Code2, Globe } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Development",
    description: "Leverage cutting-edge AI to accelerate development",
  },
  {
    icon: Globe,
    title: "Industry-Agnostic",
    description: "We build MVPs for any industry or vertical",
  },
  {
    icon: Clock,
    title: "Rapid Development",
    description: "Get your MVP to market in weeks, not months",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description: "Built with the latest technologies for scalability",
  },
];

export const Features = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};