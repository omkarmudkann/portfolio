import Projects from "@/components/Projects";

const Work = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <h1 className="text-4xl md:text-5xl font-serif font-medium mb-12">
          Selected Work
        </h1>
        <Projects />
      </div>
    </section>
  );
};

export default Work;
