import { Mail, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding bg-primary text-primary-foreground scroll-mt-24"
    >
      <div className="section-container text-center">
        <div data-reveal className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's build something great together
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            I'm always interested in hearing about new opportunities,
            especially roles where I can make a meaningful impact on product
            strategy and user experience.
          </p>

          <div data-reveal data-delay="150" className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="mailto:mudkannaomkar@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-medium transition-all hover:opacity-90 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/omkar1997/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 rounded-lg font-medium transition-all hover:bg-primary-foreground/10"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="tel:+918888841822"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 rounded-lg font-medium transition-all hover:bg-primary-foreground/10"
            >
              <Phone className="w-5 h-5" />
              +91 8888841822
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 Omkar Mudkanna. Built with care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
