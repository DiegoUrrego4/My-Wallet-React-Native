import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  token?: string;
  isAuth: boolean;
  isLoading: boolean;
}

const initialState: CounterState = {
  isAuth: false,
  isLoading: true,
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setLogin: state => {
      state.isAuth = true;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLogin} = counterSlice.actions;

export default counterSlice.reducer;
