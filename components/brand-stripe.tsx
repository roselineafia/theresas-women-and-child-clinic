import { cn } from "@/lib/cn";

export function BrandStripe({ className }: { className?: string }) {
  return (
    <div className={cn("grid h-2 grid-cols-5", className)} aria-hidden="true">
      <span className="bg-coral" />
      <span className="bg-plum" />
      <span className="bg-yellow" />
      <span className="bg-teal" />
      <span className="bg-sky" />
    </div>
  );
}
