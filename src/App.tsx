import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.scss";
import "./Typography.module.scss";
/* import Nav from "./components/Nav"; */
import routes from "./components/routes";
import Logo from "./components/Logo";

export default () => (
  <div className={styles.App}>
    <div className={styles.Header}>
      <Logo />
    </div>
    <Router>
      {/* <Nav /> */}
      <div className={styles.Content}>
        <div className={styles.Inner}>{routes}</div>
      </div>
    </Router>
  </div>
);
