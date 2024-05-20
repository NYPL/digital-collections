import { createContext, useCallback, useMemo, useReducer } from "react";

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

  const setBreadcrumbs = useCallback((newCrumb) => {
    dispatch({
      type: actionTypes.SET_BREADCRUMBS,
      newCrumb,
    });
  }, []);

  const value = useMemo(
    () => ({ breadcrumbs, setBreadcrumbs }),
    [breadcrumbs, setBreadcrumbs]
  );

  return (
    <breadcrumbsContext.Provider value={value}>
      {children}
    </breadcrumbsContext.Provider>
  );
}

export default ContextProvider;
