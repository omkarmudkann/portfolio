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
    title: "Subscriptions, eNACH & Recurring Payment Platform",
    company: "Repos Energy",
    description:
      "Built the entire subscription and recurring payment infrastructure from scratch — eNACH mandate flows, SI integrations, multi-gateway support, and automated reconciliation — reducing manual payment follow-ups by 60%.",
    metrics: ["60% ↓ Manual Follow-ups", "100% Reconciliation Accuracy", "RBI Compliant"],
    tags: ["Payments", "eNACH", "FinTech", "Subscriptions"],
    overview:
      "A full-stack recurring payments platform covering subscription lifecycle management, NPCI-compliant eNACH and SI mandate flows, multi-gateway integration, and automated reconciliation with end-to-end audit trails.",
    problem: [
      "No existing subscription infrastructure — plan management, renewals, and dunning were handled manually.",
      "Recurring payment failures had no automated retry or customer notification logic.",
      "Payment states were inconsistent across channels, causing reconciliation mismatches and audit gaps.",
      "Manual finance effort for payment follow-ups consumed significant ops bandwidth.",
    ],
    solution: [
      "Designed and shipped the full subscription lifecycle: plan creation, activation, renewals, upgrades, cancellations, and dunning workflows.",
      "Integrated eNACH mandate registration and SI (Standing Instruction) flows with NPCI-compliant workflows for automated recurring deductions.",
      "Owned multi-gateway API integration — tokenization, webhook handling, idempotency, failure retries, and RBI compliance.",
      "Built automated reconciliation with a unified transaction ledger and clear source-of-truth rules.",
    ],
    impact: [
      "Reduced manual payment follow-ups by over 60% through automated validation and failure handling.",
      "Achieved 100% reconciliation accuracy across supported payment flows.",
      "Eliminated finance and ops dependency on manual checks, improving audit readiness.",
    ],
    stack: ["Django REST Framework", "PostgreSQL", "eNACH / NPCI", "Webhooks", "Queue/Retry", "Audit Logs"],
  },
  {
    slug: "atlas-ai-platform",
    title: "Atlas — AI-Enabled Complaint & Inventory Management",
    company: "Repos Energy",
    description:
      "Designed and delivered an AI-powered service and inventory platform with LLM-enabled workflow automation, ML-based complaint routing, and CRM integration — reducing post-release defects by 40%.",
    metrics: ["40% ↓ Post-release Defects", "ML Complaint Routing", "LLM Automation"],
    tags: ["AI/ML", "LLM", "CRM", "Inventory"],
    overview:
      "An internal AI-powered platform combining complaint management, inventory tracking, and CRM integration — with ML-based classification for intelligent ticket routing and LLM-enabled workflow automation.",
    problem: [
      "Complaint routing was manual, causing inconsistent prioritization and slow resolution times.",
      "Inventory and service data lived in silos with no unified view or metadata layer.",
      "High post-release defect rates due to lack of structured QA and automated testing frameworks.",
    ],
    solution: [
      "Defined system architecture, data modeling strategy, API contracts, and role-based access controls using Django REST Framework.",
      "Integrated ML-based classification for complaint routing and priority scoring.",
      "Built LLM-enabled workflow automation to reduce manual intervention across key operational steps.",
      "Established structured Agile delivery with automated unit testing frameworks.",
    ],
    impact: [
      "Reduced ticket resolution time through intelligent ML-based routing and priority scoring.",
      "Cut post-release defects by 40% through structured Agile delivery and automated testing.",
      "Improved operational intelligence and reduced manual effort across complaint and inventory workflows.",
    ],
    stack: ["Django REST Framework", "PostgreSQL", "OpenAI API", "ML Classification", "CRM Integration", "REST APIs"],
  },
  {
    slug: "partner-app-revamp",
    title: "E-commerce Platform Revamp & Credit Intelligence",
    company: "Repos Energy",
    description:
      "Led a full platform revamp using funnel analysis, A/B experimentation, and user journey mapping. Designed AI-driven credit tracking with KYC and automated reconciliation — increasing revenue by 40% and saving 300+ man-hours per month.",
    metrics: ["40% ↑ Revenue", "300+ hrs/mo Saved", "30% ↑ Adoption"],
    tags: ["E-commerce", "A/B Testing", "AI/ML", "Credit"],
    overview:
      "A complete digital transformation of the e-commerce platform — combining product analytics, UX redesign, AI-driven credit intelligence, and automated reconciliation workflows to drive adoption and revenue growth.",
    problem: [
      "Platform adoption was low with high drop-off rates across ordering and payment journeys.",
      "Credit tracking was manual, error-prone, and lacked KYC verification.",
      "No structured experimentation framework to validate UX or funnel improvements.",
    ],
    solution: [
      "Led full platform revamp using business analytics, funnel analysis, A/B experimentation, and user journey mapping.",
      "Redesigned ordering and payment flows with clearer states, better information hierarchy, and actionable notifications.",
      "Designed AI-driven credit tracking models with KYC authentication and automated reconciliation workflows.",
    ],
    impact: [
      "Increased revenue by 40% through improved conversion and product-led growth initiatives.",
      "Saved 300+ man-hours per month through process automation and structured Agile iteration.",
      "Improved platform adoption by 30% and significantly reduced support ticket volume.",
    ],
    stack: ["Product Discovery", "A/B Testing", "Figma", "Mixpanel", "Django REST Framework", "Analytics"],
  },
  {
    slug: "process-automation-platform",
    title: "Process Automation & Compliance Platform",
    company: "Repos Energy",
    description:
      "Built Python and API-driven operational workflows with full audit logging, eliminating 300+ manual hours per month and standardizing compliance documentation across teams.",
    metrics: ["300+ hrs/mo Saved", "40% ↑ Efficiency", "Audit Ready"],
    tags: ["Automation", "Python", "Compliance", "Process Optimization"],
    overview:
      "Internal automation platform to standardize operational and compliance processes, reduce manual effort, and improve traceability and audit readiness across teams.",
    problem: [
      "Manual documentation workflows consumed large ops bandwidth with no standardization.",
      "Inconsistent formats caused delays, repeated corrections, and compliance gaps.",
      "Audits required structured, retrievable records that didn't exist.",
    ],
    solution: [
      "Created standardized workflow templates with API-driven approvals and role-based access.",
      "Added full audit logs and document traceability for every action across all workflows.",
      "Automated recurring operational steps to reduce human dependency.",
    ],
    impact: [
      "Saved 300+ hours per month across teams by eliminating manual steps.",
      "Improved operational efficiency by 40% through automation frameworks and structured governance.",
      "Achieved compliance readiness with structured, retrievable audit logs.",
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
        <div data-reveal className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Key initiatives I've led that drove measurable business impact
          </p>
        </div>

        <div className="space-y-5">
          {visibleProjects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              data-reveal
              data-delay={String(index * 100)}
              className="block group relative bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-card/70 hover:border-accent/30 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Animated accent top bar */}
              <div className="h-0.5 w-0 bg-gradient-to-r from-accent to-accent/50 transition-all duration-500 group-hover:w-full" />

              <div className="p-8 md:p-10">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex-1">
                    <p className="text-accent font-medium text-xs uppercase tracking-widest mb-2">
                      {project.company}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold leading-tight group-hover:text-accent transition-colors duration-300 pr-6">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1" />
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-4 py-1.5 bg-accent/10 text-accent font-semibold rounded-lg text-sm border border-accent/20"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-border/30">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary/40 text-secondary-foreground text-xs rounded-full border border-border/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-4 whitespace-nowrap flex items-center gap-1 shrink-0">
                    View case study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
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
