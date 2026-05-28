import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { nav } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold tracking-tight">Malin</span>
              <span className="font-display text-2xl font-light tracking-tight text-muted-foreground">
                Group
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Integrated engineering, manufacturing and marine operations for the most
              complex projects across defence, nuclear, energy and infrastructure.
            </p>
            <div className="mt-6 flex gap-4">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Social link"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-xs text-muted-foreground">Sitemap</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-xs text-muted-foreground">Location</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>Westway Park</li>
              <li>Porterfield Road, Renfrew</li>
              <li>Glasgow, Scotland</li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-xs text-muted-foreground">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+441419999999" className="transition-colors hover:text-foreground">
                  +44 (0)141 999 9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:enquiries@malin.example"
                  className="transition-colors hover:text-foreground"
                >
                  enquiries@malin.example
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Malin Group. All rights reserved.</p>
          <a href="#" className="transition-colors hover:text-foreground">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
}