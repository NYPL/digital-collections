import {
  TemplateAppContainer,
  Breadcrumbs,
  DSProvider,
  SkipNavigation,
  useFeedbackBox,
} from "@nypl/design-system-react-components";
import React from "react";
import { type PropsWithChildren } from "react";
import Header from "../header/header";
import NotificationBanner from "../notificationBanner/notificationBanner";

interface LayoutProps {
  activePage: string;
  breadcrumbs?: { text: string; url: string }[];
}

const Layout = ({
  children,
  activePage,
  breadcrumbs,
}: PropsWithChildren<LayoutProps>) => {
  const [view, setView] = React.useState("form");
  const { onOpen, isOpen, onClose, FeedbackBox } = useFeedbackBox();
  const onSubmit = async (values) => {
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // ...
        setView("confirmation");
      } else {
        setView("error");
      }
    } catch (error) {
      // Reject the promise according to your application.
      // And then call:
      setView("error");
    }
  };

  const onFormClose = () => {
    if (isOpen) {
      onClose();
      setView("form");
    }
  };
  return (
    <DSProvider>
      <SkipNavigation />
      <NotificationBanner />
      <Header />
      {activePage === "home" || activePage === "about" ? (
        children
      ) : (
        <>
          <Breadcrumbs breadcrumbsData={breadcrumbs} />
          <TemplateAppContainer contentPrimary={children as JSX.Element} />
        </>
      )}
      <FeedbackBox
        showCategoryField
        onSubmit={onSubmit}
        onClose={onFormClose}
        title="Feedback"
        view={view}
      />
    </DSProvider>
  );
};

export default Layout;
