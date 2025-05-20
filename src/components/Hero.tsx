
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-24">
      <div className="container mx-auto">
        <p className="text-accent mb-4 font-mono">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
          Nam Nguyen
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate">
          I build things for the web.
        </h2>
        <p className="max-w-lg text-slate text-lg mb-10">
          I'm a software developer specializing in building exceptional digital
          experiences. Currently, I'm focused on creating accessible,
          human-centered products.
        </p>
        <div className="flex gap-4">
          <Button className="btn-primary">View My Projects</Button>
          <Button className="btn-secondary">Get In Touch</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
