import classnames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

interface Props {
  open: boolean;
  closing: boolean | undefined;
  closeMenu: () => void;
}

export default ({ open, closing, closeMenu }: Props) => (
  <>
    <ul
      className={classnames(styles.Nav, {
        [styles.Open]: open,
        [styles.Closing]: closing,
        animate__slideInLeft: open,
        animate__slideOutLeft: closing,
        animate__animated: open || closing,
      })}
    >
      <li>
        <NavLink
          to="/"
          onClick={closeMenu}
          activeClassName={styles.active}
          exact
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          onClick={closeMenu}
          activeClassName={styles.active}
        >
          About
        </NavLink>
      </li>
    </ul>
  </>
);
