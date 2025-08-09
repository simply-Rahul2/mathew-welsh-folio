import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const sections: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Python", "C", "Java (Basics)", "SQL", "JavaScript"] },
  { title: "Frameworks & Libraries", items: ["React Native", "Flask", "Bootstrap5", "Jest", "Cypress"] },
  { title: "Web & Cloud", items: ["React.js", "HTML", "CSS", "AWS (Lambda, S3, CloudWatch)", "Serverless"] },
  { title: "Databases", items: ["Firebase Firestore", "SQL"] },
  { title: "Tools", items: ["Git", "Figma", "Pandas", "NumPy", "Matplotlib", "Pillow"] },
  { title: "CS Fundamentals", items: ["OOPS", "DBMS", "Operating Systems", "Computer Networks"] },
  // New categories
  { title: "Development Tools", items: ["VS Code", "IntelliJ", "Eclipse", "Git", "Bitbucket", "Android Studio"] },
  { title: "Architecture & Patterns", items: ["Microservices", "Monolithic", "OOP", "REST APIs", "DevOps"] },
  { title: "Methodologies", items: ["Agile", "Waterfall", "Scrum", "TDD", "Code Review"] },
  { title: "Operating Systems", items: ["Windows", "Linux", "Mac"] },
];

const Skills = () => {
  return (
    <section id="skills" className="container py-16 md:py-24">
      <h2 className="font-display text-3xl md:text-4xl mb-8">Technical Skills</h2>
      <div className="glass rounded-xl p-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3 md:w-1/4">Category</TableHead>
                <TableHead>Skill</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sections.map((s) => (
                s.items.map((skill, idx) => (
                  <TableRow key={`${s.title}-${skill}`}>
                    {idx === 0 && (
                      <TableCell rowSpan={s.items.length} className="align-top font-medium text-muted-foreground">
                        {s.title}
                      </TableCell>
                    )}
                    <TableCell>{skill}</TableCell>
                  </TableRow>
                ))
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Skills;
