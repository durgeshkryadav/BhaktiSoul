import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum Themes {
    Default = "default",
    Dark = "dark"
}

const localStorageTheme = localStorage.getItem("theme");
const catchedTheme = localStorageTheme && JSON.parse(localStorageTheme);

export type appTheme = {
  name: string;
  isDefault: boolean;
};

const defaultTheme: appTheme = {
  name: Themes.Default,
  isDefault:true
};

const initialState = catchedTheme !==undefined && catchedTheme !==null ? catchedTheme : defaultTheme;
const themeSlice = createSlice({
  name:"theme",
  initialState,
  reducers:{
    setTheme: (state:appTheme,action:PayloadAction<appTheme>)=>{
      state = action.payload
      return state;
    },
  }
})

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;