"use client"

import Image from "next/image"
import classnames from "classnames";
import React from "react";
import { styles as buttonStyles } from "@/components/IconLink";
import moduleStyles from "./LogoLink.module.scss";
import WithStyles from "@/components/WithStyles";
import posthog from "posthog-js";

interface Props {
  styles?: string[];
  logo: any;
  url: string;
  label: string;
}

const underlineStyles = `
  hover:after:content-['']
  hover:after:absolute
  hover:after:left-4
  hover:after:right-4
  hover:after:bottom-[0.8rem]
  hover:after:border-b-4
  hover:after:border-orange-500
  hover:after:-rotate-1
`

const LogoLink = ({ styles: externalStyles, logo, url, label }: Props) => (
  <a href={url} className={classnames(
    // moduleStyles.LogoLink,
    "flex relative overflow-hidden p-2 md:px-5 md:py-3",
    underlineStyles,
    buttonStyles,
    ...(externalStyles || [])
  )} onClick={() => posthog.capture("streaming_platform_clicked", { platform: label, url })}>
    <Image src={logo} alt={label} className="w-auto max-w-full h-auto object-contain" />
  </a>
);

export default WithStyles(LogoLink, {wrap: false});
