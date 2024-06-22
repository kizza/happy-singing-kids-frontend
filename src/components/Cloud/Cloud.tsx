import React from "react";
import styles from "./Cloud.module.scss";
import classnames from "classnames";

const sizes = {
  small: "w-24 h-14",
  regular: "w-44 h-24",
  medium: "w-52 h-32",
  large: "w-72 h-52",
} as const

const speeds = {
  small: 1.1,
  regular: 1.1,
  medium: 1.1,
  large: 1.0,
} as const

interface MoundProps {
  size: keyof typeof sizes;
  classes?: string;
}

const Mound = ({ size, classes = "" }: MoundProps) =>
  <div className={classnames(styles.Mound, sizes[size], classes)}></div>

const formations = {
  primary: [
    <Mound key={1} size={'large'} />,
    <Mound key={2} size={'small'} classes="-ml-8"/>,
    <Mound key={3} size={'regular'} classes="-ml-6"/>,
  ],
  secondary: [
    <Mound key={1} size={'medium'} />,
    <Mound key={2} size={'large'} classes="-ml-10"/>,
    <Mound key={3} size={'small'} classes="-ml-8"/>,
  ],
  tertiary: [
    <Mound key={1} size={'small'} />,
    <Mound key={2} size={'medium'} classes="-ml-10"/>,
    <Mound key={3} size={'large'} classes="-ml-8"/>,
    <Mound key={4} size={'small'} classes="-ml-8"/>,
  ]
}

interface Props {
  variant: keyof typeof formations;
  left: number;
  top: number;
  delay?: number;
  repeat?: boolean;
}

const Cloud = ({variant, left, top, delay = 0, repeat = true}: Props) =>
  <div className={classnames(
    styles.Cloud,
    repeat && styles.Repeat,
  )} style={{
    left: `${left}%`,
    top: `${top}rem`,
    animationDelay: `${delay}s`,
  }}>
    {formations[variant]}
  </div>

export default Cloud
