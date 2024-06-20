import { Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import React, { useRef } from "react";
import { formatPrice } from "../../helpers";
import { CartItem } from "../../hooks/useCartItems";
import { useStripeCheckout } from "../../hooks/useStripeCheckout";
import Button from "../Button";
import SongList from "../SongList";
import styles from "./Home.module.scss";
import CurrencyPicker from "../CurrencyPicker";
import items from "./songs";
import { Currency } from "../CurrencyPicker/CurrencyPicker";
import useCookie from "../../hooks/useCookie";
import { useAnalytics } from "../../hooks/useAnalytics";
import abcKidsListen from "../../assets/abc-kids-listen.png";
import download from "../../assets/download.png";
import spotify from "../../assets/spotify.png";
import apple from "../../assets/apple.png";
import amazon from "../../assets/amazon.png";
import Loading from "../Loading";
import { ABC_KIDS_URL, SPOTIFY_URL, AMAZON_URL, APPLE_URL } from "../../consts";
import YouTube from "../YouTube";
import Photo from "../../assets/polaroids/one.jpg";
import Photo2 from "../../assets/polaroids/two.jpg";
import Photo3 from "../../assets/polaroids/three.jpg";
import { ReactComponent as AmazonIcon } from "../../assets/icons/amazon.svg";
import { ReactComponent as AppleIcon } from "../../assets/icons/apple.svg";
import { ReactComponent as SpotifyIcon } from "../../assets/icons/spotify.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/icons/youtube.svg";
import IconLink from "../../components/IconLink";
import Polaroid from "../../components/Polaroid";

interface Props {
  happyPackOne: Record<Currency, CartItem>;
}

const Home = ({ happyPackOne }: Props) => {
  const stripe = useStripe();

  const [processing, _error, openCheckoutSession] = useStripeCheckout(stripe!);
  const [currency, setCurrency] = useCookie<Currency>("currency", "AUD");

  const purchaseItem = happyPackOne[currency];
  const { trackEvent } = useAnalytics();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    trackEvent({
      category: "Purchasing",
      action: "Clicked purchase",
      label: "Happy Pack 1",
    });
    await openCheckoutSession([purchaseItem]);
  };

  const redirectToService = (label: string, url: string) => () => {
    trackEvent({
      category: "Redirect",
      action: "Click",
      label: label,
    });
    window.location.href = url;
  };

  const changeCurrency = (newValue: Currency) => setCurrency(newValue);

  const renderForm = () => (
    <form onSubmit={handleSubmit}>
      <div className={styles.Inner}>
        <p>
          Purchase the "Happy Pack" below <br />
          to <strong>get the full chord charts</strong> as well as{" "}
          <strong>downloadable mp3s</strong>!
        </p>
      </div>

      <img
        src={download}
        className={styles.DownloadImage}
        alt="Download MP3s and PDFs"
      />

      <p className={styles.WithButton}>
        <Button
          style={processing ? styles.Button : ""}
          label={
            processing
              ? "One moment…"
              : `Buy the Happy Pack ${formatPrice(purchaseItem)}`
          }
          disabled={processing || !stripe}
        >
          {processing && <Loading className={styles.LoadingIcon} />}
        </Button>
      </p>
      <div className={styles.CurrencyPicker}>
        <CurrencyPicker change={changeCurrency} currency={currency} />
      </div>
      <div className={styles.Access}>
        <ul>
          <li>Full versions of each song (to stream or download)</li>
          <li>Chord charts for each song (as pdfs)</li>
          <li>
            Your support goes towards creating more happy music{" "}
            <span role="img" aria-label="Smiley face">
              😃
            </span>
          </li>
        </ul>
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

  return <div className={[styles.Home, "flex flex-col text-center space-y-10 px-2"].join(" ")}>
    <div className="px-2 space-y-2 leading-relaxed">
      <h2 className="font-bold">Kids songs you'll love to sing!</h2>
      <p className="text-2xl">(they're a little bit different)</p>
    </div>

    <div className={[styles.FullBleed, "flex flex-wrap ml-[14%]"].join(" ")}>
      <Polaroid src={Photo} />
      <Polaroid src={Photo2} rotation={-5} />
      <Polaroid src={Photo3} rotation={2} />
      <Polaroid src={Photo} />

      <Polaroid src={Photo} rotation={-3} />
      <Polaroid src={Photo2} rotation={-3} />
      <Polaroid src={Photo3} rotation={2} />
      <Polaroid src={Photo} />
    </div>

    <div>
      <h4 className="text-grape">Now playing on</h4>
      <p className={styles.ABCKidsListen}>
        <button
          onClick={redirectToService("ABCKids", ABC_KIDS_URL)}
          style={{padding: ".5em 1em"}}
          type="button"
        >
          <img src={abcKidsListen} alt="ABC Kids Listen" />
        </button>
      </p>
    </div>

    <div className="space-y-6">
      <h4 className="text-grape">Streaming live via...</h4>
      <div className="flex justify-center flex-wrap gap-4 px-4 md:px-1">
        <IconLink icon={YouTubeIcon} label="YouTube" href="https://www.youtube.com/@happysingingkids" />
        <IconLink icon={SpotifyIcon} label="Spotify" href={SPOTIFY_URL} />
        <IconLink icon={AmazonIcon} label="Amazon Music" href={AMAZON_URL} />
        <IconLink icon={AppleIcon} label="Apple Music" href={APPLE_URL} />
      </div>
    </div>

    <div>
      <h4 className="text-grape mb-6">Or start watching below...</h4>
      <div className={styles.Videos}>
        <YouTube src="https://www.youtube.com/embed/videoseries?si=EF44vLkT0Vy_6MR0&amp;list=PL9mOhnHTMV-FdwyAe35qQnawNUcfu8GKm" title="Mystery Alphabet Reveal Series" />

        <YouTube src="https://www.youtube.com/embed/videoseries?si=JodT8qCQ1gOCbyIR&amp;list=PL9mOhnHTMV-G_oTvYfDZYFvQxs5gHQDrx" title="Happy Highlights: Fun Favourites from Happy Singing Kids" />

        <YouTube id="ffcZOl1QKMc" title="Teddy Bear you're the best!" />

        <YouTube id="fdd5Wd6mDB4" title="Uh oh spaghetti-oh!" />
      </div>
    </div>
  </div>;
};

    // {renderForm()}

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
