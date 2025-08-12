import { retry } from "../helpers";

export const api = (path: string, postData?: any) =>
  retry(() =>
    fetch(`${process.env.REACT_APP_API_URL!}${path}`, {
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

export const shop = (path: string, postData?: any) =>
  retry(() =>
    fetch(`${process.env.NEXT_PUBLIC_SHOP_URL!}${path}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      ...(!!postData && {
        method: "POST",
        body: JSON.stringify(postData),
      }),
    }).then(response =>
      response
        .json()
        .then(json => {
          if (response.ok) {
            return json
          } else {
            throw new Error(json.message || "Unknown error")
          }
        })
    )
  );
