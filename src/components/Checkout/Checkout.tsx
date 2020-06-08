import { Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import React, { useRef } from "react";
import { formatPrice } from "../../helpers";
import { useCartItems } from "../../hooks/useCartItems";
import Button from "../Button";
import Loading from "../Loading";
import SongList from "../SongList";
import styles from "./Checkout.module.scss";

const Checkout = () => {
  const stripe = useStripe();

  const [
    loading,
    processing,
    error,
    items,
    activeItems,
    total,
    toggleItem,
    openCheckoutSession,
  ] = useCartItems(stripe!);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await openCheckoutSession();
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit}>
      <p>Select the songs you wish to purchase from the list below.</p>

      <SongList items={items} toggleItem={toggleItem} />

      <div className={styles.Details}>
        {total && <p className={styles.Total}>Total {formatPrice(total)}</p>}

        {error && <div className="error">{error}</div>}

        <Button
          label={processing ? "One moment…" : "Purchase"}
          disabled={activeItems.length === 0 || processing || !stripe}
        ></Button>
      </div>
    </form>
  );

  return (
    <div className={styles.Checkout}>
      {error ? (
        <p>Sorry, womething went wrong</p>
      ) : loading ? (
        <Loading />
      ) : (
        renderForm()
      )}
    </div>
  );
};

export default () => {
  const stripePromise = useRef<Promise<Stripe | null>>(
    loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!)
  );

  return (
    <Elements stripe={stripePromise.current}>
      <Checkout />
    </Elements>
  );
};
