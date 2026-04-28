"use client"

import singingKids from "@/assets/hero/happy-singing-kids.png";
import Header from "@/components/Header";
import classnames from "classnames";
import Image from "next/image";
import styles from "./Contact.module.scss";
import posthog from "posthog-js";

const Contact = () => (
  <div className={classnames(styles.Contact, "flex flex-col")}>
    <Header />
    <div className="inner">
      <p className="mt-4 text-xl text-center">
        Get in touch at{" "}
        <a href="mailto:contact@happysingingkids.com" onClick={() => posthog.capture("contact_email_clicked", { source: "contact_page" })}>
          contact@happysingingkids.com
        </a>
        ,
        <br /> we'd love to hear from you!
      </p>
    </div>
    <Image
      src={singingKids}
      className={[styles.Children, "box-content"].join(" ")}
      alt="Children singing music"
    />
  </div>
);

export default Contact;
