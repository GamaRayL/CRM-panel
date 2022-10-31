import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    updateAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { updateAddress } = addressSlice.actions;

export default addressSlice.reducer;
