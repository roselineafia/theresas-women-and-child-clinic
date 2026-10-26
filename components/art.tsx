import { cn } from "@/lib/cn";

type ArtProps = { className?: string };

export function Sun({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <g fill="#FFE566">
        {Array.from({ length: 8 }, (_, index) => (
          <rect key={index} x="36" y="4" width="8" height="14" rx="4" transform={`rotate(${index * 45} 40 40)`} />
        ))}
      </g>
      <circle cx="40" cy="40" r="16" fill="#FFE566" />
      <circle cx="34" cy="38" r="2" fill="#332638" />
      <circle cx="46" cy="38" r="2" fill="#332638" />
      <path d="M33 46c2.5 4 11.5 4 14 0" fill="none" stroke="#332638" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Butterfly({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 120 90" className={className} aria-hidden="true">
      <path d="M58 40c-18-28-48-24-46 2 2 20 24 24 46 8Z" fill="#C9B7F2" />
      <path d="M58 48c-16 20-40 22-38 4 2-16 20-16 38-6Z" fill="#FF7EB3" />
      <path d="M62 40c18-28 48-24 46 2-2 20-24 24-46 8Z" fill="#A9DDF7" />
      <path d="M62 48c16 20 40 22 38 4-2-16-20-16-38-6Z" fill="#FFE566" />
      <ellipse cx="60" cy="46" rx="4" ry="16" fill="#7A2E9B" />
      <path d="M56 32c-6-10-2-16 2-16M64 32c6-10 2-16-2-16" stroke="#7A2E9B" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="54" cy="16" r="2.4" fill="#7A2E9B" />
      <circle cx="66" cy="16" r="2.4" fill="#7A2E9B" />
    </svg>
  );
}

export function Flower({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <circle cx="28" cy="34" r="12" fill="#F7C9D8" />
      <circle cx="52" cy="34" r="12" fill="#C9B7F2" />
      <circle cx="40" cy="22" r="12" fill="#FFE566" />
      <circle cx="30" cy="50" r="12" fill="#A9DDF7" />
      <circle cx="50" cy="50" r="12" fill="#FF7EB3" />
      <circle cx="40" cy="40" r="8" fill="#7A2E9B" />
      <path d="M40 58v14" stroke="#3DBE78" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Star({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M24 6l4.2 10.2L39 18l-8 7.2L33.4 38 24 32.4 14.6 38 17 25.2 9 18l10.8-1.8L24 6Z" fill="#FFE566" />
    </svg>
  );
}

export function Leaf({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M14 40c8-22 28-28 40-28-2 18-12 34-32 38-2-4-6-8-8-10Z" fill="#3DBE78" />
      <path d="M22 42c8-8 16-14 26-18" stroke="#FFF9F0" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Face({
  cx,
  cy,
  r,
  skin,
}: {
  cx: number;
  cy: number;
  r: number;
  skin: string;
}) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={skin} />
      <circle cx={cx - r * 0.28} cy={cy + r * 0.05} r={r * 0.16} fill="#F4B2A4" opacity="0.55" />
      <circle cx={cx + r * 0.28} cy={cy + r * 0.05} r={r * 0.16} fill="#F4B2A4" opacity="0.55" />
      <path
        d={`M${cx - r * 0.28} ${cy - r * 0.08}c${r * 0.08}-4 ${r * 0.2}-4 ${r * 0.26} 0`}
        stroke="#332638"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={`M${cx + r * 0.04} ${cy - r * 0.08}c${r * 0.08}-4 ${r * 0.2}-4 ${r * 0.26} 0`}
        stroke="#332638"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={`M${cx - r * 0.22} ${cy + r * 0.32}c${r * 0.16} ${r * 0.22} ${r * 0.32} ${r * 0.22} ${r * 0.46} 0`}
        stroke="#A85A58"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

export function HeroScene({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 640 700" className={cn("h-auto w-full", className)} aria-hidden="true">
      <rect x="24" y="16" width="592" height="668" rx="52" fill="#FFF9F0" />
      <circle cx="470" cy="150" r="150" fill="#F7C9D8" />
      <circle cx="150" cy="560" r="150" fill="#E7F6F0" />
      <circle cx="530" cy="470" r="78" fill="#A9DDF7" />
      <rect x="452" y="58" width="112" height="168" rx="56" fill="#FFFFFF" opacity="0.72" />
      <ellipse cx="320" cy="628" rx="220" ry="26" fill="#E6D0BC" />
      <rect x="86" y="498" width="250" height="26" rx="13" fill="#FFFFFF" />
      <rect x="108" y="520" width="14" height="40" rx="6" fill="#C9A88A" />
      <rect x="292" y="520" width="14" height="40" rx="6" fill="#C9A88A" />

      <path d="M118 330c8-70 40-92 78-78 18 6 28 24 30 42 28-6 62 8 70 46 6 28-8 70-18 112H150c-18-36-48-78-32-122Z" fill="#F08B82" />
      <path d="M150 250c-6-48 18-78 52-74 22-18 52-4 58 22 16 8 22 30 12 48-18 10-96 16-122 4Z" fill="#3A241C" />
      <Face cx={196} cy={268} r={34} skin="#D39A6A" />
      <path d="M236 360c28 8 58 34 74 62" stroke="#D39A6A" strokeWidth="16" strokeLinecap="round" fill="none" />

      <path d="M430 390c-8 70 4 130 22 168h92c10-48-4-120-18-168-22 16-74 16-96 0Z" fill="#FFFFFF" />
      <path d="M468 404c10 36 12 78 8 112" stroke="#3DBE78" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M452 392h42l-8 22h-26Z" fill="#1B7A46" />
      <path d="M430 300c2-40 24-62 50-56 18-14 40 0 42 20 12 8 12 32 2 46-24 8-86 10-94-10Z" fill="#241610" />
      <Face cx={478} cy={322} r={30} skin="#A56B4A" />
      <path d="M520 430c22 8 36 28 34 52" stroke="#A56B4A" strokeWidth="14" strokeLinecap="round" fill="none" />

      <path d="M286 430c-10 46-2 96 16 132h52c8-40 2-92-10-132-16 10-44 10-58 0Z" fill="#FFE566" />
      <path d="M292 360c-4-34 16-52 36-48 16-18 40-6 44 16 12 4 18 20 10 34-16 6-78 8-90-2Z" fill="#2C1812" />
      <Face cx={326} cy={378} r={24} skin="#E7B98A" />
      <path d="M250 560c18-10 40-8 52 6" stroke="#E7B98A" strokeWidth="12" strokeLinecap="round" fill="none" />
      <circle cx="368" cy="500" r="9" fill="#FF7EB3" />
      <circle cx="368" cy="500" r="3.5" fill="#FFE566" />
      <path d="M368 508v26" stroke="#3DBE78" strokeWidth="3" strokeLinecap="round" />
      <path d="M368 520c-8-2-12-8-10-12 6 1 9 6 10 12Z" fill="#3DBE78" />

      <circle cx="92" cy="120" r="8" fill="#FFE566" />
      <circle cx="118" cy="98" r="4" fill="#C9B7F2" />
      <circle cx="78" cy="150" r="3" fill="#FF7EB3" />
    </svg>
  );
}

export function WelcomeScene({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 520 460" className={cn("h-auto w-full", className)} aria-hidden="true">
      <rect x="16" y="16" width="488" height="428" rx="44" fill="#FFF9F0" />
      <circle cx="130" cy="120" r="80" fill="#F7C9D8" />
      <circle cx="390" cy="300" r="90" fill="#E7F6F0" />
      <path d="M150 250c20-70 40-90 70-70 10 30 8 70-10 110-30 10-70 4-60-40Z" fill="#FFF" stroke="#7A2E9B" strokeWidth="3" />
      <path d="M300 250c-10-74-30-96-64-70-8 34 0 74 20 112 32 6 58-6 44-42Z" fill="#FFF" stroke="#1B7A46" strokeWidth="3" />
      <path d="M248 300c8-70 18-90 18-90s12 22 18 90c-8 16-28 18-36 0Z" fill="#3DBE78" />
      <path d="M266 230c-16-2-24-16-20-28 12 2 18 14 20 28Z" fill="#3DBE78" />
      <path d="M266 238c16-4 28-16 24-30-14 2-22 16-24 30Z" fill="#FF7EB3" />
      <circle cx="266" cy="150" r="16" fill="#FFE566" />
      <path d="M210 250c20 20 90 24 112 0" stroke="#C9A88A" strokeWidth="8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function PathwayWomen({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 220 160" className={className} aria-hidden="true">
      <rect width="220" height="160" rx="28" fill="#F6EEF3" />
      <circle cx="78" cy="78" r="28" fill="#F7C9D8" />
      <circle cx="122" cy="70" r="28" fill="#C9B7F2" />
      <circle cx="104" cy="104" r="28" fill="#FF7EB3" />
      <circle cx="100" cy="84" r="12" fill="#7A2E9B" />
      <path d="M100 112v24" stroke="#3DBE78" strokeWidth="4" strokeLinecap="round" />
      <path d="M154 48c10 8 14 18 8 28" stroke="#7A2E9B" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function PathwayMothers({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 220 160" className={className} aria-hidden="true">
      <rect width="220" height="160" rx="28" fill="#FFF0E9" />
      <path d="M70 112c4-36 22-52 42-52s36 16 40 52H70Z" fill="#FF7EB3" />
      <circle cx="112" cy="52" r="18" fill="#D39A6A" />
      <path d="M94 48c2-16 12-24 24-20 8-8 20 0 20 12 4 10-6 20-16 22-12 2-26-2-28-14Z" fill="#3A241C" />
      <circle cx="112" cy="54" r="14" fill="#D39A6A" />
      <circle cx="156" cy="96" r="16" fill="#FFE566" />
      <path d="M150 90c2 4 8 4 10 0" stroke="#332638" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function PathwayChildren({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 220 160" className={className} aria-hidden="true">
      <rect width="220" height="160" rx="28" fill="#E7F6F0" />
      <circle cx="150" cy="42" r="16" fill="#FFE566" />
      <path d="M48 118c8-30 20-40 36-28 6 18 2 36-8 48H52c-8-6-8-12-4-20Z" fill="#F6C453" />
      <rect x="78" y="46" width="16" height="62" rx="8" fill="#F6C453" />
      <circle cx="98" cy="42" r="16" fill="#F6C453" />
      <circle cx="92" cy="40" r="2" fill="#332638" />
      <circle cx="104" cy="40" r="2" fill="#332638" />
      <path d="M94 48c3 3 8 3 10 0" stroke="#332638" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <circle cx="86" cy="28" r="3" fill="#7A2E9B" />
      <circle cx="108" cy="26" r="3" fill="#7A2E9B" />
      <path d="M170 70c16-18 36-8 30 10-14 6-30 2-30-10Z" fill="#C9B7F2" />
      <path d="M168 78c12 12 28 8 24-4" fill="#FF7EB3" />
    </svg>
  );
}

export function Giraffe({ className, happy = false }: ArtProps & { happy?: boolean }) {
  return (
    <svg viewBox="0 0 260 340" className={className} aria-hidden="true">
      <ellipse cx="118" cy="250" rx="72" ry="52" fill="#F6C453" />
      <circle cx="78" cy="236" r="10" fill="#7A2E9B" />
      <circle cx="112" cy="262" r="12" fill="#7A2E9B" />
      <circle cx="150" cy="240" r="9" fill="#7A2E9B" />
      <rect x="86" y="286" width="14" height="36" rx="7" fill="#F6C453" />
      <rect x="112" y="292" width="14" height="32" rx="7" fill="#F6C453" />
      <rect x="146" y="286" width="14" height="36" rx="7" fill="#F6C453" />
      <rect x="168" y="292" width="14" height="30" rx="7" fill="#E6B03A" />
      <path d="M70 246c-24 8-30 24-18 28" stroke="#E6B03A" strokeWidth="6" fill="none" strokeLinecap="round" />
      <rect x="156" y="78" width="34" height="150" rx="17" fill="#F6C453" />
      <circle cx="162" cy="120" r="7" fill="#7A2E9B" />
      <circle cx="178" cy="156" r="7" fill="#7A2E9B" />
      <circle cx="164" cy="190" r="6" fill="#7A2E9B" />
      <ellipse cx="188" cy="78" rx="42" ry="32" fill="#F6C453" />
      <circle cx="170" cy="62" r="7" fill="#7A2E9B" />
      <path d="M168 52c-2-16 6-22 8-22M196 50c2-16 10-18 12-10" stroke="#E6B03A" strokeWidth="4" strokeLinecap="round" />
      <circle cx="166" cy="30" r="6" fill="#7A2E9B" />
      <circle cx="208" cy="36" r="6" fill="#7A2E9B" />
      <ellipse cx="150" cy="70" rx="8" ry="12" fill="#F4B07A" />
      <circle cx="176" cy="74" r="3" fill="#332638" />
      <circle cx="196" cy="72" r="3" fill="#332638" />
      <path d={happy ? "M176 88c6 8 16 8 22 0" : "M180 90h14"} stroke="#332638" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      {happy ? (
        <g>
          <path d="M214 96c10 2 16 12 10 18-8-2-12-8-10-18Z" fill="#3DBE78" />
          <path d="M210 108c12-2 20-12 16-20-8 2-14 10-16 20Z" fill="#FF7EB3" />
        </g>
      ) : (
        <g>
          <circle cx="230" cy="48" r="16" fill="#FFFFFF" />
          <text x="224" y="54" fill="#7A2E9B" fontSize="18" fontFamily="Nunito, sans-serif" fontWeight="700">
            ?
          </text>
        </g>
      )}
    </svg>
  );
}

export function GrowingSeed({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 280 300" className={className} aria-hidden="true">
      <circle cx="214" cy="58" r="22" fill="#FFE566" />
      <g stroke="#FFE566" strokeWidth="4" strokeLinecap="round">
        <path d="M214 24v10M214 82v10M180 58h10M238 58h10M190 34l7 7M231 75l7 7M238 34l-7 7M197 75l-7 7" />
      </g>
      <ellipse cx="140" cy="236" rx="90" ry="28" fill="#C9A88A" />
      <ellipse cx="140" cy="228" rx="70" ry="16" fill="#E6D0BC" />
      <ellipse cx="140" cy="214" rx="10" ry="7" fill="#8D6A45" />
      <g className="seed-grow">
        <path d="M140 214V108" stroke="#3DBE78" strokeWidth="6" strokeLinecap="round" />
        <path d="M140 150c-28-4-40-28-32-46 20 4 30 24 32 46Z" fill="#3DBE78" />
        <path d="M140 132c26-6 42-26 34-46-22 4-32 24-34 46Z" fill="#7ED0C6" />
        <path d="M140 112c-18-2-28-16-22-28 14 2 20 14 22 28Z" fill="#1B7A46" />
      </g>
      <path d="M40 70c18-16 36-8 30 8-16 4-30 0-30-8Z" fill="#A9DDF7" opacity="0.9" />
    </svg>
  );
}

export function HeartFriend({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 240 220" className={className} aria-hidden="true">
      <path d="M120 188s-68-40-68-90c0-28 20-46 44-46 14 0 24 6 24 6s10-6 24-6c24 0 44 18 44 46 0 50-68 90-68 90Z" fill="#FF7EB3" />
      <circle cx="96" cy="96" r="5" fill="#332638" />
      <circle cx="144" cy="96" r="5" fill="#332638" />
      <path d="M104 118c8 10 24 10 32 0" stroke="#7A2E9B" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="78" cy="112" r="8" fill="#F7C9D8" />
      <circle cx="162" cy="112" r="8" fill="#F7C9D8" />
      <path d="M62 150c-16 8-22 20-14 24" stroke="#FFE566" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M178 150c16 8 22 20 14 24" stroke="#FFE566" strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="190" cy="42" r="8" fill="#FFE566" />
      <circle cx="48" cy="56" r="5" fill="#A9DDF7" />
    </svg>
  );
}

export function HandwashArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 280 220" className={className} aria-hidden="true">
      <rect width="280" height="220" rx="36" fill="#E7F6FB" />
      <circle className="bubble" cx="70" cy="150" r="8" fill="#A9DDF7" style={{ animationDelay: "0s" }} />
      <circle className="bubble" cx="108" cy="168" r="5" fill="#FFFFFF" style={{ animationDelay: "0.6s" }} />
      <circle className="bubble" cx="180" cy="160" r="7" fill="#C9B7F2" style={{ animationDelay: "1.1s" }} />
      <circle className="bubble" cx="206" cy="142" r="4" fill="#FFE566" style={{ animationDelay: "1.7s" }} />
      <path d="M70 150c20-10 36-46 30-78 18 8 28 20 30 36 10-20 28-28 42-22 8 22-2 48-14 64 16 6 24 20 18 34-20 8-70 10-106-34Z" fill="#F3C7A6" stroke="#C48A62" strokeWidth="3" />
      <path d="M118 92c6 16 4 32-2 46" stroke="#E7B08A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="188" y="78" width="42" height="26" rx="8" fill="#7ED0C6" transform="rotate(-18 188 78)" />
      <path d="M40 176c30 16 150 20 200-6" stroke="#5AA4C8" strokeWidth="6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function StretchKid({ className, stretching = false }: ArtProps & { stretching?: boolean }) {
  return (
    <svg viewBox="0 0 240 300" className={className} aria-hidden="true">
      <circle cx="186" cy="42" r="18" fill="#FFE566" />
      <g className={stretching ? "stretch-arms" : undefined}>
        <g className="arm-left">
          <path d="M78 128c-30 8-46 32-40 42" stroke="#E7B98A" strokeWidth="12" strokeLinecap="round" fill="none" />
        </g>
        <g className="arm-right">
          <path d="M162 128c30 8 46 32 40 42" stroke="#E7B98A" strokeWidth="12" strokeLinecap="round" fill="none" />
        </g>
      </g>
      <path d="M96 150c-4 40 2 78 14 96h28c8-22 12-58 6-96-12 8-36 8-48 0Z" fill="#A9DDF7" />
      <path d="M92 118c-2-28 14-44 32-40 14-16 36-4 38 16 10 4 16 18 8 30-14 6-66 8-78-6Z" fill="#2C1812" />
      <circle cx="120" cy="124" r="22" fill="#E7B98A" />
      <circle cx="112" cy="122" r="2.2" fill="#332638" />
      <circle cx="128" cy="122" r="2.2" fill="#332638" />
      <path d="M112 134c4 5 12 5 16 0" stroke="#A85A58" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M104 230c-2 20 4 32 10 36M146 230c2 20-4 32-10 36" stroke="#1B7A46" strokeWidth="8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Cloud({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 140 70" className={className} aria-hidden="true">
      <path d="M36 54c-16 0-24-10-20-22 2-8 10-12 18-10 4-12 20-16 32-8 8-10 26-8 32 4 14-2 26 10 22 22 2 8-4 14-16 14H36Z" fill="#FFFFFF" />
    </svg>
  );
}
