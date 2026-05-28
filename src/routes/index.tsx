import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ProgressRail } from "@/components/site/ProgressRail";
import { ContactForm } from "@/components/site/ContactForm";
import { capabilities, sectors, caseStudies, images } from "@/lib/site-data";
import logoGch from "@/assets/malin/logo-gch.png";
import logoNozero from "@/assets/malin/logo-nozero.png";
import logoMakeuk from "@/assets/malin/logo-makeuk.png";
import logoCrossbasket from "@/assets/malin/logo-crossbasket.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Malin Group — Trusted engineering solutions" },
      {
        name: "description",
        content:
          "Complex marine projects demand engineering, manufacturing and operational support you can rely on. Malin Group delivers integrated engineering across defence, nuclear, energy and infrastructure.",
      },
      { property: "og:title", content: "Malin Group — Trusted engineering solutions" },
      {
        property: "og:description",
        content:
          "Integrated engineering, manufacturing and marine operations for the most complex projects.",
      },
      { property: "og:image", content: images.heroOffshore },
    ],
  }),
  component: Index,
});

const railSections = [
  { id: "hero", label: "Introduction" },
  { id: "capabilities", label: "What we do" },
  { id: "work", label: "Selected work" },
  { id: "outcomes", label: "Why it matters" },
  { id: "sectors", label: "Sectors" },
  { id: "ethos", label: "Our ethos" },
  { id: "contact", label: "Contact" },
];

function Index() {
  return (
    <div className="bg-background">
      <ProgressRail sections={railSections} />

      {/* 01 — HERO */}
      <section id="hero" className="relative flex min-h-screen flex-col justify-end overflow-hidden">
        <img
          src={images.heroOffshore}
          alt="A Malin Group marine spread supporting an offshore structure at sea"
          width={2400}
          height={1350}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow mb-6 text-xs text-brand">Marine engineering, since 1930s</p>
          <h1 className="display-xl max-w-4xl text-5xl text-foreground sm:text-7xl lg:text-8xl">
            Engineering<br />innovation
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Complex marine projects demand engineering, manufacturing and operational
            support you can rely on. We bring it together in one place.
          </p>
          <div className="mt-10 flex items-center gap-8">
            <a
              href="#capabilities"
              className="group inline-flex items-center gap-3 text-sm text-foreground"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors group-hover:border-brand group-hover:text-brand">
                <ArrowDown className="h-4 w-4" />
              </span>
              Explore what we do
            </a>
          </div>
        </div>
      </section>

      {/* 02 — CAPABILITIES */}
      <section id="capabilities" className="relative py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-xs text-brand">What we do</p>
            <h2 className="display-lg mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Everything required to deliver complex projects, in one place.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Instead of managing multiple suppliers and the risk between them, you draw on
              integrated capability across five disciplines — each one able to stand alone,
              and far stronger together.
            </p>
          </Reveal>

          <div className="mt-20 space-y-px">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.slug}>
                <Link
                  to="/services"
                  className="group grid items-stretch gap-0 border-t border-border last:border-b lg:grid-cols-[auto_1fr_1.1fr]"
                >
                  <div className="flex items-start py-8 pr-8 lg:py-12">
                    <span className="font-display text-sm tabular-nums text-muted-foreground/60">
                      {cap.index}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center py-2 pr-8 lg:py-12">
                    <h3 className="display-lg text-2xl transition-colors group-hover:text-brand sm:text-3xl">
                      {cap.title}
                    </h3>
                    <p className="mt-4 max-w-md text-muted-foreground">{cap.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                  <div className="relative mt-4 aspect-[16/10] overflow-hidden lg:mb-8 lg:mt-8">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — SELECTED WORK */}
      <section id="work" className="relative bg-ink py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-xs text-brand">Selected work</p>
              <h2 className="display-lg mt-6 text-4xl sm:text-5xl lg:text-6xl">
                Proof, not promises.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                From naval vessel programmes to major energy and civil projects, our
                experience is built on delivering complex scopes, across sectors, safely.
              </p>
            </div>
            <Link
              to="/case-studies"
              className="group inline-flex shrink-0 items-center gap-2 text-sm text-foreground"
            >
              All case studies
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((cs) => (
              <Reveal key={cs.slug}>
                <Link to="/case-studies" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 bg-ink/70 px-3 py-1 text-xs text-foreground backdrop-blur-sm">
                      {cs.sector}
                    </span>
                  </div>
                  <h3 className="display-lg mt-6 text-2xl transition-colors group-hover:text-brand">
                    {cs.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground/70">
                    {cs.scope}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {cs.summary}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — OUTCOMES (full-bleed) */}
      <section id="outcomes" className="relative flex min-h-[90vh] items-center overflow-hidden">
        <img
          src={images.inspection}
          alt="A Malin Group engineer inspecting a fabricated steel structure"
          width={2400}
          height={1600}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 py-28 lg:px-10">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-xs text-brand">Why it matters</p>
            <h2 className="display-lg mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Reduce risk. Simplify delivery. Improve outcomes.
            </h2>
            <ul className="mt-10 space-y-5">
              {[
                "Reduce supplier complexity and coordination risk",
                "Identify challenges earlier and avoid costly delays",
                "Ensure compliance in highly regulated environments",
                "Deliver projects with greater confidence and control",
              ].map((point) => (
                <li key={point} className="flex items-start gap-4 text-lg text-foreground/90">
                  <span className="mt-2.5 h-px w-6 shrink-0 bg-brand" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 05 — SECTORS */}
      <section id="sectors" className="relative py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-xs text-brand">Sectors</p>
            <h2 className="display-lg mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Supporting critical programmes across regulated sectors.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden border border-border sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <Link
                key={sector.slug}
                to="/sectors"
                className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden bg-ink p-7"
              >
                <img
                  src={sector.image}
                  alt={sector.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="relative">
                  <h3 className="display-lg text-2xl text-foreground">{sector.name}</h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {sector.blurb}
                  </p>
                </div>
              </Link>
            ))}
            <Link
              to="/sectors"
              className="group flex aspect-[4/3] flex-col justify-between bg-surface p-7"
            >
              <span className="eyebrow text-xs text-muted-foreground">Explore</span>
              <span className="inline-flex items-center gap-3 font-display text-2xl">
                Your sector
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 06 — ETHOS */}
      <section id="ethos" className="relative bg-ink py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="eyebrow text-xs text-brand">Our ethos</p>
              <h2 className="display-lg mt-6 text-3xl sm:text-4xl lg:text-5xl">
                Community is built into how we work.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                Our people take time to be involved with STEM activities in schools and
                colleges, engage with young engineers through the Malin Young Engineers
                programme, and support a range of charities and community organisations.
              </p>
              <Link
                to="/about"
                className="group mt-10 inline-flex items-center gap-2 text-sm text-foreground"
              >
                More about Malin
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={images.caseShipyard}
                  alt="A major shipyard quayside operation supported by Malin Group"
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
        </div>
      </section>

      {/* 07 — CONTACT */}
      <section id="contact" className="relative py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <Reveal>
              <p className="eyebrow text-xs text-brand">Start a conversation</p>
              <h2 className="display-lg mt-6 text-4xl sm:text-5xl lg:text-6xl">
                Tell us what you're planning.
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                Most enquiries begin long before a project is firm. Whether you need early
                engineering input or a full design-and-build partner, getting us involved
                early consistently reduces cost and programme.
              </p>
              <div className="mt-12 space-y-6 border-t border-border pt-10">
                <div>
                  <p className="eyebrow text-xs text-muted-foreground">Call</p>
                  <a href="tel:+441419999999" className="mt-2 block text-lg hover:text-brand">
                    +44 (0)141 999 9999
                  </a>
                </div>
                <div>
                  <p className="eyebrow text-xs text-muted-foreground">Email</p>
                  <a
                    href="mailto:enquiries@malin.example"
                    className="mt-2 block text-lg hover:text-brand"
                  >
                    enquiries@malin.example
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
