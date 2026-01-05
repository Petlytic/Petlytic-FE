// Auth slice
import { createSlice } from "@reduxjs/toolkit";

// TODO: Implement auth slice with reducers and async thunks
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    // Add reducers here
  },
});

export default authSlice.reducer;
