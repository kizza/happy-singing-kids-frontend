import React from "react";
import { Route, Switch } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/">
      <p>Home page</p>
    </Route>
    <Route path="/about">
      <p>About page</p>
    </Route>
    <Route path="/faq">
      <p>FAQ page</p>
    </Route>
  </Switch>
);
