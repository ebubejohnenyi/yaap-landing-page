import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";
import { nav } from "../../data/content";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-ink-900/5 bg-white/80 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight text-brand-900">
          {nav.brand}
        </a>

        <nav className="hidden items-center gap-8 text-sm text-ink-600 md:flex">
          {nav.links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-ink-900">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#" className="text-sm font-medium text-ink-600 hover:text-ink-900">
            Login
          </a>
          <a
            href="#"
            className="rounded-full bg-brand-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-800"
          >
            {nav.ctaLabel}
          </a>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="relative block h-6 w-6">
            <Menu
              className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${
                mobileOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${
                mobileOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </span>
        </button>
      </Container>

      <div
        className={`grid overflow-hidden border-ink-900/5 transition-all duration-300 ease-out md:hidden ${
          mobileOpen ? "grid-rows-[1fr] border-t opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-4 py-6 text-sm text-ink-600">
            {nav.links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#">Login</a>
            <a
              href="#"
              className="w-fit rounded-full bg-brand-700 px-5 py-2.5 font-medium text-white"
            >
              {nav.ctaLabel}
            </a>
          </Container>
        </div>
      </div>
    </header>
  );
}
