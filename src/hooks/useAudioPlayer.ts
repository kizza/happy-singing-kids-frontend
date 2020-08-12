import { useState, useEffect, MutableRefObject } from "react";

function useAudioPlayer(
  id: string,
  audioRef: MutableRefObject<HTMLAudioElement | null>
) {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  // const [playing, setPlaying] = useNowPlaying(id, audioRef);

  // const setPlayingWrapped =
  useEffect(() => {
    // const audio = document.getElementById("audio") as any;
    const audio = audioRef.current;

    if (audio) {
      // export type SectionRef = MutableRefObject<HTMLDivElement | null>;

      // state setters wrappers
      const setAudioData = () => {
        setDuration(audio.duration);
        setCurTime(audio.currentTime);
      };

      const setAudioTime = () => setCurTime(audio.currentTime);

      // DOM listeners: update React state on DOM events
      audio.addEventListener("loadeddata", setAudioData);
      audio.addEventListener("timeupdate", setAudioTime);

      // React state listeners: update DOM on React state changes
      playing ? audio.play() : audio.pause();

      if (clickedTime && clickedTime !== curTime) {
        audio.currentTime = clickedTime;
        setClickedTime(null);
      }

      // effect cleanup
      return () => {
        audio.removeEventListener("loadeddata", setAudioData);
        audio.removeEventListener("timeupdate", setAudioTime);
      };
    }
  }, [audioRef, duration, clickedTime, playing]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  };
}

export default useAudioPlayer;
