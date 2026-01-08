// Redux store configuration
import { configureStore } from "@reduxjs/toolkit";

// TODO: Import slices when ready
// import authSlice from './slices/authSlice'
// import productsSlice from './slices/productsSlice'
// import cartSlice from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    // Add slices here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
