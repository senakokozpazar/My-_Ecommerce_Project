import { axiosInstance } from '@/hooks/useAxios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: '',
  fetchState: {categories: 'NOT_FETCHED', productList: 'NOT_FETCHED'},
  
};  

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const response = await axiosInstance.get('/categories');
  console.log(response.data);
  return response.data;

});


export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axiosInstance.get('/products');
    console.log('Response:', response.data);
    return response.data; 
});

const productSlice = createSlice({
  name: 'products',
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
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setFetchStateCategories: (state, action) => {
      state.fetchState.categories = action.payload;
    },
    setFetchStateProductList: (state, action) => {
      state.fetchState.productList = action.payload;
    }},
    extraReducers: (builder) => {
      builder
      .addCase(fetchCategories.pending, (state) => {
     
        state.fetchState.categories = 'PENDING'; 
      }).addCase(fetchCategories.fulfilled, (state, action) => {
      
        state.categories = action.payload;
        state.fetchState.categories = 'FETCHED';
      }).addCase(fetchCategories.rejected, (state, action) => {
       
        state.fetchState.categories = 'FAILED';
      })
      .addCase(fetchProducts.pending, (state) => {
  
        state.fetchState.productList = 'PENDING'; 
      }).addCase(fetchProducts.fulfilled, (state, action) => {
  
        state.productList = action.payload;
        state.total = action.payload.total;
        state.fetchState.productList = 'FETCHED';
      }).addCase(fetchProducts.rejected, (state, action) => {
    
        state.fetchState.productList = 'FAILED';
      })
    },
  });

export const {
  setCategories,
  setProductList,
  setTotal,
  setLimit,
  setOffset,
  setFilter,
  setFetchStateCategories,
  setFetchStateProductList,
} = productSlice.actions;
export default productSlice.reducer;