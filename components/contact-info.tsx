import { siteConfig } from "@/data/site-config";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function ContactInfo() {
  const { contact } = siteConfig;
  return (
    <div id="phone" className="rounded-[1.8rem] border border-line bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-3xl text-plum">Clinic details</h2>
      <p className="mt-3 leading-relaxed text-muted">
        The clinic is in Ashongman Estate. Call or WhatsApp {contact.phone}, or email the clinic. Opening hours are Monday to Saturday.
      </p>
      <dl className="mt-6 space-y-4">
        <div>
          <dt className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-deep">Address</dt>
          <dd className="mt-1 text-lg">{contact.address}</dd>
        </div>
        <div>
          <dt className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-deep">Telephone</dt>
          <dd className="mt-1 text-lg">
            <a className="font-extrabold text-plum underline decoration-coral underline-offset-4" href={contact.phoneHref}>
              {contact.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-deep">WhatsApp</dt>
          <dd className="mt-2">
            <WhatsAppLink showNumber />
          </dd>
        </div>
        <div>
          <dt className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-deep">Email</dt>
          <dd className="mt-1 text-lg">
            {contact.email ? (
              <a className="font-extrabold break-all text-plum underline decoration-coral underline-offset-4" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            ) : (
              "Not yet published."
            )}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-deep">Opening hours</dt>
          <dd className="mt-1 text-lg">{contact.hours || "Not yet published."}</dd>
        </div>
      </dl>
    </div>
  );
}
