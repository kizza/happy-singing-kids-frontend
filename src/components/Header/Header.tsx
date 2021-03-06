import classnames from "classnames";
import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo";
import { Clouds } from "../Hero/Background";
import background from "../../assets/hero/happy-singing-kids.png";
import tree from "../../assets/hero/Tree.png";

interface Props {
  openMenu: () => void;
}

export default ({ openMenu }: Props) => (
  <div className={styles.Header}>
    <div className={styles.Overlay}>
      <Logo className={styles.Logo} />
      <a className={styles.Hamburger} href="#menu" onMouseDown={openMenu}>
        <i className="fa fa-fw fa-bars"></i>
      </a>
    </div>
    {/* <div className={styles.Sky} /> */}
    <Clouds
      className={classnames(
        /* "animate__slideInLeft", */
        /* "animate__animated", */
        styles.Clouds
      )}
    />
    <img
      src={tree}
      className={styles.Tree}
      alt="Happy singing kids around a tree"
    />
    <div className={styles.Grass}></div>
    <img
      src={background}
      className={styles.Foreground}
      alt="Children singing music"
    />
  </div>
);
