import PrivacyPolicy from "@/app/pages/PrivacyPolicy"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get to know Susie and the story behind Happy Singing Kids",
  description: "Happy Singing Kids is an adventure, that captures Susie's playful spirit, showcasing fun-loving and sometimes downright silly tunes you'll love to sing!"
};

export default function Route() {
  return <PrivacyPolicy />
}
