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
            Sign Up
          </a>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-ink-900/5 md:hidden">
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
              Sign Up
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
