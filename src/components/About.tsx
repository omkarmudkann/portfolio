import { Target, Users, TrendingUp, Lightbulb } from "lucide-react";

const skills = [
  {
    icon: Target,
    title: "Strategy",
    description: "Defining product vision and roadmaps that align with business goals",
  },
  {
    icon: Users,
    title: "User Research",
    description: "Deep customer discovery to uncover real needs and pain points",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Data-driven experimentation to optimize funnels and retention",
  },
  {
    icon: Lightbulb,
    title: "Automation",
    description: "Building efficient workflows that eliminate manual work",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8">
          About
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I’m a technical Product Manager with experience 
            building customer-facing and internal platforms across 
            SaaS, fintech, and operational domains.
          </p>

          <p>
            I’ve led end-to-end product development across CRM, ordering, 
            subscriptions, and payment systems—working closely with engineering, 
            operations, and leadership teams to deliver scalable, revenue-impacting solutions.
          </p>

          <p>
            My work focuses on product strategy, system design, API-driven integrations, 
            and automation. I enjoy solving complex problems, improving operational efficiency, 
            and building products that scale reliably in real-world environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
