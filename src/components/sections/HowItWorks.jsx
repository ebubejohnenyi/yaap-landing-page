import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { howItWorks } from "../../data/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-ink-900/5 py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            {howItWorks.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-4 text-3xl tracking-tight text-ink-900 lg:text-4xl">
            {howItWorks.headline}
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100} className="text-left">
              <span className="text-3xl font-serif italic text-brand-600">{step.number}</span>
              <h3 className="mt-3 text-lg font-medium text-ink-900">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-600">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
