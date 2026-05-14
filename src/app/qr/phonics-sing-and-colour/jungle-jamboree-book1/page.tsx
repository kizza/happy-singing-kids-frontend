import bookCover from "@/assets/jungle-jamboree-book1.jpg";
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
          Phonics sing and colour - Jungle Jamboree
        </Title>

        <div className="text-left flex flex-row space-x-8">
          <div className="basis-1/3">
            <Image src={bookCover} alt="Jungle Jamboree book cover" loading="eager"
              className="-rotate-2 rounded-lg shadow-lg" />
          </div>
          <div className="basis-2/3">
            <p><b>Swing into a jungle adventure filled with fun, music, and learning!</b><br />
            Jungle Jamboree helps young children explore tricky phonics sounds through playful colouring activities and sing-along moments.</p>
          </div>
        </div>

        <YouTube id="h0bNt2pwtQs" title="Jungle Jamboree | An Educational & Fun Consonant Safari Adventure!" />
      </div>
    </section>
  </div>
}
