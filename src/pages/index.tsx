import CampaignHero from "../components/hero/campaignHero"
import React from "react"

export default function Home() {

  const [view, setView] = React.useState("form");
  const apiEndpoint = "...";
  const onSubmit = (values) => {
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(values),
    }).then((response) => {
      if (response.ok) {
        // Resolve the promise according to your application.
        // And then call:
        setView("confirmation");
      }
    });
  };
  return (
    <CampaignHero />
  )
}
