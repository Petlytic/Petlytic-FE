// Products slice
import { createSlice } from "@reduxjs/toolkit";

// TODO: Implement products slice with reducers and async thunks
const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // Add reducers here
  },
});

export default productsSlice.reducer;
