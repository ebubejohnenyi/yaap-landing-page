import { CheckCheck, MessageCircle } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { hero } from "../../data/content";

function ChatBubble({ message, delay }) {
  const isUser = message.from === "user";

  return (
    <div
      className={`animate-fade-in-up flex ${isUser ? "justify-end" : "justify-start"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
          isUser
            ? "rounded-br-sm bg-brand-700 text-white"
            : "rounded-bl-sm bg-white text-ink-900 shadow-sm shadow-black/5"
        }`}
      >
        <p>{message.text}</p>

        {message.options && (
          <ul className="mt-2 space-y-1 border-t border-ink-900/10 pt-2">
            {message.options.map((option) => (
              <li key={option} className="text-ink-600">
                • {option}
              </li>
            ))}
          </ul>
        )}

        {message.footer && <p className="mt-2 text-ink-600">{message.footer}</p>}

        {isUser && (
          <div className="mt-1 flex justify-end">
            <CheckCheck className="h-3.5 w-3.5 text-white/70" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const chatStartDelay = 500;
  const chatStagger = 350;

  return (
    <section className="pt-14 pb-20 lg:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Copy column */}
        <div className="text-left">
          <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-wider text-brand-600">
            {hero.eyebrow}
          </p>
          <h1
            className="animate-fade-in-up mt-4 text-5xl leading-[1.05] tracking-tight text-ink-900 lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            {hero.headline[0]}{" "}
            <span className="font-serif italic font-normal">{hero.headline[1]}</span>
          </h1>
          <p
            className="animate-fade-in-up mt-3 font-serif text-2xl italic text-brand-700"
            style={{ animationDelay: "140ms" }}
          >
            {hero.tagline}
          </p>
          <p
            className="animate-fade-in-up mt-6 max-w-md text-base text-ink-600"
            style={{ animationDelay: "220ms" }}
          >
            {hero.body}
          </p>

          <div
            className="animate-fade-in-up mt-8 flex flex-wrap items-center gap-6"
            style={{ animationDelay: "300ms" }}
          >
            <Button>{hero.ctaLabel}</Button>
            <a href="#how-it-works" className="text-sm font-medium text-ink-600 hover:text-ink-900">
              {hero.secondaryCtaLabel}
            </a>
          </div>
        </div>

        {/* Visual column — WhatsApp conversation mockup */}
        <div
          className="animate-fade-in-up rounded-3xl bg-cream-200 p-4 sm:p-6"
          style={{ animationDelay: "260ms" }}
        >
          <div className="flex items-center gap-2 border-b border-ink-900/10 pb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-800 text-white">
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-900">Yaap</p>
              <p className="text-xs text-ink-400">Online on WhatsApp</p>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {hero.chat.map((message, i) => (
              <ChatBubble key={i} message={message} delay={chatStartDelay + i * chatStagger} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
