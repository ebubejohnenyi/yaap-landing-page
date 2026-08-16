import Container from "../ui/Container";
import { logos } from "../../data/content";

export default function LogoCloud() {
  return (
    <section className="border-y border-ink-900/5 py-10">
      <Container className="flex flex-wrap items-center justify-between gap-8 text-ink-400">
        {logos.map((name) => (
          <span key={name} className="text-lg font-semibold tracking-tight opacity-70">
            {name}
          </span>
        ))}
      </Container>
    </section>
  );
}
