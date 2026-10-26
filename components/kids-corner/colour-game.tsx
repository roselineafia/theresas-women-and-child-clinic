"use client";

import { useEffect, useRef, useState } from "react";
import { colourTokens, type ColourToken } from "@/data/kids-content";
import { shuffle } from "@/lib/shuffle";
import { cn } from "@/lib/cn";
import { Butterfly } from "@/components/art";
import { GameComplete } from "@/components/kids-corner/game-complete";
import { GameProgress } from "@/components/kids-corner/game-progress";

type Round = { target: ColourToken; options: ColourToken[] };

function buildRounds(): Round[] {
  return shuffle(colourTokens)
    .slice(0, 6)
    .map((target) => {
      const others = shuffle(colourTokens.filter((colour) => colour.id !== target.id)).slice(0, 3);
      return { target, options: shuffle([target, ...others]) };
    });
}

export function ColourGame() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skipFocus = useRef(true);
  const locked = useRef(false);
  const [session, setSession] = useState(0);
  const [rounds, setRounds] = useState<Round[] | null>(null);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    setRounds(buildRounds());
    setIndex(0);
    setScore(0);
    setPicked(null);
    setFeedback("");
    setSolved(false);
    locked.current = false;
  }, [session]);

  useEffect(() => {
    if (!rounds) return;
    if (skipFocus.current) {
      skipFocus.current = false;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [index, rounds, solved]);

  if (!rounds) {
    return <p className="text-lg font-bold text-teal-deep">Getting the colours ready…</p>;
  }

  if (solved) {
    return (
      <GameComplete
        title="Beautiful looking!"
        message="You helped the butterfly find every colour. The rainbow is complete."
        score={score}
        total={rounds.length}
        onReplay={() => setSession((value) => value + 1)}
      />
    );
  }

  const round = rounds[index];

  function choose(id: string) {
    if (locked.current) return;
    setPicked(id);
    if (id === round.target.id) {
      locked.current = true;
      setFeedback("Wonderful! You found it!");
      setScore((value) => value + 1);
      return;
    }
    setFeedback("Good try! Let’s have another look.");
  }

  return (
    <div>
      <div className={cn("mx-auto mb-2 w-40", feedback.startsWith("Wonderful") && "giraffe-happy")}>
        <Butterfly className="h-auto w-full" />
      </div>
      <GameProgress question={index + 1} score={score} total={rounds.length} />
      <h4 ref={headingRef} tabIndex={-1} id="colour-question" className="mt-6 font-kids text-3xl text-ink outline-none sm:text-4xl">
        Can you find {round.target.name.toUpperCase()}?
      </h4>
      <p className="mt-2 text-base text-muted">Read the name on each tile, then choose the matching colour.</p>
      <div className="mt-5 grid grid-cols-2 gap-3" role="group" aria-labelledby="colour-question">
        {round.options.map((colour) => {
          const isCorrectPick = picked === colour.id && colour.id === round.target.id;
          const isWrongPick = picked === colour.id && colour.id !== round.target.id;
          return (
            <button
              key={colour.id}
              type="button"
              onClick={() => choose(colour.id)}
              aria-label={`Choose the ${colour.name.toLowerCase()} colour tile.`}
              aria-pressed={picked === colour.id}
              className={cn(
                "min-h-24 rounded-[1.4rem] border-4 text-2xl font-extrabold",
                isCorrectPick && "border-ink",
                isWrongPick && "border-plum",
                !isCorrectPick && !isWrongPick && "border-transparent",
              )}
              style={{ backgroundColor: colour.fill, color: colour.text }}
            >
              {colour.name}
            </button>
          );
        })}
      </div>
      <p className="mt-4 min-h-8 text-lg font-extrabold text-plum" aria-live="polite">
        {feedback}
      </p>
      {feedback.startsWith("Wonderful") ? (
        <button
          type="button"
          className="mt-2 min-h-12 rounded-full bg-teal-deep px-5 py-3 text-base font-extrabold text-white"
          onClick={() => {
            if (index + 1 >= rounds.length) {
              setSolved(true);
              return;
            }
            setIndex((value) => value + 1);
            setPicked(null);
            setFeedback("");
            locked.current = false;
          }}
        >
          {index + 1 >= rounds.length ? "See how you did" : "Next colour"}
        </button>
      ) : null}
    </div>
  );
}
