import {configureStore} from '@reduxjs/toolkit';
import accountSlice from '../slices/accountSlice';
import authSlice from '../slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    account: accountSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
