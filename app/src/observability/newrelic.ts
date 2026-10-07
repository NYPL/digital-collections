export const recordCustomEvent = (name: string, data: object) => {
  if (typeof window === "undefined") {
    return;
  }
  (window as any).newrelic.recordCustomEvent(name, data);
};
