import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Checkout from "../components/Checkout";
import { Currency } from "../components/CurrencyPicker/CurrencyPicker";
import Dashboard from "../components/Dashboard";
import Download from "../components/Download";
import ExternalRedirect from "../components/ExternalRedirect";
import Home from "../components/Home";
import NewHome from "../pages/Home";
import Resources from "../components/Resources";
import Success from "../components/Success";
import { AMAZON_URL, APPLE_URL, GOOGLE_URL, SPOTIFY_URL } from "../consts";
import UhOhSpaghettiOh from "../pages/UhOhSpaghettiOh/UhOhSpaghettiOh";

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
      {/* <Home happyPackOne={happyPackOne} /> */}
      <NewHome />
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
      <Redirect to="/" />
    </Route>
    <Route exact path="/packs">
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
      <Contact />
    </Route>

    {/* Redirect urls */}

    <Route path="/uh-oh-spaghetti-oh">
      <UhOhSpaghettiOh />
    </Route>
    <Route path="/spotify">
      <ExternalRedirect url={SPOTIFY_URL} />
    </Route>
    <Route path="/amazon">
      <ExternalRedirect url={AMAZON_URL} />
    </Route>
    <Route path="/apple">
      <ExternalRedirect url={APPLE_URL} />
    </Route>
    <Route path="/google">
      <ExternalRedirect url={GOOGLE_URL} />
    </Route>
  </Switch>
);
