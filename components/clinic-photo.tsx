import Image from "next/image";
import { cn } from "@/lib/cn";

const photos = {
  mother: {
    src: "/images/pregnant-woman.jpg",
    alt: "A smiling pregnant woman in a patterned dress, resting a hand on her belly.",
    frame: "aspect-[3/4]",
    position: "object-[center_18%]",
  },
  child: {
    src: "/images/child-and-nurse.jpg",
    alt: "A nurse standing beside a baby resting in a hospital crib.",
    frame: "aspect-[4/3]",
    position: "object-center",
  },
  play: {
    src: "/images/girl-kids-corner.jpg",
    alt: "A young girl playing with wooden animal toys.",
    frame: "aspect-[4/5]",
    position: "object-[center_20%]",
  },
} as const;

export function ClinicPhoto({
  name,
  className,
  priority = false,
}: {
  name: keyof typeof photos;
  className?: string;
  priority?: boolean;
}) {
  const photo = photos[name];
  return (
    <figure className={cn("m-0", className)}>
      <div className={cn("relative overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/5", photo.frame)}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 640px, 100vw"
          className={cn("object-cover", photo.position)}
        />
      </div>
      <figcaption className="mt-2 text-xs font-semibold tracking-wide text-muted">Photograph</figcaption>
    </figure>
  );
}
