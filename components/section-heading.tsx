import { cn } from "@/lib/cn";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "plum",
  as: Tag = "h2",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "plum" | "teal" | "white";
  as?: "h1" | "h2";
}) {
  const titleColor = tone === "white" ? "text-white" : tone === "teal" ? "text-teal-deep" : "text-plum";
  const bodyColor = tone === "white" ? "text-white/90" : "text-muted";
  const eyebrowColor = tone === "white" ? "text-yellow" : "text-teal-deep";

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className={cn("mb-3 text-xs font-extrabold uppercase tracking-[0.18em]", eyebrowColor)}>{eyebrow}</p>
      ) : null}
      <Tag id={id} className={cn("text-3xl leading-[1.15] sm:text-4xl lg:text-[2.7rem]", titleColor)}>
        {title}
      </Tag>
      {description ? <p className={cn("mt-4 text-lg leading-relaxed", bodyColor)}>{description}</p> : null}
    </div>
  );
}
