const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container max-w-4xl">
        <h2 data-reveal className="text-4xl md:text-5xl font-serif font-medium mb-8">
          About
        </h2>

        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p data-reveal data-delay="100">
            I'm a Technical Product Manager with 4+ years of experience building
            customer-facing and internal platforms across fintech, SaaS, and
            operational domains — with deep expertise in payment systems,
            subscription lifecycle management, and AI-enabled workflows.
          </p>

          <p data-reveal data-delay="200">
            I've led end-to-end product development across eNACH integrations,
            SI mandate flows, recurring payment platforms, CRM, and AI-powered
            operations tools — working closely with engineering, operations, and
            leadership to deliver scalable, RBI-compliant, revenue-impacting solutions.
          </p>

          <p data-reveal data-delay="300">
            My work sits at the intersection of product strategy, system design,
            and API-driven integrations. I enjoy solving complex, high-stakes problems —
            from reducing manual payment follow-ups by 60% to building LLM-enabled
            automation that saved 300+ hours per month — and shipping products that
            scale reliably in real-world environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
