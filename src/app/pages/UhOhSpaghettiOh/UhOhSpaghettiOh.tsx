"use client"

import singingKids from "@/assets/hero/happy-singing-kids.png";
import amazon from "@/assets/logos/amazon.png";
import apple from "@/assets/logos/apple.png";
import spotify from "@/assets/logos/spotify.png";
import youtube from "@/assets/logos/youtube.png";
import bookCover from "@/assets/uh-oh-spaghetti-oh-cover.png";
import Header from "@/components/Header";
import LogoLink from "@/components/LogoLink";
import Title from "@/components/Title";
import classnames from "classnames";
import Image from "next/image";
import styles from "./UhOhSpaghettiOh.module.scss";
import IconLink from "@/components/IconLink";

export default () => {
  return <div className={classnames(styles.Home, "text-center")}>
    <Header>
      <section>
        <div className={classnames("inner", "space-y-2")}>
          <Title styles={["text-grape"]}>
            Uh Oh Spaghetti-oh <strong className="underline">the book</strong> is here!
          </Title>
          <p>In finding happy places amongst other books and literacy in general it made sense to dive in.
          Truthfully I always had in mind that Uh Oh Spaghetti-oh felt like a book, and now it is!</p>
        </div>
      </section>

      <section>
        <div className={classnames("inner", "my-10")}>
          <Title styles={["text-aqua !mb-4"]}>
            Don't have the book yet?
          </Title>
          <p>
            <IconLink variant="primary" href="/buy/uh-oh-spaghetti-oh/">Get your copy here</IconLink>
          </p>
        </div>
      </section>

      <section>
        <div className={classnames("inner", "space-y-2")}>
          <div className="md:flex md:flex-row md:space-x-8 md:items-center">
            <div>
              <Image className="my-8 inline -rotate-[1deg]" src={bookCover} alt="Uh oh spaghetti-oh cover" />
            </div>
            <div className="md:text-left">
              <Title styles={["text-orange !my-2"]}>
                Sing along and <span className="italic">stream</span> the song!
              </Title>
              <p>Listen now via your favourite platform to sing along with the book!</p>
              <div className={classnames(styles.Links, "grid grid-cols-2 gap-4 mt-2 mb-4 md:block md:mt-4 md:space-y-2")}>
                <LogoLink label="YouTube" logo={youtube} url="https://www.youtube.com/watch?v=fdd5Wd6mDB4" />
                <LogoLink label="Spotify" logo={spotify} url="https://open.spotify.com/track/0EMeGN35XRp4fPn0ySoQ4y?si=03b60bf81fc94519" />
                <LogoLink label="Apple Music" logo={apple} url="https://music.apple.com/us/album/uh-oh-spaghetti-oh/1553353479?i=1553353480" />
                <LogoLink label="Amazon Music" logo={amazon} url="https://music.amazon.com/albums/B08WH6SYP6?ref=dm_sh_jZIa8A1aAOyU9OUladBDDlQHu&trackAsin=B08WHZSQJ6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Header>

    <Image
      src={singingKids}
      className={[styles.Children, "box-content"].join(" ")}
      alt="Children singing music"
    />
  </div>;
};
