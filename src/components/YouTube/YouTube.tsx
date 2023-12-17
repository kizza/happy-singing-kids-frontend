import React from "react";
import styles from "./YouTube.module.scss";

interface Props {
  id?: string;
  src?: string;
  title: string
}

interface PropsWithId extends Props {
  id: string
}

interface PropsWithSrc extends Props {
  src: string
}

const YouTube = ({id, src, title}: PropsWithId | PropsWithSrc) => {
  if (id) {
    src = `https://www.youtube.com/embed/${id}`
  }

  return (
    <div className={styles.YouTube}>
      <iframe
        src={src}
        title={title}
        width="100%" height="100%"
        frameBorder="false"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
      </iframe>
      <h4 className="text-aqua">{title}</h4>
    </div>
  );
};

export default YouTube;
