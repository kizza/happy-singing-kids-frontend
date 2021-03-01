import React from "react";
import { AMAZON_URL, SPOTIFY_URL } from "../../consts";
import styles from "./Footer.module.scss";

export default () => (
  <div className={styles.Footer}>
    <div className={styles.Social}>
      <a href="https://www.facebook.com/happysingingkids">
        <i className="fab fa-lg fa-fw fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/happysingingkids">
        <i className="fab fa-lg fa-fw fa-instagram"></i>
      </a>
      <a href={SPOTIFY_URL}>
        <i className="fab fa-lg fa-fw fa-spotify"></i>
      </a>
      <a href={AMAZON_URL}>
        <i className="fab fa-lg fa-fw fa-amazon"></i>
      </a>
      <a href="https://music.youtube.com/playlist?list=OLAK5uy_mukftXWpZWQY0lWq7-7uxL49OrAdbBpEc">
        <i className="fab fa-lg fa-fw fa-youtube"></i>
      </a>
      <a href="https://www.tiktok.com/@happysingingkids">
        <i className="fab fa-lg fa-fw fa-tiktok"></i>
      </a>
    </div>
  </div>
);
