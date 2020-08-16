import { Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import React, { useRef } from "react";
import { formatPrice } from "../../helpers";
import { CartItem } from "../../hooks/useCartItems";
import { useStripeCheckout } from "../../hooks/useStripeCheckout";
import Button from "../Button";
import SongList from "../SongList";
import styles from "./Home.module.scss";

const packOne = {
  priceId: "price_1HFSo4FbHwwHDg3DK1i4YblC",
  enabled: true,
  amount: 2000,
  currency: "aud",
} as any;

const Home = () => {
  const stripe = useStripe();

  const [processing, _error, openCheckoutSession] = useStripeCheckout(stripe!);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await openCheckoutSession([packOne]);
  };

  const items = [
    {
      productId: "prod_HOdRUkZgB5CFmH",
      name: "Uh oh spaghetti oh",
      url:
        "https://api.happysingingkids.com/download/share/prod_HOdRUkZgB5CFmH",
      filetype: "audio",
    },
    {
      productId: "prod_HOdRq4x692ERsA",
      name: "Grumplestiltskin",
      url:
        "https://api.happysingingkids.com/download/share/prod_HOdRq4x692ERsA",
      filetype: "audio",
    },
    {
      productId: "prod_HmVUV2SprbAo9h",
      name: "Lullaby Angel",
      url:
        "https://api.happysingingkids.com/download/share/prod_HmVUV2SprbAo9h",
      filetype: "audio",
    },
    {
      productId: "prod_HRh1JWoeQ6Etnj",
      name: "Bummer mummy",
      url:
        "https://api.happysingingkids.com/download/share/prod_HRh1JWoeQ6Etnj",
      filetype: "audio",
    },
    {
      productId: "prod_HRgyCTMF0a5tUo",
      name: "Butterfly flaps its wings",
      url:
        "https://api.happysingingkids.com/download/share/prod_HRgyCTMF0a5tUo",
      filetype: "audio",
    },
    {
      productId: "prod_HmVVaM78OF7B35",
      name: "The Wind",
      url:
        "https://api.happysingingkids.com/download/share/prod_HmVVaM78OF7B35",
      filetype: "audio",
    },
    {
      productId: "prod_HmVVnVWod9t63R",
      name: "Go to bed",
      url:
        "https://api.happysingingkids.com/download/share/prod_HmVVnVWod9t63R",
      filetype: "audio",
    },
    {
      productId: "prod_HmVWh5V6yJyCBE",
      name: "Greetings song",
      url:
        "https://api.happysingingkids.com/download/share/prod_HmVWh5V6yJyCBE",
      filetype: "audio",
    },
  ] as CartItem[];

  const renderForm = () => (
    <form onSubmit={handleSubmit}>
      {/* <p>Fun and catchy, homemade songs for happy singing kids!</p> */}
      <h2>
        Kids songs you'll love to sing!
        <br />
        (they're a little bit different)
      </h2>

      <SongList preview items={items} />

      <div className={styles.Details}>
        {/* {total && <p className={styles.Total}>Total {formatPrice(total)}</p>} */}
        {/* {error && <div className="error">{error}</div>} */}

        <p>
          Purchase the "Happy Pack" below to get the full version of the songs (
          {formatPrice(packOne)})
        </p>
        <p className={styles.WithButton}>
          <Button
            icon={processing ? "cog fa-spin" : undefined}
            label={processing ? "One moment…" : "Buy the Happy Pack"}
            disabled={processing || !stripe}
          ></Button>
        </p>
        <p className={styles.Small}>
          You'll get access to your own page identical to this listing the full
          version of each song.
        </p>
        <p className={styles.Small}>
          (Your support goes towards supporting more happy music 😃)
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

export default () => {
  const stripePromise = useRef<Promise<Stripe | null>>(
    loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!)
  );

  return (
    <Elements stripe={stripePromise.current}>
      <Home />
    </Elements>
  );
};
