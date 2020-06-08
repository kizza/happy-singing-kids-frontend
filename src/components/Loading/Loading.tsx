import React from "react";
import loading from "../../assets/loading.svg";
import styles from "./Loading.module.scss";

interface Props {
  label?: string;
}

export default ({ label }: Props) => {
  return (
    <div className={styles.Loading}>
      <img src={loading} alt="Loading..." />
      {label && <em>{label}</em>}
    </div>
  );
};
