import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export const Hero = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
      
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/placeholder.svg" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold gradient-text">MVP Magic</span>
          </div>
          <Button 
            variant="secondary" 
            className="hover:bg-secondary/80"
            onClick={() => setShowContactModal(true)}
          >
            Contact Us
          </Button>
        </nav>
      </div>

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

      <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>How would you like to connect?</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4">
            <Button variant="default" size="lg">
              Schedule a Call
            </Button>
            <Button variant="secondary" size="lg">
              Submit a Query
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};