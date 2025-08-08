import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
      <Tabs defaultValue={sections[0].title} className="w-full">
        <TabsList className="w-full overflow-x-auto flex justify-start">
          {sections.map((s) => (
            <TabsTrigger key={s.title} value={s.title} className="whitespace-nowrap">{s.title}</TabsTrigger>
          ))}
        </TabsList>
        {sections.map((s) => (
          <TabsContent key={s.title} value={s.title}>
            <div className="glass rounded-xl p-6 mt-4">
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <Badge key={i} variant="secondary">{i}</Badge>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Skills;
