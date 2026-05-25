import Image from "next/image";
import { BookOpen, Star } from "lucide-react";

export default function HeroImage() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
      {/* Gold glow — contained, no top overflow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#c9a84c]/20 via-transparent to-[#2e3a78]/15 blur-2xl" />

      {/* Image frame */}
      <div className="relative overflow-hidden rounded-3xl border border-[#c9a84c]/25 shadow-2xl shadow-black/50 ring-1 ring-white/10">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=85"
          alt="MAKAUT students studying together"
          width={800}
          height={1000}
          priority
          className="h-auto w-full max-h-[340px] object-cover object-center sm:max-h-[380px] lg:max-h-[420px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c14] via-[#0a0c14]/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <p className="font-display text-lg font-bold text-white sm:text-xl">
            Learn together. Grow together.
          </p>
          <p className="mt-1 text-sm text-white/60">
            Resources for every MAKAUT branch
          </p>
        </div>
      </div>

      <div className="absolute left-0 top-4 z-10 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#12152a]/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:left-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c9a84c]/20">
          <BookOpen className="h-4 w-4 text-[#e8d48b]" />
        </div>
        <div>
          <p className="text-xs text-white/50">Free access</p>
          <p className="text-sm font-bold text-white">500+ Materials</p>
        </div>
      </div>

      <div className="absolute bottom-16 right-0 z-10 flex items-center gap-2 rounded-2xl border border-[#c9a84c]/30 bg-[#12152a]/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:right-2">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star
              key={n}
              className="h-3.5 w-3.5 fill-[#e8d48b] text-[#e8d48b]"
            />
          ))}
        </div>
        <p className="text-sm font-semibold text-[#e8d48b]">10K+ students</p>
      </div>
    </div>
  );
}
