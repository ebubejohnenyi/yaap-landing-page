import { useState } from "react";
import { Plus, X } from "lucide-react";
import Container from "../ui/Container";
import { faq } from "../../data/content";

export default function FAQ() {
  const defaultIndex = faq.items.findIndex((item) => item.defaultOpen);
  const [openIndex, setOpenIndex] = useState(defaultIndex >= 0 ? defaultIndex : null);

  return (
    <section className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div className="text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            {faq.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl tracking-tight text-ink-900 lg:text-4xl">
            {faq.headline}
          </h2>
        </div>

        <div>
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
                  {open ? (
                    <X className="h-4 w-4 shrink-0 text-ink-400" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-ink-400" />
                  )}
                </button>
                {open && <p className="mt-3 max-w-xl text-sm text-ink-600">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
