import React, { createContext, useContext, useReducer } from 'react';
import { StateType, ActionTypes } from './types';
export type JeopardyReducer = [StateType, React.Dispatch<ActionTypes>];

// @ts-ignore: An argument for 'defaultValue' was not provided.
export const StateContext = createContext<JeopardyReducer>();

export type StateProviderProps = {
  reducer: any;
  initialState: any;
  children: any;
};

export const StateProvider = ({ reducer, initialState, children }: StateProviderProps) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};

export const useStateValue = () => useContext<JeopardyReducer>(StateContext);
