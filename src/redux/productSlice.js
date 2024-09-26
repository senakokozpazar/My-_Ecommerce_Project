import { axiosInstance } from '@/hooks/useAxios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  sort: 'price:asc',
  filter: '',
  fetchState: {categories: 'NOT_FETCHED', productList: 'NOT_FETCHED'},
  
};  

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const response = await axiosInstance.get('/categories');
  console.log(response.data);
  return response.data;

});


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ categoryId, sort, filter, limit, offset }) => {
    const params = new URLSearchParams();
    
    if (categoryId) {
      params.append('category', categoryId);
    }
    if (sort) {
      params.append('sort', sort);
    }
    if (filter) {
      params.append('filter', filter);
    }
    params.append('limit', limit);
    params.append('offset', offset);
    const url = `/products?${params.toString()}`;
    console.log(window.location.pathname);
    const response = await axiosInstance.get(url);
    return response.data;
  }
);

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
    setSort: (state, action) => {
      state.sort = sortValue;
    },
    setFilter: (state, action) => {
      state.filter = filterValue;
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
  setSort,
  setFilter,
  setFetchStateCategories,
  setFetchStateProductList,
} = productSlice.actions;
export default productSlice.reducer;