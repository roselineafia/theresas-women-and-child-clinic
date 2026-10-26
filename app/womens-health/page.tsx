import type { Metadata } from "next";
import Link from "next/link";
import { womenFaqs } from "@/data/faqs";
import { womenTopics } from "@/data/women-services";
import { AppointmentBand } from "@/components/appointment-band";
import { ClinicPhoto } from "@/components/clinic-photo";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { TopicGlyph } from "@/components/icons";
import { UrgentNote } from "@/components/urgent-note";

export const metadata: Metadata = {
  title: "Women’s Health",
  description:
    "Women’s health, antenatal care, and postnatal care at Theresa’s Women and Child Clinic in Ashongman Estate.",
  alternates: { canonical: "/womens-health" },
};

export default function WomensHealthPage() {
  return (
    <>
      <PageHero
        current="Women’s Health"
        eyebrow="For women"
        title="Women’s health, explained calmly."
        description="Women’s health, antenatal care, and postnatal care at the clinic in Ashongman Estate. The notes are written in plain language. Individual advice still belongs in a consultation."
        tone="blush"
        aside={<ClinicPhoto name="mother" />}
        actions={
          <>
            <ButtonLink href="/contact?category=womens-health#enquiry">Enquire about women’s health</ButtonLink>
            <ButtonLink href="/patient-guide" variant="secondary">
              How to prepare
            </ButtonLink>
          </>
        }
      />

      <section className="bg-white py-12">
        <Container>
          <p className="rounded-3xl bg-cream px-5 py-4 text-base leading-relaxed text-ink">
            Nothing here assumes a particular age, relationship, pregnancy plan, or family structure. If a topic does not apply to you, leave it. If you are worried about a symptom today, speak to a qualified professional. Website pages cannot examine you.
          </p>
        </Container>
      </section>

      <section className="bg-plum-soft/60 py-8 sm:py-12" aria-label="Women’s health topics">
        <Container className="space-y-6">
          {womenTopics.map((topic) => (
            <article key={topic.id} id={topic.id} className="scroll-mt-32 rounded-[1.8rem] border border-blush bg-white p-6 shadow-card sm:p-8">
              <TopicGlyph id={topic.id} tone="women" />
              <h2 className="mt-4 text-3xl text-plum">{topic.title}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">{topic.detail}</p>
              <ButtonLink
                href={`/contact?category=${topic.enquireCategory}#enquiry`}
                variant="secondary"
                className="mt-6"
              >
                Enquire about this topic
              </ButtonLink>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-white py-16" aria-labelledby="women-faq-heading">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 id="women-faq-heading" className="text-3xl text-plum">
              Questions women often ask first
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              For visit preparation, privacy, and what to do in an emergency, read the{" "}
              <Link href="/patient-guide" className="font-extrabold text-plum underline decoration-coral underline-offset-4">
                patient and parent guide
              </Link>
              .
            </p>
          </div>
          <FaqAccordion items={womenFaqs} label="Women’s health questions" />
        </Container>
      </section>

      <section className="bg-cream pb-16">
        <Container>
          <UrgentNote />
        </Container>
      </section>
      <AppointmentBand />
    </>
  );
}
