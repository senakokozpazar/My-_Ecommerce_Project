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

export const login = createAsyncThunk(
  'client/login',
  async ({ email, password, rememberMe }) => {
    try {
      const response = await axiosInstance.post('/login', { email, password });
      const token = response.data.token;
      if (rememberMe) {
        localStorage.setItem('token', token);
      }

      return response.data;
    } catch (error) {
      throw error.response.data.error;
    }
  }
);

export const autoLogin = createAsyncThunk(
  'client/autoLogin',
  async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axiosInstance.get('/verify', {
          headers: {
            Authorization: token,
          },
        });
        const user = response.data;
        localStorage.setItem('token', user.token);
        axiosInstance.defaults.headers.common['Authorization'] = user.token;
        return user;
      } catch (error) {
        localStorage.removeItem('token');
        throw error;
      }
    } else {
    
      return null;
    }
  }
);

export const logout = createAsyncThunk(
  'client/logout',
  async () => {
    console.log('Logout action dispatched');
    localStorage.removeItem('token');
    axiosInstance.defaults.headers.common['Authorization'] = '';
    return null;
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
    },
  
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
      })
      .addCase(login.pending, (state) => {
        state.user = {};
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = {};
      })
      .addCase(autoLogin.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
        }})
        .addCase(logout.fulfilled, (state) => {
          console.log('Logout fulfilled, setting user to null');
          state.user = null;
        });
  }
});

export const { setUser, setRoles, setTheme, setLanguage } = clientSlice.actions;
export default clientSlice.reducer;