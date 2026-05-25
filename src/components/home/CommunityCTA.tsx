import Link from "next/link";
import {
  ArrowRight,
  Upload,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

const programs = ["B.Tech", "BCA / MCA", "BBA / MBA", "Diploma", "All semesters"];

export default function CommunityCTA() {
  return (
    <section id="community" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-primary via-primary-light to-surface-mid px-8 py-14 text-center text-white shadow-2xl shadow-primary/30 sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-indigo-400/10 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full bg-gold/15 p-3 ring-1 ring-gold/30">
              <GraduationCap className="h-7 w-7 text-gold-glow" />
            </span>
            <h2 className="font-display mt-6 text-3xl font-extrabold sm:text-4xl">
              Join the MAKAUT community on{" "}
              <span className="gold-text-gradient">makautstudents.help</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/65">
              Got notes from last semester? Solved a tough PYQ? Share it publicly
              and help thousands of students across affiliated colleges.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#resources"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-accent-light px-8 py-3.5 text-base font-bold text-surface-dark shadow-lg shadow-gold/25 transition-all hover:shadow-gold/40"
              >
                Start Exploring
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-white/10"
              >
                <Upload className="h-5 w-5 text-gold-glow" />
                Contribute Material
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {programs.map((program) => (
                <span
                  key={program}
                  className="inline-flex items-center gap-1.5 text-sm text-white/55"
                >
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  {program}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
