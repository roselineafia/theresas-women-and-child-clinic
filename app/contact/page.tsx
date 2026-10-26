import type { Metadata } from "next";
import { contactFaqs } from "@/data/faqs";
import { AppointmentEnquiryForm } from "@/components/appointment-enquiry-form";
import { ContactInfo } from "@/components/contact-info";
import { Container } from "@/components/container";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { UrgentNote } from "@/components/urgent-note";
import { WelcomeScene } from "@/components/art";

export const metadata: Metadata = {
  title: "Contact and Appointments",
  description:
    "Contact Theresa’s Women and Child Clinic and preview an appointment enquiry. The form is a demonstration and does not book a visit.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        current="Contact"
        eyebrow="Contact and appointments"
        title="Let’s take the next step together."
        description="Use the details below once the clinic has confirmed them, or try the enquiry form to see how a request would be checked. The form does not send anything and does not reserve an appointment."
        tone="cream"
        aside={<WelcomeScene />}
      />
      <section className="bg-white py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <ContactInfo />
          <AppointmentEnquiryForm />
        </Container>
      </section>
      <section className="bg-cream pb-6">
        <Container>
          <UrgentNote />
        </Container>
      </section>
      <section className="bg-cream py-12" aria-labelledby="contact-faq">
        <Container className="max-w-3xl">
          <h2 id="contact-faq" className="text-3xl text-plum">
            About enquiries
          </h2>
          <div className="mt-6">
            <FaqAccordion items={contactFaqs} label="Contact questions" />
          </div>
        </Container>
      </section>
    </>
  );
}
