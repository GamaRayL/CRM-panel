import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   arrayAddress: [],
};

const arrayAddressSlice = createSlice({
  name: "arrayAddress",
  initialState,
  reducers: {
    setArrayAddresses(state, action) {
      state.arrayAddress = action.payload;
    },
  },
});

export const { setArrayAddresses } = arrayAddressSlice.actions;

export default arrayAddressSlice.reducer;
