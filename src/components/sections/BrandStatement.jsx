import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { brandStatement } from "../../data/content";

export default function BrandStatement() {
  return (
    <section
      className="relative overflow-hidden py-24 text-white"
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

      <Container className="relative mx-auto max-w-2xl text-center">
        <Reveal as="p" className="text-xs font-semibold uppercase tracking-wider text-white/60">
          {brandStatement.eyebrow}
        </Reveal>
        <Reveal as="h2" delay={80} className="mt-4 text-3xl tracking-tight lg:text-4xl">
          {brandStatement.headline}
        </Reveal>
        <Reveal as="p" delay={160} className="mt-4 text-white/70">
          {brandStatement.body}
        </Reveal>
      </Container>
    </section>
  );
}
