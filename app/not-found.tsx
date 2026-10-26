import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-deep">404</p>
      <h1 className="mt-3 text-4xl text-plum sm:text-5xl">This page has wandered off.</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
        The link may be out of date. You can return home, read the patient guide, or visit the Kids Corner.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/kids-corner" variant="yellow">
          Kids Corner
        </ButtonLink>
      </div>
    </Container>
  );
}
