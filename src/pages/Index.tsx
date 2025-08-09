import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Timeline from "@/components/portfolio/Timeline";
import Thesis from "@/components/portfolio/Thesis";
import Contact from "@/components/portfolio/Contact";

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
      telephone: "+46 79-329 86 29",
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
    <>
      <aside className="fixed left-0 top-0 h-screen w-20 md:w-28 hidden sm:flex items-center justify-center z-40" aria-label="Left banner">
        <div className="glass rounded-full px-5 py-2 -rotate-90 origin-center">
          <span className="font-display tracking-widest uppercase">mathew-dev</span>
        </div>
      </aside>
      <main className="pl-24 md:pl-32">
        <h1 className="sr-only">Mathew John Welsh — Full‑Stack Developer Portfolio</h1>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <Thesis />
        <Contact />
      </main>
    </>
  );
};

export default Index;
