"use client"

import React from "react";
import styles from "./Button.module.scss";
import classnames from "classnames";

interface Props {
  label?: string;
  icon?: string;
  url?: string;
  style?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: any;
}

const noop = () => {};

export default (props: Props) => {
  const {
    children,
    style,
    label,
    icon,
    url,
    onClick = noop,
    disabled = false,
  } = props;
  const type = url ? "button" : "submit";

  return (
    <button
      onClick={onClick || null}
      type={type}
      disabled={disabled}
      className={classnames(styles.Button, {
        [style + ""]: !!style,
        [styles.Disabled]: disabled,
      })}
    >
      {icon && <i className={`fa fa-fw fa-lg fa-${icon}`}></i>}
      {label}
      {children}
    </button>
  );
};
