import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Portfolio } from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Process />
      <Features />
      <CTA />
      <Portfolio />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default Index;