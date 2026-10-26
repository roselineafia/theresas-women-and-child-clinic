"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/logo";
import { BrandStripe } from "@/components/brand-stripe";
import { ButtonLink } from "@/components/button";
import { MobileNavigation } from "@/components/mobile-navigation";
import { WhatsAppIcon } from "@/components/whatsapp-link";
import { siteConfig } from "@/data/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
          {mainNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-2.5 py-2 text-sm font-extrabold",
                  item.kids
                    ? "bg-yellow text-ink hover:bg-yellow-deep"
                    : active
                      ? "text-plum underline decoration-coral decoration-2 underline-offset-8"
                      : "text-ink/80 hover:bg-white hover:text-plum",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#075E54] text-white hover:bg-[#054940]"
            aria-label={`WhatsApp ${siteConfig.contact.whatsapp}`}
          >
            <WhatsAppIcon />
          </a>
          <ButtonLink href="/contact#enquiry" className="hidden px-4 sm:inline-flex xl:px-5">
            <span className="xl:hidden">Appointment</span>
            <span className="hidden xl:inline">Request an appointment</span>
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-plum xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      <BrandStripe />
      <MobileNavigation open={open} pathname={pathname} onClose={close} />
    </header>
  );
}
