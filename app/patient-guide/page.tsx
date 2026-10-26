import type { Metadata } from "next";
import Link from "next/link";
import { guideFaqs } from "@/data/faqs";
import { AppointmentBand } from "@/components/appointment-band";
import { Container } from "@/components/container";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { UrgentNote } from "@/components/urgent-note";
import { Leaf } from "@/components/art";

export const metadata: Metadata = {
  title: "Patient and Parent Guide",
  description:
    "How to prepare for a visit, questions worth asking, privacy, and what this website can and cannot do. General information for women, parents, and caregivers.",
  alternates: { canonical: "/patient-guide" },
};

const sections = [
  {
    title: "Preparing for an appointment",
    points: [
      "Write down the questions you most want answered, and put the biggest one first.",
      "Note when a symptom started and what seems to change it. Share that with the clinician, not in the website form.",
      "Bring records you already have, a list of medicines, and known allergies.",
      "For a child, pack a comfort item and allow a little time to settle in a new room.",
      "Say if you are pregnant, or might be, when that is relevant to the visit.",
    ],
  },
  {
    title: "Contacting the clinic",
    points: [
      "Call or WhatsApp 0543212869, or email theresawomenandchildclinic@gmail.com.",
      "The clinic is open Monday to Saturday, 8:00 am to 8:00 pm.",
      "The form on the contact page only demonstrates how an enquiry could look. It does not send a message or hold a time.",
      "Fees and insurance are not listed here because they have not been supplied.",
    ],
  },
  {
    title: "Guidance for caregivers",
    points: [
      "You know the child. Describe what is different from their usual self.",
      "Another adult may come with you if that helps. Ask how privacy is handled.",
      "Children do not have to be brave in a particular way. Comfort and honesty both help.",
      "The Kids Corner can pass the time. It is not part of treatment.",
    ],
  },
  {
    title: "Questions worth asking a professional",
    points: [
      "What is this visit for, and what should I expect today?",
      "What should I watch for at home, and when should I seek urgent care instead?",
      "How will I hear about any results, and who else may receive them?",
      "What is the plan if things do not improve?",
      "Which parts of this are general advice, and which are specific to me or my child?",
    ],
  },
  {
    title: "Privacy and respectful communication",
    points: [
      "You can ask to speak privately for part of a visit.",
      "A child’s information should be shared carefully, and only with the right caregivers.",
      "This website does not keep a medical record and does not ask for a diagnosis.",
      "Respect includes clear explanations, time to ask again, and no assumptions about family life.",
    ],
  },
];

export default function PatientGuidePage() {
  return (
    <>
      <PageHero
        current="Patient Guide"
        eyebrow="Patient and parent guide"
        title="Practical notes before you enquire or attend."
        description="This guide helps women, parents, and caregivers prepare. It is general information. It is not a clinic policy, a fee list, or a substitute for an individual assessment by a qualified healthcare professional."
        tone="peach"
        aside={<Leaf className="mx-auto h-40 w-40" />}
      />

      <section className="bg-white py-12">
        <Container>
          <UrgentNote />
        </Container>
      </section>

      <section className="bg-cream py-8 sm:py-12" aria-label="Guide sections">
        <Container className="grid gap-5 lg:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[1.7rem] border border-line bg-white p-6 shadow-card">
              <h2 className="text-2xl text-plum">{section.title}</h2>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-ink">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-coral" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <article className="rounded-[1.7rem] bg-plum-soft p-6">
            <h2 className="text-2xl text-plum">Where to go next</h2>
            <p className="mt-3 leading-relaxed text-ink">The health pages explain topics. They do not confirm that a service is offered.</p>
            <ul className="mt-4 space-y-3 font-extrabold">
              <li>
                <Link href="/womens-health" className="text-plum underline decoration-coral underline-offset-4">
                  Women’s health
                </Link>
              </li>
              <li>
                <Link href="/childrens-health" className="text-plum underline decoration-coral underline-offset-4">
                  Children’s health
                </Link>
              </li>
              <li>
                <Link href="/contact#enquiry" className="text-plum underline decoration-coral underline-offset-4">
                  Appointment enquiry
                </Link>
              </li>
            </ul>
          </article>
        </Container>
      </section>

      <section className="bg-white py-16" aria-labelledby="guide-faq-heading">
        <Container className="max-w-3xl">
          <h2 id="guide-faq-heading" className="text-3xl text-plum">
            Frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqAccordion items={guideFaqs} label="Patient guide questions" />
          </div>
        </Container>
      </section>
      <AppointmentBand />
    </>
  );
}
