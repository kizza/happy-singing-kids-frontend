import { Metadata } from "next";
import Header from "@/components/Header";
import Title from "@/components/Title";

export const metadata: Metadata = {
  title: "Happy Singing Kids",
  description: "Where Music and Joy Meet! 🎶✨",
};

export default function NotFound() {
  return <div className="flex flex-col min-h-full">
    <Header clouds={false} />
    <div className="inner text-center py-10 pb-16">
      <Title level={2} styles={["text-aqua"]} >Oh, gosh - so sorry... <br />we can't find this content!?</Title>
      <p className="md:w-1/2 md:m-auto mt-4 text-lg text-center">
        Perhaps try one of the links above or {" "}
        <a href="mailto:happysingingkids@gmail.com">
          get in touch
        </a> to ask any questions.
      </p>
    </div>
  </div>
}
