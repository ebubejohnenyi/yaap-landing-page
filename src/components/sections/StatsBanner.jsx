import Container from "../ui/Container";
import { statsBanner } from "../../data/content";

export default function StatsBanner() {
  return (
    <section
      className="relative overflow-hidden py-20 text-white"
      style={{
        background:
          "radial-gradient(120% 140% at 15% 20%, #2f6353 0%, #163a2f 45%, #0b221a 100%)",
      }}
    >
      {/* Decorative sheen — swap for the silk/fabric texture photo in the reference */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          background:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0) 40px, rgba(255,255,255,0.1) 80px)",
        }}
      />

      <Container className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-wrap gap-16">
          {statsBanner.stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-semibold tracking-tight lg:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="lg:text-right">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
            {statsBanner.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl tracking-tight lg:text-4xl">{statsBanner.headline}</h2>
        </div>
      </Container>
    </section>
  );
}
