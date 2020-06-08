import React from "react";
import styles from "./Button.module.scss";
import classnames from "classnames";

interface Props {
  label: string;
  url?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const noop = () => {};

export default ({ label, url, onClick = noop, disabled = false }: Props) => {
  const type = url ? "button" : "submit";

  return (
    <button
      onClick={onClick || null}
      type={type}
      disabled={disabled}
      className={classnames(styles.Button, { [styles.Disabled]: disabled })}
    >
      {label}
    </button>
  );
};
