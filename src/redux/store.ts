import { configureStore } from "@reduxjs/toolkit";
import { filmApi } from "../services/moviesApi";

export const store = configureStore({
  reducer: {
    [filmApi.reducerPath]: filmApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
