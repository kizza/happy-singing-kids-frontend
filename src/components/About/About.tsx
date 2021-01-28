import React from "react";
import styles from "./About.module.scss";

export default () => (
  <div className={styles.About}>
    <div className={styles.Inner}>
      {/* <h2>About</h2> */}
      <p>
        Happy Singing Kids is the "covid project" of a musician and mother. A labour of love,
        sharing the songs that manifest around the house with her husband and
        two young daughters.
      </p>
      <p>
        Here's hoping it brings your home, school or playground a bunch of happy
        singing kids as well.
      </p>
    </div>
  </div>
);
