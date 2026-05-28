import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { capabilities, images } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Malin Group" },
      {
        name: "description",
        content:
          "Engineering consultancy, heavy lift and transportation, specialist marine equipment, welding and manufacturing, and marine assets — integrated under one roof.",
      },
      { property: "og:title", content: "Services — Malin Group" },
      {
        property: "og:description",
        content: "Integrated engineering, manufacturing and marine capability under one roof.",
      },
      { property: "og:image", content: images.inspection },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="bg-background">
      <header className="mx-auto max-w-[1400px] px-6 pt-40 pb-20 lg:px-10 lg:pt-52">
        <p className="eyebrow text-xs text-brand">Services</p>
        <h1 className="display-xl mt-6 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
          Five disciplines. One accountable partner.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Each capability can stand alone — but the real value comes when they work
          together, removing the gaps and hand-offs where complex projects usually fail.
        </p>
      </header>

      <div className="space-y-px border-t border-border">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.slug}>
            <article
              id={cap.slug}
              className={`mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={cap.image}
                  alt={cap.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="font-display text-sm tabular-nums text-muted-foreground/60">
                  {cap.index}
                </span>
                <h2 className="display-lg mt-4 text-3xl sm:text-4xl">{cap.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-foreground/90">{cap.summary}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{cap.detail}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10">
        <Link to="/contact" className="group inline-flex items-center gap-3 text-lg text-foreground">
          Discuss your project
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </div>
  );
}