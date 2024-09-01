// src/features/users/usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '../../config/config';

// Define an async thunk for fetching users
export const userLogin = createAsyncThunk('users/userLogin', async (userdata, { rejectWithValue }) => {
   console.log("hlww");
   
   try {
    const { email, password } = userdata;
     const credentials = btoa(`${email}:${password}`); // Encode credentials in Base64
    const response = await axios.post(`${baseURL}/login`, userdata);
    localStorage.setItem('authCredentials', credentials);
    localStorage.setItem('userEmail', email);
    return response.data;
} catch (err) {
  
    return rejectWithValue(err.response.data); 
}

    
});

export const userSignup = createAsyncThunk('users/userSignup', async ({firstname, lastname, email, password}, { rejectWithValue }) => {
  console.log("hlww");
  
  try {
    const response = await axios.post(`${baseURL}/signin`,{firstname, lastname, email, password});

    console.log('Signup successful:', response.data);
    return response.data;
    
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
   
});

export const userLogout = createAsyncThunk('users/userLogout', async (_, { rejectWithValue }) => {
console.log("welcome to logout API");
  try {
    const storedCredentials = localStorage.getItem('authCredentials');
    console.log("Stored credentials:", storedCredentials);

    if (!storedCredentials) {
      console.log("No credentials found in localStorage");
      return; 
    }

    const config = { headers: { 'Authorization': `Basic ${storedCredentials}` } };
    const response = await axios.post(`${baseURL}/logout`, null, config);
    console.log("Logout response:", response.data);

    localStorage.removeItem('authCredentials');

    return response.data;
  } catch (err) {
    console.error("Logout failed:", err.response ? err.response.data : err.message);
    return rejectWithValue(err.response ? err.response.data : err.message);
  }
});

export const userDeleteAccount = createAsyncThunk('users/userDeleteAccount', async (_, { rejectWithValue }) => {
  console.log("hlww");
  
  try {
    
    const storedCredentials = localStorage.getItem('authCredentials');
    console.log("Stored credentials:", storedCredentials);

    if (!storedCredentials) {
      console.log("No credentials found in localStorage");
      return; 
    }
   const response = await axios.delete(`${baseURL}/delete`, {
     headers: {
       'Authorization': `Basic ${storedCredentials}`
     },
     data: {}
   });
   localStorage.removeItem('authCredentials');
   return response.data;
} catch (err) {
 
   return rejectWithValue(err.response.data); 
}

   
});


const authUsers = createSlice({
    name: 'users',
    initialState: {
      loading: false,
      users: [],
      error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(userLogin.pending, (state) => {
          state.loading = true;
        })
        .addCase(userLogin.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload;
          state.error = '';
        })
        .addCase(userLogin.rejected, (state, action) => {
          state.loading = false;
          state.users = [];
          state.error = action.payload || action.error.message;
        })
        .addCase(userSignup.pending, (state) => {
          state.loading = true;
        })
        .addCase(userSignup.fulfilled, (state, action) => {
          state.loading = false;
        state.users = action.payload;
        state.error = "";
        })
        .addCase(userSignup.rejected, (state, action) => {
          state.loading = false;
          state.users = [];
          state.error = action.payload || action.error.message;
        })
        .addCase(userLogout.pending, (state) => {
          state.loading = true;
        })
        .addCase(userLogout.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload;
          state.error = '';
        })
        .addCase(userLogout.rejected, (state, action) => {
          state.loading = false;
          state.users = [];
          state.error = action.payload || action.error.message;
        })
        .addCase(userDeleteAccount.pending, (state) => {
          state.loading = true;
        })
        .addCase(userDeleteAccount.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload;
          state.error = '';
        })
        .addCase(userDeleteAccount.rejected, (state, action) => {
          state.loading = false;
          state.users = [];
          state.error = action.payload || action.error.message;
        });
    }
  });
  
  export default authUsers.reducer;

