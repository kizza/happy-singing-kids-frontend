import singingKids from "@/assets/hero/happy-singing-kids.png";
import Header from "@/components/Header";
import classnames from "classnames";
import Image from "next/image";
import styles from "./Contact.module.scss";

const Contact = () => (
  <div className={classnames(styles.Contact, "flex flex-col")}>
    <Header />
    <div className="inner">
      <p className="mt-4 text-xl text-center">
        Get in touch at{" "}
        <a href="mailto:happysingingkids@gmail.com">
          happysingingkids@gmail.com
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
