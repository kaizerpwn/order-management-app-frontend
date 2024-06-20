import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from '../../../core/intefaces/user';

export interface UserState {
  user: User | null;
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null
};

export const UserReducer = createReducer(
  initialState,
  on(UserActions.login, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(UserActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null
  })),
  on(UserActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    loading: false,
    error
  })),
  on(UserActions.saveUser, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null
  })),
);

