import { useMemo, useEffect } from "react";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import { projects } from "@/components/Projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Always start at top when opening a project
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const project = useMemo(() => {
    return projects.find((p) => p.slug === slug);
  }, [slug]);

  // ✅ Context-aware back navigation
  const handleBack = () => {
    // If user navigated from within the app, go back in history
    if (window.history.length > 1 && location.key !== "default") {
      navigate(-1);
    } else {
      // Fallback if page was opened directly
      navigate("/work");
    }
  };

  // ❌ Project not found
  if (!project) {
    return (
      <section className="section-padding">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Project not found
          </h1>
          <p className="text-muted-foreground mb-8">
            The project you’re looking for doesn’t exist.
          </p>

          <button
            onClick={handleBack}
            className="inline-flex items-center justify-center border border-border px-8 py-3 rounded-full font-medium hover:bg-secondary transition"
          >
            Go back
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="section-container max-w-4xl">
        {/* Header */}
        <div data-reveal className="mb-10">
          <button
            onClick={handleBack}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Back
          </button>

          <p className="text-accent font-medium text-sm mt-6 uppercase tracking-wider">
            {project.company}
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-medium mt-2">
            {project.title}
          </h1>

          <p className="text-muted-foreground text-xl leading-relaxed mt-6">
            {project.overview}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-secondary/50 text-secondary-foreground text-sm rounded-full border border-border/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-3 mt-8">
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

        {/* Content */}
        <div className="space-y-16">
          <div data-reveal>
            <h2 className="text-2xl font-semibold mb-6">Problem</h2>
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground text-lg leading-relaxed">
              {project.problem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div data-reveal data-delay="100">
            <h2 className="text-2xl font-semibold mb-6">Solution</h2>
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground text-lg leading-relaxed">
              {project.solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div data-reveal data-delay="200">
            <h2 className="text-2xl font-semibold mb-6">Impact</h2>
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground text-lg leading-relaxed">
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div data-reveal data-delay="300">
            <h2 className="text-2xl font-semibold mb-6">Tech / Tools</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tool) => (
                <span
                  key={tool}
                  className="px-5 py-2.5 bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTA (navigation only, no distractions) */}
          <div className="pt-10 border-t border-border/40">
            <Link
              to="/work"
              className="inline-flex items-center justify-center border border-border px-8 py-3 rounded-full font-medium hover:bg-secondary transition"
            >
              View all projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
