export type CareTopic = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  featured?: boolean;
  enquireCategory: "womens-health" | "antenatal" | "postnatal" | "childrens-health" | "neurology" | "cognitive" | "general";
};

/**
 * Specialties confirmed for Theresa’s Women and Child Clinic.
 * Descriptions stay general. They are not a list of procedures or outcomes.
 */
export const womenTopics: CareTopic[] = [
  {
    id: "womens-health",
    title: "Women’s health",
    summary: "Care for women’s health at every stage, with time to ask the questions that matter.",
    detail:
      "Women’s health at the clinic covers everyday concerns such as pain, menstrual changes, energy, sleep, mood, and symptoms you want a clinician to hear. You do not need to be pregnant, and you do not need a perfect explanation before you enquire. Bring the questions that are yours.",
    featured: true,
    enquireCategory: "womens-health",
  },
  {
    id: "antenatal-care",
    title: "Antenatal care",
    summary: "Pregnancy care that follows you from the early weeks through preparation for birth.",
    detail:
      "Antenatal care is for women who are pregnant or preparing for birth. Visits are a chance to check wellbeing, talk about changes in your body, and ask what to expect. This page shares general information only. It cannot tell you whether a symptom is safe to watch at home. If something feels urgent, seek urgent care rather than waiting for a website reply.",
    featured: true,
    enquireCategory: "antenatal",
  },
  {
    id: "postnatal-care",
    title: "Postnatal care",
    summary: "Care for recovery, feeding questions, mood, and the early weeks after a baby arrives.",
    detail:
      "Postnatal care looks after the woman as well as the baby. The weeks after birth can bring healing, feeding questions, tiredness, and feelings that are hard to name. Ask for care if you are struggling, even if you think you should be coping. Individual advice belongs in a consultation, not on a website.",
    featured: true,
    enquireCategory: "postnatal",
  },
];
