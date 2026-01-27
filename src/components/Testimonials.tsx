import { MessageCircle } from "lucide-react";

const testimonials = [
  {
    quote: "Omkar brings exceptional clarity to complex product challenges. His ability to translate business needs into actionable roadmaps while keeping the team aligned has been invaluable. A true asset to any product organization.",
    name: "Rahul Sharma",
    role: "Engineering Lead",
    initials: "RS",
  },
  {
    quote: "Working with Omkar has been a game-changer for our product development. His data-driven approach combined with genuine user empathy ensures we build features that truly matter. Highly recommended!",
    name: "Priya Patel",
    role: "Director of Product",
    initials: "PP",
  },
  {
    quote: "Omkar's process automation initiatives saved our team countless hours. He has a unique talent for identifying inefficiencies and implementing elegant solutions that scale beautifully.",
    name: "Amit Kulkarni",
    role: "Operations Manager",
    initials: "AK",
  },
  {
    quote: "His strategic thinking and attention to detail make him stand out. Omkar consistently delivers high-quality work and is always eager to learn and improve.",
    name: "Sneha Desai",
    role: "Product Manager",
    initials: "SD",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left side - Title */}
          <div className="space-y-6 fade-in-up lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/5 text-accent text-sm font-medium">
              <MessageCircle className="w-4 h-4" />
              Testimonials
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-medium leading-tight">
              A few
              <br />
              <span className="text-accent">words</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              What colleagues and partners say about working with me.
            </p>
          </div>

          {/* Right side - Testimonial cards in masonry style */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`group bg-card/40 backdrop-blur-md border border-border/30 rounded-2xl p-8 space-y-6 fade-in-up transition-all duration-500 hover:bg-card/60 hover:border-accent/20 hover:-translate-y-1 ${
                  index % 2 === 1 ? "md:mt-12" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 text-accent flex items-center justify-center font-semibold text-sm border border-accent/20">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
