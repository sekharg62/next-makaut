import Link from "next/link";
import {
  BookOpen,
  FileText,
  ListChecks,
  MessageCircle,
  Globe,
  Heart,
} from "lucide-react";
import Logo from "@/components/ui/Logo";

const exploreLinks = [
  { label: "Study Notes", href: "#resources", icon: BookOpen },
  { label: "Previous Year Papers", href: "#resources", icon: FileText },
  { label: "Syllabus & Curriculum", href: "#subjects", icon: ListChecks },
  { label: "Discussion Forum", href: "#community", icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Logo variant="light" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
              <span className="font-medium text-gold-glow">makautstudents.help</span>{" "}
              is a free, public platform for MAKAUT students — study materials,
              exam prep, and peer learning with no paywalls.
            </p>
            <a
              href="https://makautstudents.help"
              className="mt-4 inline-flex items-center gap-2 text-sm text-gold-glow/80 transition-colors hover:text-gold-glow"
            >
              <Globe className="h-4 w-4" />
              makautstudents.help
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-glow/70">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-gold-glow"
                  >
                    <link.icon className="h-4 w-4 text-gold/70" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-glow/70">
              About
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <Link href="#how-it-works" className="hover:text-gold-glow">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#community" className="hover:text-gold-glow">
                  Contribute
                </Link>
              </li>
              <li className="text-white/40">Not affiliated with MAKAUT</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} makautstudents.help — open for all
            students
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 fill-gold text-gold" /> for
            the MAKAUT community
          </p>
        </div>
      </div>
    </footer>
  );
}
