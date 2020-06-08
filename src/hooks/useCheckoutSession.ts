import { useEffect, useState } from "react";
import { api } from "../api";

const getCheckoutSession = (sessionId: string): Promise<any> =>
  api(`session/${sessionId}`);

export const useCheckoutSession = (sessionId: string) => {
  const [checkoutSession, setCheckoutSession] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    getCheckoutSession(sessionId)
      .then(session => {
        console.log("Got session back", session);
        setCheckoutSession(session);
      })
      .catch(e => {
        setError(e.message);
      })
      .finally(() => setLoading(false));
  }, [sessionId]);

  return [loading, error, checkoutSession];
};
