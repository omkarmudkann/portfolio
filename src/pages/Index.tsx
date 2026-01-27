import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-accent/8 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] -right-[15%] w-[700px] h-[700px] bg-[hsl(200,70%,50%)]/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Projects limit={2} />
        <Testimonials />
        {/* ✅ This enables Contact Me CTA */}
        <Contact />
      </div>
    </div>
  );
};

export default Index;
