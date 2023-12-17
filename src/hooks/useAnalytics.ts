declare var gtag: any;

interface EventArgs {
  category: "Redirect" | "Listening" | "Purchasing" | "Resources";
  action: string;
  label: string;
}

const trackPageView = (route: string) => {
  gtag("event", "page_view", {page_path: route})
};

const trackModal = (route: string) => {
  gtag("event", "page_view", {page_path: `/modal/${route}`});
};

const trackEvent = (event: EventArgs) => {
  gtag("event", event.action, {
    "event_category": event.category,
    "event_label": event.label,
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
