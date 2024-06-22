import Contact from "@/app/pages/Contact"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Happy Singing Kids",
  description: "Get in touch - we'd love to hear from you",
};

export default function ContactRoute() {
  return <Contact />
}
