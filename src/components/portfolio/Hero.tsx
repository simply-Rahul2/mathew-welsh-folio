import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-tech.jpg";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";

const Hero = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Johnwelsh5158@gmail.com");
    toast("Email copied to clipboard");
  };

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-30" aria-hidden="true" />
      <div className="relative container py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-4">Mathew John Welsh</h1>
          <p className="text-base md:text-lg text-muted-foreground mb-2">Computer Science Graduate • Full-Stack Developer • Cloud & Mobile Application Enthusiast</p>
          <p className="text-muted-foreground text-lg md:text-xl mb-8">
            Recent CS graduate specializing in React Native, AWS serverless, and data‑driven products. Passionate about scalable, user‑centric systems.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="hero" className="hover-scale">
              <a href="https://linkedin.com/in/mathew-welsh-2066131b3" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <Linkedin className="opacity-90" /> Connect on LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="hover-scale" onClick={handleCopyEmail}>
              <Mail className="opacity-90" /> Copy Email
            </Button>
            <Button variant="ghost" asChild>
              <a className="hover-scale inline-flex items-center gap-2" href="#projects">
                <Github className="opacity-90" /> View Projects
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 justify-center text-sm">
            {["Python","React Native","AWS Lambda","Firebase","Flask","SQL","Pandas","NumPy","Cypress","Jest"].map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
