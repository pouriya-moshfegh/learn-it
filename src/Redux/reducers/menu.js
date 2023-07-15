"use client";
import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "menu",
  initialState: false,
  reducers: {
    menuHandler:(state) => !state ,
  },
});
export const { menuHandler } = slice.actions
export default slice.reducer
