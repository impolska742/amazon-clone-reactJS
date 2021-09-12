import React, { useContext, useReducer, createContext } from "react";

// Prepares the data-layer
export const StateContext = createContext();

// Wrap our app and provides the data-layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pulls information from data-layer
export const useStateValue = () => useContext(StateContext);
