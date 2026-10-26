export type NavItem = {
  href: string;
  label: string;
  kids?: boolean;
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/womens-health", label: "Women’s Health" },
  { href: "/childrens-health", label: "Children’s Health" },
  { href: "/our-team", label: "Our Care Team" },
  { href: "/patient-guide", label: "Patient Guide" },
  { href: "/kids-corner", label: "Kids Corner", kids: true },
  { href: "/contact", label: "Contact" },
];

export const footerExplore: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-team", label: "Our Care Team" },
  { href: "/patient-guide", label: "Patient and Parent Guide" },
  { href: "/contact", label: "Contact and Appointments" },
  { href: "/kids-corner", label: "Kids Corner", kids: true },
];

export const footerCare: NavItem[] = [
  { href: "/womens-health#womens-health", label: "Women’s health" },
  { href: "/womens-health#antenatal-care", label: "Antenatal care" },
  { href: "/womens-health#postnatal-care", label: "Postnatal care" },
  { href: "/childrens-health#child-health", label: "Child health" },
  { href: "/childrens-health#neurology", label: "Neurology" },
  { href: "/childrens-health#cognitive-health", label: "Cognitive care" },
];
