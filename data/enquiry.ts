export const enquiryCategories = [
  { value: "womens-health", label: "Women’s health" },
  { value: "antenatal", label: "Antenatal care" },
  { value: "postnatal", label: "Postnatal care" },
  { value: "childrens-health", label: "Child health" },
  { value: "neurology", label: "Neurology" },
  { value: "cognitive", label: "Cognitive care" },
  { value: "general", label: "General enquiry" },
] as const;

export type EnquiryCategory = (typeof enquiryCategories)[number]["value"];

export function isEnquiryCategory(value: string | null): value is EnquiryCategory {
  return enquiryCategories.some((category) => category.value === value);
}
