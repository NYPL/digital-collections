import { useFeedbackBox } from "@nypl/design-system-react-components";
import React from "react";
import { createContext, useContext, useState } from "react";

type FeedbackContextType = {
  onOpen: () => void;
};

export const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
);

export const useFeedbackContext = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("useFeedbackContext must be used within its provider");
  }
  return context;
};

export const FeedbackProvider = ({ children }) => {
  const { isOpen, onClose, onOpen, FeedbackBox } = useFeedbackBox();
  const [view, setView] = useState("form");
  const onSubmit = async (values: { category: string; comment: string }) => {
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
    <FeedbackContext.Provider value={{ onOpen }}>
      {children}
      <FeedbackBox
        showCategoryField
        onSubmit={onSubmit}
        onClose={onFormClose}
        onOpen={onOpen}
        title="Feedback"
        view={view}
      />
    </FeedbackContext.Provider>
  );
};
