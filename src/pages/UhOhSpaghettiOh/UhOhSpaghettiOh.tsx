import React from "react";
import { ReactComponent as AmazonIcon } from "../../assets/icons/amazon.svg";
import { ReactComponent as AppleIcon } from "../../assets/icons/apple.svg";
import { ReactComponent as SpotifyIcon } from "../../assets/icons/spotify.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/icons/youtube.svg";
import bookCover from "../../assets/uh-oh-spaghetti-oh-cover.png";
import IconLink from "../../components/IconLink";
import styles from "./UhOhSpaghettiOh.module.scss";

export default () => {
  return <div className={styles.Home}>
    <img className={[styles.BookCover, "inline -rotate-[1deg]"].join(" ")} src={bookCover} alt="Uh oh spaghetti-oh cover" />

    <div className="space-y-10">
      <div className="px-2 space-y-4 leading-relaxed">
        <h2>
          <strong>Uh Oh Spaghetti-oh</strong> arriving early 2024!
        </h2>
        <p>Listen now via your favourite platform, and get in touch to <a href="mailto:happysingingkids@gmail.com" className="underline">reserve your copy!</a></p>
      </div>

      <div className="space-y-6">
        <h4 className="text-grape">Sing along and stream the song...</h4>
        <div className="flex justify-center flex-wrap gap-4 px-4 md:px-1">
          <IconLink icon={YouTubeIcon} label="YouTube" href="https://www.youtube.com/watch?v=fdd5Wd6mDB4" />
          <IconLink icon={SpotifyIcon} label="Spotify" href="https://open.spotify.com/track/0EMeGN35XRp4fPn0ySoQ4y?si=03b60bf81fc94519" />
          <IconLink icon={AmazonIcon} label="Amazon Music" href="https://music.amazon.com/albums/B08WH6SYP6?ref=dm_sh_jZIa8A1aAOyU9OUladBDDlQHu&trackAsin=B08WHZSQJ6" />
          <IconLink icon={AppleIcon} label="Apple Music" href="https://music.apple.com/us/album/uh-oh-spaghetti-oh/1553353479?i=1553353480" />
        </div>
      </div>
    </div>
  </div>;
};
