import Link from "next/link";
import { childrenTopics } from "@/data/children-services";
import { womenTopics } from "@/data/women-services";
import { ButtonLink } from "@/components/button";
import { CareCard } from "@/components/care-card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { AppointmentBand } from "@/components/appointment-band";
import { Cloud, Flower, Giraffe, Leaf, Sun } from "@/components/art";
import { ClinicPhoto } from "@/components/clinic-photo";
import { siteConfig } from "@/data/site-config";

const pathways = [
  {
    title: "For Women",
    copy: "Women’s health, with a clear way to enquire about a visit.",
    href: "/womens-health#womens-health",
    label: "Discover women’s health",
  },
  {
    title: "For Mothers and Mothers-to-Be",
    copy: "Antenatal care during pregnancy, and postnatal care after birth.",
    href: "/womens-health#antenatal-care",
    label: "Explore antenatal care",
    extra: { href: "/womens-health#postnatal-care", label: "Postnatal care" },
  },
  {
    title: "For Little Ones",
    copy: "Child health, neurology, and cognitive care, plus a corner made for play.",
    href: "/childrens-health",
    label: "Discover children’s health",
    extra: { href: "/kids-corner", label: "Visit the Kids Corner" },
  },
];

export function HomeView() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <Container className="grid items-center gap-12 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-deep sm:text-sm">
              Women’s health • Antenatal care • Children’s health
            </p>
            <h1 className="mt-4 max-w-xl text-4xl leading-[1.08] text-plum sm:text-5xl lg:text-6xl">
              Care for Her. Care for Them. Care for Every Tomorrow.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              From women’s health to the little milestones of childhood, Theresa’s Women and Child Clinic is designed around the care, comfort and wellbeing of women and children.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="#care-pathways">Explore Our Care</ButtonLink>
              <ButtonLink href="/kids-corner" variant="yellow">
                Visit the Kids Corner
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm font-extrabold">
              <Link href="/contact#enquiry" className="text-plum underline decoration-coral decoration-2 underline-offset-4">
                Enquire about an appointment
              </Link>
            </p>
          </div>
          <div className="mx-auto w-full max-w-md">
            <ClinicPhoto name="mother" priority />
          </div>
        </Container>
      </section>

      <section id="care-pathways" className="bg-white py-16 sm:py-24" aria-labelledby="pathways-heading">
        <Container>
          <SectionHeading
            id="pathways-heading"
            eyebrow="Start here"
            title="Three paths, one welcoming clinic."
            description="Choose the information that fits today. Each path leads to a real page about the clinic’s specialties."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pathways.map((path) => (
              <article key={path.title} className="flex flex-col overflow-hidden rounded-[1.8rem] border border-line bg-cream shadow-card">
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl text-plum">{path.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{path.copy}</p>
                  <div className="mt-5 flex flex-col items-start gap-3">
                    <Link href={path.href} className="font-extrabold text-plum underline decoration-coral decoration-2 underline-offset-4">
                      {path.label}
                    </Link>
                    {path.extra ? (
                      <Link href={path.extra.href} className="font-extrabold text-teal-deep underline decoration-yellow decoration-2 underline-offset-4">
                        {path.extra.label}
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12" aria-labelledby="specialties-heading">
        <Container>
          <h2 id="specialties-heading" className="text-3xl text-plum">
            Specialties
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {siteConfig.specialties.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-12 items-center rounded-full bg-plum-soft px-5 font-extrabold text-plum hover:bg-blush"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-peach py-16 sm:py-24" aria-labelledby="welcome-heading">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="welcome-heading"
              eyebrow="A warm welcome"
              title="Healthcare That Sees the Person Behind the Patient."
              description="Theresa’s Women and Child Clinic is devoted to women and children. The aim is respectful conversation, clear information, and enough room for a woman to be heard and a child to feel safe."
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink">
              <p>
                Families can read about women’s health, antenatal and postnatal care, child health, neurology, and cognitive care, then call, WhatsApp, or enquire about an appointment. The Kids Corner is here for poems, rhymes, and gentle games.
              </p>
              <p>
                The clinic is in {siteConfig.contact.locality}, {siteConfig.contact.city}. Opening hours are {siteConfig.contact.hours}. Fees are shown only when the clinic publishes them.
              </p>
            </div>
            <ButtonLink href="/about" variant="secondary" className="mt-8">
              About the clinic
            </ButtonLink>
          </div>
          <ClinicPhoto name="child" />
        </Container>
      </section>

      <section className="bg-plum-soft py-16 sm:py-24" aria-labelledby="women-heading">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              id="women-heading"
              eyebrow="Women’s health"
              title="Care that respects every chapter."
              description="Women’s health, antenatal care, and postnatal care. The notes are general. A visit is where individual advice belongs."
            />
            <Flower className="hidden h-20 w-20 sm:block" />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {womenTopics
              .filter((topic) => topic.featured)
              .map((topic) => (
                <CareCard key={topic.id} topic={topic} href={`/womens-health#${topic.id}`} tone="women" />
              ))}
          </div>
          <ButtonLink href="/womens-health" variant="secondary" className="mt-8">
            View women’s health topics
          </ButtonLink>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-mint py-16 sm:py-24" aria-labelledby="children-heading">
        <Sun className="float-slow absolute right-6 top-8 hidden h-16 w-16 md:block" />
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <SectionHeading
              id="children-heading"
              eyebrow="Children’s health"
              tone="teal"
              title="Little Patients. Big Hearts. Bright Futures."
              description="Children’s health information for parents and caregivers, kept separate from the playful corner so medical guidance never feels like a game."
            />
            <Giraffe className="mx-auto h-56 w-auto" />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {childrenTopics
              .filter((topic) => topic.featured)
              .map((topic) => (
                <CareCard key={topic.id} topic={topic} href={`/childrens-health#${topic.id}`} tone="children" />
              ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/childrens-health" variant="teal">
              View children’s health
            </ButtonLink>
            <ButtonLink href="/kids-corner" variant="yellow">
              Visit the Kids Corner
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="team-heading">
        <Container className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              id="team-heading"
              eyebrow="Our care team"
              title="Meet the Care Team"
              description="The team includes midwives, a paediatric specialist, a neurosurgeon, and a physician specialist. Personal names and photographs are added only when the clinic confirms them."
            />
            <ButtonLink href="/our-team" className="mt-8">
              Visit the care team page
            </ButtonLink>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {["Midwives", "Paediatric specialist", "Neurosurgeon", "Physician specialist"].map((role) => (
              <li key={role} className="rounded-2xl border border-line bg-cream px-5 py-4 text-lg font-extrabold text-plum">
                {role}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-peach via-blush/40 to-cream py-16 sm:py-24" aria-labelledby="caregiver-heading">
        <Container className="max-w-4xl text-center">
          <Leaf className="mx-auto mb-4 h-12 w-12" />
          <h2 id="caregiver-heading" className="text-3xl text-plum sm:text-5xl">
            You’re Caring for Everyone. Remember, You Matter Too.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink">
            Looking after a child, a pregnancy, or a household takes strength. Your rest, your questions, and your own health deserve attention as well. If you need a consultation for yourself, you can enquire. You do not have to wait until everything feels urgent.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/womens-health">Women’s health</ButtonLink>
            <ButtonLink href="/patient-guide" variant="secondary">
              Patient and parent guide
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-sky/40 py-16 sm:py-24" aria-labelledby="kids-preview-heading">
        <Container>
          <div className="relative">
            <Cloud className="float-slow absolute -left-2 top-0 hidden h-16 w-28 md:block" />
            <SectionHeading
              id="kids-preview-heading"
              align="center"
              eyebrow="Kids Corner"
              title="Little Minds, Big Adventures!"
              description="Stories to imagine, rhymes to enjoy, and games to play—welcome to a happy little corner made for curious minds."
            />
          </div>
          <ClinicPhoto name="play" className="mx-auto mt-8 max-w-3xl" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { title: "Read a Poem", copy: "The Little Seed, a story about growing.", href: "/kids-corner#the-little-seed", className: "bg-mint" },
              { title: "Sing a Rhyme", copy: "Wash, Wash, Little Hands, with bubbles.", href: "/kids-corner#wash-wash-little-hands", className: "bg-peach" },
              { title: "Play a Game", copy: "Help a hungry giraffe find the right food.", href: "/kids-corner#feed-the-giraffe", className: "bg-yellow/70" },
            ].map((card) => (
              <Link key={card.title} href={card.href} className={`flex min-h-52 flex-col justify-between rounded-[2rem] p-6 shadow-card ${card.className}`}>
                <span>
                  <h3 className="font-kids text-3xl text-plum">{card.title}</h3>
                  <p className="mt-3 text-lg font-semibold text-ink">{card.copy}</p>
                </span>
                <span className="mt-6 font-extrabold text-teal-deep">Open</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <AppointmentBand />
    </>
  );
}
