import KindyUplift from "@/app/pages/KindyUplift";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kindergarton and daycare uplift program",
  description: "A joyful music and literacy program designed for the Kindy Uplift initiative",
};

export default function KindyUpliftRoute() {
  return <KindyUplift />
}
