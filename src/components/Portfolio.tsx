import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const projects = [
  {
    title: "HealthTech Platform",
    description: "Telemedicine platform MVP built in 6 weeks",
    industry: "Healthcare",
    image: "/placeholder.svg",
    fullDescription: "A comprehensive telemedicine platform enabling remote consultations, prescription management, and patient monitoring. Built with React and integrated with HIPAA-compliant video conferencing.",
    features: [
      "Secure video consultations",
      "Electronic health records",
      "Prescription management",
      "Patient scheduling system"
    ]
  },
  {
    title: "EdTech Solution",
    description: "Learning management system MVP delivered in 4 weeks",
    industry: "Education",
    image: "/placeholder.svg",
    fullDescription: "An innovative learning management system designed for remote education, featuring interactive content delivery and real-time progress tracking.",
    features: [
      "Interactive course creation",
      "Student progress tracking",
      "Live virtual classrooms",
      "Automated assessments"
    ]
  },
  {
    title: "FinTech App",
    description: "Investment platform MVP launched in 8 weeks",
    industry: "Finance",
    image: "/placeholder.svg",
    fullDescription: "A modern investment platform that democratizes access to financial markets with real-time trading capabilities and portfolio management.",
    features: [
      "Real-time market data",
      "Portfolio analytics",
      "Automated trading",
      "Risk assessment tools"
    ]
  },
];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(
    null
  );

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Real Founders, Real MVPs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="bg-secondary/50 backdrop-blur-sm cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader>
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-md object-cover w-full h-full"
                  />
                </AspectRatio>
                <CardTitle className="mt-4">{project.title}</CardTitle>
                <CardDescription>{project.industry}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="sm:max-w-[625px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                {selectedProject.industry}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <AspectRatio ratio={16 / 9} className="bg-muted mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-md object-cover w-full h-full"
                />
              </AspectRatio>
              <p className="text-muted-foreground mb-4">
                {selectedProject.fullDescription}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};