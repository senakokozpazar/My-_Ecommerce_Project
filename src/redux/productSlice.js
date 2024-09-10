import { axiosInstance } from '@/hooks/useAxios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: '',
  fetchState: 'NOT_FETCHED',
};  

export const fetchCategories = createAsyncThunk(
  'product/fetchCategories',
  async () => {
    const response = await axiosInstance.get('/categories');
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setFetchState: (state, action) => {
      state.fetchState = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCategories.fulfilled, (state, action) => {
          state.categories = action.payload; 
        })}
      });

    

export const {
  setCategories,
  setProductList,
  setTotal,
  setFetchState,
  setLimit,
  setOffset,
  setFilter,
} = productSlice.actions;
export default productSlice.reducer;
  