import { configureStore } from '@reduxjs/toolkit';
import authUsers from './slice/authUsers';

const store = configureStore({
  reducer: {
    users: authUsers,
  }
});

export default store;
