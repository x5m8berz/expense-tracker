import React,{ createContext, useReducer } from "react";

// initial state

const initialState = {
    transaction : [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Create context

export const GlobalContext = createContext(initialState);