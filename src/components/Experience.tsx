import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-12">
          Experience
        </h2>

        <div className="space-y-16">
          {/* Repos Energy – Product Manager */}
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  Product Manager
                </h3>
                <p className="text-accent font-medium">
                  Repos Energy India Pvt. Ltd. · Pune, India
                </p>
              </div>
              <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                Dec 2022 – Present
              </span>
            </div>

            <ul className="space-y-3 text-muted-foreground text-lg leading-relaxed list-disc pl-5">
              <li>
                Owned end-to-end delivery of customer-facing and internal
                platforms across CRM, ordering, subscriptions, and payments.
              </li>
              <li>
                Led roadmap planning and sprint execution with a 14-member
                engineering team, shipping releases reliably across multiple
                product lines.
              </li>
              <li>
                Designed and scaled lead-to-revenue funnels with UTM tracking,
                subscription logic, and autopay workflows.
              </li>
              <li>
                Launched and stabilized payment, KYC, and vendor integrations,
                eliminating reconciliation issues and improving transaction
                reliability.
              </li>
              <li>
                Automated operational and compliance workflows using Django REST
                Framework, saving 300+ hours per month and reducing support
                dependency.
              </li>
            </ul>
          </div>

          {/* Repos Energy – Operations Excellence */}
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  Operations Excellence
                </h3>
                <p className="text-accent font-medium">
                  Repos Energy India Pvt. Ltd. · Pune, India
                </p>
              </div>
              <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                Dec 2021 – Dec 2022
              </span>
            </div>

            <ul className="space-y-3 text-muted-foreground text-lg leading-relaxed list-disc pl-5">
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
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  Business Development
                </h3>
                <p className="text-accent font-medium">
                  LogiAngle · Pune, India
                </p>
              </div>
              <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                Jul 2019 – Aug 2020
              </span>
            </div>

            <ul className="space-y-3 text-muted-foreground text-lg leading-relaxed list-disc pl-5">
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
