import React from "react";
import styles from "./Footer.module.scss";

export default () => (
  <div className={styles.Footer}>
    <div className={styles.Social}>
      <a href="https://www.facebook.com/happysingingkids">
        <i className="fa fa-lg fa-fw fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/happysingingkids">
        <i className="fa fa-lg fa-fw fa-instagram"></i>
      </a>
    </div>
  </div>
);
