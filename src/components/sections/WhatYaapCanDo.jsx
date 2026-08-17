import { Play } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { whatYaapCanDo } from "../../data/content";

const waveform = [6, 12, 8, 16, 10, 14, 7, 11];

function UserMessage({ chat }) {
  if (chat.userVoice) {
    return (
      <div className="ml-auto flex max-w-[80%] items-center gap-2 rounded-2xl rounded-br-sm bg-brand-700 px-3.5 py-2.5 text-white">
        <Play className="h-4 w-4 shrink-0 fill-current" strokeWidth={0} />
        <div className="flex items-center gap-0.5">
          {waveform.map((h, i) => (
            <span key={i} className="w-0.5 rounded-full bg-white/70" style={{ height: `${h}px` }} />
          ))}
        </div>
        <span className="text-xs text-white/80">{chat.userVoice}</span>
      </div>
    );
  }

  return (
    <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-brand-700 px-3.5 py-2 text-sm text-white">
      {chat.user}
    </div>
  );
}

export default function WhatYaapCanDo() {
  return (
    <section id="what-yaap-can-do" className="py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            {whatYaapCanDo.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-4 text-3xl tracking-tight text-ink-900 lg:text-4xl">
            {whatYaapCanDo.headline}
          </Reveal>
          <Reveal as="p" delay={160} className="mt-4 text-ink-600">
            {whatYaapCanDo.body}
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {whatYaapCanDo.cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 100}
              className="rounded-3xl bg-cream-100 p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-2">
                <UserMessage chat={card.chat} />
                <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white px-3.5 py-2 text-sm text-ink-900 shadow-sm shadow-black/5">
                  {card.chat.yaap}
                </div>
              </div>

              <h3 className="mt-6 text-lg font-medium text-ink-900">{card.title}</h3>
              <p className="mt-2 text-sm text-ink-600">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
