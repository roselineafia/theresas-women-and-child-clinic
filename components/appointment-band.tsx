import { siteConfig } from "@/data/site-config";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function AppointmentBand({
  title = "Let’s Take the Next Step Together.",
  text = "Contact Theresa’s Women and Child Clinic to enquire about appointments and confirm which services are available.",
}: {
  title?: string;
  text?: string;
}) {
  const phone = siteConfig.contact.phoneHref;
  return (
    <section className="bg-plum py-16 text-white sm:py-20" aria-labelledby="appointment-heading">
      <Container className="grid items-center gap-8 lg:grid-cols-[1.4fr_auto]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-yellow">Appointments</p>
          <h2 id="appointment-heading" className="mt-3 max-w-2xl text-3xl text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <ButtonLink href="/contact#enquiry" variant="yellow">
            Request an Appointment
          </ButtonLink>
          <ButtonLink href={phone} variant="inverse">
            Call {siteConfig.contact.phone}
          </ButtonLink>
          <WhatsAppLink showNumber />
        </div>
      </Container>
    </section>
  );
}
