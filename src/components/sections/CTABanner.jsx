import { Sparkles, MessageCircle } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { ctaBanner } from "../../data/content";

export default function CTABanner() {
  return (
    <section className="py-10">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl bg-brand-800 px-8 py-16 text-white lg:px-16">
          <Sparkles
            className="animate-float absolute right-16 top-10 h-10 w-10 text-white/40"
            strokeWidth={1}
          />
          <Sparkles
            className="animate-float absolute right-28 top-24 h-6 w-6 text-white/30"
            style={{ animationDelay: "1.2s" }}
            strokeWidth={1}
          />

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="max-w-lg text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                {ctaBanner.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl leading-tight tracking-tight lg:text-4xl">
                {ctaBanner.headline[0]}{" "}
                <span className="font-serif italic font-normal">{ctaBanner.headline[1]}</span>
              </h2>
              <p className="mt-4 text-white/70">{ctaBanner.body}</p>
              <Button variant="light" className="mt-8">
                {ctaBanner.ctaLabel}
              </Button>
            </div>

            <div className="flex aspect-square w-40 items-center justify-center rounded-full bg-white/10 lg:w-52">
              <MessageCircle className="h-16 w-16 text-white/70" strokeWidth={1} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
