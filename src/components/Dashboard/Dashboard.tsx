import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { CartItem } from "../../hooks/useCartItems";
import { useDashboard } from "../../hooks/useDashboard";
import Loading from "../Loading";
import styles from "./Dashboard.module.scss";
import SongList from "../SongList";
import success from "../../assets/success.svg";

const Dashboard = (
  props: RouteComponentProps<{ token: string }> & { thankyou?: boolean }
) => {
  const { thankyou, match } = props;
  const [loading, error, dashboard] = useDashboard(match.params.token);
  const { items } = dashboard || {};

  const thanks = () => (
    <>
      <img className={styles.Thankyou} src={success} alt="Success!" />
      <p>
        <b>Thank you for your support!</b>. An email with your download page has
        been sent to {dashboard.email}
      </p>
    </>
  );

  const renderItems = (links: CartItem[]) => (
    <>
      {thankyou && thanks()}
      <p>
        The links to download your mp3s are below. (right-click and click save).
        Thank you for supporting local music.
      </p>

      <SongList items={links} />
    </>
  );

  return (
    <div className={styles.Dashboard}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {items && renderItems(items)}
          {error && <div className="error">{error}</div>}
        </>
      )}
    </div>
  );
};

export default withRouter(Dashboard);
