import React, { useEffect, useState, useRef } from "react";
import Image from "next/image"
import styles from "./Banner.module.scss";
import background from "@/assets/hero/banner-background.jpg";
import girls from "@/assets/hero/banner-girls.png";
import logo from "@/assets/hero/banner-logo.png";
import classnames from "classnames"
import useImagesLoaded from "@/hooks/useImagesLoaded";
import Loading from "@/components/Loading";

interface Props {
  onShow?: () => void;
}

export default ({onShow}: Props) => {
  const imageContainerRef = useRef(null);
  const imagesLoaded = useImagesLoaded(imageContainerRef);
  const [animate, setAnimate] = useState(false);
  const delay = 0

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => {
        setAnimate(true);
        onShow && onShow()
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded, onShow, delay]);

  return <div
    ref={imageContainerRef}
    className={classnames(
      styles.Banner,
      animate && "shadow-xl",
      animate && styles.Animating,
    )}
  >
    { !animate && <Loading className={styles.Loading} /> }

    <Image src={background} className={styles.Background} priority={true} alt="Colourful background"/>
    <Image src={girls}
      className={classnames(
        styles.Girls,
        "animate__fadeIn",
        // // "animate__fast",
        animate && "animate__animated",
      )}
      alt="The Happy Singing Kids Team" />
    {animate && <Image src={logo}
      className={classnames(
        styles.Logo,
        "animate__jackInTheBox",
        // "animate__zoomInDown",
        // "animate__delay-2s",
        "animate__animated",
      )}
      alt="Happy Singing Kids" />}
  </div>
};
