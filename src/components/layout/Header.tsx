import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Resources", href: "#resources" },
  { label: "Subjects", href: "#subjects" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Community", href: "#community" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary/5 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#resources"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5 lg:inline-block"
          >
            Browse
          </Link>
          <Link
            href="#community"
            className="group inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-primary-light px-4 py-2.5 text-sm font-semibold text-gold-glow shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 sm:px-5"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-primary md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
