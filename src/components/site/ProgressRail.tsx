import { useEffect, useState } from "react";

type Section = { id: string; label: string };

export function ProgressRail({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-hidden
      className="pointer-events-none fixed left-8 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex flex-col gap-5">
        {sections.map((s, i) => (
          <li key={s.id} className="flex items-center gap-3">
            <span
              className={`h-px transition-all duration-500 ${
                i === active ? "w-8 bg-brand" : "w-4 bg-border"
              }`}
            />
            <span
              className={`font-display text-xs tabular-nums transition-colors duration-500 ${
                i === active ? "text-foreground" : "text-muted-foreground/50"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={`text-xs transition-all duration-500 ${
                i === active
                  ? "translate-x-0 text-muted-foreground opacity-100"
                  : "-translate-x-1 opacity-0"
              }`}
            >
              {s.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}