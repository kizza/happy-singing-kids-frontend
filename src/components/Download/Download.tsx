import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

const Download = (
  props: RouteComponentProps<{ token: string; key: string }>
) => {
  const {
    match: {
      params: { token, key },
    },
  } = props;

  const redirect = `${process.env.REACT_APP_API_URL!}/download/${token}/${key}`;

  useEffect(() => {
    window.location.href = redirect;
  }, [redirect]);

  return <></>;
};

export default withRouter(Download);
