import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Basic MVP",
    price: "$4,999",
    description: "Perfect for validating your idea",
    features: [
      "Core feature implementation",
      "Basic UI/UX design",
      "4-week delivery",
      "1 revision round",
    ],
  },
  {
    name: "Standard MVP",
    price: "$9,999",
    description: "Most popular for startups",
    features: [
      "Advanced feature set",
      "Premium UI/UX design",
      "6-week delivery",
      "2 revision rounds",
      "Technical documentation",
    ],
  },
  {
    name: "Premium MVP",
    price: "$14,999",
    description: "Full-featured solution",
    features: [
      "Complete feature implementation",
      "Custom UI/UX design",
      "8-week delivery",
      "Unlimited revisions",
      "Technical documentation",
      "Extended support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Transparent, Flexible, and Scalable Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="relative overflow-hidden hover:border-primary/50 transition-colors"
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};