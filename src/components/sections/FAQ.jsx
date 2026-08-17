import { useState } from "react";
import { Plus } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { faq } from "../../data/content";

export default function FAQ() {
  const defaultIndex = faq.items.findIndex((item) => item.defaultOpen);
  const [openIndex, setOpenIndex] = useState(defaultIndex >= 0 ? defaultIndex : null);

  return (
    <section className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div className="text-left">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            {faq.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-4 text-3xl tracking-tight text-ink-900 lg:text-4xl">
            {faq.headline}
          </Reveal>
        </div>

        <Reveal delay={120}>
          {faq.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="border-b border-ink-900/10 py-5">
                <button
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="text-base font-medium text-ink-900">{item.q}</span>
                  <Plus
                    className={`h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300 ${
                      open ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="max-w-xl overflow-hidden text-sm text-ink-600">{item.a}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
