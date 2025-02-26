import classnames from "classnames";
import React, { useEffect, useState } from "react";
import { useAnalytics } from "../../hooks/useAnalytics";
import styles from "./Nav.module.scss";
import NavLink from "@/components/NavLink";

interface Props {
  open: boolean;
  closing: boolean | undefined;
  closeMenu: () => void;
}

// const useRouteChange = (location: RouteComponentProps["location"]) => {
//   const { pathname } = location;
//   const { trackPageView } = useAnalytics();
//   const [trackedPath, setTrackedPath] = useState<string>(pathname);

//   useEffect(() => {
//     if (pathname !== trackedPath) {
//       setTrackedPath(pathname);
//       trackPageView(pathname);
//     }
//   }, [pathname]);
// };

const Nav = ({ open, closing, closeMenu }: Props) => {
  // useRouteChange(location);

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
            href="/"
            onClick={closeMenu}
            activeClassName={styles.active}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/uh-oh-spaghetti-oh"
            onClick={closeMenu}
            activeClassName={styles.active}
          >
            Book
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/about"
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
            href="/contact"
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

export default Nav;
