import bookCover from "@/assets/jungle-jamboree-book4.jpg";
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
          <span className="text-orange block">Jungle Jamboree Book 4</span>
        </Title>

        <div className="text-left flex flex-row space-x-8">
          <div className="basis-1/3">
            <Image src={bookCover} alt="Jungle Jamboree book 4 cover" loading="eager"
              className="-rotate-2 rounded-lg shadow-lg" />
          </div>
          <div className="basis-2/3">
            <p><b>Leap into the next jungle jamboree with more songs on the way!</b><br />
            Book 4 gathers a giraffe, koala, frog, platypus, dolphin, and jellyfish by the river for another colouring adventure through joyful phonics practice.</p>
          </div>
        </div>

        <p className="text-grape text-xl font-bold">Video coming soon.</p>
      </div>
    </section>
  </div>
}
