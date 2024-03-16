import { configureStore } from "@reduxjs/toolkit";
import currentLibrarySlice from "../slices/library.slice";
export const store = configureStore({
  reducer: {
    library: currentLibrarySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
