import BuyBook from "@/app/pages/BuyBook"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy the book Uh Oh Spaghetti-oh",
  description: "Sing along with the fun and playful Uh Oh Spaghetti-oh",
};

export default function BuyBookRoute() {
  return <BuyBook />
}
