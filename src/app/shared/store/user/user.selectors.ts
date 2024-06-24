import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = (state: { user: UserState }) => state.user;

export const selectCurrentUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);
