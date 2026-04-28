"use client"

import { shop } from "@/api";
import Loading from "@/components/Loading";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import posthog from "posthog-js";
/* import { useCheckoutSession } from "../../hooks/useCheckoutSession"; */

// const retrieveCheckoutSession = (checkoutSessionId: string): Promise<any> =>
//   shop(`checkout/session/${checkoutSessionId}`);

const fulfillCheckoutSession = (checkoutSessionId: string): Promise<any> =>
  shop(`checkout/session/${checkoutSessionId}`, {});

const Success = () => {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id') || ""

  const [purchase, setPurchase] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    fulfillCheckoutSession(sessionId)
      .then(session => {
        if (session?.customer_details?.email) {
          setPurchase(session);
          posthog.identify(session.customer_details.email, {
            email: session.customer_details.email,
            name: session.customer_details.name,
          });
          posthog.capture("purchase_completed", {
            session_id: sessionId,
            email: session.customer_details.email,
            currency: session.currency,
            amount_total: session.amount_total,
          });
        } else {
          setError(new Error("No email found in order"))
        }
      })
      .catch((err) => {
        posthog.captureException(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [sessionId]);

  const PurchaseMessage = ({purchase}: any) => {
    return (
      <>
        <p className="text-aqua font-bold">
          A confirmation email has been sent to <span className="text-grape">{purchase?.customer_details.email}</span>
        </p>
        <p>Thank you so much for your support!</p>
      </>
    )
  };

  const ErrorMessage = ({error}: {error: Error}) => {
    return (
      <>
        <p title={error.message} className="text-aqua font-bold">
          Hmmm, we weren't able to retrieve your order... but you should expect a confirmation email shortly.
        </p>
        <p>If you do not, please <a href="mailto:contact@happysingingkids.com">contact us</a> and we'll ensure everything is sorted!</p>
        <p>Thank you so much for your support</p>
      </>
    )
  };

  return (
    <>
      {loading && <Loading size={20} label="One moment..." styles={[]}/>}
      {purchase && <PurchaseMessage purchase={purchase}/>}
      {error && <ErrorMessage error={error}/>}
    </>
  );
};

export default Success;
