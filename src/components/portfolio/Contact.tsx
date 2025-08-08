import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="container py-16 md:py-24">
      <div className="glass rounded-2xl p-8 md:p-12 text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-4">Let’s build something impactful</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Seeking roles in software development, cloud engineering, or AI/ML applications. Open to opportunities in Europe or India.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="hero" asChild>
            <a href="mailto:Johnwelsh5158@gmail.com" className="inline-flex items-center gap-2">
              <Mail /> Email
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="tel:+46793298629" className="inline-flex items-center gap-2">
              <Phone /> +46 79-329 86 29
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://linkedin.com/in/mathew-welsh-2066131b3" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <Linkedin /> LinkedIn
            </a>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-8">© {new Date().getFullYear()} Mathew John Welsh</p>
      </div>
    </footer>
  );
};

export default Contact;
