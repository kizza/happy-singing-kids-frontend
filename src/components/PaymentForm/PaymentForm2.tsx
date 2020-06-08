import React, { useRef, useEffect, useState } from "react";
/* import styles from "./PaymentForm.module.scss"; */
import {
  loadStripe,
  Stripe,
  StripeCardElementOptions,
} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../Button";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
/* console.log("Initialising with ", process.env.REACT_APP_STRIPE_PUBLIC_KEY); */
/* const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!); */

const CARD_OPTIONS: StripeCardElementOptions = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "purple",
      color: "purple",
      fontWeight: "500",
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "22px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#aaa" },
    },
    invalid: {
      iconColor: "red",
      color: "red",
    },
  },
};

const submitToBackend = () =>
  fetch("http://localhost:3000/payment", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ a: 1, b: 2 }),
  }).then(response => response.json());

const clicked = () =>
  submitToBackend().then(response => {
    console.log("Got response", response);
  });

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    console.log("Mounting");
  });

  const [error, setError] = useState<any>();

  const handleSubmit = async (event: any) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement)!;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error);
      console.log("[error]", error);
    } else {
      setError(undefined);
      submitToBackend().then(response => {
        console.log("Got response", response);
      });
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  const noop = () => {};
  const validation = () => error && <div>{error.message}</div>;

  return (
    <form onSubmit={handleSubmit}>
      {validation()}
      <CardElement options={CARD_OPTIONS} />
      <Button onClick={noop} label="Pay the man" disabled={!stripe} />
    </form>
  );
};

export default () => {
  console.log("Initialising with ", process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  const stripePromise = useRef<Promise<Stripe | null>>(
    loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!)
  );

  return (
    <Elements stripe={stripePromise.current}>
      <PaymentForm />
    </Elements>
  );
};
