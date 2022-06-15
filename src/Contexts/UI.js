import React from "react";
const UiContext = React.createContext({});
export const UIContextProvider = UiContext.Provider;
export const UIContextConsumer = UiContext.Consumer;
export default UiContext;
