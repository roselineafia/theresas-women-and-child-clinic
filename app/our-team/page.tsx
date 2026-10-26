import type { Metadata } from "next";
import { teamMembers } from "@/data/team";
import { AppointmentBand } from "@/components/appointment-band";
import { WelcomeScene } from "@/components/art";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { TeamCard } from "@/components/team-card";

export const metadata: Metadata = {
  title: "Our Care Team",
  description:
    "The care team at Theresa’s Women and Child Clinic includes midwives, a paediatric specialist, a neurosurgeon, and a physician specialist.",
  alternates: { canonical: "/our-team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        current="Our Care Team"
        eyebrow="People of the clinic"
        title="Midwives, paediatric care, neurosurgery, and medicine."
        description="The clinic’s care team includes midwives, a paediatric specialist, a neurosurgeon, and a physician specialist. Names, photographs, and credentials will be added only when the clinic supplies them for each person."
        tone="cream"
        aside={<WelcomeScene />}
        actions={<ButtonLink href="/contact#enquiry">Request an appointment</ButtonLink>}
      />

      <section className="bg-white py-16" aria-labelledby="directory-heading">
        <Container>
          <h2 id="directory-heading" className="sr-only">
            Care team directory
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted">
            These are the roles on the team. A personal name, photograph, or qualification is not shown until the clinic confirms it for that person.
          </p>
        </Container>
      </section>
      <AppointmentBand />
    </>
  );
}
