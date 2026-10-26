import type { Metadata } from "next";
import { HomeView } from "@/components/home/home-view";

export const metadata: Metadata = {
  title: "Women’s Health, Maternal Care and Children’s Health",
  description:
    "Theresa’s Women and Child Clinic welcomes women, mothers, and children. Explore health information, a patient guide, and a playful Kids Corner, then enquire about an appointment.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeView />;
}
