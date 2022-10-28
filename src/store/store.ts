import { configureStore } from "@reduxjs/toolkit";
import navElementsReducer from "./navSlice";

export const store = configureStore({
  reducer: {
    navElements: navElementsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch