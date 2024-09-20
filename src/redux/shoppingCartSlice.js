import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { setCart, setPayment, setAddress } = shoppingCartReducer.actions;

export default shoppingCartReducer.reducer;