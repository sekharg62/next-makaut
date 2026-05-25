import {
  BookOpen,
  FileText,
  ListChecks,
  Target,
  MessageCircle,
  Unlock,
  type LucideIcon,
} from "lucide-react";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: BookOpen,
    title: "Study Notes",
    description:
      "Semester-wise notes from seniors and toppers — curated, readable, and free to download.",
  },
  {
    icon: FileText,
    title: "Previous Year Papers",
    description:
      "PYQs with solutions for B.Tech, BCA, MCA, and more — know what examiners actually ask.",
  },
  {
    icon: ListChecks,
    title: "Syllabus & Curriculum",
    description:
      "Official syllabus breakdowns by branch and semester so you never study the wrong topic.",
  },
  {
    icon: Target,
    title: "Exam Prep Guides",
    description:
      "Important questions, unit-wise summaries, and last-minute revision checklists.",
  },
  {
    icon: MessageCircle,
    title: "Peer Community",
    description:
      "Ask doubts, share tips, and help fellow MAKAUT students — learning is better together.",
  },
  {
    icon: Unlock,
    title: "Always Public",
    description:
      "Everything is openly accessible. No subscription, no hidden content — education for all.",
  },
];

export default function Features() {
  return (
    <section id="resources" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            What you get
          </p>
          <h2 className="font-display mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            Everything a MAKAUT student needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            From first semester to final year — premium-quality resources on{" "}
            <span className="font-semibold text-primary">makautstudents.help</span>
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="premium-card group rounded-2xl border border-border p-7 transition-all"
            >
              <span className="inline-flex rounded-xl bg-gradient-to-br from-primary/8 to-primary/4 p-3 ring-1 ring-gold/20">
                <feature.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
              </span>
              <h3 className="font-display mt-5 text-lg font-bold text-foreground group-hover:text-primary">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
