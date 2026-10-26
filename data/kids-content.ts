export type Stanza = string[];

export type Poem = {
  id: string;
  title: string;
  kind: "poem";
  intro: string;
  stanzas: Stanza[];
};

export type Rhyme = {
  id: string;
  title: string;
  kind: "rhyme";
  intro: string;
  stanzas: Stanza[];
  reminder: string;
};

export type FeedChoice = {
  id: string;
  label: string;
  correct: boolean;
};

export type FeedQuestion = {
  id: string;
  prompt: string;
  choices: FeedChoice[];
};

export type ColourToken = {
  id: string;
  name: string;
  fill: string;
  text: string;
};

export const poems: Poem[] = [
  {
    id: "the-little-seed",
    title: "The Little Seed",
    kind: "poem",
    intro: "A story about waiting, rain, sunshine, and growing in your own time.",
    stanzas: [
      [
        "A tiny seed beneath the ground,",
        "Slept so still without a sound.",
        "Then came the rain, the sun shone bright,",
        "Up grew a leaf to greet the light.",
      ],
      [
        "Day by day, it stretched up high,",
        "Waving green hands to the sky.",
        "With time and care, it learned to grow,",
        "A little seed with much to show!",
      ],
    ],
  },
  {
    id: "my-brave-little-heart",
    title: "My Brave Little Heart",
    kind: "poem",
    intro: "A poem about asking for help, resting, and growing a little each day.",
    stanzas: [
      [
        "My little heart can learn and grow,",
        "Through sunny days and winds that blow.",
        "I can ask for help when things feel tough,",
        "I can be gentle, kind and brave enough.",
      ],
      [
        "I can rest, and I can try,",
        "I can reach for the open sky.",
        "Every day, in my own way,",
        "I grow a little more each day!",
      ],
    ],
  },
];

export const rhymes: Rhyme[] = [
  {
    id: "wash-wash-little-hands",
    title: "Wash, Wash, Little Hands",
    kind: "rhyme",
    intro: "A short rhyme about soap, bubbles, and clean hands.",
    stanzas: [
      [
        "Wash, wash, little hands,",
        "Bubbles dancing, tiny bands.",
        "Front and back and in between,",
        "Rinse them till they're fresh and clean!",
      ],
      [
        "Dry them gently, one, two, three,",
        "Clean little hands for you and me!",
      ],
    ],
    reminder: "Washing with soap and water helps keep little hands clean.",
  },
  {
    id: "stretch-up-to-the-sky",
    title: "Stretch Up to the Sky",
    kind: "rhyme",
    intro: "A movement rhyme you can listen to, imagine, or try gently.",
    stanzas: [
      [
        "Stretch up high, reach for the sun,",
        "Wiggle your fingers, everyone!",
        "Bend down low, then stand up tall,",
        "Give a little wave to one and all!",
      ],
      [
        "Take a breath and smile with me,",
        "Happy little movers, one, two, three!",
      ],
    ],
    reminder:
      "Only move in a way that feels comfortable and safe. You can also sit still, listen, and imagine the stretches.",
  },
];

export const feedQuestions: FeedQuestion[] = [
  {
    id: "fruit",
    prompt: "Which of these is a fruit?",
    choices: [
      { id: "banana", label: "Banana", correct: true },
      { id: "car", label: "Toy car", correct: false },
      { id: "shoe", label: "Shoe", correct: false },
    ],
  },
  {
    id: "drink",
    prompt: "Which of these can you drink?",
    choices: [
      { id: "water", label: "Water", correct: true },
      { id: "pillow", label: "Pillow", correct: false },
      { id: "drum", label: "Drum", correct: false },
    ],
  },
  {
    id: "neck",
    prompt: "Which animal has a long neck?",
    choices: [
      { id: "giraffe", label: "Giraffe", correct: true },
      { id: "cat", label: "Cat", correct: false },
      { id: "fish", label: "Fish", correct: false },
    ],
  },
  {
    id: "round",
    prompt: "Which shape is round?",
    choices: [
      { id: "circle", label: "Circle", correct: true },
      { id: "square", label: "Square", correct: false },
      { id: "triangle", label: "Triangle", correct: false },
    ],
  },
  {
    id: "clean",
    prompt: "Which of these helps you wash your hands?",
    choices: [
      { id: "soap", label: "Soap", correct: true },
      { id: "book", label: "Book", correct: false },
      { id: "hat", label: "Hat", correct: false },
    ],
  },
  {
    id: "vegetable",
    prompt: "Which one is a vegetable?",
    choices: [
      { id: "carrot", label: "Carrot", correct: true },
      { id: "bicycle", label: "Bicycle", correct: false },
      { id: "cloud", label: "Cloud", correct: false },
    ],
  },
];

/** Distinct colours. Text colours are chosen for readable contrast on each fill. */
export const colourTokens: ColourToken[] = [
  { id: "red", name: "Red", fill: "#C53636", text: "#FFFFFF" },
  { id: "blue", name: "Blue", fill: "#2C6BC9", text: "#FFFFFF" },
  { id: "yellow", name: "Yellow", fill: "#FFD166", text: "#332638" },
  { id: "green", name: "Green", fill: "#187A50", text: "#FFFFFF" },
  { id: "orange", name: "Orange", fill: "#F08A24", text: "#332638" },
  { id: "purple", name: "Purple", fill: "#6E56A8", text: "#FFFFFF" },
  { id: "pink", name: "Pink", fill: "#F4A0B5", text: "#332638" },
  { id: "teal", name: "Teal", fill: "#0F6E66", text: "#FFFFFF" },
];

export const activities = [
  {
    id: poems[0].id,
    title: poems[0].title,
    kind: "Poem" as const,
    blurb: "Watch a little seed wake up.",
    href: "/kids-corner#the-little-seed",
    group: "poems" as const,
  },
  {
    id: poems[1].id,
    title: poems[1].title,
    kind: "Poem" as const,
    blurb: "A kind poem about a brave heart.",
    href: "/kids-corner#my-brave-little-heart",
    group: "poems" as const,
  },
  {
    id: rhymes[0].id,
    title: rhymes[0].title,
    kind: "Rhyme" as const,
    blurb: "Bubbles, soap, and clean hands.",
    href: "/kids-corner#wash-wash-little-hands",
    group: "rhymes" as const,
  },
  {
    id: rhymes[1].id,
    title: rhymes[1].title,
    kind: "Rhyme" as const,
    blurb: "Reach, wiggle, and wave.",
    href: "/kids-corner#stretch-up-to-the-sky",
    group: "rhymes" as const,
  },
  {
    id: "feed-the-giraffe",
    title: "Feed the Hungry Giraffe",
    kind: "Game" as const,
    blurb: "Help the giraffe find the right things.",
    href: "/kids-corner#feed-the-giraffe",
    group: "games" as const,
  },
  {
    id: "rainbow-colour-hunt",
    title: "Rainbow Colour Hunt",
    kind: "Game" as const,
    blurb: "Match the colour the butterfly is looking for.",
    href: "/kids-corner#rainbow-colour-hunt",
    group: "games" as const,
  },
];

export function stanzasToSpeech(stanzas: Stanza[]) {
  return stanzas.map((lines) => lines.join(" ")).join(" ");
}
