import classnames from "classnames";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import routes from "./components/routes";
import "./Typography.module.scss";
import "animate.css/animate.min.css";
import { PopupContext } from "./hooks/usePopup";
import Popup from "./components/Popup";
import Mask from "./components/Mask";
import { useToggleState } from "./hooks/useToggleState";

export default () => {
  const [popupContent, setPopupContent] = useState<string>("");
  const [menuState, setMenuState] = useToggleState();
  const [popupState, setPopupState] = useToggleState();
  /* let [menuClosing, setMenuClosing] = useState<boolean | undefined>(); */

  const closePopup = () => {
    console.log("Closing the popup");
    document.body.style.overflow = "auto";
    /* setPopupContent(""); */
    if (popupState === "open") {
      setPopupState("closing");
    }
  };

  const popupValue = {
    openPopup: (content: any) => {
      document.body.style.overflow = "hidden";
      setPopupState("open");
      setPopupContent(content);
    },
    closePopup,
  };

  const openMenu = () => {
    console.log("open menu");
    setMenuState("open");
  };

  const closeMenu = () => {
    if (menuState === "open") {
      setMenuState("closing");
    }
  };

  const closeMask = () => {
    console.log("Doing the close");
    closeMenu();
    closePopup();
  };

  useEffect(() => {
    let timer: any;
    if (menuState === "closing") {
      timer = setTimeout(() => {
        setMenuState("closed");
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [menuState]);

  const menuClosing = menuState === "closing";
  const popupClosing = popupState === "closing";

  const showMask = popupState === "open" || menuState === "open";

  return (
    <div className={styles.App}>
      <PopupContext.Provider value={popupValue}>
        <Router>
          <div
            className={classnames(styles.Page, {
              [styles.Blurred]: showMask,
              [styles.Offset]: menuState === "open",
              [styles.Closing]: menuState === "closing",
            })}
          >
            <Header openMenu={openMenu} />
            <div
              className={classnames(styles.Content, showMask && styles.Blurred)}
            >
              <div className={styles.Inner}>{routes}</div>
            </div>
          </div>
          <Nav
            open={menuState === "open"}
            closing={menuClosing}
            closeMenu={closeMenu}
          />
        </Router>
      </PopupContext.Provider>
      <Mask
        showing={showMask}
        closing={popupClosing || menuClosing}
        onClose={closeMask}
      />
      <Popup
        showing={popupState === "open"}
        content={popupContent}
        closing={popupClosing}
        onClose={closePopup}
      />
    </div>
  );
};
