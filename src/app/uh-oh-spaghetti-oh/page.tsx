import UhOhSpaghettiOh from "@/app/pages/UhOhSpaghettiOh"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uh Oh Spagnetti-oh! - Happy Singing Kids",
  description: "This popular song - is now a book!",
};

export default function UhOhSpaghettiOhRoute() {
  return <UhOhSpaghettiOh />
}
