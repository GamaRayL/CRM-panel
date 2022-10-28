import { configureStore } from "@reduxjs/toolkit";
import navElementsReducer from "./navSlice";
import addressReducer from "./addressSlice";
import arrayAddressReducer from "./arrayAddressSlice";

export const store = configureStore({
  reducer: {
    navElements: navElementsReducer,
    address: addressReducer,
    arrayAddress: arrayAddressReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch