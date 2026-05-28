import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { sectors, images } from "@/lib/site-data";

export const Route = createFileRoute("/sectors")({
  head: () => ({
    meta: [
      { title: "Sectors — Malin Group" },
      {
        name: "description",
        content:
          "Defence, nuclear, renewable energy, oil & gas and civil infrastructure — experience built on delivering across the most regulated sectors.",
      },
      { property: "og:title", content: "Sectors — Malin Group" },
      {
        property: "og:description",
        content: "Experience across defence, nuclear, energy and civil infrastructure.",
      },
      { property: "og:image", content: images.sectorCivil },
    ],
  }),
  component: SectorsPage,
});

function SectorsPage() {
  return (
    <div className="bg-background">
      <header className="mx-auto max-w-[1400px] px-6 pt-40 pb-20 lg:px-10 lg:pt-52">
        <p className="eyebrow text-xs text-brand">Sectors</p>
        <h1 className="display-xl mt-6 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
          Where we work.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          The common thread across every sector we serve is complexity, regulation and the
          need for absolute reliability.
        </p>
      </header>

      <div className="border-t border-border">
        {sectors.map((sector, i) => (
          <Reveal key={sector.slug}>
            <article
              id={sector.slug}
              className={`mx-auto grid max-w-[1400px] items-center gap-10 border-b border-border px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="display-lg text-3xl sm:text-4xl">{sector.name}</h2>
                <p className="mt-6 text-lg leading-relaxed text-foreground/90">{sector.blurb}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{sector.detail}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10">
        <Link to="/contact" className="group inline-flex items-center gap-3 text-lg text-foreground">
          Discuss your sector
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </div>
  );
}