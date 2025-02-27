import classnames from "classnames";
import React from "react";
import moduleStyles from "./IconLink.module.scss";
import WithStyles from "@/components/WithStyles";

type Variant = "primary" | "secondary" | "clear";


interface SharedProps {
  children: React.ReactNode,
  variant?: Variant,
  styles?: string[];
  disabled?: boolean;
}

interface LinkProps {
  as?: "a";
  href: string;
}

interface ButtonProps {
  as: "button";
  type: string;
}

type Props = (SharedProps & LinkProps) | (SharedProps & ButtonProps)

const variants: Record<Variant, string> = {
  primary: `
    border-grape-700
    bg-grape
    shadow-grape-700
    text-white
    hover:bg-grape-600
    hover:border-grape-500
    hover:text-white
  `,
  secondary: `
    hover:bg-grape-100
    border-aqua
    shadow-grape
  `,
  clear: `border-white no-underline`
}

export const styles = `
  inline-flex items-center justify-center space-x-2
  text-aqua rounded-lg
  underline
  border-solid
  border-2
  shadow-square

  active:shadow-none
  active:translate-y-0.5
`

const LogoLink = ({
  as: Tag = "a",
  styles: externalStyles,
  children,
  disabled,
  variant = "secondary",
  ...rest
}: Props) => (
  <Tag className={classnames(
    moduleStyles.IconLink,
    styles,
    variants[variant],
    ...(externalStyles || []),
  )} {...rest as any}>
    {children}
  </Tag>
);

export default WithStyles(LogoLink, {wrap: false});
