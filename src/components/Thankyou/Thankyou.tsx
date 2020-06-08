import queryString from "query-string";
import React from "react";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { CheckoutSession, NextAction } from "../../models/stripe";
import { CartItem } from "../../hooks/useCartItems";
import styles from "./Thankyou.module.scss";
import Loading from "../Loading";
import success from "../../assets/success.svg";
import { useLiveProcessing } from "../../hooks/useLiveProcessing";
import SongList from "../SongList";
import Button from "../Button";

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

const Thankyou = ({ location }: RouteComponentProps) => {
  const { session_id: sessionId } = queryString.parse(location.search) as {
    session_id: string;
  };

  /* const [loading, error, checkoutSession] = useCheckoutSession(sessionId); */

  const [loading, error, purchase] = useLiveProcessing(sessionId);

  /* if (checkoutSession) { */
  /*   processCheckoutSession(checkoutSession); */
  /* } */

  const goToDownloadPage = () => {
    window.location.href = `/songs/${purchase.internalId}`;
  };

  const renderSuccess = () => {
    return (
      purchase && (
        <>
          <img className={styles.Success} src={success} alt="Success!" />
          <p>
            <b>Thank you for your support!</b>. An email with your download page
            has been sent to {purchase.email}
          </p>

          <p>
            <Button
              onClick={goToDownloadPage}
              label="View download page"
            ></Button>
          </p>

          {/* <SongList items={purchase.items} /> */}
        </>
      )
    );
  };

  const renderResult = () =>
    error ? (
      <p>{error}</p>
    ) : (
      <>
        {purchase && renderSuccess()}

        <pre className="sr-callout">
          <code>{false && JSON.stringify(purchase, null, 2)}</code>
        </pre>
      </>
    );

  return (
    <div className={styles.Thankyou}>
      {loading ? <Loading /> : renderResult()}
    </div>
  );
};

export default withRouter(Thankyou);
