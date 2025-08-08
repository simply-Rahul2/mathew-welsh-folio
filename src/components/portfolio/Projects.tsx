import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "grayscale",
    title: "Grayscale Image Processor",
    role: "Team Lead",
    meta: "Cloud-Based Serverless • Team of 3",
    tech: ["AWS Lambda", "Python", "Pillow", "S3", "CloudWatch"],
    bullets: [
      "Event-driven pipeline converting color images to grayscale via S3 triggers",
      "Logging/monitoring with CloudWatch; production-ready error handling",
    ],
  },
  {
    id: "gameplan",
    title: "GamePlan App",
    role: "Team Lead",
    meta: "React Native • 200+ Users • Team of 5",
    tech: ["React Native", "Firebase Auth", "Firestore", "Jest", "Cypress"],
    bullets: [
      "GPS-based attendance tracking with secure auth and realtime data",
      "Unit & E2E tested; deployed at scale across fitness/retail settings",
    ],
  },
  {
    id: "covid",
    title: "COVID-19 Data Analysis Dashboard",
    role: "Team Lead",
    meta: "Flask • Data Viz • Team of 3",
    tech: ["Flask", "Pandas", "NumPy", "Matplotlib", "Figma"],
    bullets: [
      "Preprocessing pipelines with Pandas/NumPy; interactive charts with Matplotlib",
      "Designed intuitive UI; cloud-ready deployment",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container py-16 md:py-24">
      <h2 className="font-display text-3xl md:text-4xl mb-8">Project Portfolio</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((p) => (
          <Card key={p.id} className="overflow-hidden group hover-scale relative min-h-[260px] lg:min-h-[300px] transform transition-transform duration-300" onMouseMove={(e) => { const el = e.currentTarget as HTMLElement; const r = el.getBoundingClientRect(); const x = e.clientX - r.left; const y = e.clientY - r.top; el.style.setProperty('--x', `${x}px`); el.style.setProperty('--y', `${y}px`); }}>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(600px 300px at var(--x, 50%) var(--y, 50%), hsl(var(--ring)/0.28), transparent 60%)'
              }} />
            </div>
            <CardHeader className="p-8 pb-4">
              <CardTitle className="flex items-center justify-between text-xl md:text-2xl">
                <span>{p.title}</span>
                <span className="text-xs text-muted-foreground">{p.meta}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <p className="text-sm text-muted-foreground mb-3">{p.role}</p>
              <ul className="list-disc list-inside space-y-1 text-sm mb-4">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t} variant="secondary">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
