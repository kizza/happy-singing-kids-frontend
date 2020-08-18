import { Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import React, { useRef } from "react";
import { formatPrice } from "../../helpers";
import { CartItem } from "../../hooks/useCartItems";
import { useStripeCheckout } from "../../hooks/useStripeCheckout";
import Button from "../Button";
import SongList from "../SongList";
import styles from "./Home.module.scss";

interface Props {
  happyPackOne: CartItem;
}

const Home = ({ happyPackOne }: Props) => {
  const stripe = useStripe();

  const [processing, _error, openCheckoutSession] = useStripeCheckout(stripe!);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await openCheckoutSession([happyPackOne]);
  };

  const items = [
    {
      productId: "prod_HOdRUkZgB5CFmH",
      name: "Uh oh spaghetti oh",
      url:
        "https://happy-singing-kids-preview.s3.amazonaws.com/Uh+oh+spaghetti+oh+(preview).mp3",
      filetype: "audio",
    },
    {
      productId: "prod_HOdRq4x692ERsA",
      name: "Grumplestiltskin",
      url:
        "https://happy-singing-kids-preview.s3.amazonaws.com/Grumplestiltskin+(preview).mp3",
      filetype: "audio",
    },
    {
      productId: "prod_HmVUV2SprbAo9h",
      name: "Lullaby Angel",
      url:
        "https://happy-singing-kids-preview.s3.amazonaws.com/Lullaby+Angel+(preview).mp3",
      filetype: "audio",
    },
    {
      productId: "prod_HRh1JWoeQ6Etnj",
      name: "Bummer mummy",
      url:
        "https://happy-singing-kids-preview.s3.amazonaws.com/Bummer+mummy+(preview).mp3",
      filetype: "audio",
    },
    {
      productId: "prod_HRgyCTMF0a5tUo",
      name: "Butterfly flaps its wings",
      url:
        "https://happy-singing-kids-preview.s3.amazonaws.com/Butterfly+flaps+its+wings+(preview).mp3",
      filetype: "audio",
    },
    {
      productId: "prod_HmVVaM78OF7B35",
      name: "The Wind",
      url:
        "https://happy-singing-kids-preview.s3.amazonaws.com/The+Wind+(preview).mp3",
      filetype: "audio",
    },
    {
      productId: "prod_HmVVnVWod9t63R",
      name: "Go to bed",
      url:
        "https://happy-singing-kids-preview.s3.amazonaws.com/Go+to+bed+(preview).mp3",
      filetype: "audio",
    },
    {
      productId: "prod_HmVWh5V6yJyCBE",
      name: "Greetings song",
      url:
        "https://happy-singing-kids-preview.s3.amazonaws.com/Greetings+song+(preview).mp3",
      filetype: "audio",
    },
  ] as CartItem[];

  const renderForm = () => (
    <form onSubmit={handleSubmit}>
      <div className={styles.Inner}>
        <h2>
          Kids songs you'll love to sing!
          <br />
          (they're a little bit different)
        </h2>
      </div>

      <SongList preview items={items} />

      <div className={styles.Inner}>
        <p>
          Purchase the "Happy Pack" below to get the full version of the songs!
        </p>
      </div>

      <div>
        <p className={styles.WithButton}>
          <Button
            icon={processing ? "cog fa-spin" : undefined}
            label={
              processing
                ? "One moment…"
                : `Buy the Happy Pack ${formatPrice(happyPackOne)}`
            }
            disabled={processing || !stripe}
          ></Button>
        </p>
        <p className={styles.Small}>
          You'll get access to your own page identical to this listing the full
          version of each song. <br />
        </p>
        <p className={styles.Small}>
          (Your support is massively appreciated and goes towards creating more
          happy music 😃)
        </p>
      </div>
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
