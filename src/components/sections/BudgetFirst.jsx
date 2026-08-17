import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { budgetFirst } from "../../data/content";

export default function BudgetFirst() {
  return (
    <section className="py-20">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            {budgetFirst.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl tracking-tight text-ink-900 lg:text-4xl">
            {budgetFirst.headline}
          </h2>
          <p className="mt-4 max-w-md text-ink-600">{budgetFirst.body}</p>
        </Reveal>

        <Reveal delay={150} className="rounded-3xl bg-cream-100 p-6 sm:p-8">
          <div className="flex flex-col gap-3">
            {budgetFirst.chat.map((message, i) => {
              const isUser = message.from === "user";
              return (
                <div key={i} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                      isUser
                        ? "rounded-br-sm bg-brand-700 text-white"
                        : "rounded-bl-sm bg-white text-ink-900 shadow-sm shadow-black/5"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
