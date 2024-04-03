import React from "react";
import Script from "next/script";

export type NRConfig = {
  agentID: string;
  applicationID: string;
  accountID?: string;
  trustKey?: string;
};

export type NRInfo = {
  applicationID: string;
  beacon?: string;
  errorBeacon?: string;
  sa?: number;
};

// Default QA configs
const defaultConfig: NRConfig = {
  accountID: "121334",
  trustKey: "121334",
  agentID: "1588858125",
  applicationID: "1585934697",
};
const defaultInfo: NRInfo = {
  beacon: "gov-bam.nr-data.net",
  errorBeacon: "gov-bam.nr-data.net",
  applicationID: "1585934697",
};
export const devConfig: NRConfig = {
  agentID: "1588857514",
  applicationID: "1585934697", // qa
};
export const devInfo: NRInfo = {
  applicationID: "1585934697", // qa
};
export const qaConfig: NRConfig = {
  agentID: "1588858125",
  applicationID: "1585934697",
};
export const qaInfo: NRInfo = {
  applicationID: "1585934697",
};

export const prodConfig: NRConfig = {
  agentID: "1588862533",
  applicationID: "1529331213",
};
export const prodInfo: NRInfo = {
  applicationID: "1529331213",
};

export function setup(config: NRConfig, info: NRInfo, licenseKey: string) {
  if (typeof window.NREUM !== "undefined") {
    window.NREUM.loader_config = { ...defaultConfig, ...config, licenseKey };
    window.NREUM.info = { ...defaultInfo, ...info, licenseKey };
  }
}

// Setup the Newrelic browser agent config for different deploy environment,
// Monitor only the staging and production site
export function NewRelicBrowserSetup(environment, licenseKey: string) {
  if (environment === "development") {
    setup(devConfig, devInfo, licenseKey);
  } else if (environment === "qa") {
    setup(qaConfig, qaInfo, licenseKey);
  } else if (environment === "production") {
    setup(prodConfig, prodInfo, licenseKey);
  }
}

// This code only embeds the new relic library to the browser, to enable the monitoring, invoke the NewRelicBrowserSetup() function to start.
export const NewRelicSnippet = () => {
  if (!process.env.NEW_RELIC_LICENSE_KEY) return null;
  return (
    <Script
      type="text/javascript"
      src="/newrelic-browser.js"
      onLoad={() => {
        if (window !== undefined && process.env.NEW_RELIC_LICENSE_KEY) {
          NewRelicBrowserSetup(
            process.env.APP_ENV,
            process.env.NEW_RELIC_LICENSE_KEY
          );
        }
      }}
    />
  );
};

export default NewRelicSnippet;
