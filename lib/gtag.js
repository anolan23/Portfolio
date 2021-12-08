// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// log specific events happening.
export const event = (action, params) => {
  window.gtag('event', action, params);
};
