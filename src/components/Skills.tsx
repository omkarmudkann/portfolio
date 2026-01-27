import { Trello, FileCode, Figma, Send, GitBranch, Database, BarChart3, Code } from "lucide-react";

const technicalTools = [
  { name: "Jira", icon: Trello },
  { name: "Confluence", icon: FileCode },
  { name: "Figma", icon: Figma },
  { name: "Postman", icon: Send },
  { name: "Git", icon: GitBranch },
  { name: "SQL", icon: Database },
  { name: "Power BI", icon: BarChart3 },
  { name: "Python", icon: Code },
];

const coreSkills = [
  "Product Lifecycle Management",
  "SaaS Product Ownership",
  "Product Roadmap & Release Planning",
  "A/B Testing & Data-Driven Decisions",
  "Technical PRD Creation",
  "Agile/Scrum",
  "ServiceNow CSM",
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-20 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Skills & Tools</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            The toolkit I use to build and ship great products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="fade-in-up stagger-1">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/50"></span>
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-card/60 hover:border-accent/20 hover:-translate-y-0.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="fade-in-up stagger-2">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/50"></span>
              Technical Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalTools.map((tool) => (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent border border-accent/20 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-accent/20 hover:-translate-y-0.5"
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
