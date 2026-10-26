"use client";

import { useState } from "react";
import type { Poem } from "@/data/kids-content";
import { stanzasToSpeech } from "@/data/kids-content";
import { cn } from "@/lib/cn";
import { Button } from "@/components/button";
import { ReadAloudControls } from "@/components/kids-corner/read-aloud";

const sizes = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl sm:text-4xl",
} as const;

export function PoemReader({
  poem,
  readAloud = false,
  art,
}: {
  poem: Poem;
  readAloud?: boolean;
  art: React.ReactNode;
}) {
  const [size, setSize] = useState<keyof typeof sizes>("md");
  const [replay, setReplay] = useState(0);
  const [notice, setNotice] = useState("");

  return (
    <article id={poem.id} className="scroll-mt-32 rounded-[2rem] border border-sky bg-white p-5 shadow-card sm:p-8">
      <div className="grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div key={replay} className="mx-auto w-full max-w-sm">
          {art}
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-deep">Poem</p>
          <h3 className="mt-2 font-kids text-4xl text-plum">{poem.title}</h3>
          <p className="mt-3 text-lg text-muted">{poem.intro}</p>
          <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Poem text size">
            {(
              [
                ["sm", "Smaller poem text"],
                ["md", "Medium poem text"],
                ["lg", "Larger poem text"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                aria-pressed={size === key}
                onClick={() => setSize(key)}
                className={cn(
                  "min-h-11 rounded-full px-4 py-2 text-sm font-extrabold",
                  size === key ? "bg-plum text-white" : "bg-plum-soft text-plum",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div
        id={`${poem.id}-text`}
        tabIndex={-1}
        className={cn("mt-8 font-display text-ink outline-none", sizes[size])}
        aria-live="off"
      >
        {poem.stanzas.map((stanza, stanzaIndex) => (
          <p key={stanzaIndex} className="mb-5 leading-snug">
            {stanza.map((line, lineIndex) => (
              <span key={`${stanzaIndex}-${lineIndex}`} className="block">
                {line}
              </span>
            ))}
          </p>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-3">
        <Button
          variant="yellow"
          onClick={() => {
            setReplay((value) => value + 1);
            setNotice("Starting the poem again.");
            document.getElementById(`${poem.id}-text`)?.focus();
          }}
        >
          Read It Again
        </Button>
        {readAloud ? <ReadAloudControls text={stanzasToSpeech(poem.stanzas)} label="Read aloud" /> : null}
      </div>
      <p className="sr-only" aria-live="polite">
        {notice}
      </p>
    </article>
  );
}
