import type { CareTopic } from "@/data/women-services";

/**
 * Children’s specialties confirmed for the clinic.
 * Neurology and cognitive care are also part of the wider practice.
 */
export const childrenTopics: CareTopic[] = [
  {
    id: "child-health",
    title: "Child health",
    summary: "Care for babies and children, from common illness to the worries a caregiver cannot settle.",
    detail:
      "Child health visits are for fever, feeding, pain, rashes, breathing, growth, and any change that concerns you. Trust what you know about the child. This website cannot decide whether a symptom is minor. If a child is very drowsy, struggling to breathe, having a seizure, or seems seriously unwell, seek urgent medical care.",
    featured: true,
    enquireCategory: "childrens-health",
  },
  {
    id: "neurology",
    title: "Neurology",
    summary: "Care for neurological questions in children and women, arranged through the clinic.",
    detail:
      "Neurology at the clinic is for concerns such as headaches, seizures, movement changes, weakness, and developmental questions that need a neurological look. Women and children can both be the reason for an enquiry. A consultation is an individual assessment. This page does not diagnose a condition or promise a particular test.",
    featured: true,
    enquireCategory: "neurology",
  },
  {
    id: "cognitive-health",
    title: "Cognitive care",
    summary: "Support for questions about learning, attention, memory, and how thinking develops.",
    detail:
      "Cognitive care covers questions about learning, attention, memory, and how a child thinks, plays, and develops. Cognitive concerns in women can be discussed as well. Describe what you notice at home or at school, and ask what a visit can cover. The website cannot measure cognition or replace an assessment.",
    featured: true,
    enquireCategory: "cognitive",
  },
];
