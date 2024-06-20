import classnames from "classnames";
import React from "react";
import moduleStyles from "./LogoLink.module.scss";
import WithStyles from "components/WithStyles";

interface Props {
  styles?: string[];
  logo: any;
  url: string;
  label: string;
}

const styles = `
  flex items-center space-x-2
  text-aqua rounded-lg py-3 px-5
  font-bold
  underline
  border-solid
  border-aqua
  border-2
  shadow-square
  shadow-grape
  hover:bg-grape-100
`

const LogoLink = ({ styles: externalStyles, logo, url, label }: Props) => (
  <a href={url} className={classnames(
    moduleStyles.LogoLink,
    styles,
    ...(externalStyles || [])
  )}>
    <img src={logo} alt={label} className="w-full" />
  </a>
);

export default WithStyles(LogoLink, {wrap: false});
