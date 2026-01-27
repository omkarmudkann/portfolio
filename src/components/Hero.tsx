import { useState, useEffect } from "react";

const greetings = [
  "Hello",
  "Namaste",
  "नमस्कार",
  "Hola",
  "Bonjour",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center section-container pt-24">
      <div className="text-center max-w-4xl space-y-8">
        {/* Greeting */}
        <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight">
          {greetings[index]}
          <span className="text-accent">,</span>
          <br />
          I’m <span className="text-foreground">Omkar Mudkanna</span>
        </h1>

        {/* Positioning */}
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Product Manager with 4+ years of experience building SaaS, fintech,
          and operational platforms across web, mobile, and IoT ecosystems.
        </p>

        {/* Value proposition */}
        <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto">
          I specialize in product strategy, payments, subscriptions, and
          automation — translating complex business problems into scalable,
          high-impact products.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-3 rounded-full font-medium transition hover:brightness-110"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-border px-8 py-3 rounded-full font-medium hover:bg-secondary transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
