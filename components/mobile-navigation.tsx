"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/button";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function MobileNavigation({
  open,
  pathname,
  onClose,
}: {
  open: boolean;
  pathname: string;
  onClose: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !containerRef.current) return;
      const focusable = containerRef.current.querySelectorAll<HTMLElement>("a, button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 xl:hidden">
      <button type="button" className="absolute inset-0 bg-plum-deep/45" aria-label="Close menu" onClick={onClose} />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className="absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col bg-cream shadow-soft"
      >
        <div className="flex items-center justify-between px-5 py-4">
          <p className="font-display text-2xl text-plum">Menu</p>
          <button
            ref={closeRef}
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-plum"
            onClick={onClose}
          >
            <span className="sr-only">Close menu</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile" className="flex-1 space-y-1 overflow-y-auto px-4 pb-6">
          {mainNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={onClose}
                className={cn(
                  "flex min-h-12 items-center rounded-2xl px-4 text-lg font-extrabold",
                  item.kids ? "bg-yellow text-ink" : active ? "bg-plum-soft text-plum" : "text-ink hover:bg-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <ButtonLink href="/contact#enquiry" className="mt-4 w-full" onClick={onClose}>
            Request an appointment
          </ButtonLink>
          <WhatsAppLink className="mt-3 w-full" showNumber onClick={onClose} />
        </nav>
      </div>
    </div>
  );
}
