import { GraduationCap } from "lucide-react";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  showDomain?: boolean;
};

export default function Logo({
  variant = "dark",
  showDomain = true,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" className="group flex items-center gap-3">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-lg transition-transform group-hover:scale-105 ${
          isLight
            ? "bg-gradient-to-br from-gold to-accent text-surface-dark shadow-gold/20"
            : "bg-gradient-to-br from-primary to-primary-light text-gold shadow-primary/30"
        }`}
      >
        <GraduationCap className="h-5 w-5" strokeWidth={2.25} />
      </span>
      <div className="leading-tight">
        <span
          className={`font-display block text-sm font-bold tracking-tight sm:text-base ${
            isLight ? "text-white" : "text-primary"
          }`}
        >
          MAKAUT Students
        </span>
        {showDomain && (
          <span
            className={`block text-xs font-medium ${
              isLight ? "text-gold-glow/90" : "text-accent"
            }`}
          >
            makautstudents.help
          </span>
        )}
      </div>
    </Link>
  );
}
