import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  FileText,
  ListChecks,
  MessageCircle,
  Users,
  Layers,
  ShieldCheck,
} from "lucide-react";
import HeroImage from "./HeroImage";

const stats = [
  { value: "500+", label: "Materials", icon: BookOpen },
  { value: "50+", label: "Subjects", icon: Layers },
  { value: "10K+", label: "Students", icon: Users },
  { value: "100%", label: "Free", icon: ShieldCheck },
];

const quickAccess = [
  {
    icon: BookOpen,
    title: "Study Notes",
    desc: "Semester-wise notes from toppers",
    href: "#resources",
  },
  {
    icon: FileText,
    title: "PYQ Papers",
    desc: "Previous year Qs with solutions",
    href: "#resources",
  },
  {
    icon: ListChecks,
    title: "Syllabus",
    desc: "Branch & semester breakdowns",
    href: "#subjects",
  },
  {
    icon: MessageCircle,
    title: "Community",
    desc: "Ask doubts, share & learn",
    href: "#community",
  },
];

const subjects = [
  "B.Tech CSE",
  "ECE",
  "Mechanical",
  "BCA / MCA",
  "BBA / MBA",
  "DBMS",
  "Data Structures",
  "Operating Systems",
  "Digital Logic",
  "Thermodynamics",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a0c14] text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 55% at 30% -10%, rgba(201, 168, 76, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 55% 50% at 100% 20%, rgba(46, 58, 120, 0.4) 0%, transparent 55%),
            linear-gradient(180deg, #0f1222 0%, #0a0c14 60%, #080a10 100%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201, 168, 76, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 168, 76, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Top: copy left + image right — vertically centered */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
          <div className="flex w-full flex-col justify-center gap-5 text-left lg:w-[48%] lg:shrink-0">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-4 py-2 text-sm backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#e8d48b]" />
              <span className="text-[#e8d48b]">makautstudents.help</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Free educational help for{" "}
              <span className="bg-gradient-to-br from-[#e8d48b] via-[#c9a84c] to-[#dbb94a] bg-clip-text text-transparent">
                MAKAUT
              </span>{" "}
              students
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
              Notes, PYQs, syllabus guides &amp; peer support — all public on{" "}
              <span className="font-semibold text-[#e8d48b]">
                makautstudents.help
              </span>
              . No paywalls, no gatekeeping.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#resources"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#dbb94a] px-7 py-3.5 text-base font-bold text-[#0a0c14] shadow-xl shadow-[#c9a84c]/25 transition-all hover:shadow-[#c9a84c]/40"
              >
                Explore Resources
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold backdrop-blur-sm transition-all hover:border-[#c9a84c]/40 hover:bg-white/10"
              >
                How it works
              </Link>
            </div>

            {/* Trust avatars row */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
                ].map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-[#0a0c14] object-cover"
                    aria-hidden={i > 0}
                  />
                ))}
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0a0c14] bg-[#c9a84c]/20 text-xs font-bold text-[#e8d48b]">
                  +10K
                </span>
              </div>
              <p className="text-sm text-white/55">
                <span className="font-semibold text-white">10,000+</span> students
                already learning
              </p>
            </div>
          </div>

          <div className="flex w-full items-center justify-center lg:w-[48%]">
            <HeroImage />
          </div>
        </div>

        {/* Full-width stats bar */}
        <div className="mt-14 grid grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm sm:grid-cols-4 sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-center gap-3 px-4 py-5 sm:py-6"
            >
              <stat.icon className="h-5 w-5 shrink-0 text-[#c9a84c]" />
              <div>
                <p className="font-display text-xl font-bold text-[#e8d48b]">
                  {stat.value}
                </p>
                <p className="text-xs text-white/50">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bento quick-access */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickAccess.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-5 transition-all hover:border-[#c9a84c]/35 hover:bg-white/[0.08]"
            >
              <span className="inline-flex rounded-xl bg-[#c9a84c]/15 p-2.5 ring-1 ring-[#c9a84c]/25 transition-colors group-hover:bg-[#c9a84c]/25">
                <item.icon className="h-5 w-5 text-[#e8d48b]" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-white/50">{item.desc}</p>
            </Link>
          ))}
        </div>

        {/* Subject marquee */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#12152a]/80 py-4">
          <div className="flex animate-marquee gap-3 whitespace-nowrap">
            {[...subjects, ...subjects].map((subject, i) => (
              <span
                key={`${subject}-${i}`}
                className="inline-flex shrink-0 items-center rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/10 px-4 py-1.5 text-sm font-medium text-[#e8d48b]"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
