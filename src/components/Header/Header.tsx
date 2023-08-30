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

const Header = ({ openMenu }: Props) => (
  <div className={styles.Header}>
    <div className={styles.Overlay}>
      <Logo className={styles.Logo} />
      <a className={styles.Hamburger} href="#menu" onMouseDown={openMenu}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
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

export default Header;
