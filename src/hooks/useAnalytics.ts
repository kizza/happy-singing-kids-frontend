import ReactGA, { EventArgs } from "react-ga";

const trackModal = (route: string) => {
  ReactGA.modalview(route);
};

const trackEvent = (event: EventArgs) => {
  ReactGA.event(event);
};

interface Hook {
  trackEvent: (event: EventArgs) => void;
  trackModal: (route: string) => void;
}

export const useAnalytics = (initialise?: boolean): Hook => {
  if (initialise) {
    ReactGA.initialize("UA-151750527-2", {
      debug: process.env.REACT_APP_IS_DEV === "true",
      titleCase: false,
      useExistingGa: true,
    });
  }

  return { trackEvent, trackModal };
};
