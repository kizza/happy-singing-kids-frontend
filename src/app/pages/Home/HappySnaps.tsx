import styles from "./Home.module.scss"
import Polaroid from "@/components/Polaroid"
import Photo8 from "@/assets/polaroids/eight.jpg";
import Photo7 from "@/assets/polaroids/seven.jpg";
import Photo6 from "@/assets/polaroids/six.jpg";
import Photo5 from "@/assets/polaroids/five.jpg";
import Photo4 from "@/assets/polaroids/four.jpg";
import Photo from "@/assets/polaroids/one.jpg";
import Photo3 from "@/assets/polaroids/three.jpg";
import Photo2 from "@/assets/polaroids/two.jpg";

export default function HappySnaps() {
  return <>
    <div className={[
      styles.Polaroids,
      styles.FullBleed,
      "flex flex-wrap md:ml-[14%] pt-[6%] sm:pb-10",
    ].join(" ")}>
      <Polaroid src={Photo} shadow="right" />
      <Polaroid src={Photo2} rotation={-5} />
      <Polaroid src={Photo3} rotation={2} />
      <Polaroid src={Photo4} shadow="right" />

      <Polaroid src={Photo5} rotation={-3} />
      <Polaroid src={Photo6} rotation={-3} />
      <Polaroid src={Photo8} rotation={2} shadow="right" />
      <Polaroid src={Photo7} />
    </div>
  </>
}
