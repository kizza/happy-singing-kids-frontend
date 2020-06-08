export interface CheckoutSession {
  payment_intent: PaymentIntent;
}

export interface PaymentIntent {
  next_action: NextAction;
}

export interface NextAction {
  type: string;
  redirect_to_url: {
    url: string;
    return_url: string;
  };
}

