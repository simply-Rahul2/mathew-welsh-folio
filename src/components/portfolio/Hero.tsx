import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-tech.jpg";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";

const Hero = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("johnwelsh5158@gmail.com");
    toast("Email copied to clipboard");
  };

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-30" aria-hidden="true" />
      <div className="relative container py-20 md:py-28">
        <nav className="flex items-center justify-between mb-10">
          <a href="#top" className="font-display text-2xl tracking-tight story-link">Mathew John Welsh</a>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="hidden md:inline-flex">Full-Stack Developer</Badge>
            <Badge variant="secondary" className="hidden md:inline-flex">Cloud & Mobile</Badge>
          </div>
        </nav>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-4">
              Building scalable, user‑centric apps across web, cloud, and mobile
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8">
              Computer Science graduate specializing in React Native, AWS serverless, and data‑driven products. Passionate about impactful systems in healthcare, fitness, and digital services.
            </p>
            <div className="flex flex-wrap gap-3">
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
            <div className="mt-8 flex flex-wrap gap-2 text-sm">
              {[
                "Python","React Native","AWS Lambda","Firebase","Flask","SQL","Pandas","NumPy","Cypress","Jest"
              ].map((s) => (
                <Badge key={s} variant="secondary">{s}</Badge>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <figure className="glass rounded-xl p-6 md:p-8 shadow-[var(--shadow-elegant)]">
              <img src={heroImage} alt="Abstract tech gradient background with cyan and violet lines" loading="lazy" className="rounded-lg w-full h-56 object-cover mb-5" />
              <figcaption className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Karlskrona, Sweden • Anantapur, India • Open to roles in Europe & India
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Full‑Stack</Badge>
                  <Badge>Cloud‑Native</Badge>
                  <Badge>Mobile</Badge>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
