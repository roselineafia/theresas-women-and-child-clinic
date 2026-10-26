import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/cn";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.4-1.4A11 11 0 1 0 20.5 3.5ZM12 20.2a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.2.8.9-3.1-.2-.3A9.1 9.1 0 1 1 12 20.2Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.9 1.1-.3.2-.6.1a7.5 7.5 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.4.2-.4a.5.5 0 0 0 0-.5c-.1-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.6 4c.6.2 1.1.4 1.5.5a3.6 3.6 0 0 0 1.7.1 2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z"
      />
    </svg>
  );
}

export function WhatsAppLink({
  className,
  showNumber = false,
  label = "WhatsApp",
  onClick,
}: {
  className?: string;
  showNumber?: boolean;
  label?: string;
  onClick?: () => void;
}) {
  const { whatsapp, whatsappHref } = siteConfig.contact;
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#075E54] px-5 py-3 text-base font-extrabold text-white hover:bg-[#054940]",
        className,
      )}
      aria-label={`WhatsApp the clinic on ${whatsapp}`}
      onClick={onClick}
    >
      <WhatsAppIcon />
      <span>
        {label}
        {showNumber ? ` ${whatsapp}` : null}
      </span>
    </a>
  );
}

export function WhatsAppFloat() {
  const { whatsapp, whatsappHref } = siteConfig.contact;
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-30 inline-flex min-h-14 items-center gap-2 rounded-full bg-[#075E54] px-4 text-white shadow-soft hover:bg-[#054940]"
      aria-label={`WhatsApp the clinic on ${whatsapp}`}
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="pr-1 font-extrabold">{whatsapp}</span>
    </a>
  );
}
