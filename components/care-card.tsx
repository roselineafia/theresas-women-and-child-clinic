import Link from "next/link";
import { cn } from "@/lib/cn";
import { TopicGlyph } from "@/components/icons";
import type { CareTopic } from "@/data/women-services";

export function CareCard({
  topic,
  href,
  tone,
}: {
  topic: CareTopic;
  href: string;
  tone: "women" | "children";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col rounded-[1.7rem] border bg-white p-6 shadow-card transition duration-200 hover:-translate-y-0.5",
        tone === "women" ? "border-blush/80" : "border-sky",
      )}
    >
      <TopicGlyph id={topic.id} tone={tone} />
      <h3 className={cn("mt-5 text-2xl", tone === "women" ? "text-plum" : "text-teal-deep")}>{topic.title}</h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-muted">{topic.summary}</p>
      <span className="mt-5 text-sm font-extrabold text-plum underline decoration-coral decoration-2 underline-offset-4 group-hover:decoration-teal">
        Learn more
      </span>
    </Link>
  );
}
