import { configureStore } from "@reduxjs/toolkit";

const adminStore = configureStore({
  reducer: {
  },
//   middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(adminApi.middleware),
});

export type RootState = ReturnType<typeof adminStore.getState>;
export default adminStore;
