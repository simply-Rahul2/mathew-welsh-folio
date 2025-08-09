const Resume = () => {
  return (
    <section id="resume" className="container py-16 md:py-24">
      <h2 className="font-display text-3xl md:text-4xl text-center mb-8">Resume</h2>
      <article className="glass rounded-xl p-8 md:p-10 max-w-5xl mx-auto">
        <header className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-semibold">Mathew John Welsh</h3>
          <p className="text-sm text-muted-foreground">Full‑Stack Developer — Seeking full‑time roles</p>
          <p className="mt-3 text-xs md:text-sm flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <a href="https://linkedin.com/in/mathew-welsh-2066131b3" className="hover:underline" target="_blank" rel="noreferrer">LinkedIn</a>
            <span>•</span>
            <a href="mailto:Johnwelsh5158@gmail.com" className="hover:underline">Johnwelsh5158@gmail.com</a>
            <span>•</span>
            <a href="tel:+46793298629" className="hover:underline">+46 79-329 86 29</a>
            <span>•</span>
            <a href="/" className="hover:underline">Portfolio</a>
            <span>•</span>
            <a href="#" className="hover:underline" aria-label="GitHub profile">GitHub</a>
          </p>
        </header>

        <section aria-labelledby="summary" className="mb-6">
          <h4 id="summary" className="text-lg font-semibold mb-2">Summary</h4>
          <p className="text-sm text-muted-foreground">
            Character‑driven engineer with strengths in generative AI, prompt engineering, and vibe coding.
            Deep interest in applied AI, developer tooling, and cloud platforms.
          </p>
        </section>

        <section aria-labelledby="experience" className="mb-6">
          <h4 id="experience" className="text-lg font-semibold mb-2">Relevant Experience</h4>
          <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
            <li>Built and led scalable React Native apps with Firebase and AWS integrations.</li>
            <li>Implemented CI, testing (Jest, Cypress), and performance optimizations.</li>
          </ul>
        </section>

        <section aria-labelledby="rel-projects" className="mb-6">
          <h4 id="rel-projects" className="text-lg font-semibold mb-2">Relevant Projects</h4>
          <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
            <li>Scalable Web Platform — real‑time messaging, auto‑scaling, and load balancing.</li>
            <li>GamePlan App — GPS‑based attendance, realtime data, and robust test suite.</li>
          </ul>
        </section>

        <section aria-labelledby="education" className="mb-6">
          <h4 id="education" className="text-lg font-semibold mb-2">Education</h4>
          <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
            <li>Bachelor studies focused on software engineering and cloud computing.</li>
          </ul>
        </section>

        <section aria-labelledby="skills" className="mb-6">
          <h4 id="skills" className="text-lg font-semibold mb-2">Skills</h4>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2 text-sm text-muted-foreground list-disc pl-5">
            <li>Generative AI</li>
            <li>Prompt Engineering</li>
            <li>React Native</li>
            <li>TypeScript</li>
            <li>AWS (Lambda, S3)</li>
            <li>Firebase</li>
            <li>Python / Flask</li>
            <li>SQL</li>
            <li>Jest / Cypress</li>
            <li>CI/CD</li>
            <li>REST APIs</li>
            <li>Agile / Scrum</li>
          </ul>
        </section>

        <section aria-labelledby="additional" className="mb-2">
          <h4 id="additional" className="text-lg font-semibold mb-2">Additional Information</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <h5 className="font-medium">Achievements</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Led teams of 3–5 to ship production apps.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium">Learning</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Advanced prompt design, RAG patterns, vector databases.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium">Certifications</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>AWS fundamentals & cloud best practices (in progress).</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Resume;
