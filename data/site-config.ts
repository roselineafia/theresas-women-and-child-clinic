/**
 * Confirmed clinic facts live here. Social accounts stay unpublished
 * until the clinic supplies them.
 */
function fromEnv(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

const phoneDisplay = fromEnv(process.env.NEXT_PUBLIC_CLINIC_PHONE) ?? "0543212869";
const phoneDigits = phoneDisplay.replace(/\D/g, "");
const international = phoneDigits.startsWith("0") ? `233${phoneDigits.slice(1)}` : phoneDigits;

export const siteConfig = {
  name: "Theresa’s Women and Child Clinic",
  shortName: "Theresa’s Clinic",
  tagline: "A place to grow, heal and thrive",
  description:
    "Theresa’s Women and Child Clinic in Ashongman Estate, Accra, cares for women and children. Specialties include women’s health, antenatal care, postnatal care, child health, neurology, and cognitive care.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  locale: "en_GH",
  contact: {
    phone: phoneDisplay,
    phoneHref: `tel:+${international}`,
    whatsapp: phoneDisplay,
    whatsappHref: `https://wa.me/${international}`,
    email: fromEnv(process.env.NEXT_PUBLIC_CLINIC_EMAIL) ?? "theresawomenandchildclinic@gmail.com",
    address: fromEnv(process.env.NEXT_PUBLIC_CLINIC_ADDRESS) ?? "Ashongman Estate, Accra, Ghana",
    locality: "Ashongman Estate",
    city: "Accra",
    hours: fromEnv(process.env.NEXT_PUBLIC_CLINIC_HOURS) ?? "Monday to Saturday, 8:00 am to 8:00 pm",
  },
  specialties: [
    { title: "Women’s health", href: "/womens-health#womens-health" },
    { title: "Antenatal care", href: "/womens-health#antenatal-care" },
    { title: "Postnatal care", href: "/womens-health#postnatal-care" },
    { title: "Child health", href: "/childrens-health#child-health" },
    { title: "Neurology", href: "/childrens-health#neurology" },
    { title: "Cognitive care", href: "/childrens-health#cognitive-health" },
  ],
  /**
   * Revise these statements with the clinic before treating them as final.
   * They describe the intended promise of this website, not a historical claim.
   */
  mission:
    "To care for women and children with respect, clarity, and compassion, and to help families find the information and the next step they need.",
  vision:
    "A clinic where every woman feels heard, every child feels safe, and every caregiver is reminded that they matter too.",
} as const;

export const hasAnyContactDetail = Boolean(
  siteConfig.contact.phone ||
    siteConfig.contact.email ||
    siteConfig.contact.address ||
    siteConfig.contact.hours,
);
