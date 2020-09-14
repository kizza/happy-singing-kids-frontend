import classnames from "classnames";
import React, { useEffect } from "react";
// import Song from "./Song";
// import Play from "./Play";
// import Pause from "./Pause";
// // import Bar from "./Bar";
import useAudioPlayer from "../../hooks/useAudioPlayer";
import useAudioElement from "../../hooks/useAudioElement";
import styles from "./Audio.module.scss";

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
  const {
    loaded,
    audioRef,
    renderAudioElement,
    loadAudioElement,
  } = useAudioElement(url);

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
    if (!loaded) {
      loadAudioElement();
    }
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
      {renderAudioElement()}

      <button
        type="button"
        className={!playing ? styles.Play : styles.Pause}
        onClick={clickedButton}
      >
        <i className={`fa fa-2x fa-fw fa-${icon}`}></i>
        <strong>{label}</strong>
        {/* <em>Such a grumpy gumplestiltskin</em> */}
      </button>

      <a
        className={styles.DownloadLink}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-lg fa-download"></i>
      </a>

      <button type="button" className={styles.LyricsLink} onClick={openLyrics}>
        <strong>Sing along</strong>
      </button>

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
