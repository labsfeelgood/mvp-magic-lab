import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "HealthTech Platform",
    description: "Telemedicine platform MVP built in 6 weeks",
    industry: "Healthcare",
  },
  {
    title: "EdTech Solution",
    description: "Learning management system MVP delivered in 4 weeks",
    industry: "Education",
  },
  {
    title: "FinTech App",
    description: "Investment platform MVP launched in 8 weeks",
    industry: "Finance",
  },
];

export const Portfolio = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Real Founders, Real MVPs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="bg-secondary/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.industry}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};