import Link from "next/link";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "teal" | "yellow" | "coral" | "ghost" | "inverse";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-plum text-white hover:bg-plum-deep",
  secondary: "border-2 border-plum bg-white text-plum hover:bg-plum-soft",
  teal: "bg-teal-deep text-white hover:bg-[#146338]",
  yellow: "bg-yellow text-ink hover:bg-yellow-deep",
  coral: "bg-coral text-ink hover:bg-coral-deep hover:text-white",
  ghost: "bg-transparent text-plum hover:bg-white/70",
  inverse: "bg-white text-plum hover:bg-yellow",
};

export function buttonClasses(variant: ButtonVariant = "primary", className?: string) {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-base font-extrabold transition duration-200",
    variants[variant],
    className,
  );
}

type LinkProps = React.ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

export function ButtonLink({ variant = "primary", className, ...props }: LinkProps) {
  return <Link className={buttonClasses(variant, className)} {...props} />;
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ variant = "primary", className, type = "button", ...props }: NativeButtonProps) {
  return <button type={type} className={buttonClasses(variant, className)} {...props} />;
}
