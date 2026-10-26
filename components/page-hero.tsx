import { cn } from "@/lib/cn";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";

const tones = {
  cream: "bg-cream",
  blush: "bg-gradient-to-br from-blush via-cream to-white",
  peach: "bg-gradient-to-br from-peach via-cream to-white",
  sky: "bg-gradient-to-br from-sky/80 via-mint to-cream",
  mint: "bg-gradient-to-br from-mint via-cream to-white",
};

export function PageHero({
  eyebrow,
  title,
  description,
  current,
  tone = "cream",
  actions,
  aside,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  current: string;
  tone?: keyof typeof tones;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className={cn("overflow-hidden", tones[tone])}>
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        <div>
          <Breadcrumbs current={current} />
          {eyebrow ? (
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.18em] text-teal-deep">{eyebrow}</p>
          ) : null}
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.12] text-plum sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
          {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        {aside ? <div className="relative mx-auto w-full max-w-md">{aside}</div> : null}
      </Container>
    </section>
  );
}
