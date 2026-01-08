// Cart slice
import { createSlice } from "@reduxjs/toolkit";

// TODO: Implement cart slice with reducers and async thunks
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    isLoading: false,
  },
  reducers: {
    // Add reducers here
  },
});

export default cartSlice.reducer;
