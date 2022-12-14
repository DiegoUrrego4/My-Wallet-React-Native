import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface UserData {
  name?: string;
  picture?: string;
  email?: string;
  phone?: string;
  // registered?: boolean;
}
export interface CounterState {
  token?: string;
  isAuth: boolean;
  isLoading: boolean;
  userData: UserData;
  register: boolean;
}

const initialState: CounterState = {
  isAuth: false,
  isLoading: true,
  userData: {
    name: '',
    picture:
      'https://www.belizeplanners.org/wp-content/uploads/2016/01/male-placeholder.jpg',
    email: '',
    phone: '',
  },
  register: false,
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
    setAuth: state => {
      state.isAuth = true;
      state.isLoading = false;
    },
    setLogin: (state, action: PayloadAction<UserData>) => {
      // state.isAuth = true;
      state.userData.name = action.payload.name;
      state.userData.picture = action.payload.picture;
      state.userData.email = action.payload.email;
      state.userData.phone = action.payload.phone;
      // state.userData.registered = action.payload.registered;
      state.isLoading = false;
    },
    setLogout: state => {
      state.isAuth = false;
      state.userData.name = '';
      state.userData.picture =
        'https://www.belizeplanners.org/wp-content/uploads/2016/01/male-placeholder.jpg';
      state.isLoading = false;
      state.register = false;
    },
    setRegister: (state, action: PayloadAction<boolean>) => {
      state.register = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {startLogin, setLogin, setToken, setLogout, setAuth, setRegister} =
  counterSlice.actions;

export default counterSlice.reducer;
