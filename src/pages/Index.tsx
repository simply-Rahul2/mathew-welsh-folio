import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Timeline from "@/components/portfolio/Timeline";
import Thesis from "@/components/portfolio/Thesis";
import Contact from "@/components/portfolio/Contact";
import ThemeToggle from "@/components/ThemeToggle";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Mathew John Welsh — Full‑Stack Developer";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Portfolio of Mathew John Welsh, Full‑Stack Developer specializing in React Native, AWS, and cloud applications.');

    const ld = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mathew John Welsh",
      jobTitle: "Full-Stack Developer",
      email: "mailto:Johnwelsh5158@gmail.com",
      telephone: "+46793298629",
      url: window.location.origin,
      sameAs: ["https://linkedin.com/in/mathew-welsh-2066131b3"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karlskrona, Sweden",
        addressCountry: "SE"
      },
      knowsAbout: ["React Native","AWS","Firebase","Python","Flask","Cloud Computing","Data Analysis"],
    } as const;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <main>
      <div className="fixed top-4 right-4 z-50"><ThemeToggle /></div>
      <h1 className="sr-only">Mathew John Welsh — Full‑Stack Developer Portfolio</h1>
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <Thesis />
      <Contact />
    </main>
  );
};

export default Index;
