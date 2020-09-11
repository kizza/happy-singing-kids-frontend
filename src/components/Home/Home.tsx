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
        <p>
          Happy Singing Kids is the "covid project" of a musician and mother. A
          labour of love, sharing the songs that come to life around the house
          with her husband and two young daughters.
        </p>
        <p>
          Here's hoping it brings your home, school or playground a bunch of
          happy singing kids as well.
        </p>
      </div>

      <SongList preview items={items} />

      <div className={styles.Inner}>
        <p>
          Purchase the "Happy Pack" below <br />
          to get the full version of the songs!
        </p>
      </div>

      <p className={styles.WithButton}>
        <Button
          icon={processing ? "cog fa-spin" : undefined}
          label={
            processing
              ? "One moment…"
              : `Get the Happy Pack ${formatPrice(purchaseItem)}`
          }
          disabled={processing || !stripe}
        ></Button>
      </p>
      <div className={styles.CurrencyPicker}>
        <CurrencyPicker change={changeCurrency} currency={currency} />
      </div>
      <p className={styles.Small}>
        You'll get access to your own page identical to this, listing the full
        version of each song. <br />
      </p>
      <p className={styles.Small}>
        (Your support goes towards creating more happy music 😃)
      </p>
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
