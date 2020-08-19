declare var ga: any;

interface EventArgs {
  category: string;
  action: string;
  label: string;
}

const trackPageView = (route: string) => {
  ga("send", "pageview", `/${route}`);
};

const trackModal = (route: string) => {
  ga("send", "pageview", `/modal/${route}`);
};

const trackEvent = (event: EventArgs) => {
  ga("send", {
    hitType: event,
    eventCategory: event.category,
    eventAction: event.action,
    eventLabel: event.label,
  });
};

interface Hook {
  trackPageView: (route: string) => void;
  trackEvent: (event: EventArgs) => void;
  trackModal: (route: string) => void;
}

export const useAnalytics = (): Hook => ({
  trackPageView,
  trackEvent,
  trackModal,
});
