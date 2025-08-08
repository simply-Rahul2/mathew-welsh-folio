import { Badge } from "@/components/ui/badge";

const Thesis = () => {
  return (
    <section id="thesis" className="container py-16 md:py-24">
      <h2 className="font-display text-3xl md:text-4xl mb-6">Thesis Research</h2>
      <article className="glass rounded-xl p-6 md:p-8">
        <h3 className="text-xl font-semibold mb-2">Evaluating Devanagari-Based Transfer Learning for Signature Recognition Using MobileNet</h3>
        <p className="text-sm text-muted-foreground mb-4">Blekinge Institute of Technology, Sweden • Bachelor’s Qualification Project</p>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base mb-4">
          <li>Three-stage transfer learning with <strong>MobileNetV3-Small</strong> for offline handwritten signature verification.</li>
          <li><strong>Stage 1:</strong> Fine-tuned on Devanagari handwritten characters (49 classes) to learn stroke-level features.</li>
          <li><strong>Stage 2:</strong> Adapted for binary classification (genuine vs. forged) on the <strong>BHSig260-Hindi</strong> dataset.</li>
          <li><strong>Stage 3:</strong> Hyperparameter optimization via <strong>Keras Tuner (RandomSearch)</strong>.</li>
        </ul>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Accuracy: 94.52%</Badge>
          <Badge variant="secondary">F1-score: 94.99%</Badge>
          <Badge variant="secondary">AUC: 98.56%</Badge>
        </div>
      </article>
    </section>
  );
};

export default Thesis;
