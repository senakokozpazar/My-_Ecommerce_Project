import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './clientSlice';
import productReducer from './productSlice';
import shoppingCartReducer from './shoppingCartSlice';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    client: clientReducer,
    products: productReducer,
    shoppingCart: shoppingCartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});

export default store;