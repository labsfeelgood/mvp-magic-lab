import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="container px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Free Ideation, Validation & Brainstorming Session
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a no-strings-attached session with our experts to discuss your
            idea and explore its potential.
          </p>
          <Button size="lg" variant="secondary">
            Schedule Now <Calendar className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};