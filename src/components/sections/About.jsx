import { ArrowUp, Globe } from "lucide-react";
import Container from "../ui/Container";
import { about } from "../../data/content";

export default function About() {
  const [growCard, sendCard] = about.cards;

  return (
    <section id="features" className="py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            {about.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl tracking-tight text-ink-900 lg:text-4xl">
            {about.headline}
          </h2>
          <p className="mt-4 text-ink-600">{about.body}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          {/* Grow savings faster */}
          <div className="flex flex-col justify-between rounded-3xl bg-brand-800 p-8 text-white">
            <h3 className="text-xl">{growCard.title}</h3>
            <div className="mt-10 flex items-end justify-between">
              <span className="text-2xl font-semibold">{growCard.value}</span>
              <div className="flex items-end gap-1.5">
                {[8, 14, 10, 20, 28].map((h, i) => (
                  <div
                    key={i}
                    className="w-2 rounded-t bg-white/25 last:bg-white"
                    style={{ height: `${h * 2}px` }}
                  />
                ))}
                <ArrowUp className="ml-1 h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Send across the global */}
          <div className="relative overflow-hidden rounded-3xl bg-cream-100 p-8">
            <h3 className="text-xl text-ink-900">{sendCard.title}</h3>

            <div className="mt-10 flex items-center justify-center">
              <Globe className="h-28 w-28 text-brand-700/30" strokeWidth={0.75} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {sendCard.transfers.map((t) => (
                <div
                  key={t.label}
                  className="rounded-xl bg-white px-4 py-3 shadow-sm shadow-black/5"
                >
                  <p className="text-sm font-semibold text-ink-900">{t.amount}</p>
                  <p className="text-xs text-ink-400">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
