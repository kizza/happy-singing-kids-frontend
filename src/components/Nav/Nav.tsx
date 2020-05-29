import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

export default () => (
  <ul className={styles.Nav}>
    <li>
      <NavLink to="/" activeClassName={styles.active} exact>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" activeClassName={styles.active}>
        About
      </NavLink>
    </li>
    <li>
      <NavLink to="/faq" activeClassName={styles.active}>
        FAQ
      </NavLink>
    </li>
  </ul>
);
