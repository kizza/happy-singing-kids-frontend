import React, { useEffect, useState, useRef } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import Button from "../Button";
/* import "./CheckoutForm.css"; */
/* import api from "../api"; */

const createPaymentIntent = () =>
  fetch("http://localhost:3000/payment", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ a: 1, b: 2 }),
  }).then(response => response.json());

const PaymentForm = () => {
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<any>("");
  const [clientSecret, setClientSecret] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [metadata, setMetadata] = useState<any>(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Step 1: Fetch product details such as amount and currency from
    // API to make sure it can't be tampered with in the client.
    /* const productDetails = { amount: 10, currency: "aud" }; */
    setAmount(15);
    setCurrency("aud");

    /* api.getProductDetails().then(productDetails => { */
    /* setAmount(productDetails.amount / 100); */
    /* setCurrency(productDetails.currency); */
    /* }); */

    // Step 2: Create PaymentIntent over Stripe API
    createPaymentIntent()
      /* payment_method_types: ["card"] */
      .then((data: any) => {
        console.log("Got back client secret");

        console.log(data);
        /* setClientSecret(data.clientSecret); */
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  const handleSubmit = async (event: any) => {
    console.log("Submittin the form");
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    setProcessing(true);

    const cardElement = elements.getElement(CardElement)!;

    /* const { error, paymentMethod } = await stripe.createPaymentMethod({ */
    /*   type: "card", */
    /*   card: cardElement, */
    /* }); */

    // Step 3: Use clientSecret from PaymentIntent and the CardElement
    // to confirm payment with stripe.confirmCardPayment()
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret!,
      {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: event.target.name.value,
          },
        },
      }
    );

    if (error) {
      setError(`Payment failed: ${error.message!}`);
      setProcessing(false);
      console.log("[error]", error);
    } else {
      setError(null);
      setSucceeded(true);
      setProcessing(false);
      setMetadata(paymentIntent!);
      console.log("[PaymentIntent]", paymentIntent);
    }
  };

  const renderSuccess = () => {
    return (
      <div className="sr-field-success message">
        <h1>Your test payment succeeded</h1>
        <p>View PaymentIntent response:</p>
        <pre className="sr-callout">
          <code>{JSON.stringify(metadata, null, 2)}</code>
        </pre>
      </div>
    );
  };

  const renderForm = () => {
    const options = {
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

    return (
      <form onSubmit={handleSubmit}>
        <h1>
          {currency.toLocaleUpperCase()}{" "}
          {amount.toLocaleString(navigator.language, {
            minimumFractionDigits: 2,
          })}{" "}
        </h1>
        <h4>Pre-order the Pasha package</h4>

        <div className="sr-combo-inputs">
          <div className="sr-combo-inputs-row">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              autoComplete="cardholder"
              className="sr-input"
            />
          </div>

          <div className="sr-combo-inputs-row">
            <CardElement
              className="sr-input sr-card-element"
              options={options}
            />
          </div>
        </div>

        {error && <div className="message sr-field-error">{error}</div>}

        <Button
          label={processing ? "Processing…" : "Pay"}
          disabled={processing || !clientSecret || !stripe}
        ></Button>
      </form>
    );
  };

  return (
    <div className="checkout-form">
      <div className="sr-payment-form">
        <div className="sr-form-row" />
        {succeeded ? renderSuccess() : renderForm()}
      </div>
    </div>
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
