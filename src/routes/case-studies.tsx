import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { caseStudies, images } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case studies — Malin Group" },
      {
        name: "description",
        content:
          "Selected projects across defence, nuclear, energy, marine and civil infrastructure — complex scopes delivered safely and successfully.",
      },
      { property: "og:title", content: "Case studies — Malin Group" },
      {
        property: "og:description",
        content: "Complex scopes delivered across defence, nuclear, energy and infrastructure.",
      },
      { property: "og:image", content: images.caseNuclear },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <div className="bg-background">
      <header className="mx-auto max-w-[1400px] px-6 pt-40 pb-20 lg:px-10 lg:pt-52">
        <p className="eyebrow text-xs text-brand">Case studies</p>
        <h1 className="display-xl mt-6 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
          Built on delivery.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          A selection of the complex programmes we have supported — where engineering
          discipline, marine capability and careful planning made the difference.
        </p>
      </header>

      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 pb-28 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-20 lg:px-10">
        {caseStudies.map((cs) => (
          <Reveal key={cs.slug}>
            <article className="group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 bg-ink/70 px-3 py-1 text-xs text-foreground backdrop-blur-sm">
                  {cs.sector}
                </span>
              </div>
              <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground/70">
                {cs.scope}
              </p>
              <h2 className="display-lg mt-2 text-2xl sm:text-3xl">{cs.title}</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{cs.summary}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <section className="mx-auto max-w-[1400px] px-6 pb-28 lg:px-10">
        <Link to="/contact" className="group inline-flex items-center gap-3 text-lg text-foreground">
          Discuss a similar project
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </div>
  );
}