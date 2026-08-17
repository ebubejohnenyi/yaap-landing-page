import { Smartphone } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { vendorsRiders } from "../../data/content";

export default function ForVendorsRiders() {
  const { gettingStarted } = vendorsRiders;

  return (
    <section id="for-vendors-riders" className="py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            {vendorsRiders.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-4 text-3xl tracking-tight text-ink-900 lg:text-4xl">
            {vendorsRiders.headline}
          </Reveal>
          <Reveal as="p" delay={160} className="mt-4 text-ink-600">
            {vendorsRiders.body}
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {vendorsRiders.roles.map((role, i) => (
            <Reveal
              key={role.title}
              delay={i * 100}
              className="rounded-3xl border border-ink-900/10 bg-white p-8"
            >
              <h3 className="text-lg font-medium text-ink-900">{role.title}</h3>
              <p className="mt-2 text-base font-medium text-brand-700">{role.tagline}</p>
              <p className="mt-3 text-sm text-ink-600">{role.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16 rounded-3xl bg-cream-100 p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                {gettingStarted.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl tracking-tight text-ink-900">{gettingStarted.headline}</h3>

              <ol className="mt-6 space-y-4">
                {gettingStarted.steps.map((step) => (
                  <li key={step.number} className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-800 text-xs font-semibold text-white">
                      {step.number}
                    </span>
                    <span className="pt-0.5 text-sm text-ink-600">{step.text}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col items-center gap-6 rounded-2xl bg-white p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-800 text-white">
                <Smartphone className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <p className="max-w-xs text-ink-600">
                Open Yaap on your phone and add it to your home screen to get started.
              </p>
              <Button href={gettingStarted.ctaHref} target="_blank" rel="noopener noreferrer">
                {gettingStarted.ctaLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
