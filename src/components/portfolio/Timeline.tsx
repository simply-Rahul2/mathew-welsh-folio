const Timeline = () => {
  return (
    <section id="timeline" className="container py-16 md:py-24">
      <h2 className="font-display text-3xl md:text-4xl mb-8">Education & Research</h2>
      <div className="space-y-6">
        <div className="glass rounded-xl p-6">
          <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science (Exchange)</h3>
          <p className="text-sm text-muted-foreground">Blekinge Institute of Technology, Karlskrona, Sweden • Jun 2024 – Present</p>
          <ul className="list-disc list-inside mt-3 text-sm">
            <li>Deep Learning, Software Engineering, Cloud Computing</li>
            <li>Thesis: Evaluating Devanagari-Based Transfer Learning for Signature Recognition using MobileNetV3-Small</li>
            <li><strong>Results:</strong> 94.52% accuracy, 94.99% F1-score, 98.56% AUC</li>
          </ul>
        </div>
        <div className="glass rounded-xl p-6">
          <h3 className="text-lg font-semibold">B.Sc in Computer Science and Engineering</h3>
          <p className="text-sm text-muted-foreground">JNTU College of Engineering, Anantapur, India • Jun 2021 – Jun 2024</p>
          <ul className="list-disc list-inside mt-3 text-sm">
            <li>CGPA: 8.5/10 • DS & Algos, DBMS, OS, Networks</li>
          </ul>
        </div>
      </div>

      <h2 className="font-display text-3xl md:text-4xl mt-14 mb-6">Experience & Highlights</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-6">
          <h3 className="text-lg font-semibold">Web Development Summer Intern (Remote)</h3>
          <p className="text-sm text-muted-foreground">Ronny Ferns Travel & Entertainment LLP • Apr 2023 – Jun 2023</p>
          <ul className="list-disc list-inside mt-3 text-sm">
            <li>Built responsive tourism site for bookings and packages in Goa</li>
            <li>Improved engagement via features for water sports & travel</li>
            <li>Stack: HTML, CSS, JavaScript</li>
          </ul>
        </div>
        <div className="glass rounded-xl p-6">
          <h3 className="text-lg font-semibold">Certifications</h3>
          <ul className="list-disc list-inside mt-3 text-sm">
            <li>Python Development from Zero to Mastery</li>
            <li>Introduction to SQL</li>
            <li>Linux Fundamentals, Linux Systems</li>
          </ul>
          <h3 className="text-lg font-semibold mt-6">Achievements & Leadership</h3>
          <ul className="list-disc list-inside mt-3 text-sm">
            <li>Runner-up, Campus Hackathon (Nov 2023)</li>
            <li>2nd Place, TCS EngiNx Engineering Contest (2018)</li>
            <li>Organized PIXEL Event for 400+ participants at JNTUA</li>
            <li>Co-Lead, Communication Club – Trained 200+ students</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
