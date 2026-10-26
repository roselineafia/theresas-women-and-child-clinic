import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { AppointmentBand } from "@/components/appointment-band";
import { Flower, HeartFriend, Leaf, Sun } from "@/components/art";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Theresa’s Women and Child Clinic approaches care for women and children: respect, compassion, privacy, and clear communication.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Respect",
    copy: "Every woman and every child is met as a person, not a checklist. Questions, culture, privacy, and choices are part of the conversation.",
  },
  {
    title: "Compassion",
    copy: "Warmth matters. People should be able to say what worries them without being hurried past the point.",
  },
  {
    title: "Privacy",
    copy: "Health information is sensitive. This website does not store records, and a real visit should follow the clinic’s own confidentiality practice.",
  },
  {
    title: "Communication",
    copy: "Plain language, time for questions, and a clear next step help families leave with more understanding than they arrived with.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        current="About Us"
        eyebrow="A place to grow, heal and thrive"
        title="A clinic shaped around women and children."
        description="Theresa’s Women and Child Clinic is in Ashongman Estate, Accra. It cares for women’s health, antenatal and postnatal care, child health, neurology, and cognitive care."
        tone="blush"
        aside={<HeartFriend className="mx-auto h-auto w-full max-w-sm" />}
        actions={
          <>
            <ButtonLink href="/contact#enquiry">Request an appointment</ButtonLink>
            <ButtonLink href="/patient-guide" variant="secondary">
              Patient guide
            </ButtonLink>
          </>
        }
      />

      <section className="bg-white py-16 sm:py-20" aria-labelledby="focus-heading">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 id="focus-heading" className="text-3xl text-plum sm:text-4xl">
              Women and children, on purpose.
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Some clinics try to be everything to everyone. This one is narrower, and that is the point. The information, the colours, and the Kids Corner are arranged so a woman seeking care and a family arriving with a child can both find their way.
              </p>
              <p>
                You do not need to be a mother to belong in the women’s health pages. You do not need to have all the answers before you enquire about a child. Caregivers of every kind — mothers, fathers, grandparents, and guardians — are part of the visit.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="rounded-[1.6rem] bg-cream p-5">
                <h3 className="text-2xl text-plum">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{value.copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-peach py-16 sm:py-20" aria-labelledby="philosophy-heading">
        <Container>
          <h2 id="philosophy-heading" className="max-w-3xl text-3xl text-plum sm:text-4xl">
            Care philosophy
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink">
            Good care starts with listening. A clinician should understand what brought you in, what you have already tried, and what you are hoping will change. For a child, that includes how they cope with new rooms and new faces. For a woman, it includes being believed about her own symptoms.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">
            This website supports that idea with general information. It cannot examine anyone, read a test, or promise an outcome. Individual advice belongs in a consultation.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="mission-heading">
        <Container className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[1.8rem] bg-plum-soft p-8">
            <Flower className="mb-4 h-14 w-14" />
            <h2 id="mission-heading" className="text-3xl text-plum">
              Mission
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">{siteConfig.mission}</p>
          </article>
          <article className="rounded-[1.8rem] bg-mint p-8">
            <Sun className="mb-4 h-14 w-14" />
            <h2 className="text-3xl text-teal-deep">Vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">{siteConfig.vision}</p>
          </article>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20" aria-labelledby="families-heading">
        <Container className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 id="families-heading" className="text-3xl text-plum sm:text-4xl">
              For families and caregivers
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Bring the questions you are actually holding, including the ones that feel small. Tell the clinician what a normal day looks like for your child, and what has changed. If you are the person everyone else leans on, the women’s health pages are for you as well.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/patient-guide">Read the guide</ButtonLink>
              <ButtonLink href="/kids-corner" variant="yellow">
                Kids Corner
              </ButtonLink>
            </div>
          </div>
          <Leaf className="mx-auto h-36 w-36" />
        </Container>
      </section>

      <AppointmentBand
        title="When you are ready, enquire."
        text="An enquiry is a conversation about availability. It is not a diagnosis, and the form on this website does not book a time."
      />
    </>
  );
}
