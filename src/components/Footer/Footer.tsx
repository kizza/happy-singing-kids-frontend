import React from "react";
import {AMAZON_URL, SPOTIFY_URL, TIKTOK_URL, YOUTUBE_URL} from "../../consts";
import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.Footer}>
    <h4>Find more <span className="hidden md:inline">content</span> at</h4>
    <div className="flex text-3xl items-center flex-wrap justify-center gap-6">
      <a href={YOUTUBE_URL}>
        <i className="fab fa-lg fa-fw fa-youtube"></i>
      </a>
      <a href="https://www.facebook.com/happysingingkids">
        <i className="fab fa-lg fa-fw fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/happysingingkids">
        <i className="fab fa-lg fa-fw fa-instagram"></i>
      </a>
      <a href={SPOTIFY_URL}>
        <i className="fab fa-lg fa-fw fa-spotify"></i>
      </a>
      <a href={TIKTOK_URL}>
        <i className="fab fa-lg fa-fw fa-tiktok"></i>
      </a>
      <a href={AMAZON_URL}>
        <i className="fab fa-lg fa-fw fa-amazon"></i>
      </a>
    </div>
  </div>
);

export default Footer;
