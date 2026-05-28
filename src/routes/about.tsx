import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/lib/site-data";
import logoGch from "@/assets/malin/logo-gch.png";
import logoNozero from "@/assets/malin/logo-nozero.png";
import logoMakeuk from "@/assets/malin/logo-makeuk.png";
import logoCrossbasket from "@/assets/malin/logo-crossbasket.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Malin Group" },
      {
        name: "description",
        content:
          "Malin Group brings together engineering, manufacturing and marine operations — with community and young engineers built into how we work.",
      },
      { property: "og:title", content: "About — Malin Group" },
      {
        property: "og:description",
        content: "Engineering, manufacturing and marine operations, with community at our core.",
      },
      { property: "og:image", content: images.caseShipyard },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-background">
      <header className="mx-auto max-w-[1400px] px-6 pt-40 pb-20 lg:px-10 lg:pt-52">
        <p className="eyebrow text-xs text-brand">About</p>
        <h1 className="display-xl mt-6 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
          Trusted engineering, built over generations.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Malin Group is an integrated engineering, manufacturing and marine operations
          business. We bring the full project lifecycle together so our clients can deliver
          their most complex programmes with confidence — reducing risk and removing the
          gaps where coordination usually fails.
        </p>
      </header>

      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={images.heavyTransport}
          alt="Malin Group heavy transport operation"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="display-lg text-3xl sm:text-4xl lg:text-5xl">
              Community is built into our culture.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Our people take time to be involved with STEM activities in schools and
              colleges, engage with young engineers through the Malin Young Engineers
              programme, and support a range of charities and community organisations across
              the regions where we operate.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={images.inspection}
                alt="A Malin Group engineer at work"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20 flex flex-wrap items-center gap-x-12 gap-y-8 border-t border-border pt-12">
          {[logoGch, logoMakeuk, logoCrossbasket, logoNozero].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Malin Group partner and accreditation"
              loading="lazy"
              className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </Reveal>

        <div className="mt-20">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-lg text-foreground"
          >
            Start a conversation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}