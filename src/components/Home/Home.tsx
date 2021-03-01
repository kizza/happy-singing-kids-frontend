import { Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import React, { useRef } from "react";
import { formatPrice } from "../../helpers";
import { CartItem } from "../../hooks/useCartItems";
import { useStripeCheckout } from "../../hooks/useStripeCheckout";
import Button from "../Button";
import SongList from "../SongList";
import styles from "./Home.module.scss";
import CurrencyPicker from "../CurrencyPicker";
import items from "./songs";
import { Currency } from "../CurrencyPicker/CurrencyPicker";
import useCookie from "../../hooks/useCookie";
import { useAnalytics } from "../../hooks/useAnalytics";
import download from "../../assets/download.png";
import spotify from "../../assets/spotify.png";
import apple from "../../assets/apple.png";
import amazon from "../../assets/amazon.png";
import Loading from "../Loading";
import { SPOTIFY_URL, AMAZON_URL, APPLE_URL } from "../../consts";

interface Props {
  happyPackOne: Record<Currency, CartItem>;
}

const Home = ({ happyPackOne }: Props) => {
  const stripe = useStripe();

  const [processing, _error, openCheckoutSession] = useStripeCheckout(stripe!);
  const [currency, setCurrency] = useCookie<Currency>("currency", "AUD");

  const purchaseItem = happyPackOne[currency];
  const { trackEvent } = useAnalytics();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    trackEvent({
      category: "Purchasing",
      action: "Clicked purchase",
      label: "Happy Pack 1",
    });
    await openCheckoutSession([purchaseItem]);
  };

  const changeCurrency = (newValue: Currency) => setCurrency(newValue);

  const renderForm = () => (
    <form onSubmit={handleSubmit}>
      <div className={styles.Inner}>
        <h2>
          Kids songs you'll love to sing!
          <br />
          (they're a little bit different)
        </h2>
      </div>

      <div className={styles.Stores}>
        <a href={SPOTIFY_URL}>
          <img src={spotify} alt="Listen now on Spotify" />
        </a>
        <a href={AMAZON_URL}>
          <img src={amazon} alt="Listen now on Amazon Music" />
        </a>
        <a href={APPLE_URL}>
          <img src={apple} alt="Listen now on Apple Music" />
        </a>
      </div>

      <div className={styles.Inner}>
        <p>
          Purchase the "Happy Pack" below <br />
          to <strong>get the full chord charts</strong> as well as{" "}
          <strong>downloadable mp3s</strong>!
        </p>
      </div>

      <img
        src={download}
        className={styles.DownloadImage}
        alt="Download MP3s and PDFs"
      />

      <p className={styles.WithButton}>
        <Button
          style={processing ? styles.Button : ""}
          label={
            processing
              ? "One moment…"
              : `Buy the Happy Pack ${formatPrice(purchaseItem)}`
          }
          disabled={processing || !stripe}
        >
          {processing && <Loading className={styles.LoadingIcon} />}
        </Button>
      </p>
      <div className={styles.CurrencyPicker}>
        <CurrencyPicker change={changeCurrency} currency={currency} />
      </div>
      <div className={styles.Access}>
        <ul>
          <li>Full versions of each song (to stream or download)</li>
          <li>Chord charts for each song (as pdfs)</li>
          <li>
            Your support goes towards creating more happy music{" "}
            <span role="img" aria-label="Smiley face">
              😃
            </span>
          </li>
        </ul>
      </div>
    </form>
  );

  /* {error ? ( */
  /*   <p>Sorry, womething went wrong</p> */
  /* ) : loading ? ( */
  /*   <Loading /> */
  /* ) : ( */
  /*   renderForm() */
  /* )} */

  return <div className={styles.Home}>{renderForm()}</div>;
};

export default (props: Props) => {
  const stripePromise = useRef<Promise<Stripe | null>>(
    loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!)
  );

  return (
    <Elements stripe={stripePromise.current}>
      <Home {...props} />
    </Elements>
  );
};
