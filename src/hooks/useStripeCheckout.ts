import { Stripe } from "@stripe/stripe-js";
import { useState } from "react";
import { api } from "../api";
import { CartItem } from "./useCartItems";

interface CreateSessionDto {
  description: string;
  items: {
    price: string;
    quantity: number;
  }[];
}

export interface CartTotal {
  amount: number;
  currency: string;
}

const createSessionDto = (items: CartItem[]): CreateSessionDto => ({
  description: "Foo bar",
  items: items
    .filter(item => !!item.enabled)
    .map(item => ({
      price: item.priceId,
      quantity: 1,
    })),
});

type UseStripeCheckout = [
  boolean,
  string | undefined,
  (items: CartItem[]) => Promise<void | { error: any; sessionId: string }>
];

export const useStripeCheckout = (stripe: Stripe): UseStripeCheckout => {
  const [error, setError] = useState<string | undefined>();
  const [processing, setProcessing] = useState(false);

  const openCheckoutSession = async (rawItems: CartItem[]) =>
    Promise.resolve()
      .then(() => setProcessing(true))
      .then(() =>
        api("sessions", createSessionDto(rawItems))
          .then(async ({ id: sessionId }) => {
            const { error: sessionError } = await stripe!.redirectToCheckout({
              sessionId,
            });
            if (sessionError) {
              setError(`Could not create session ${sessionError.message}`);
            }
            return { error, sessionId };
          })
          .catch(e => {
            console.log("Error creating checkout session", e);
            setError("Could not create checkout session");
          })
          .finally(() => {
            setProcessing(false);
          })
      );

  return [processing, error, openCheckoutSession];
};
