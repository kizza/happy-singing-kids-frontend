import { useEffect, useState } from "react";
import { api } from "../api";
import { Dashboard } from "./useDashboard";

const createPurchase = (checkoutSessionId: string): Promise<Dashboard> =>
  api("live", { checkoutSessionId });

export const useLiveProcessing = (sessionId: string) => {
  const [purchase, setPurchase] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    createPurchase(sessionId)
      .then(session => {
        console.log("Got purchase back", session);
        setPurchase(session);
      })
      .catch(e => {
        setError(e.message);
      })
      .finally(() => setLoading(false));
  }, [sessionId]);

  return [loading, error, purchase];
};
