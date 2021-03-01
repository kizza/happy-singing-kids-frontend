import React from "react";
import styles from "./About.module.scss";
import me from "../../assets/me.jpg";

export default () => (
  <div className={styles.About}>
    <div className={styles.Inner}>
      {/* <h2>About</h2> */}
      <div className={styles.Text}>
        <p>
          Happy Singing Kids is the "covid project" of a musician and mother. A
          labour of love, sharing the songs that manifest around the house with
          her husband and two young daughters.
        </p>
        <p>
          Here's hoping it brings your home, school or playground a bunch of
          happy singing kids as well.
        </p>
      </div>
      <p className={styles.Me}>
        <img src={me} alt="Me" />
      </p>
    </div>
  </div>
);
