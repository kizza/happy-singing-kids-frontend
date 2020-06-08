import { useEffect, useState } from "react";
import { api } from "../api";

const getDownload = (token: string, key: string): Promise<string> =>
  api(`download/${token}/${key}`);

export const useDownload = (token: string, key: string) => {
  const [download, setDownload] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    getDownload(token, key)
      .then(download => setDownload(download))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [token]);

  return [loading, error, download];
};
