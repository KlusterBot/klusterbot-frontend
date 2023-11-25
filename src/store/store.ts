import { api } from "./services/api";
import { configureStore } from "@reduxjs/toolkit";
import isNewUserReducer from "./features/newUserSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    isNewUser: isNewUserReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
