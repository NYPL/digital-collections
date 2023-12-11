import React, { createContext, useReducer, useState } from "react";

export function feedbackBoxReducer(state: any[] = [], action: any) {
  switch (action.type) {
    case "ADD": {
      return [...state, action.value];
    }
    default: {
      return state;
    }
  }
}

// Context for the DS FeedbackBox component usage in the app.
export const FeedbackBoxContext = createContext<any>(null);
export const FeedbackBoxProvider = ({ children, onOpen, FeedbackBox }: any) => {
  const [feedbackBoxNotification, setFeedbackBoxNotification] = useState("");
  const [pageSubmitted, setPageSubmitted] = useState("");
  const [state, dispatch] = useReducer<any>(feedbackBoxReducer, []);
  return (
    <FeedbackBoxContext.Provider
      value={{
        onOpen,
        setFeedbackBoxNotification,
        state,
        dispatch,
        feedbackBoxNotification,
        FeedbackBox,
        pageSubmitted,
        setPageSubmitted,
      }}
    >
      {children}
    </FeedbackBoxContext.Provider>
  );
};
