import { useState } from "react";

export const setCookie = (name: string, value: any, options: any) => {
  const optionsWithDefaults = {
    days: 7,
    path: "/",
    ...options,
  };
  const expires = new Date(
    Date.now() + optionsWithDefaults.days * 864e5
  ).toUTCString();
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    expires +
    "; path=" +
    optionsWithDefaults.path;
};

export const getCookie = <T>(name: string) =>
  (document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "") as any) as T | undefined;

export default <T>(
  key: string,
  initialValue: T
): [T, (value: T, options?: any) => void] => {
  const [item, setItem] = useState<T>(getCookie<T>(key) || initialValue);

  const updateItem = (value: T, options?: any) => {
    setItem(value);
    setCookie(key, value, options);
  };

  return [item, updateItem];
};
