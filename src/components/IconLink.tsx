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
    text-forrest-dark rounded-xl p-3 pr-4
    underline
    w-full
    md:w-auto
    border-solid
    border-2
    text-2xl md:text-xl lg:text-base
    border-forrest-dark
    hover:bg-forrest-light
    hover:text-grape
  `
  return (
    <a href={href} className={styles} onClick={trackClick(label)}>
      <Icon className="w-14 lg:w-8" />
      <span className="">{label}</span>
    </a>
  );
};
