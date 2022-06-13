import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../reduxStore';

export interface TokenState {
  token: string;
}

const initialState: TokenState = {
  token: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      const { token } = action.payload;
      state.token = token;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout } = tokenSlice.actions;

export const selectToken = (state: RootState) => state.token.token;

export default tokenSlice.reducer;
