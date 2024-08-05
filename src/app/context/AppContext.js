'use client'
import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
    cartUpdated: false,
    lastUpdated: null, // Add a timestamp to track the last update time
};

// Create context
const AppContext = createContext(initialState);

// Reducer
const appReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CART_UPDATED':
            return { ...state, cartUpdated: action.payload.updated, lastUpdated: action.payload.time };
        default:
            return state;
    }
};

// Provider component
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
    return useContext(AppContext);
};
