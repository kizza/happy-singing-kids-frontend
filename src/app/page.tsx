import Home from "@/app/pages/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happy Singing Kids",
  description: "Where Music and Joy Meet! 🎶✨",
};

export default function HomeRoute() {
  return <Home />
}
