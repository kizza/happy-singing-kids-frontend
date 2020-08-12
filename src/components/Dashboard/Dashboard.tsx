import classnames from "classnames";
import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { CartItem } from "../../hooks/useCartItems";
import { useDashboard } from "../../hooks/useDashboard";
import Loading from "../Loading";
import styles from "./Dashboard.module.scss";
import SongList from "../SongList";
import success from "../../assets/success.svg";
import { NowPlayingContext } from "../../hooks/useNowPlaying";
import Popup from "../Popup";
import { PopupContext } from "../../hooks/usePopup";

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
      <img className={styles.Thankyou} src={success} alt="Success!" />
      <p>
        <b>Thank you for your support!</b>. An email with your download page has
        been sent to {dashboard.email}
      </p>
    </>
  );

  const instructions = () =>
    internal ? (
      <>
        <p>Checkout the songs below and let me know what you think :)</p>
      </>
    ) : (
      <p>
        The links to download your mp3s are below. (right-click and click save).
        Thank you for supporting local music.
      </p>
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

  const [currentSong, setCurrentSong] = useState<string>("");
  const nowPlayingValue = {
    currentSong,
    setCurrentSong,
  };

  return (
    <div className={styles.Dashboard}>
      <NowPlayingContext.Provider value={nowPlayingValue}>
        {loading ? (
          <Loading />
        ) : (
          <>
            {items && renderItems(items)}
            {error && <div className="error">{error}</div>}
          </>
        )}
      </NowPlayingContext.Provider>
    </div>
  );
};

export default withRouter(Dashboard);
