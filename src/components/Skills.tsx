import { Kanban, FileCode, PenTool, Send, GitBranch, Database, BarChart3, Code } from "lucide-react";

const technicalTools = [
  { name: "Jira", icon: Kanban },
  { name: "Confluence", icon: FileCode },
  { name: "Figma", icon: PenTool },
  { name: "Postman", icon: Send },
  { name: "Git", icon: GitBranch },
  { name: "SQL", icon: Database },
  { name: "Power BI", icon: BarChart3 },
  { name: "Python", icon: Code },
  { name: "Mixpanel", icon: BarChart3 },
  { name: "OpenAI API", icon: Code },
];

const coreSkills = [
  "Product Lifecycle Management",
  "SaaS Product Ownership",
  "Product Roadmap & Release Planning",
  "A/B Testing & Data-Driven Decisions",
  "Technical PRD Creation",
  "Agile / Scrum",
  "eNACH & SI Mandate Integration",
  "Payment Gateway Integration",
  "Subscription Lifecycle Management",
  "LLM & AI Workflow Integration",
  "Prompt Engineering",
  "RBI Compliance",
  "Backlog Grooming & Sprint Planning",
  "Stakeholder Communication",
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div data-reveal className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Skills & Tools</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            The toolkit I use to build and ship great products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div data-reveal data-delay="100">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/50"></span>
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-card/60 hover:border-accent/30 hover:-translate-y-0.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div data-reveal data-delay="200">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              {/* Steel blue dot for technical tools — second accent color */}
              <span className="w-3 h-3 bg-[hsl(var(--accent-2))] rounded-full shadow-lg shadow-[hsl(var(--accent-2)/0.4)]"></span>
              Technical Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalTools.map((tool) => (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[hsl(var(--accent-2)/0.08)] text-[hsl(var(--accent-2))] border border-[hsl(var(--accent-2)/0.2)] rounded-xl text-sm font-medium transition-all duration-300 hover:bg-[hsl(var(--accent-2)/0.15)] hover:-translate-y-0.5"
                >
                  <tool.icon className="w-4 h-4" />
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
