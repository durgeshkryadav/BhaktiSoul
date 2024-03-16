import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type appCurrentLibrary = {
  id: string | null;
  name: string | null;
};

const defaultState: appCurrentLibrary = {
  id: null,
  name: null,
};

const initialState = defaultState;
const currentLibrarySlice = createSlice({
  name:"currentLibrary",
  initialState,
  reducers:{
    setCurrentLibrary: (state:appCurrentLibrary,action:PayloadAction<appCurrentLibrary>)=>{
      state = action.payload
      return state;
    },
    removeCurrentLibrary: (state:appCurrentLibrary,action:PayloadAction<appCurrentLibrary>)=>{
      state = action.payload
      return state;
    }
  }
})

export const {setCurrentLibrary,removeCurrentLibrary} = currentLibrarySlice.actions;
export default currentLibrarySlice.reducer;