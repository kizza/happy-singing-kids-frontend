import About from "@/app/pages/About"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Happy Singing Kids",
  description: "Get to know Susie and the story behind Happy Singing Kids ",
};

export default function AboutRoute() {
  return <About />
}
