import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Malin Group" },
      {
        name: "description",
        content:
          "Tell us what you're planning. Early engineering input consistently reduces cost and programme on complex marine projects.",
      },
      { property: "og:title", content: "Contact — Malin Group" },
      {
        property: "og:description",
        content: "Start a conversation with the Malin Group engineering team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-[1400px] px-6 pt-40 pb-28 lg:px-10 lg:pt-52">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow text-xs text-brand">Start a conversation</p>
            <h1 className="display-xl mt-6 text-5xl sm:text-6xl">
              Tell us what you're planning.
            </h1>
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
              <div>
                <p className="eyebrow text-xs text-muted-foreground">Visit</p>
                <p className="mt-2 text-lg">Westway Park, Porterfield Road, Renfrew, Glasgow</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}