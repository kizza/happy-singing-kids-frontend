import React from "react";
import { useAnalytics } from "../hooks/useAnalytics";

interface Props {
  icon: any;
  href: string
  label: string
}


export default ({icon: Icon, href, label}: Props) => {
  const { trackEvent } = useAnalytics();

  const trackClick = (label: string) => (event: any) => {
    event.preventDefault();
    trackEvent({category: "Redirect", action: "Click", label: label});
    window.location.href = event.currentTarget.href
  }

  const styles = `
    flex items-center space-x-2
    text-aqua rounded-lg p-3 pr-4
    font-bold
    underline
    w-full
    md:w-auto
    text-2xl md:text-xl lg:text-sm
    hover:bg-forrest-light
    hover:text-grape
    border-solid
    border-aqua
    border-2
    shadow-square
    shadow-grape
  `
  return (
    <a href={href} className={styles} onClick={trackClick(label)}>
      <Icon className="w-14 lg:w-8" />
      <span className="">{label}</span>
    </a>
  );
};
