import queryString from "query-string";
import React from "react";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { useLiveProcessing } from "../../hooks/useLiveProcessing";
/* import { CheckoutSession, NextAction } from "../../models/stripe"; */
import Loading from "../Loading";
import styles from "./Success.module.scss";
/* import { useCheckoutSession } from "../../hooks/useCheckoutSession"; */

/* const handleNextAction = (nextAction: NextAction) => { */
/*   if (nextAction.type === "redirect_to_url") { */
/*     console.log(`Redirecting to ${nextAction.redirect_to_url.url}`); */
/*     window.location = nextAction.redirect_to_url.url as any; */
/*   } */
/* }; */

/* const processCheckoutSession = (session: CheckoutSession) => { */
/*   const { payment_intent: paymentIntent } = session; */
/*   const { next_action: nextAction } = paymentIntent; */
/*   if (nextAction) { */
/*     handleNextAction(nextAction); */
/*   } */
/* }; */

const Success = ({ location }: RouteComponentProps) => {
  const { session_id: sessionId } = queryString.parse(location.search) as {
    session_id: string;
  };

  /* const [loading, error, checkoutSession] = useCheckoutSession(sessionId); */

  const [processing, error, result] = useLiveProcessing(sessionId);

  /* if (result) { */
  /*   processCheckoutSession(result); */
  /* } */

  const redirect = () => {
    if (result) {
      const { redirectToUrl } = result;
      window.location.href = redirectToUrl;
    }
  };

  const displayError = () => {
    if (error) {
      return (
        <p>
          Sorry, something seems to have gone wrong.
          <pre>
            <code>{JSON.stringify(error, null, 2)}</code>
          </pre>
        </p>
      );
    }
  };

  const loadingLabel = processing ? "One moment..." : "Processing...";

  return (
    <div className={styles.Success}>
      {processing ? <Loading label={loadingLabel} /> : redirect()}
      {displayError()}
    </div>
  );
};

export default withRouter(Success);
