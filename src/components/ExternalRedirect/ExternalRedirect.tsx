import React from "react";
import Loading from "../Loading";

interface Props {
  url: string;
}

export default ({ url }: Props) => {
  window.location.href = url;
  return <Loading label="Redirecting you..." />;
};
