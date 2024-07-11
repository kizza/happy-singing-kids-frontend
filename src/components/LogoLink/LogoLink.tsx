import Image from "next/image"
import classnames from "classnames";
import React from "react";
import { styles as buttonStyles } from "@/components/IconLink";
import moduleStyles from "./LogoLink.module.scss";
import WithStyles from "@/components/WithStyles";

interface Props {
  styles?: string[];
  logo: any;
  url: string;
  label: string;
}

const LogoLink = ({ styles: externalStyles, logo, url, label }: Props) => (
  <a href={url} className={classnames(
    moduleStyles.LogoLink,
    "flex",
    buttonStyles,
    ...(externalStyles || [])
  )}>
    <Image src={logo} alt={label} className="w-full" />
  </a>
);

export default WithStyles(LogoLink, {wrap: false});
