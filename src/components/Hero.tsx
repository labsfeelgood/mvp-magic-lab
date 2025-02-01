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
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-orange-500 to-green-500">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/placeholder.svg" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-white">MVP Magic</span>
          </div>
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              className="text-white hover:text-white hover:bg-white/20"
              onClick={() => setShowContactModal(true)}
            >
              Contact Us
            </Button>
            <Button variant="outline" className="bg-white text-black hover:bg-white/90">
              Download
            </Button>
          </div>
        </nav>
      </div>

      <div className="container relative z-10 px-4 py-32 mx-auto text-center flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white max-w-4xl">
          Have an Idea? We'll Build Your MVP
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12">
          Transform your vision into reality with our AI-powered MVP development
          service. Fast, efficient, and tailored to your needs.
        </p>
        <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
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