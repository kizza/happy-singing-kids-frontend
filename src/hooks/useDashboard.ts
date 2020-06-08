import { useEffect, useState } from "react";
import { api } from "../api";

export interface Dashboard {
  name: string;
  email: string;
  items: { id: string; name: string }[];
}

const getDashboard = (token: string): Promise<Dashboard> =>
  api(`dashboard/${token}`);

export const useDashboard = (token: string) => {
  const [dashboard, setDashboard] = useState<Dashboard | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    getDashboard(token)
      .then(dashboard => setDashboard(dashboard))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [token]);

  return [loading, error, dashboard];
};
