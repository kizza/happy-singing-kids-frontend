"use client"

import "animate.css/animate.min.css";
import classnames from "classnames";
import React, { useState } from "react";
import styles from "./Layout.module.scss";
import Header from "@/components/Header";
import Mask from "@/components/Mask";
import Nav from "@/components/Nav";
import Popup from "@/components/Popup";
import { NowPlayingContext } from "@/hooks/useNowPlaying";
import { PopupContext } from "@/hooks/usePopup";
import { useToggleState } from "@/hooks/useToggleState";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/hooks/useAnalytics";
import { NavContext } from "@/hooks/useNav";
import Sunshine from "@/components/Sunshine";

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }:Props) {
  const [popupContent, setPopupContent] = useState<string>("");
  const [menuState, setMenuState] = useToggleState();
  const [popupState, setPopupState] = useToggleState();
  const { trackEvent, trackModal } = useAnalytics();

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

  const bodyClasses = classnames(styles.Page, "min-h-screen flex flex-col", {
    [styles.Blurred]: showMask,
    [styles.Offset]: menuState === "open",
    [styles.Closing]: menuState === "closing",
  });

  // Now playing
  const [currentSong, setCurrentSong] = useState<string>("");

  const navContext = { openMenu }

  const nowPlayingValue = {
    currentSong,
    setCurrentSong: (newSong: string) => {
      setCurrentSong(newSong);
      trackEvent({
        category: "Listening",
        action: "Played song",
        label: newSong,
      });
    },
  };

  return (
    <div className={classnames(styles.App, "min-h-screen")}>
      <PopupContext.Provider value={popupContentValue}>
        <div className={bodyClasses}>
          <div className={classnames(styles.Content, showMask && styles.Blurred)}>
            <NavContext.Provider value={navContext}>
              <NowPlayingContext.Provider value={nowPlayingValue}>
                {children}
              </NowPlayingContext.Provider>
            </NavContext.Provider>
          </div>
          <Footer />
        </div>

        <Nav
          open={menuState === "open"}
          closing={menuClosing}
          closeMenu={closeMenu}
        />
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
