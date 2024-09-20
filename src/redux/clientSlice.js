import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/hooks/useAxios';

const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: '',
  language: '',
};

export const fetchRoles = createAsyncThunk(
  'roles/fetchRoles',
  async () => {
    try {
      const response = await axiosInstance.get('/roles');
      return response.data;
    } catch (error) {
      return { error: 'Failed to fetch roles' };
    }
  }
);

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setUser: (state, action) => {
      if (action.payload) {
        state.user = action.payload;
      }
    },
    setRoles: (state, action) => {
      if (action.payload) {
        state.roles = action.payload;
      }
    },
    setTheme: (state, action) => {
      if (action.payload) {
        state.theme = action.payload;
      }
    },
    setLanguage: (state, action) => {
      if (action.payload) {
        state.language = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoles.pending, (state) => {
        state.roles = []; 
      })
      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.roles = action.payload;
      })
      .addCase(fetchRoles.rejected, (state, action) => {
        state.roles = []; 
      });
  }
});

export const { setUser, setRoles, setTheme, setLanguage } = clientSlice.actions;
export default clientSlice.reducer;