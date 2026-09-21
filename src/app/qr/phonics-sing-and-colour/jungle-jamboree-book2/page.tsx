import bookCover from "@/assets/jungle-jamboree-book2.jpg";
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
        <Title styles={["text-grape leading-[1.2]"]}>
          Phonics sing and colour
          <span className="text-orange block">Jungle Jamboree Book 2</span>
        </Title>

        <div className="text-left flex flex-row space-x-8">
          <div className="basis-1/3">
            <Image src={bookCover} alt="Jungle Jamboree book 2 cover" loading="eager"
              className="-rotate-2 rounded-lg shadow-lg" />
          </div>
          <div className="basis-2/3">
            <p><b>Splash into another jungle adventure filled with fun, music, and learning!</b><br />
            Book 2 carries the sing-along safari to the waterfall, where ringtails, rabbits, ducklings, and playful sea friends help children explore tricky phonics sounds through colouring and song.</p>
          </div>
        </div>

        <YouTube id="x3tSW2puVGA" title="Jungle Jamboree Book 2 | Phonics Sing & Colour" />
      </div>
    </section>
  </div>
}
