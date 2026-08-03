import Image from "next/image";
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
    <Link href="/" className="group flex items-center gap-4">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-md transition-transform group-hover:scale-105">
        <Image
          src="/logo.png"
          alt="MAKAUT Students Logo"
          width={64}
          height={64}
          className="h-full w-full object-cover"
          priority
        />
      </div>
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
