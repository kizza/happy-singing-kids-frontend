import classnames from "classnames";
import React from "react";
import styles from "./Loading.module.scss";

const loading = "/loading.svg";

interface Props {
  label?: string;
  className?: string;
}

export default ({ label, className }: Props) => {
  return (
    <div className={classnames(styles.Loading, className)}>
      <img src={loading} alt="Loading..." />
      {label && <em>{label}</em>}
    </div>
  );
};
