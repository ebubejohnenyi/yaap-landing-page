import Container from "../ui/Container";
import { footer } from "../../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/5 py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="grid grid-cols-2 gap-8 text-left sm:grid-cols-4">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-ink-900">{col.title}</h4>
                <ul className="mt-4 space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-ink-400 hover:text-ink-900">
                        {link}
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
            <address className="mt-3 text-sm not-italic text-ink-400">
              {footer.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink-900/5 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.legalLinks.map((link) => (
              <a key={link} href="#" className="hover:text-ink-900">
                {link}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
