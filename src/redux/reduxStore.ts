import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./reducers/login-reducer";
import { loadState, saveState } from "./localStorage";
const persistedState = loadState();

export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    token: store.getState().token,
  });
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
