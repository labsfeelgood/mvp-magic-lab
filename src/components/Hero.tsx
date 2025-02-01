import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
      <div className="container relative z-10 px-4 py-32 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Have an Idea?{" "}
          <span className="gradient-text">We'll Build Your MVP</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Transform your vision into reality with our AI-powered MVP development
          service. Fast, efficient, and tailored to your needs.
        </p>
        <Button size="lg" className="animate-float">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};