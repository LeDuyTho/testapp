import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Import reducer từ authSlice

const store = configureStore({
  reducer: {
    auth: authReducer, // Thêm reducer vào store
  },
});

export default store;