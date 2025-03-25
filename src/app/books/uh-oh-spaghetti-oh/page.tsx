import UhOhSpaghettiOh from "@/app/pages/UhOhSpaghettiOh"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uh Oh Spagnetti-oh! - This popular song - is now a book!",
  description: "It was always a fan favourite to sing along with - and now you can read along with it too!",
};

export default function UhOhSpaghettiOhRoute() {
  return <UhOhSpaghettiOh />
}
