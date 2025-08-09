import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio Contact from ${name || "Someone"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:Johnwelsh5158@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Thanks! Opening your mail client…");
    (e.target as HTMLFormElement).reset();
  };

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

        <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl mx-auto mt-8 text-left">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="How can I help you?" required rows={5} />
          </div>
          <div className="flex justify-center">
            <Button type="submit" variant="hero">Send Message</Button>
          </div>
        </form>

        <p className="text-xs text-muted-foreground mt-8">© {new Date().getFullYear()} Mathew John Welsh</p>
      </div>
    </footer>
  );
};

export default Contact;
