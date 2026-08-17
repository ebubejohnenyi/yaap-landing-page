import Container from "../ui/Container";
import { footer } from "../../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/5 py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="grid grid-cols-2 gap-8 text-left sm:grid-cols-3">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-ink-900">{col.title}</h4>
                <ul className="mt-4 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-ink-400 hover:text-ink-900">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-left lg:text-right">
            <p className="text-2xl font-semibold tracking-tight text-brand-900">
              {footer.brand}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-900/5 pt-6 text-xs text-ink-400">
          <p>{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
