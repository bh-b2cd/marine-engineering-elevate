import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell us a little about the project").max(2000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const values = {
      name: String(form.get("name") ?? ""),
      company: String(form.get("company") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    };
    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-sm border border-border bg-surface/60 p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/15 text-brand">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="display-lg text-2xl">Thank you — message received.</h3>
        <p className="max-w-md text-muted-foreground">
          A member of our engineering team will be in touch shortly. For urgent enquiries,
          please call our Glasgow office directly.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full border-0 border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow text-xs text-muted-foreground">
            Name
          </label>
          <input id="name" name="name" type="text" className={fieldClass} placeholder="Your name" />
          {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="eyebrow text-xs text-muted-foreground">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className={fieldClass}
            placeholder="Organisation"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="eyebrow text-xs text-muted-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={fieldClass}
          placeholder="you@company.com"
        />
        {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="eyebrow text-xs text-muted-foreground">
          About your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${fieldClass} resize-none`}
          placeholder="A few lines on what you are planning, and the challenge you are facing."
        />
        {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="group inline-flex items-center gap-3 bg-brand px-8 py-4 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
      >
        Send your enquiry
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}