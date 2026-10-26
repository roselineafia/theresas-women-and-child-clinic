import Image from "next/image";
import type { TeamMember } from "@/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  const heading = member.name ?? member.title;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card">
      {member.imageSrc ? (
        <Image
          src={member.imageSrc}
          alt={member.imageAlt || ""}
          width={640}
          height={800}
          className="aspect-[4/5] w-full object-cover"
        />
      ) : null}
      <div className="flex flex-1 flex-col space-y-2 p-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-deep">{member.role}</p>
        <h3 className="text-2xl text-plum">{heading}</h3>
        {member.name ? <p className="font-extrabold text-ink">{member.title}</p> : null}
        <p className="flex-1 leading-relaxed text-muted">{member.bio}</p>
        {member.credentials?.length ? (
          <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
            {member.credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
