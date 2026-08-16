import { Star, Globe, Sparkles, TrendingUp, Smartphone } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { hero } from "../../data/content";

export default function Hero() {
  return (
    <section className="pt-14 pb-20 lg:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Copy column */}
        <div className="text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] tracking-tight text-ink-900 lg:text-6xl">
            {hero.headline[0]}{" "}
            <span className="font-serif italic font-normal">{hero.headline[1]}</span>
          </h1>
          <p className="mt-6 max-w-md text-base text-ink-600">{hero.body}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button>{hero.ctaLabel}</Button>
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-ink-900">{hero.rating.score}</span>{" "}
                <span className="text-ink-400">
                  from {hero.rating.count} <a href="#" className="underline">reviews</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual column — 2x2 tile grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Phone mockup tile */}
          <div className="col-span-1 flex aspect-[4/5] items-center justify-center rounded-3xl bg-cream-200">
            <Smartphone className="h-16 w-16 text-brand-700/40" strokeWidth={1.25} />
          </div>

          {/* Currencies tile */}
          <div className="col-span-1 flex aspect-[4/5] flex-col justify-between rounded-3xl bg-cream-100 p-6">
            <p className="text-2xl font-semibold text-ink-900">{hero.stats[0].value}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-ink-600">{hero.stats[0].label}</span>
              <Globe className="h-6 w-6 text-ink-400" strokeWidth={1.25} />
            </div>
          </div>

          {/* Users active tile */}
          <div className="col-span-1 flex aspect-[4/5] flex-col justify-between rounded-3xl bg-cream-100 p-6">
            <Sparkles className="h-6 w-6 text-brand-700" strokeWidth={1.25} />
            <div>
              <div className="mb-2 flex -space-x-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-cream-100 bg-brand-400"
                  />
                ))}
              </div>
              <span className="text-sm text-ink-600">{hero.stats[1].label}</span>
            </div>
          </div>

          {/* Saving tile */}
          <div className="col-span-1 flex aspect-[4/5] flex-col justify-between rounded-3xl bg-brand-800 p-6 text-white">
            <div className="flex items-center gap-1 text-lg font-semibold">
              {hero.stats[2].value}
              <TrendingUp className="h-4 w-4" />
            </div>
            <span className="text-sm text-white/70">{hero.stats[2].label}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
