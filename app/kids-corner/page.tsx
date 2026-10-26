import type { Metadata } from "next";
import Link from "next/link";
import { poems, rhymes, activities } from "@/data/kids-content";
import { Butterfly, Cloud, Giraffe, GrowingSeed, HandwashArt, HeartFriend, Star, StretchKid, Sun } from "@/components/art";
import { ClinicPhoto } from "@/components/clinic-photo";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { ColourGame } from "@/components/kids-corner/colour-game";
import { FeedingGame } from "@/components/kids-corner/feeding-game";
import { PoemReader } from "@/components/kids-corner/poem-reader";
import { RhymeReader } from "@/components/kids-corner/rhyme-reader";

export const metadata: Metadata = {
  title: "Kids Corner",
  description:
    "Original poems, rhymes, and two gentle games for children at Theresa’s Women and Child Clinic. Entertainment and simple learning, not medical advice.",
  alternates: { canonical: "/kids-corner" },
};

const cardArt: Record<string, React.ReactNode> = {
  "the-little-seed": <GrowingSeed className="h-36 w-full" />,
  "my-brave-little-heart": <HeartFriend className="mx-auto h-36 w-auto" />,
  "wash-wash-little-hands": <HandwashArt className="h-36 w-full" />,
  "stretch-up-to-the-sky": <StretchKid className="mx-auto h-40 w-auto" />,
  "feed-the-giraffe": <Giraffe className="h-40 w-auto" />,
  "rainbow-colour-hunt": <Butterfly className="mx-auto h-28 w-36" />,
};

export default function KidsCornerPage() {
  return (
    <div className="kids-sky">
      <section className="relative overflow-hidden">
        <Container className="py-12 sm:py-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-deep">Kids Corner</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="font-kids text-5xl leading-none text-plum sm:text-6xl">Little Minds, Big Adventures!</h1>
              <p className="mt-4 text-xl leading-relaxed text-ink">
                Stories to imagine, rhymes to enjoy, and games to play—welcome to a happy little corner made for curious minds.
              </p>
            </div>
            <Sun className="float-y hidden h-20 w-20 sm:block" />
          </div>
          <ClinicPhoto name="play" className="mt-8" />
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#poems" className="inline-flex min-h-12 items-center rounded-full bg-white px-5 font-extrabold text-plum">
              Poems
            </a>
            <a href="#rhymes" className="inline-flex min-h-12 items-center rounded-full bg-lavender px-5 font-extrabold text-ink">
              Rhymes
            </a>
            <a href="#games" className="inline-flex min-h-12 items-center rounded-full bg-yellow px-5 font-extrabold text-ink">
              Games
            </a>
            <ButtonLink href="/" variant="secondary">
              Back to the clinic
            </ButtonLink>
          </div>
        </Container>
        <Cloud className="float-slow pointer-events-none absolute left-4 top-6 hidden h-14 w-28 opacity-80 md:block" />
        <Star className="float-y pointer-events-none absolute right-16 top-24 hidden h-8 w-8 md:block" />
      </section>

      <section id="activities" className="pb-8" aria-labelledby="activities-heading">
        <Container>
          <h2 id="activities-heading" className="font-kids text-4xl text-plum">
            Pick something to do
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <a key={activity.id} href={`#${activity.id}`} className="flex flex-col rounded-[1.8rem] bg-white p-4 shadow-card">
                <div className="flex h-40 items-center justify-center overflow-hidden rounded-[1.3rem] bg-sky/40">{cardArt[activity.id]}</div>
                <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.14em] text-teal-deep">{activity.kind}</p>
                <h3 className="mt-1 font-kids text-2xl text-plum">{activity.title}</h3>
                <p className="mt-2 flex-1 text-base font-semibold text-ink">{activity.blurb}</p>
                <span className="mt-4 font-extrabold text-coral-deep">Open</span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section id="poems" className="py-10" aria-labelledby="poems-heading">
        <Container className="space-y-6">
          <h2 id="poems-heading" className="font-kids text-4xl text-plum">
            Poems
          </h2>
          <PoemReader poem={poems[0]} art={<GrowingSeed className="h-auto w-full" />} />
          <PoemReader poem={poems[1]} readAloud art={<HeartFriend className="mx-auto h-auto w-full max-w-xs" />} />
        </Container>
      </section>

      <section id="rhymes" className="py-10" aria-labelledby="rhymes-heading">
        <Container className="space-y-6">
          <h2 id="rhymes-heading" className="font-kids text-4xl text-plum">
            Rhymes
          </h2>
          <RhymeReader rhyme={rhymes[0]} art="hands" />
          <RhymeReader
            rhyme={rhymes[1]}
            art="stretch"
            prompts={["Reach up, if you want to", "Wiggle your fingers", "Bend only if it feels okay", "Wave hello"]}
          />
        </Container>
      </section>

      <section id="games" className="py-10" aria-labelledby="games-heading">
        <Container className="space-y-6">
          <h2 id="games-heading" className="font-kids text-4xl text-plum">
            Games
          </h2>
          <article id="feed-the-giraffe" className="scroll-mt-32 rounded-[2rem] border border-yellow bg-white p-5 shadow-card sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-deep">Game</p>
            <h3 className="mt-2 font-kids text-4xl text-plum">Feed the Hungry Giraffe</h3>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              The giraffe is hungry. Look at the question and choose the answer that fits. There are six gentle questions.
            </p>
            <div className="mt-6">
              <FeedingGame />
            </div>
          </article>
          <article id="rainbow-colour-hunt" className="scroll-mt-32 rounded-[2rem] border border-lavender bg-white p-5 shadow-card sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-coral-deep">Game</p>
            <h3 className="mt-2 font-kids text-4xl text-plum">Rainbow Colour Hunt</h3>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              A butterfly is looking for colours. Each tile has the colour’s name, so you can read it as well as see it.
            </p>
            <div className="mt-6">
              <ColourGame />
            </div>
          </article>
        </Container>
      </section>

      <section className="pb-16" aria-labelledby="grownup-note">
        <Container>
          <aside className="rounded-[1.8rem] bg-white/80 p-6 sm:p-8" role="note">
            <h2 id="grownup-note" className="text-2xl text-plum">
              A note for parents and caregivers
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink">
              The Kids Corner is entertainment and simple learning. It does not diagnose, treat, or monitor a child. There is no account, chat, advertising, or collection of children’s details. Enjoy it together, then return to the clinic pages whenever you are ready.
            </p>
            <p className="mt-4">
              <Link href="/" className="font-extrabold text-plum underline decoration-yellow decoration-2 underline-offset-4">
                Back to Theresa’s Women and Child Clinic
              </Link>
            </p>
          </aside>
        </Container>
      </section>
    </div>
  );
}
