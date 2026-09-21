import bookCover from "@/assets/uh-oh-spaghetti-oh-colouring-book.jpg";
import Header from "@/components/Header";
import Title from "@/components/Title";
import YouTube from "@/components/YouTube";
import classnames from "classnames";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kindergarton and daycare uplift program",
  description: "A joyful music and literacy program designed for the Kindy Uplift initiative",
};

export default function KindyUpliftRoute() {
  return <div className="text-center">
    <Header clouds={true} />
    <section>
      <div className={classnames("inner", "space-y-8 mb-10")}>
        <Title styles={["text-grape"]}>
          Welcome to the Uh Oh Spaghetti-oh!<br />Colouring Adventure!
        </Title>

        <div className="text-left flex flex-row space-x-8">
          <div className="basis-1/3">
            <Image src={bookCover} alt="Uh Oh Spaghetti-Oh Colouring Book cover" loading="eager"
              className="-rotate-2 rounded-lg shadow-lg" />
          </div>
          <div className="basis-2/3">
            <p><b>This isn&apos;t just a colouring book—it&apos;s a musical adventure that lets your child sing, colour, move, and imagine all at the same time.</b></p>
            <p>As your little one colours their way through the pages, they can also sing along with the official Uh Oh Spaghetti-oh! story video. Simply press play and enjoy a fun-filled reading and singing experience together.</p>
            <ol className="mx-6 my-4">
              <li>🎵 Sing the story</li>
              <li>🎨 Colour the characters</li>
              <li>📚 Build a love of books and reading</li>
              <li>💃 Dance, move, and have fun!</li>
            </ol>
          </div>
        </div>

        <YouTube id="fdd5Wd6mDB4" title="Spaghetti song for kids | Uh Oh Spaghetti-Oh! Official Video" />
      </div>
    </section>
  </div>
}
