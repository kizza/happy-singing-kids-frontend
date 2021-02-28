import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../components/About";
import Checkout from "../components/Checkout";
import Dashboard from "../components/Dashboard";
import Download from "../components/Download";
import Resources from "../components/Resources";
import Success from "../components/Success";
import Home from "../components/Home";
import { Currency } from "../components/CurrencyPicker/CurrencyPicker";

const happyPackOne = {
  AUD: {
    priceId: process.env.REACT_APP_HAPPY_PACK_1_AUD,
    enabled: true,
    amount: 1699,
    currency: "aud",
  },
  USD: {
    priceId: process.env.REACT_APP_HAPPY_PACK_1_USD,
    enabled: true,
    amount: 1299,
    currency: "usd",
  },
  GBP: {
    priceId: process.env.REACT_APP_HAPPY_PACK_1_GBP,
    enabled: true,
    amount: 999,
    currency: "gbp",
  },
} as Record<Currency, any>;

const happyPackOneTest = {
  ...happyPackOne,
  TEST: {
    priceId: process.env.REACT_APP_HAPPY_PACK_1_TEST,
    enabled: true,
    amount: 50,
    currency: "aud",
  },
} as Record<Currency, any>;

{
  /* <Home happyPackOne={happyPackOne} /> */
}

export default (
  <Switch>
    <Route exact path="/(cancel)?">
      {/* <p style={{ textAlign: "center" }}>Coming soon</p> */}
      <Home happyPackOne={happyPackOne} />
    </Route>

    <Route exact path="/test">
      <Home happyPackOne={happyPackOneTest} />
    </Route>

    <Route exact path="/purchase(/cancel)?">
      <Checkout />
    </Route>
    <Route path="/purchase/success">
      <Success />
    </Route>

    <Route path="/thankyou/:token">
      <Dashboard thankyou />
    </Route>

    <Route exact path="/preview">
      <Dashboard token="share" />
    </Route>
    <Route exact path="/songs/:token">
      <Dashboard />
    </Route>
    <Route path="/download/:token/:key">
      <Download />
    </Route>

    <Route path="/resources">
      <Resources />
    </Route>

    <Route path="/about">
      <About />
    </Route>

    <Route path="/contact">
      <p style={{ textAlign: "center" }}>
        Get in touch at{" "}
        <a href="mailto:happysingingkids@gmail.com">
          happysingingkids@gmail.com
        </a>
        ,
        <br /> we'd love to hear from you!
      </p>
    </Route>

    {/* Redirect urls */}

    <Route
      path="/spotify"
      component={() => {
        window.location.href =
          "https://open.spotify.com/album/4vzOqW9ZCHRLva3VPgzMBP?si=oH71mnFkQW28CWKDiIzmdQ";
        return null;
      }}
    />
    <Route
      path="/amazon"
      component={() => {
        window.location.href =
          "https://music.amazon.com/albums/B08WH6SYP6?marketplaceId=ATVPDKIKX0DER";
        return null;
      }}
    />
    <Route
      path="/apple"
      component={() => {
        window.location.href =
          "https://music.apple.com/us/album/uh-oh-spaghetti-oh/1553353479";
        return null;
      }}
    />
    <Route
      path="/google"
      component={() => {
        window.location.href =
          "https://music.youtube.com/playlist?list=OLAK5uy_mukftXWpZWQY0lWq7-7uxL49OrAdbBpEc";
        return null;
      }}
    />
  </Switch>
);
