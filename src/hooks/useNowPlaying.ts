import { createContext, MutableRefObject } from "react";

export const NowPlayingContext = createContext<any>({});

export const useNowPlaying = (
  id: string,
  audioRef: MutableRefObject<HTMLAudioElement | null>
) => {};
