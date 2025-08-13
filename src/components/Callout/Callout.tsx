"use client"

import React, { useEffect, useState } from "react";
import styles from "./Callout.module.scss";
import classnames from "classnames"

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => {
  const [animate, setAnimate] = useState(false);
  const delay = 1

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return <div
    className={classnames(
      styles.Banner,
      animate && styles.Animating,
    )}
  >
    {children}
  </div>
};
