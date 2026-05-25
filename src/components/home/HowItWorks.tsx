import { Compass, Filter, Share2, type LucideIcon } from "lucide-react";

const steps: {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "Browse freely",
    description:
      "Visit makautstudents.help and explore notes, PYQs, and guides — no account needed.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Find your semester",
    description:
      "Filter by branch, semester, and subject to match your exact syllabus.",
    icon: Filter,
  },
  {
    step: "03",
    title: "Study & share",
    description:
      "Download materials, discuss with peers, and upload notes for the next batch.",
    icon: Share2,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Simple process
          </p>
          <h2 className="font-display mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            How it works
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((item) => (
            <li
              key={item.step}
              className="premium-card relative rounded-2xl border border-border p-8 text-center md:text-left"
            >
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light font-display text-sm font-bold text-gold-glow">
                  {item.step}
                </span>
                <span className="inline-flex rounded-xl bg-gold/10 p-2.5 ring-1 ring-gold/25">
                  <item.icon className="h-5 w-5 text-accent" />
                </span>
              </div>
              <h3 className="font-display mt-6 text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
