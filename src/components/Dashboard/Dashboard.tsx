import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { CartItem } from "../../hooks/useCartItems";
import { useDashboard } from "../../hooks/useDashboard";
import Loading from "../Loading";
import SongList from "../SongList";
import styles from "./Dashboard.module.scss";

interface Properties {
  token?: string;
  internal?: boolean;
  thankyou?: boolean;
}

type Props = Properties & RouteComponentProps<{ token: string }>;

const parseProps = (props: Props) => {
  const { token, match } = props;
  const internal = !!token;
  return {
    ...props,
    internal,
    token: internal ? token! : match.params.token, // Token can be passed as prop
  };
};

const Dashboard = (props: Props) => {
  const { token, internal } = parseProps(props);
  const [loading, error, dashboard] = useDashboard(token);
  const { thankyou } = props;
  const { items } = dashboard || {};

  const thanks = () => (
    <>
      <p>
        <b>Thank you for your support!</b>. An email with your download page has
        been sent to <span className={styles.Emphasis}>{dashboard.email}</span>
      </p>
    </>
  );

  const instructions = () =>
    internal ? (
      <>
        {/* <p>Checkout the songs below and let me know what you think :)</p> */}
        <h2>
          Kids songs you'll love to sing!
          <br />
          (they're a little bit different)
        </h2>
        <p>
          Happy Singing Kids is the "covid project" of a musician and mother. A
          labour of love, sharing the songs that come to life around the house
          with her husband and two young daughters.
        </p>
        <p>
          Here's hoping it brings your home, school or playground a bunch of
          happy singing kids as well.
        </p>
      </>
    ) : (
      <>
        <p>
          You can listen below (and sing along with the lyrics), or click to
          download a song. (right-click and click save).
        </p>

        <p>Thank you for supporting local music.</p>
      </>
    );

  const renderItems = (links: CartItem[]) => (
    <>
      <div className={styles.Inner}>
        {thankyou && thanks()}
        {instructions()}
      </div>
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
