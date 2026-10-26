import Link from "next/link";
import { footerCare, footerExplore } from "@/data/navigation";
import { hasAnyContactDetail, siteConfig } from "@/data/site-config";
import { BrandStripe } from "@/components/brand-stripe";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function SiteFooter() {
  return (
    <footer className="bg-plum-deep text-white">
      <BrandStripe />
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo tone="light" />
          <p className="max-w-xs text-sm leading-relaxed text-white/85">
            {siteConfig.tagline}. A clinic website for women, mothers, children, and the people who care for them.
          </p>
        </div>
        <div>
          <h2 className="font-sans text-sm font-extrabold uppercase tracking-[0.16em] text-yellow">Explore</h2>
          <ul className="mt-4 space-y-2">
            {footerExplore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm font-semibold text-white/90 underline-offset-4 hover:text-yellow hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-sm font-extrabold uppercase tracking-[0.16em] text-yellow">Care topics</h2>
          <ul className="mt-4 space-y-2">
            {footerCare.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm font-semibold text-white/90 underline-offset-4 hover:text-yellow hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="footer-contact">
          <h2 className="font-sans text-sm font-extrabold uppercase tracking-[0.16em] text-yellow">Contact</h2>
          <div className="mt-4 space-y-2 text-sm leading-relaxed text-white/90">
            {siteConfig.contact.address ? <p>{siteConfig.contact.address}</p> : null}
            {siteConfig.contact.phone ? (
              <p>
                <a className="font-bold underline-offset-4 hover:underline" href={siteConfig.contact.phoneHref}>
                  Call {siteConfig.contact.phone}
                </a>
              </p>
            ) : null}
            <WhatsAppLink showNumber className="mt-3 px-4" />
            {siteConfig.contact.email ? (
              <p>
                <a className="break-all font-bold underline-offset-4 hover:underline" href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </p>
            ) : null}
            {siteConfig.contact.hours ? <p>{siteConfig.contact.hours}</p> : null}
            {!hasAnyContactDetail ? (
              <p>Address, telephone, email, and opening hours will appear here once the clinic confirms them.</p>
            ) : null}
            <p>
              <Link href="/contact#enquiry" className="font-extrabold text-yellow underline-offset-4 hover:underline">
                Appointment enquiry
              </Link>
            </p>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs leading-relaxed text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}.</p>
          <p>General information only. Not a diagnosis, a booking system, or an emergency service.</p>
        </Container>
      </div>
    </footer>
  );
}
