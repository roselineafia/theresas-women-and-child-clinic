"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/data/faqs";
import { cn } from "@/lib/cn";

export function FaqAccordion({ items, label = "Questions" }: { items: FaqItem[]; label?: string }) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const open = openId === item.id;
        const buttonId = `${baseId}-${item.id}-button`;
        const panelId = `${baseId}-${item.id}-panel`;
        return (
          <div key={item.id} className="overflow-hidden rounded-3xl border border-line bg-white">
            <h3 className="font-sans text-base">
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-extrabold text-ink"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                {item.question}
                <span aria-hidden="true" className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full bg-plum-soft text-plum", open && "bg-yellow")}>
                  {open ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open} className="px-5 pb-5 text-base leading-relaxed text-muted">
              {item.answer}
            </div>
          </div>
        );
      })}
      <p className="sr-only">{label}</p>
    </div>
  );
}
