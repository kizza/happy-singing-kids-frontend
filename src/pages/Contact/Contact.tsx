import React from "react";
import styles from "./Contact.module.scss";
import singingKids from "../../assets/hero/happy-singing-kids.png";
import Header from "components/Header";

const About = () => (
  <div className={styles.Contact}>
    <Header />
    <div className={styles.Inner}>
      <p className="mt-4 text-xl text-center">
        Get in touch at{" "}
        <a href="mailto:happysingingkids@gmail.com">
          happysingingkids@gmail.com
        </a>
        ,
        <br /> we'd love to hear from you!
      </p>
    </div>
    <img
      src={singingKids}
      className={[styles.Children, "box-content"].join(" ")}
      alt="Children singing music"
    />
  </div>
);

export default About;
