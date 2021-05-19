import React, { createContext } from 'react';

const initialState = {
    products: [],
    cart: [],
    product: undefined,
    getProducts: () => {},
    getSingleProduct: () => {},
  };
  
export const GlobalContext = createContext(initialState);