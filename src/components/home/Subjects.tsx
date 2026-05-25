import {
  Cpu,
  Radio,
  Cog,
  Briefcase,
  ArrowRight,
  Building2,
  type LucideIcon,
} from "lucide-react";

const subjects: {
  branch: string;
  courses: string[];
  icon: LucideIcon;
  accent: string;
  iconBg: string;
}[] = [
  {
    branch: "Computer Science & Engineering",
    courses: ["Data Structures", "DBMS", "OS", "Networks", "AI/ML"],
    icon: Cpu,
    accent: "border-indigo-200/80",
    iconBg: "bg-indigo-50 text-indigo-600",
  },
  {
    branch: "Electronics & Communication",
    courses: ["Analog Circuits", "Digital Logic", "Signals", "VLSI"],
    icon: Radio,
    accent: "border-violet-200/80",
    iconBg: "bg-violet-50 text-violet-600",
  },
  {
    branch: "Mechanical Engineering",
    courses: ["Thermodynamics", "SOM", "Machine Design", "Fluid Mechanics"],
    icon: Cog,
    accent: "border-amber-200/80",
    iconBg: "bg-amber-50 text-amber-700",
  },
  {
    branch: "BCA / MCA / Management",
    courses: ["Programming", "Web Dev", "Statistics", "Business Studies"],
    icon: Briefcase,
    accent: "border-emerald-200/80",
    iconBg: "bg-emerald-50 text-emerald-700",
  },
];

export default function Subjects() {
  return (
    <section
      id="subjects"
      className="border-y border-border bg-gradient-to-b from-card to-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Popular branches
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
              Browse by subject
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Resources organized by department and semester on makautstudents.help
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-primary">
            <Building2 className="h-4 w-4 text-accent" />
            20+ affiliated colleges
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {subjects.map((subject) => (
            <article
              key={subject.branch}
              className={`premium-card rounded-2xl border bg-card p-6 ${subject.accent}`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`inline-flex rounded-xl p-3 ${subject.iconBg}`}
                >
                  <subject.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {subject.branch}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {subject.courses.map((course) => (
                      <li
                        key={course}
                        className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground/80"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-primary"
                  >
                    View all materials
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
