import React, { useRef, useEffect, useState } from "react";
import classnames from "classnames";
import styles from "./Audio.module.scss";

// import Song from "./Song";
// import Play from "./Play";
// import Pause from "./Pause";
// // import Bar from "./Bar";

import useAudioPlayer from "../../hooks/useAudioPlayer";

interface Props {
  label: string;
  url: string;
  setNowPlaying: (songLabel: string) => void;
  registerStopPlaying: any;
  openLyrics: any;
}

export default ({
  registerStopPlaying,
  setNowPlaying,
  openLyrics,
  label,
  url,
}: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const {
    // curTime,
    // duration,
    playing,
    setPlaying,
    // setClickedTime,
  } = useAudioPlayer(url, audioRef);

  useEffect(() => {
    registerStopPlaying(() => setPlaying(false));
  });

  const clickedButton = () => {
    setNowPlaying(label);
    setPlaying(!playing);
  };

  const icon = playing ? "pause" : "play";

  return (
    <div
      className={classnames(
        styles.Audio,
        playing ? styles.Playing : styles.Paused
      )}
    >
      <audio ref={audioRef}>
        <source src={url} />
        Your browser does not support the <code>audio</code> element.
      </audio>

      <a
        className={!playing ? styles.Play : styles.Pause}
        href="#play"
        onClick={clickedButton}
      >
        <i className={`fa fa-2x fa-fw fa-${icon}`}></i>
        <strong>{label}</strong>
        {/* <em>Such a grumpy gumplestiltskin</em> */}
      </a>

      <a
        className={styles.DownloadLink}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-lg fa-download"></i>
      </a>

      <a className={styles.LyricsLink} href="#lyrics" onClick={openLyrics}>
        <strong>Sing along</strong>
      </a>

      {/* <Song */}
      {/*   songName="Instant Crush" */}
      {/*   songArtist="Daft Punk ft. Julian Casablancas" */}
      {/* /> */}
      {/* <div className="controls"> */}
      {/* {playing ? ( */}
      {/*   <Button */}
      {/*     style={playing ? styles.Play : styles.Pause} */}
      {/*     icon="pause" */}
      {/*     onClick={() => setPlaying(false)} */}
      {/*   /> */}
      {/* ) : ( */}
      {/*   <Button */}
      {/*     style={playing ? styles.Play : styles.Pause} */}
      {/*     icon="play" */}
      {/*     onClick={() => setPlaying(true)} */}
      {/*   /> */}
      {/* )} */}
      {/* <Bar */}
      {/*   curTime={curTime} */}
      {/*   duration={duration} */}
      {/*   onTimeUpdate={time => setClickedTime(time)} */}
      {/* /> */}
      {/* </div> */}
    </div>
  );
};
