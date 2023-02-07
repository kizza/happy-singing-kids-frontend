import React from "react";
import styles from "./YouTube.module.scss";

interface Props {
  id: string;
    title: string
}

const YouTube = ({id, title}: Props) => {
  const src = `https://www.youtube.com/embed/${id}`

  return (
    <div className={styles.YouTube}>
      <iframe
        src={src}
        title={title}
        width="100%" height="100%"
        frameBorder="false"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
      </iframe>
      <h3>{title}</h3>
    </div>
  );
};

export default YouTube;
