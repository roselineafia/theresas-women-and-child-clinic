/**
 * Roles confirmed by the clinic. Do not add a person’s name, photograph,
 * degree, or registration number until the clinic supplies that exact detail.
 */
export type TeamMember = {
  id: string;
  name?: string;
  title: string;
  role: string;
  bio: string;
  imageSrc?: string;
  imageAlt?: string;
  credentials?: string[];
};

export const teamMembers: TeamMember[] = [
  {
    id: "midwives",
    title: "Midwives",
    role: "Antenatal and postnatal care",
    bio: "Midwives are part of the team for pregnancy care, birth-related questions, and the weeks after a baby arrives.",
  },
  {
    id: "paediatric-specialist",
    title: "Paediatric specialist",
    role: "Child health",
    bio: "A paediatric specialist sees babies and children, including everyday illness, growth, and development questions.",
  },
  {
    id: "neurosurgeon",
    title: "Neurosurgeon",
    role: "Neurology",
    bio: "A neurosurgeon is part of the team for neurological concerns that may need a surgical opinion. Ask the clinic what a visit can cover.",
  },
  {
    id: "physician-specialist",
    title: "Physician specialist",
    role: "Women’s health",
    bio: "A physician specialist provides medical consultations, including women’s health concerns that need a physician’s assessment.",
  },
];
