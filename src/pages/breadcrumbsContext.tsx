import { createContext, useReducer } from "react";

export const breadcrumbsContext = createContext(null);

const actionTypes = {
  SET_BREADCRUMBS: "SET_BREADCRUMBS",
};

const reducer = (breadcrumbs, action) => {
  switch (action.type) {
    case "SET_BREADCRUMBS":
      return [...breadcrumbs, action.newCrumb];
    default:
      return breadcrumbs;
  }
};

function ContextProvider({ children }) {
  const [breadcrumbs, dispatch] = useReducer(reducer, [
    { text: "Home", url: "/" },
  ]);

  const setBreadcrumbs = (newCrumb) => {
    dispatch({
      type: actionTypes.SET_BREADCRUMBS,
      newCrumb,
    });
  };

  return (
    <breadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </breadcrumbsContext.Provider>
  );
}

export default ContextProvider;
