import Image from "next/image"
import React from "react";
import styles from "./Polaroid.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  src: string | StaticImport
  shadow?: "left" | "right"
  rotation?: number
}

const withRotation = (degree: number) => (
  {transform: `scale(0.6, 0.6) rotate(${degree}deg)` }
)

// https://codepen.io/Wandersonsc/pen/RMerRy
const Polaroid = ({ src, rotation = 5, shadow = "left" }: Props) => {
  return (
    <div className={styles.Polaroid}>
      <span style={{bottom: '30%', [shadow]: '30%'}}></span>
      <figure style={withRotation(rotation)}>
        <Image src={src} alt="Polaroid photo" />
      </figure>
    </div>
  )
};

export default Polaroid;
