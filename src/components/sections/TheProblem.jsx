import { X } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { problem } from "../../data/content";

export default function TheProblem() {
  return (
    <section id="about" className="border-y border-ink-900/5 py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            {problem.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-4 text-3xl tracking-tight text-ink-900 lg:text-4xl">
            {problem.headline}
          </Reveal>
        </div>

        <Reveal delay={160} className="mx-auto mt-10 max-w-md">
          <ul className="space-y-3">
            {problem.steps.map((step) => (
              <li key={step} className="flex items-center gap-3 text-ink-400">
                <X className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                <span className="line-through decoration-ink-400/50">{step}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={280} className="mx-auto mt-14 max-w-2xl rounded-3xl bg-cream-100 p-10 text-center">
          <p className="font-serif text-lg italic text-brand-700">{problem.resolutionEyebrow}</p>
          <h3 className="mt-3 text-2xl tracking-tight text-ink-900 lg:text-3xl">
            {problem.resolutionHeadline}
          </h3>
          <p className="mt-3 text-ink-600">{problem.resolutionBody}</p>
        </Reveal>
      </Container>
    </section>
  );
}
