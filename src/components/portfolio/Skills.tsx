import { Badge } from "@/components/ui/badge";

const sections: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["Python", "C", "Java (Basics)", "SQL", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React Native", "Flask", "Bootstrap5", "Jest", "Cypress"],
  },
  {
    title: "Web & Cloud",
    items: ["React.js", "HTML", "CSS", "AWS (Lambda, S3, CloudWatch)", "Serverless"],
  },
  {
    title: "Databases",
    items: ["Firebase Firestore", "SQL"],
  },
  {
    title: "Tools",
    items: ["Git", "Figma", "Pandas", "NumPy", "Matplotlib", "Pillow"],
  },
  {
    title: "CS Fundamentals",
    items: ["OOPS", "DBMS", "Operating Systems", "Computer Networks"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="container py-16 md:py-24">
      <h2 className="font-display text-3xl md:text-4xl mb-8">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((s) => (
          <div key={s.title} className="glass rounded-xl p-6 hover-scale">
            <h3 className="text-lg font-semibold mb-4">{s.title}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <Badge key={i} variant="secondary">{i}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
