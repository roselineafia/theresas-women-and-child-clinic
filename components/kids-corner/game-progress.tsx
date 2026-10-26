import { cn } from "@/lib/cn";

export function GameProgress({
  question,
  total,
  score,
}: {
  question: number;
  total: number;
  score: number;
}) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-kids text-xl text-plum">
          Question {question} of {total}
        </p>
        <p className="rounded-full bg-yellow px-4 py-1.5 text-base font-extrabold text-ink">Score: {score}</p>
      </div>
      <div
        className="flex gap-2"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={score}
        aria-valuetext={`${score} of ${total} completed`}
        aria-label="Game progress"
      >
        {Array.from({ length: total }, (_, index) => (
          <span
            key={index}
            className={cn("h-3 flex-1 rounded-full", index < score ? "bg-teal" : index === score ? "bg-yellow" : "bg-sky/70")}
          />
        ))}
      </div>
    </div>
  );
}
