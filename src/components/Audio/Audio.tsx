import React, { useRef } from "react";
import styles from "./Audio.module.scss";

// import Song from "./Song";
// import Play from "./Play";
// import Pause from "./Pause";
// // import Bar from "./Bar";

import useAudioPlayer from "../../hooks/useAudioPlayer";

interface Props {
  label: string;
  url: string;
}

export default ({ label, url }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const {
    // curTime,
    // duration,
    playing,
    setPlaying,
    // setClickedTime,
  } = useAudioPlayer(audioRef);

  const icon = playing ? "pause" : "play";

  return (
    <div className={styles.Audio}>
      <audio ref={audioRef}>
        <source src={url} />
        Your browser does not support the <code>audio</code> element.
      </audio>
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

      <a
        className={!playing ? styles.Play : styles.Pause}
        href="#play"
        onClick={() => setPlaying(!playing)}
      >
        <i className={`fa fa-2x fa-fw fa-${icon}`}></i>
        <strong>{label}</strong>
      </a>

      <a
        className={styles.DownloadLink}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-lg fa-download"></i>
      </a>
      {/* </div> */}
    </div>
  );
};
