import { createSlice, /*createAsyncThunk*/ } from "@reduxjs/toolkit";

// interface FetchOptions {
//   method: "GET" | "POST";
//   headers: HeadersInit;
//   body: string;
//   mode: "cors" | "no-cors" | "same-origin";
// }

// const fetchAddressesByName = createAsyncThunk("addresses/fetchByName",
//   async () => {
//     const url =
//       "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
//     const key = "27961e37c56e0d9e2e3cb0c65fde7ed501ca8e43";
//     const options: FetchOptions = {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//         "Authorization": "Token " + key,
//       },
//       body: JSON.stringify({ query: address }),
//     };
//     const response = await fetch(url, options);
//     const data = await response.json();
//   }
// );

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
