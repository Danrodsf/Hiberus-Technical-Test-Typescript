import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./reducers/login-reducer";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
