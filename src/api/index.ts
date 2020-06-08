import { retry } from "../helpers";

export const api = (path: string, postData?: any) =>
  retry(() =>
    fetch(`${process.env.REACT_APP_API_URL!}/${path}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      ...(!!postData && {
        method: "POST",
        body: JSON.stringify(postData),
      }),
    }).then(response => response.json())
  );
