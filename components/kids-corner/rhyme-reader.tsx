"use client";

import { useState } from "react";
import type { Rhyme } from "@/data/kids-content";
import { stanzasToSpeech } from "@/data/kids-content";
import { HandwashArt, StretchKid } from "@/components/art";
import { Button } from "@/components/button";
import { ReadAloudControls } from "@/components/kids-corner/read-aloud";

export function RhymeReader({
  rhyme,
  prompts,
  art,
}: {
  rhyme: Rhyme;
  prompts?: string[];
  art: "hands" | "stretch";
}) {
  const [replay, setReplay] = useState(0);
  const [notice, setNotice] = useState("");
  const illustration =
    art === "hands" ? (
      <HandwashArt key={replay} className="h-auto w-full" />
    ) : (
      <StretchKid key={replay} stretching className="mx-auto h-64 w-auto" />
    );

  return (
    <article id={rhyme.id} className="scroll-mt-32 rounded-[2rem] border border-lavender bg-white p-5 shadow-card sm:p-8">
      <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="mx-auto w-full max-w-sm">{illustration}</div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-coral-deep">Rhyme</p>
          <h3 className="mt-2 font-kids text-4xl text-plum">{rhyme.title}</h3>
          <p className="mt-3 text-lg text-muted">{rhyme.intro}</p>
        </div>
      </div>
      <div id={`${rhyme.id}-text`} tabIndex={-1} className="mt-8 font-kids text-2xl leading-snug text-ink outline-none sm:text-3xl">
        {rhyme.stanzas.map((stanza, stanzaIndex) => (
          <p key={stanzaIndex} className="mb-5">
            {stanza.map((line, lineIndex) => (
              <span key={`${stanzaIndex}-${lineIndex}`} className="block">
                {line}
              </span>
            ))}
          </p>
        ))}
      </div>
      {prompts ? (
        <ul className="mb-5 grid gap-2 sm:grid-cols-2">
          {prompts.map((prompt) => (
            <li key={prompt} className="rounded-2xl bg-mint px-4 py-3 text-base font-bold text-teal-deep">
              {prompt}
            </li>
          ))}
        </ul>
      ) : null}
      <p className="mb-5 rounded-2xl bg-yellow/50 px-4 py-3 text-base font-bold text-ink">{rhyme.reminder}</p>
      <div className="flex flex-wrap gap-3">
        <ReadAloudControls text={stanzasToSpeech(rhyme.stanzas)} label="Read the rhyme aloud" />
        <Button
          variant="yellow"
          onClick={() => {
            setReplay((value) => value + 1);
            setNotice("Playing the rhyme again.");
            document.getElementById(`${rhyme.id}-text`)?.focus();
          }}
        >
          Repeat Rhyme
        </Button>
      </div>
      <p className="sr-only" aria-live="polite">
        {notice}
      </p>
    </article>
  );
}
