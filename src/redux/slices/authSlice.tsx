import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface UserData {
  name: string;
  picture: string;
  email: string;
}
export interface CounterState {
  token?: string;
  isAuth: boolean;
  isLoading: boolean;
  userData: UserData;
}

const initialState: CounterState = {
  isAuth: false,
  isLoading: true,
  userData: {
    name: '',
    picture:
      'https://www.belizeplanners.org/wp-content/uploads/2016/01/male-placeholder.jpg',
    email: '',
  },
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLogin: state => {
      state.isLoading = true;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setLogin: (state, action: PayloadAction<UserData>) => {
      state.isAuth = true;
      state.userData.name = action.payload.name;
      state.userData.picture = action.payload.picture;
      state.isLoading = false;
    },
    setLogout: state => {
      state.isAuth = false;
      state.userData.name = '';
      state.userData.picture =
        'https://www.belizeplanners.org/wp-content/uploads/2016/01/male-placeholder.jpg';
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {startLogin, setLogin, setToken, setLogout} = counterSlice.actions;

export default counterSlice.reducer;
