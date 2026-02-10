import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type Project = {
  slug: string;
  title: string;
  company: string;
  description: string;
  metrics: string[];
  tags: string[];

  // detail fields
  overview: string;
  problem: string[];
  solution: string[];
  impact: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "payments-reconciliation",
    title: "Payments & Reconciliation System",
    company: "Repos Energy",
    description:
      "Integrated multiple payment gateways using secure APIs and webhooks, achieving 100% reconciliation accuracy and ensuring audit compliance across the platform.",
    metrics: ["100% Accuracy", "Multi-gateway", "Audit Compliant"],
    tags: ["Payments", "API Integration", "FinTech"],
    overview:
      "A unified payments layer that supports multiple payment rails, ensures reliable status tracking, and eliminates reconciliation mismatches.",
    problem: [
      "Payment success/failure states were inconsistent across channels.",
      "Manual reconciliation effort and delayed issue resolution.",
      "Audit readiness required stronger traceability and logs.",
    ],
    solution: [
      "Designed a unified payment status model and transaction ledger.",
      "Implemented secure webhooks + retries + idempotency to prevent duplicates.",
      "Built reconciliation workflows with clear source-of-truth rules.",
      "SI mandate integration and support for multiple payment gateways.",
    ],
    impact: [
      "Achieved 100% reconciliation accuracy for supported flows.",
      "Reduced finance and ops dependency on manual checks.",
      "Improved transaction reliability and audit readiness.",
    ],
    stack: ["Django REST Framework", "PostgreSQL", "Webhooks", "Queue/Retry", "Audit Logs"],
  },
  {
    slug: "partner-app-revamp",
    title: "Partner App Revamp",
    company: "Repos Energy",
    description:
      "Led UI/UX research and user testing to redefine ordering and payment journeys. Created user stories and managed stakeholders through the complete redesign.",
    metrics: ["30% ↑ Adoption", "UI/UX Research", "User Testing"],
    tags: ["Mobile", "UX Research", "B2B"],
    overview:
      "A revamp to improve partner ordering, reduce friction in payments, and increase feature adoption through better flows and information hierarchy.",
    problem: [
      "Partners struggled with ordering clarity and status visibility.",
      "Drop-offs increased during payment and confirmation steps.",
      "Support tickets were high due to confusing journeys.",
    ],
    solution: [
      "Conducted user research and mapped key partner workflows.",
      "Redesigned ordering + payment flows with clearer states and messaging.",
      "Introduced better dashboards and actionable notifications.",
    ],
    impact: [
      "Improved adoption and reduced confusion during ordering.",
      "Lowered support dependency by improving self-serve clarity.",
      "Better alignment across business and engineering teams.",
    ],
    stack: ["Product Discovery", "User Testing", "Jira", "Figma", "Analytics"],
  },
  {
    slug: "process-automation-platform",
    title: "Process Automation Platform",
    company: "Repos Energy",
    description:
      "Built Python + API-driven workflows with audit logging, eliminating 300+ manual hours per month and standardizing documentation across teams.",
    metrics: ["300+ hrs/mo Saved", "Automated Workflows", "Audit Logging"],
    tags: ["Automation", "Python", "Process Optimization"],
    overview:
      "Internal automation to standardize operational/compliance processes, reduce manual effort, and improve traceability across teams.",
    problem: [
      "Manual documentation workflows consumed large ops bandwidth.",
      "Inconsistent formats caused delays and repeated corrections.",
      "Audits required structured, retrievable records.",
    ],
    solution: [
      "Created standardized workflow templates + API-driven approvals.",
      "Added audit logs and document traceability for every action.",
      "Automated recurring steps to reduce human dependency.",
    ],
    impact: [
      "Saved 300+ hours/month across teams.",
      "Reduced turnaround time and rework.",
      "Improved compliance readiness with structured logs.",
    ],
    stack: ["Python", "Django REST Framework", "PostgreSQL", "S3/Storage", "Audit Trails"],
  },
];

type ProjectsProps = {
  limit?: number; // Home page uses 2; Work page shows all
};

const Projects = ({ limit }: ProjectsProps) => {
  const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-20 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Key initiatives I've led that drove measurable business impact
          </p>
        </div>

        <div className="space-y-6">
          {visibleProjects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className={`block group bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-8 md:p-12 transition-all duration-500 hover:bg-card/60 hover:border-accent/20 hover:-translate-y-1 fade-in-up stagger-${index + 1}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="space-y-5 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-accent font-medium text-sm mb-2 uppercase tracking-wider">
                        {project.company}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-7 h-7 text-muted-foreground/50 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-secondary/50 text-secondary-foreground text-sm rounded-full border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-col gap-3 lg:text-right lg:min-w-[180px]">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="px-5 py-2.5 bg-accent/10 text-accent font-semibold rounded-xl text-sm whitespace-nowrap border border-accent/20"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Optional: on Home page, add a "View all" link */}
        {typeof limit === "number" && projects.length > limit && (
          <div className="mt-10 text-center">
            <Link
              to="/work"
              className="inline-flex items-center justify-center border border-border px-8 py-3 rounded-full font-medium hover:bg-secondary transition"
            >
              View all projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
