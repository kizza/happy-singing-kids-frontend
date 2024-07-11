import Contact from "@/app/pages/Contact"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in touch - we'd love to hear from you",
  description: "We'd love to hear your experiences of shows, questions about workshops or even just a favourite song!",
};

export default function ContactRoute() {
  return <Contact />
}
