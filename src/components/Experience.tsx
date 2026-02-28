
const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container max-w-5xl">
        <h2 data-reveal className="text-4xl md:text-5xl font-serif font-medium mb-12">
          Experience
        </h2>

        <div className="space-y-16">
          {/* Repos Energy – Product Manager */}
          <div data-reveal data-delay="100" className="border-l-2 border-border/40 pl-6 hover:border-accent transition-colors duration-500">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  Product Manager
                </h3>
                <p className="text-accent font-medium">
                  Repos Energy India Pvt. Ltd. · Pune, India
                </p>
              </div>
              <span className="text-sm text-[hsl(var(--accent-2))] font-medium mt-2 md:mt-0">
                Dec 2022 – Present
              </span>
            </div>

            <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed list-disc pl-5">
              <li>
                Owned end-to-end delivery of e-commerce, AI-enabled CRM, and
                payments platforms, leading a 14-member cross-functional
                engineering team across design, backend, QA, and operations.
              </li>
              <li>
                Designed and shipped a full subscription management system —
                plan creation, lifecycle management, renewals, upgrades,
                cancellations, and automated dunning workflows — built from zero.
              </li>
              <li>
                Integrated eNACH and SI (Standing Instruction) mandate flows for
                NPCI-compliant recurring payments, covering mandate registration,
                execution, revocation, and failure handling.
              </li>
              <li>
                Owned payment gateway integrations end-to-end: API contracts,
                tokenization, webhook handling, automated reconciliation, failure
                retries, and RBI compliance — reducing manual payment follow-ups
                by 60%.
              </li>
              <li>
                Integrated LLM-enabled features and ML-based classification into
                operational workflows, improving decision intelligence and
                reducing manual intervention across key processes.
              </li>
              <li>
                Automated compliance and operational workflows using Django REST
                Framework, saving 300+ hours per month and improving overall
                operational efficiency by 40%.
              </li>
            </ul>
          </div>

          {/* Repos Energy – Operations Excellence */}
          <div data-reveal data-delay="150" className="border-l-2 border-border/40 pl-6 hover:border-accent transition-colors duration-500">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  Operations Excellence
                </h3>
                <p className="text-accent font-medium">
                  Repos Energy India Pvt. Ltd. · Pune, India
                </p>
              </div>
              <span className="text-sm text-[hsl(var(--accent-2))] font-medium mt-2 md:mt-0">
                Dec 2021 – Dec 2022
              </span>
            </div>

            <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed list-disc pl-5">
              <li>
                Analyzed customer and partner behavior to identify adoption
                gaps, driving initiatives that increased active users by 45%.
              </li>
              <li>
                Improved onboarding and internal workflows through research and
                process redesign, increasing completion rates by 30%.
              </li>
              <li>
                Standardized operational processes and reporting, achieving
                98% on-time service delivery.
              </li>
              <li>
                Established performance and compliance frameworks to reduce
                operational risk at scale.
              </li>
            </ul>
          </div>

          {/* LogiAngle – Business Development */}
          <div data-reveal data-delay="200" className="border-l-2 border-border/40 pl-6 hover:border-accent transition-colors duration-500">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  Business Development
                </h3>
                <p className="text-accent font-medium">
                  LogiAngle · Pune, India
                </p>
              </div>
              <span className="text-sm text-[hsl(var(--accent-2))] font-medium mt-2 md:mt-0">
                Jul 2019 – Aug 2020
              </span>
            </div>

            <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed list-disc pl-5">
              <li>
                Worked with product teams to tailor cloud-based solutions and
                deliver targeted demos, improving demo-to-deal conversion
                from 25% to 35%.
              </li>
              <li>
                Identified digitization gaps in customer and distributor
                workflows, influencing feature improvements and positioning.
              </li>
              <li>
                Supported strategic partnerships and market expansion
                initiatives.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
