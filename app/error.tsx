"use client";

import { useEffect } from "react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Page error");
  }, []);

  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl text-plum">Something went wrong on this page.</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
        You can try again. If you need care urgently, contact local emergency services rather than waiting on this website.
      </p>
      <Button className="mt-8" onClick={reset}>
        Try again
      </Button>
    </Container>
  );
}
