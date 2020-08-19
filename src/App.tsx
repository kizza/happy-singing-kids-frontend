import "animate.css/animate.min.css";
import classnames from "classnames";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Mask from "./components/Mask";
import Nav from "./components/Nav";
import Popup from "./components/Popup";
import routes from "./components/routes";
import { NowPlayingContext } from "./hooks/useNowPlaying";
import { PopupContext } from "./hooks/usePopup";
import { useToggleState } from "./hooks/useToggleState";
import "./Typography.module.scss";
import Footer from "./components/Footer";
import { useAnalytics } from "./hooks/useAnalytics";

export default () => {
  const [popupContent, setPopupContent] = useState<string>("");
  const [menuState, setMenuState] = useToggleState();
  const [popupState, setPopupState] = useToggleState();
  const { trackEvent, trackModal } = useAnalytics(true);

  const openPopup = (content: any, trackingRoute?: string) => {
    document.body.style.overflow = "hidden";
    setPopupState("open");
    setPopupContent(content);

    if (trackingRoute) {
      trackModal(trackingRoute);
    }
  };

  const closePopup = () => {
    document.body.style.overflow = "auto";
    if (popupState === "open") {
      setPopupState("closing");
    }
  };

  const popupContentValue = {
    openPopup,
    closePopup,
  };

  const openMenu = () => setMenuState("open");
  const closeMenu = () => menuState === "open" && setMenuState("closing");

  const closeMask = () => {
    closeMenu();
    closePopup();
  };

  const menuClosing = menuState === "closing";
  const popupClosing = popupState === "closing";
  const showMask = popupState === "open" || menuState === "open";

  const bodyClasses = classnames(styles.Page, {
    [styles.Blurred]: showMask,
    [styles.Offset]: menuState === "open",
    [styles.Closing]: menuState === "closing",
  });

  // Now playing
  const [currentSong, setCurrentSong] = useState<string>("");

  const nowPlayingValue = {
    currentSong,
    setCurrentSong: (newSong: string) => {
      setCurrentSong(newSong);
      trackEvent({
        category: "Music",
        action: "Played song",
        label: newSong,
      });
    },
  };

  return (
    <div className={styles.App}>
      <PopupContext.Provider value={popupContentValue}>
        <Router>
          <div className={bodyClasses}>
            <Header openMenu={openMenu} />
            <div
              className={classnames(styles.Content, showMask && styles.Blurred)}
            >
              <NowPlayingContext.Provider value={nowPlayingValue}>
                <div className={styles.Inner}>{routes}</div>
              </NowPlayingContext.Provider>
            </div>
            <Footer />
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
