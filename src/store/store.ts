import { api } from "./services/api";
import { configureStore } from "@reduxjs/toolkit";
import isVerifiedReducer from "./features/verifiedSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    isVerified: isVerifiedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
