import React, { MutableRefObject, useRef, useState } from "react";

export interface Dashboard {
  name: string;
  email: string;
  items: { id: string; name: string }[];
}

interface Hook {
  loaded: boolean;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  renderAudioElement: () => void;
  loadAudioElement: () => void;
}

export default (url: string): Hook => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  const renderAudioElement = () =>
    loaded && (
      <>
        <audio autoPlay ref={audioRef}>
          <source src={url} />
          Your browser does not support the <code>audio</code> element.
        </audio>
      </>
    );

  const loadAudioElement = () => {
    setLoaded(true);
  };

  return { loaded, audioRef, renderAudioElement, loadAudioElement };
};
