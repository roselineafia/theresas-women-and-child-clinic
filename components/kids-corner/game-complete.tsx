import { Button } from "@/components/button";

export function GameComplete({
  title,
  message,
  score,
  total,
  onReplay,
}: {
  title: string;
  message: string;
  score: number;
  total: number;
  onReplay: () => void;
}) {
  return (
    <div className="reward-pop rounded-[1.7rem] bg-mint px-6 py-8 text-center">
      <h4 className="font-kids text-4xl text-plum">{title}</h4>
      <p className="mx-auto mt-3 max-w-md text-lg leading-relaxed text-ink">{message}</p>
      <p className="mt-4 text-xl font-extrabold text-teal-deep">
        Score: {score} out of {total}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button variant="yellow" onClick={onReplay}>
          Play Again
        </Button>
        <Button variant="secondary" onClick={() => document.getElementById("activities")?.scrollIntoView()}>
          All activities
        </Button>
      </div>
    </div>
  );
}
