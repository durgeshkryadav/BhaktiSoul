import themeSlice from './../slices/themes/theme.slice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentLibrarySlice from "../slices/library.slice";
const rootReducer = combineReducers({
  themeSlice: themeSlice ,
  currentLibrarySlice: currentLibrarySlice
})
export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;