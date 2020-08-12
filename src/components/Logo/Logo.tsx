import React from "react";
import classnames from "classnames";
import styles from "./Logo.module.scss";

interface Props {
  className: string;
}

export default ({ className }: Props) => (
  <div className={classnames(styles.Logo, className)}>
    <h1>Happy Singing Kids</h1>
  </div>
);
