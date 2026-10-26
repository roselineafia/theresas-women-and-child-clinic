import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/data/site-config";

export function Emblem({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-12 w-12", className)} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#FFF8FC" />
      <circle cx="32" cy="32" r="30" fill="none" stroke="#7A2E9B" strokeWidth="2.4" />
      <path d="M18 42c2-12 8-18 14-18" fill="none" stroke="#7A2E9B" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M46 42c-2-12-8-18-14-18" fill="none" stroke="#1B7A46" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M32 46V31" stroke="#1B7A46" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M32 35c-5-1-8-6-7-10 4 1 6.2 4.6 7 10Z" fill="#3DBE78" />
      <path d="M32 36.5c5-.8 8.5-5 7.4-10-4 1-6.6 4.4-7.4 10Z" fill="#FF7EB3" />
      <circle cx="46" cy="16" r="3.4" fill="#FFE566" />
    </svg>
  );
}

export function Logo({ tone = "dark", compact = false }: { tone?: "dark" | "light"; compact?: boolean }) {
  const title = tone === "light" ? "text-white" : "text-plum";
  const subtitle = tone === "light" ? "text-yellow" : "text-teal-deep";

  return (
    <Link href="/" className="flex min-w-0 items-center gap-2.5 rounded-2xl" aria-label={`${siteConfig.name} home`}>
      <Emblem className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" />
      <span className="min-w-0 leading-none">
        <span className={cn("block font-display text-[1.35rem] font-semibold tracking-tight sm:text-2xl", title)}>
          Theresa’s
        </span>
        <span className={cn("mt-1 block text-[0.68rem] font-extrabold uppercase tracking-[0.14em] sm:text-[0.72rem]", subtitle, compact && "max-w-[9.5rem]")}>
          Women and Child Clinic
        </span>
      </span>
    </Link>
  );
}
