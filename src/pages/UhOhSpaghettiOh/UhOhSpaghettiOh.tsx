import React from "react";
import classnames from "classnames"
import { ReactComponent as AmazonIcon } from "../../assets/icons/amazon.svg";
import { ReactComponent as AppleIcon } from "../../assets/icons/apple.svg";
import { ReactComponent as SpotifyIcon } from "../../assets/icons/spotify.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/icons/youtube.svg";
import bookCover from "../../assets/uh-oh-spaghetti-oh-cover.png";
import singingKids from "../../assets/hero/happy-singing-kids.png";
import IconLink from "../../components/IconLink";
import styles from "./UhOhSpaghettiOh.module.scss";
import Header from "components/Header";
import Title from "components/Title";
import LogoLink from "components/LogoLink";
import spotify from "../../assets/logos/spotify.png";
import apple from "../../assets/logos/apple.png";
import amazon from "../../assets/logos/amazon.png";
import youtube from "../../assets/logos/youtube.png";

export default () => {
  return <div className={styles.Home}>
    <Header>
      <section className={styles.BookCover}>
        <div className={classnames(styles.Inner, "space-y-2")}>
          <Title styles={["text-aqua"]}>
            Uh Oh Spaghetti-oh <strong className="underline">the book</strong> is here!
          </Title>
          <p>In finding happy places amongst other books and literacy in general it made sense to dive in.
          Truthfully I always had in mind that Uh Oh Spaghetti-oh felt like a book, and now it is!</p>
          <img className={["inline -rotate-[1deg]"].join(" ")} src={bookCover} alt="Uh oh spaghetti-oh cover" />
        </div>
      </section>
    </Header>

    <section>
      <div className={classnames(styles.Inner, "space-y-8")}>
        <div>
          <Title styles={["text-grape"]}>
            Sing along and stream the song!
          </Title>
          <p>Listen now via your favourite platform to sing along with the book!</p>
          <div className="grid grid-cols-2 gap-4 mt-2 md:flex md:mt-4 md:max-w-xl md:mx-auto mb-4">
            <LogoLink label="YouTube" logo={youtube} url="https://www.youtube.com/watch?v=fdd5Wd6mDB4" styles={["basis-[28%]"]}/>
            <LogoLink label="Spotify" logo={spotify} url="https://open.spotify.com/track/0EMeGN35XRp4fPn0ySoQ4y?si=03b60bf81fc94519" styles={["basis-[25%]"]}/>
            <LogoLink label="Apple Music" logo={apple} url="https://music.apple.com/us/album/uh-oh-spaghetti-oh/1553353479?i=1553353480" styles={["basis-[25%]"]}/>
            <LogoLink label="Amazon Music" logo={amazon} url="https://music.amazon.com/albums/B08WH6SYP6?ref=dm_sh_jZIa8A1aAOyU9OUladBDDlQHu&trackAsin=B08WHZSQJ6" styles={["basis-[35%]"]}/>
          </div>
        </div>

        <div>
          <Title styles={["text-orange !mb-4"]}>
            Don't have the book yet?
          </Title>
          <p>Get in touch to <a href="mailto:happysingingkids@gmail.com" className="underline">get your copy!</a></p>
        </div>
      </div>
    </section>

    <img
      src={singingKids}
      className={[styles.Children, "box-content"].join(" ")}
      alt="Children singing music"
    />
  </div>;
};
