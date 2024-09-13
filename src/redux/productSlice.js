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
  async ({ categoryId, sort, filter }) => {
    const queryParams = [];
    if (categoryId) {
      queryParams.push(`category=${categoryId}`);
    }
    if (sort) {
      queryParams.push(`sort=${sort}`);
    }
    if (filter) {
      queryParams.push(`filter=${filter}`);
    }
    const queryString = queryParams.join('&');
    const url = `/products?${queryString}`;
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
      const sortValue = action.payload;
      if (sortValue === 'price:asc') {
        state.productList = state.productList.sort((a, b) => a.price - b.price);
      } else if (sortValue === 'price:desc') {
        state.productList = state.productList.sort((a, b) => b.price - a.price);
      } else if (sortValue === 'rating:asc') {
        state.productList = state.productList.sort((a, b) => a.rating - b.rating);
      } else if (sortValue === 'rating:desc') {
        state.productList = state.productList.sort((a, b) => b.rating - a.rating);
      }
      state.sort = sortValue;
    },
    setFilter: (state, action) => {
      const filterValue = action.payload;
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