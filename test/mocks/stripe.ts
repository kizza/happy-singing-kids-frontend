import * as _react_stripe_js from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";

interface MockStripe {
  redirectToCheckout: (input: any) => any;
}

export const mockStripe = (mock: MockStripe) =>
  jest
    .spyOn(_react_stripe_js, "useStripe")
    .mockImplementation(() => (mock as any) as Stripe);
