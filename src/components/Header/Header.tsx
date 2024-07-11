"use client"

import Cloud from "@/components/Cloud";
import Logo from "@/components/Logo";
import Sunshine from "@/components/Sunshine";
import { NavContext } from "@/hooks/useNav";
import { ReactNode, useContext } from "react";
import styles from "./Header.module.scss";

interface Props {
  clouds?: boolean;
  children?: ReactNode;
}

const Header = ({ children, clouds = true }: Props) => {
  const { openMenu } = useContext(NavContext)

  return (
    <div className={styles.Header}>
      <div className="inner">
        <a href="/"><Logo className={styles.Logo} /></a>
        <a className={[styles.Hamburger, "box-content"].join(" ")} href="#menu" onMouseDown={openMenu}>
          <svg className="content-border" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <Sunshine />

      <div className={styles.Sky}>
        <div className={styles.Clouds}>
          {clouds && <Cloud variant={'primary'} left={34} top={3} repeat={false} />}
          <Cloud variant={'secondary'} left={110} top={4} />
          {clouds && <Cloud variant={'tertiary'} left={110} top={10} delay={8} />}
        </div>
      </div>

      <div className={styles.Hero}>
        { children }
      </div>
    </div>
  )
};

export default Header;
