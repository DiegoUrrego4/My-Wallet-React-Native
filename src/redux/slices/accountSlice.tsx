import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface MovementsWithPictures {
  id?: string;
  idIncome?: string;
  idOutcome?: string;
  reason?: string;
  amount?: string;
  fees?: number;
  datetime?: string;
  pictureIncome?: string;
  pictureOutcome?: string;
  incomes: MovementsWithPictures[];
  outcomes: MovementsWithPictures[];
}
export interface AccountData {
  balance?: string;
  id?: string;
  credit?: string;
  incomes?: MovementsWithPictures[];
  outcomes?: MovementsWithPictures[];
  appColor?: string;
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
    setMovements: (state, action: PayloadAction<MovementsWithPictures>) => {
      state.data.incomes = action.payload.incomes;
      state.data.outcomes = action.payload.outcomes;
    },
    setAppColor: (state, action: PayloadAction<AccountData>) => {
      state.data.appColor = action.payload.appColor;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLoading, setUserData, setMovements, setAppColor} =
  counterSlice.actions;

export default counterSlice.reducer;
