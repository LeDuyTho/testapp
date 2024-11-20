import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  token: '',
  payload: null,
};

// Create slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload; // Cập nhật token
    },
    setPayload: (state, action) => {
      state.payload = action.payload; // Cập nhật payload
    },
    clearPayload: (state) => {
      state.payload = null; // Xóa payload
    },
    clearAuth: (state) => {
      state.token = ''; // Xóa token
      state.payload = null; // Xóa payload
    },
  },
});

// Export actions
export const { setToken, setPayload, clearAuth, clearPayload } = authSlice.actions;

// Export reducer
export default authSlice.reducer;