import React from "react";
import styles from "./Loading.module.scss";

const loading = "/loading.svg";

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
