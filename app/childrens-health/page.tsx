import type { Metadata } from "next";
import Link from "next/link";
import { childrenTopics } from "@/data/children-services";
import { childrenFaqs } from "@/data/faqs";
import { AppointmentBand } from "@/components/appointment-band";
import { Butterfly } from "@/components/art";
import { ClinicPhoto } from "@/components/clinic-photo";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { TopicGlyph } from "@/components/icons";
import { UrgentNote } from "@/components/urgent-note";

export const metadata: Metadata = {
  title: "Children’s Health",
  description:
    "Child health, neurology, and cognitive care at Theresa’s Women and Child Clinic in Ashongman Estate.",
  alternates: { canonical: "/childrens-health" },
};

export default function ChildrensHealthPage() {
  return (
    <>
      <PageHero
        current="Children’s Health"
        eyebrow="For little ones"
        title="Children’s health, with room to feel safe."
        description="Child health, neurology, and cognitive care for families in Ashongman Estate. The tone is friendly. The advice stays general, and it is never presented as a game."
        tone="sky"
        aside={<ClinicPhoto name="child" />}
        actions={
          <>
            <ButtonLink href="/contact?category=childrens-health#enquiry" variant="teal">
              Enquire about a child
            </ButtonLink>
            <ButtonLink href="/kids-corner" variant="yellow">
              Visit the Kids Corner
            </ButtonLink>
          </>
        }
      />

      <section className="bg-white py-12">
        <Container className="flex flex-col items-start justify-between gap-4 rounded-[1.8rem] bg-mint p-6 sm:flex-row sm:items-center">
          <p className="max-w-3xl text-lg leading-relaxed text-ink">
            The Kids Corner has poems, rhymes, and games for curious children. It is separate from this health information on purpose.
          </p>
          <ButtonLink href="/kids-corner" variant="yellow">
            Open Kids Corner
          </ButtonLink>
        </Container>
      </section>

      <section className="bg-cream py-8 sm:py-12" aria-label="Children’s health topics">
        <Container className="space-y-6">
          {childrenTopics.map((topic) => (
            <article key={topic.id} id={topic.id} className="scroll-mt-32 rounded-[1.8rem] border border-sky bg-white p-6 shadow-card sm:p-8">
              <TopicGlyph id={topic.id} tone="children" />
              <h2 className="mt-4 text-3xl text-teal-deep">{topic.title}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">{topic.detail}</p>
              <ButtonLink href={`/contact?category=${topic.enquireCategory}#enquiry`} variant="teal" className="mt-6">
                Enquire about this topic
              </ButtonLink>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-white py-16" aria-labelledby="child-faq-heading">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Butterfly className="mb-4 h-16 w-20" />
            <h2 id="child-faq-heading" className="text-3xl text-teal-deep">
              Questions caregivers often ask
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Preparing for a visit, privacy, and urgent symptoms are covered in the{" "}
              <Link href="/patient-guide" className="font-extrabold text-plum underline decoration-yellow underline-offset-4">
                patient and parent guide
              </Link>
              .
            </p>
          </div>
          <FaqAccordion items={childrenFaqs} label="Children’s health questions" />
        </Container>
      </section>

      <section className="bg-cream pb-16">
        <Container>
          <UrgentNote />
        </Container>
      </section>
      <AppointmentBand
        title="Ask what children’s care is available."
        text="Contact the clinic to confirm which children’s services are offered before you rely on a particular type of visit."
      />
    </>
  );
}
