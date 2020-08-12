import React from "react";
import { Route, Switch } from "react-router-dom";
import Checkout from "../Checkout";
import Dashboard from "../Dashboard";
import Download from "../Download";
import Success from "../Success";

const Home = () => {
  return (
    <>
      <p style={{ textAlign: "center" }}>Stay tuned...</p>
    </>
  );
};

const Purchase = () => (
  <>
    <Checkout />
  </>
);

export default (
  <Switch>
    <Route exact path="/(cancel)?">
      <Home />
    </Route>
    <Route exact path="/purchase(/cancel)?">
      <Purchase />
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
  </Switch>
);
