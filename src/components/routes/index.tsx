import React from "react";
import { Route, Switch } from "react-router-dom";
import Checkout from "../Checkout";
import Dashboard from "../Dashboard";
import Download from "../Download";
import Resources from "../Resources";
import Success from "../Success";
import Home from "../Home";
import { Currency } from "../CurrencyPicker/CurrencyPicker";

const happyPackOne = {
  AUD: {
    priceId: process.env.REACT_APP_HAPPY_PACK_1_AUD,
    enabled: true,
    amount: 999,
    currency: "aud",
  },
  USD: {
    priceId: process.env.REACT_APP_HAPPY_PACK_1_USD,
    enabled: true,
    amount: 799,
    currency: "usd",
  },
  GBP: {
    priceId: process.env.REACT_APP_HAPPY_PACK_1_GBP,
    enabled: true,
    amount: 599,
    currency: "gbp",
  },
} as Record<Currency, any>;

const happyPackOneTest = {
  ...happyPackOne,
  priceId: process.env.REACT_APP_HAPPY_PACK_1_TEST,
};

{
  /* <Home happyPackOne={happyPackOne} /> */
}

export default (
  <Switch>
    <Route exact path="/(cancel)?">
      <p style={{ textAlign: "center" }}>Coming soon</p>
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
      <p>
        This is the "covid project" of a musician and mother. A labour of love,
        sharing the songs that manifest around the house with her husband and
        two young daughters.
      </p>
      <p>
        Here's hoping it brings your home, school or playground a bunch of happy
        singing kids as well.
      </p>
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
  </Switch>
);
