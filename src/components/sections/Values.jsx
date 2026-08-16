import { ArrowUpRight, Shapes, GitCompareArrows, Landmark } from "lucide-react";
import Container from "../ui/Container";
import { values } from "../../data/content";

const icons = [Shapes, GitCompareArrows, Landmark];

export default function Values() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <div className="text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              {values.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl tracking-tight text-ink-900 lg:text-4xl">
              {values.headline}
            </h2>
          </div>
          <p className="text-left text-ink-600 lg:text-right">{values.body}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.cards.map((card, i) => {
            const Icon = icons[i];
            const isCream = card.variant === "cream";
            return (
              <div
                key={card.title}
                className={`flex flex-col justify-between rounded-3xl p-8 ${
                  isCream ? "bg-cream-200" : "border border-ink-900/10 bg-white"
                }`}
              >
                <div>
                  <Icon
                    className={`h-8 w-8 ${isCream ? "text-brand-800" : "text-brand-700"}`}
                    strokeWidth={1.25}
                  />
                  <h3 className="mt-6 text-lg font-medium text-ink-900">{card.title}</h3>
                  <p className="mt-2 text-sm text-ink-600">{card.body}</p>
                </div>
                <button
                  aria-label={`Learn more about ${card.title}`}
                  className={`mt-8 flex h-9 w-9 items-center justify-center rounded-full ${
                    isCream ? "bg-brand-800 text-white" : "bg-cream-100 text-ink-900"
                  }`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
