import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface AccountData {
  balance?: string;
  id?: string;
  credit?: string;
}
export interface CounterState {
  isLoading: boolean;
  data: AccountData;
  hasError: boolean | null;
}

const initialState: CounterState = {
  isLoading: true,
  data: {
    balance: '',
    credit: '',
    id: '',
  },
  hasError: null,
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: state => {
      state.isLoading = true;
    },
    setUserData: (state, action: PayloadAction<AccountData>) => {
      state.data.balance = action.payload.balance;
      state.data.id = action.payload.id;
      state.data.credit = action.payload.credit;
      state.hasError = false;
      state.isLoading = false;
    },
    setBalance: (state, action: PayloadAction<AccountData>) => {
      state.data.balance = action.payload.balance;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLoading, setUserData, setBalance} = counterSlice.actions;

export default counterSlice.reducer;
