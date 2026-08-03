import Link from "next/link";
import { ArrowRight, BookOpen, Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative isolate flex flex-1 items-center overflow-hidden bg-[#0a0c14] text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 55% at 30% -10%, rgba(201, 168, 76, 0.18) 0%, transparent 50%),
            radial-gradient(ellipse 55% 50% at 100% 30%, rgba(46, 58, 120, 0.35) 0%, transparent 55%),
            linear-gradient(180deg, #0f1222 0%, #0a0c14 60%, #080a10 100%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201, 168, 76, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 168, 76, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <span className="inline-flex rounded-full bg-gold/15 p-3 ring-1 ring-gold/30">
          <SearchX className="h-7 w-7 text-gold-glow" aria-hidden />
        </span>

        <p className="font-display mt-8 text-7xl font-extrabold tracking-tight text-gold-glow sm:text-8xl">
          404
        </p>

        <h1 className="font-display mt-4 text-3xl font-extrabold sm:text-4xl">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-base text-white/65 sm:text-lg">
          That route isn’t on makautstudents.help. The notes, PYQs, and guides
          you’re looking for are still one click away.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-accent-light px-7 py-3.5 text-sm font-bold text-surface-dark shadow-lg shadow-gold/25 transition-all hover:shadow-gold/40"
          >
            <Home className="h-4 w-4" aria-hidden />
            Back to home
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
          <Link
            href="/#resources"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-white/10"
          >
            <BookOpen className="h-4 w-4 text-gold-glow" aria-hidden />
            Browse resources
          </Link>
        </div>
      </div>
    </section>
  );
}
