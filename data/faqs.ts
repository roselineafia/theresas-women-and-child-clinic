export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const womenFaqs: FaqItem[] = [
  {
    id: "advice",
    question: "Is the information on this page medical advice?",
    answer:
      "No. It is general information to help you prepare for a conversation with a qualified healthcare professional. It cannot diagnose a condition, interpret a test, or tell you which treatment is right for you.",
  },
  {
    id: "services",
    question: "Are all of these services available at the clinic?",
    answer:
      "The clinic’s specialties are women’s health, antenatal care, postnatal care, child health, neurology, and cognitive care. Call or WhatsApp 0543212869 to ask which appointment type fits. This page does not list procedures or fees.",
  },
  {
    id: "motherhood",
    question: "Do I need to be pregnant or a mother to attend?",
    answer:
      "No. Women’s health covers many stages of life. You are welcome to enquire about your own health whether or not you are pregnant, planning a pregnancy, or caring for a child.",
  },
  {
    id: "support-person",
    question: "Can someone come with me?",
    answer:
      "Many people prefer a partner, friend, or family member nearby. Ask the clinic how privacy is handled and who may join a consultation. You can also ask to speak alone for part of the visit.",
  },
];

export const childrenFaqs: FaqItem[] = [
  {
    id: "when-to-visit",
    question: "When should I arrange care for a child?",
    answer:
      "Arrange a consultation when you are worried, when a symptom is not settling, or when you need advice about growth, feeding, or development. If a child has trouble breathing, a seizure, heavy bleeding, is difficult to wake, or seems seriously unwell, seek urgent medical care or contact local emergency services. Do not wait for a website enquiry.",
  },
  {
    id: "kids-corner",
    question: "Is the Kids Corner part of medical treatment?",
    answer:
      "No. The Kids Corner has original poems, rhymes, and gentle games. It is entertainment and simple learning for children and caregivers. It does not diagnose, treat, or monitor a child.",
  },
  {
    id: "records",
    question: "What should I bring to a child’s visit?",
    answer:
      "Bring any records you already have, a list of medicines or allergies, and your questions. If you use a child health record book, bring that too. You do not need a perfect history for the conversation to be useful.",
  },
  {
    id: "confirmed-services",
    question: "Does the clinic offer immunisation and growth checks?",
    answer:
      "This website cannot confirm that yet. Preventive care is described in general terms. Ask the clinic directly which children’s services are available before you rely on a particular visit type.",
  },
];

export const guideFaqs: FaqItem[] = [
  {
    id: "not-a-booking",
    question: "Does the enquiry form book my appointment?",
    answer:
      "No. The form on this website is a demonstration. It checks that the fields are filled in sensibly, then stops. It does not send your details to the clinic and it does not reserve a time. Call or WhatsApp 0543212869 and ask the clinic to confirm availability.",
  },
  {
    id: "what-to-share",
    question: "Should I write my medical history in the form?",
    answer:
      "No. Share only what is needed to request a conversation, such as your name, a phone number, and the specialty you are asking about. Keep detailed symptoms and history for the clinician. Do not include another person’s private medical information unless you are their caregiver and it is necessary.",
  },
  {
    id: "fees",
    question: "What are the consultation fees and opening hours?",
    answer:
      "The clinic is open Monday to Saturday, 8:00 am to 8:00 pm. Fees, insurance, and payment methods have not been published. Ask the clinic before you rely on an estimate.",
  },
  {
    id: "privacy",
    question: "How is my information protected?",
    answer:
      "This marketing website does not run a patient-record system, and the demonstration form does not store or transmit what you type. A real clinic enquiry should follow the clinic’s own privacy practice. Ask how records are kept, who can receive results, and how a child’s information is shared with caregivers.",
  },
];

export const contactFaqs: FaqItem[] = [
  {
    id: "after-submit",
    question: "What happens after I submit the form?",
    answer:
      "You will see a confirmation that the demonstration checked your entries. Nothing is sent to the clinic, and no appointment is held. Call or WhatsApp 0543212869 to make a real enquiry.",
  },
  {
    id: "which-category",
    question: "Which enquiry category should I choose?",
    answer:
      "Choose women’s health, antenatal care, postnatal care, child health, neurology, cognitive care, or a general enquiry. If you are unsure, choose general. The category only helps organise a future conversation. It is not a diagnosis.",
  },
];
