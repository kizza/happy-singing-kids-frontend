import classnames from "classnames";
import React from "react";
import moduleStyles from "./IconLink.module.scss";
import WithStyles from "@/components/WithStyles";

interface Props {
  children: React.ReactNode,
  styles?: string[];
  href: string;
}

export const styles = `
  items-center space-x-2
  text-aqua rounded-lg
  underline
  border-solid
  border-aqua
  border-2
  shadow-square
  shadow-grape

  hover:bg-grape-100

  active:shadow-none
  active:translate-y-0.5
`

const LogoLink = ({ styles: externalStyles, children, href }: Props) => (
  <a href={href} className={classnames(
    moduleStyles.IconLink,
    "inline-block",
    styles,
    ...(externalStyles || [])
  )}>
    {children}
  </a>
);

export default WithStyles(LogoLink, {wrap: false});
