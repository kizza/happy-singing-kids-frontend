import classnames from "classnames";
import React, { useEffect, useState } from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import { useAnalytics } from "../../hooks/useAnalytics";
import styles from "./Nav.module.scss";

interface Props extends RouteComponentProps {
  open: boolean;
  closing: boolean | undefined;
  closeMenu: () => void;
}

const useRouteChange = (location: RouteComponentProps["location"]) => {
  const { pathname } = location;
  const { trackPageView } = useAnalytics();
  const [trackedPath, setTrackedPath] = useState<string>(pathname);

  useEffect(() => {
    if (pathname !== trackedPath) {
      setTrackedPath(pathname);
      trackPageView(pathname);
    }
  }, [pathname]);
};

const Nav = ({ open, closing, closeMenu, location }: Props) => {
  useRouteChange(location);

  return (
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
            to="/uh-oh-spaghetti-oh"
            onClick={closeMenu}
            activeClassName={styles.active}
          >
            Book
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
        {/* <li> */}
        {/*   <NavLink */}
        {/*     to="/resources" */}
        {/*     onClick={closeMenu} */}
        {/*     activeClassName={styles.active} */}
        {/*   > */}
        {/*     Resources */}
        {/*   </NavLink> */}
        {/* </li> */}
        <li>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            activeClassName={styles.active}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default withRouter(Nav);
