import Sunshine from "components/Sunshine";
import React, { ReactNode, useContext } from "react";
import { useLocation } from "react-router-dom";
import IconLink from "../..//components/IconLink";
import { ReactComponent as AmazonIcon } from "../../assets/icons/amazon.svg";
import { ReactComponent as AppleIcon } from "../../assets/icons/apple.svg";
import { ReactComponent as SpotifyIcon } from "../../assets/icons/spotify.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/icons/youtube.svg";
import Cloud from "../../components/Cloud";
import { AMAZON_URL, APPLE_URL, SPOTIFY_URL } from "../../consts";
import { NavContext } from "../../hooks/useNav";
import Logo from "../Logo";
import Title from "../Title";
import styles from "./Header.module.scss";

interface Props {
  clouds?: boolean;
  children?: ReactNode;
}

const Header = ({ children, clouds = true }: Props) => {
  const location = useLocation();
  const minimal = location.pathname === "/uh-oh-spaghetti-oh"
  const { openMenu } = useContext(NavContext)

  return (
    <div className={styles.Header}>
      <div className={styles.Inner}>
        <a href="/"><Logo className={styles.Logo} /></a>
        <a className={[styles.Hamburger, "box-content"].join(" ")} href="#menu" onMouseDown={openMenu}>
          <svg className="content-border" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

        {false && <>
          <Title>
            Kids songs <em>you'll love</em> to sing!
            <small>(They're a little bit different)</small>
          </Title>

          <div className="pb-6 -ml-3 -mt-2">
            <div className="flex justify-left flex-wrap gap-4 px-4 md:px-1">
              <IconLink icon={YouTubeIcon} label="YouTube" href="https://www.youtube.com/@happysingingkids" />
              <IconLink icon={SpotifyIcon} label="Spotify" href={SPOTIFY_URL} />
              <IconLink icon={AmazonIcon} label="Amazon Music" href={AMAZON_URL} />
              <IconLink icon={AppleIcon} label="Apple Music" href={APPLE_URL} />
            </div>
          </div>
        </>}
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
