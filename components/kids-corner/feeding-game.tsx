"use client";

import { useEffect, useRef, useState } from "react";
import { feedQuestions, type FeedQuestion } from "@/data/kids-content";
import { shuffle } from "@/lib/shuffle";
import { cn } from "@/lib/cn";
import { Giraffe } from "@/components/art";
import { GameComplete } from "@/components/kids-corner/game-complete";
import { GameProgress } from "@/components/kids-corner/game-progress";

type Round = FeedQuestion;

export function FeedingGame() {
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
    setRounds(shuffle(feedQuestions).map((question) => ({ ...question, choices: shuffle(question.choices) })));
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
    return <p className="text-lg font-bold text-teal-deep">Getting the game ready…</p>;
  }

  if (solved) {
    return (
      <GameComplete
        title="You did it!"
        message="The giraffe is full and very grateful. You found every answer."
        score={score}
        total={rounds.length}
        onReplay={() => setSession((value) => value + 1)}
      />
    );
  }

  const round = rounds[index];
  const correct = round.choices.find((choice) => choice.correct);

  function choose(id: string) {
    if (!correct || locked.current) return;
    setPicked(id);
    if (id === correct.id) {
      locked.current = true;
      setFeedback("Wonderful! You found it!");
      setScore((value) => value + 1);
      return;
    }
    setFeedback("Good try! Let’s have another look.");
  }

  return (
    <div>
      <div className={cn("mx-auto mb-4 w-44", feedback.startsWith("Wonderful") && "giraffe-happy")}>
        <Giraffe happy={feedback.startsWith("Wonderful")} className="h-auto w-full" />
      </div>
      <GameProgress question={index + 1} score={score} total={rounds.length} />
      <h4 ref={headingRef} id="giraffe-question" tabIndex={-1} className="mt-6 font-kids text-3xl text-ink outline-none sm:text-4xl">
        {round.prompt}
      </h4>
      <p className="mt-2 text-base text-muted">Pick the one that fits. You can try again.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3" role="group" aria-labelledby="giraffe-question">
        {round.choices.map((choice) => {
          const isCorrectPick = picked === choice.id && choice.correct;
          const isWrongPick = picked === choice.id && !choice.correct;
          return (
            <button
              key={choice.id}
              type="button"
              onClick={() => choose(choice.id)}
              className={cn(
                "min-h-20 rounded-[1.4rem] border-2 bg-cream px-4 py-4 text-xl font-extrabold text-ink",
                isCorrectPick && "border-teal bg-mint",
                isWrongPick && "border-coral bg-peach",
                !isCorrectPick && !isWrongPick && "border-sky hover:border-teal",
              )}
              aria-pressed={picked === choice.id}
            >
              {choice.label}
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
          {index + 1 >= rounds.length ? "See how you did" : "Next question"}
        </button>
      ) : null}
    </div>
  );
}
