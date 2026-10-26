import { cn } from "@/lib/cn";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

const glyphs: Record<string, React.ReactNode> = {
  "womens-health": (
    <Frame>
      <circle cx="24" cy="24" r="8" stroke="#7A2E9B" strokeWidth="2.2" />
      <path d="M24 8c2 4 2 6 0 8M24 32c2 4 2 6 0 8M8 24c4-2 6-2 8 0M32 24c4-2 6-2 8 0" stroke="#FF7EB3" strokeWidth="2.2" />
    </Frame>
  ),
  "reproductive-health": (
    <Frame>
      <path d="M24 38c-8-6-12-12-12-18a8 8 0 0 1 16 0c0 6-4 12-4 18Z" stroke="#7A2E9B" strokeWidth="2.2" />
      <path d="M24 38c8-6 12-12 12-18a8 8 0 0 0-16 0" stroke="#3DBE78" strokeWidth="2.2" />
    </Frame>
  ),
  "antenatal-care": (
    <Frame>
      <circle cx="24" cy="16" r="5" stroke="#7A2E9B" strokeWidth="2.2" />
      <path d="M14 36c1-7 5-11 10-11s9 4 10 11" stroke="#FF7EB3" strokeWidth="2.2" />
      <path d="M30 28c4 1 7 4 8 8" stroke="#3DBE78" strokeWidth="2.2" />
      <circle cx="36" cy="20" r="3" stroke="#FFE566" strokeWidth="2.2" />
    </Frame>
  ),
  "postnatal-care": (
    <Frame>
      <path d="M24 36s-10-6-10-13a6 6 0 0 1 10-4 6 6 0 0 1 10 4c0 7-10 13-10 13Z" stroke="#FF7EB3" strokeWidth="2.2" />
      <path d="M18 22c2-6 10-8 14-4" stroke="#7A2E9B" strokeWidth="2.2" />
    </Frame>
  ),
  "preventive-health": (
    <Frame>
      <path d="M24 8 36 13v9c0 8-5 13-12 16-7-3-12-8-12-16v-9L24 8Z" stroke="#7A2E9B" strokeWidth="2.2" />
      <path d="M18 23l4 4 8-9" stroke="#3DBE78" strokeWidth="2.2" />
    </Frame>
  ),
  "child-health": (
    <Frame>
      <circle cx="24" cy="18" r="6" stroke="#1B7A46" strokeWidth="2.2" />
      <path d="M14 36c1.5-6 5-9 10-9s8.5 3 10 9" stroke="#3DBE78" strokeWidth="2.2" />
      <circle cx="36" cy="14" r="3" fill="#FFE566" stroke="none" />
    </Frame>
  ),
  neurology: (
    <Frame>
      <path d="M24 38V18" stroke="#1B7A46" strokeWidth="2.2" />
      <path d="M24 24c-6-1-9-6-8-10 5 1 8 5 8 10Z" fill="#3DBE78" stroke="none" />
      <path d="M24 26c6-1 10-5 9-10-5 1-9 5-9 10Z" fill="#FFE566" stroke="none" />
      <path d="M16 38h16" stroke="#7A2E9B" strokeWidth="2.2" />
    </Frame>
  ),
  "cognitive-health": (
    <Frame>
      <circle cx="24" cy="24" r="8" fill="#FFE566" stroke="none" />
      <path d="M24 8v4M24 36v4M8 24h4M36 24h4M12 12l3 3M33 33l3 3M36 12l-3 3M15 33l-3 3" stroke="#E6B83A" strokeWidth="2.2" />
      <path d="M21 24c1 2 5 2 6 0" stroke="#332638" strokeWidth="1.8" />
    </Frame>
  ),
  "preventive-care": (
    <Frame>
      <circle cx="24" cy="24" r="12" stroke="#1B7A46" strokeWidth="2.2" />
      <path d="M24 16v16M16 24h16" stroke="#3DBE78" strokeWidth="2.2" />
    </Frame>
  ),
  "caregiver-guidance": (
    <Frame>
      <path d="M16 30c0-6 4-8 8-8s8 2 8 8" stroke="#1B7A46" strokeWidth="2.2" />
      <circle cx="18" cy="18" r="4" stroke="#7A2E9B" strokeWidth="2.2" />
      <circle cx="32" cy="16" r="3.2" stroke="#FF7EB3" strokeWidth="2.2" />
      <path d="M12 36h24" stroke="#3DBE78" strokeWidth="2.2" />
    </Frame>
  ),
};

export function TopicGlyph({ id, tone }: { id: string; tone: "women" | "children" }) {
  return (
    <span
      className={cn(
        "inline-flex h-14 w-14 items-center justify-center rounded-2xl",
        tone === "women" ? "bg-peach" : "bg-mint",
      )}
    >
      {glyphs[id] ?? glyphs["womens-health"]}
    </span>
  );
}
