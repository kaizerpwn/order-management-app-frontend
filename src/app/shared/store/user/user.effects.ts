import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of, tap } from 'rxjs';
import { UserService } from '../../../core/services/user.service';
import * as UserActions from './user.actions'; 
import { User } from '../../../core/intefaces/user';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  saveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginSuccess), 
      tap(action => {
        localStorage.setItem('user', JSON.stringify(action.user)); 
      })
    ),
    { dispatch: false } 
  );

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      map(() => {
        const user = JSON.parse(localStorage.getItem('user') || '{}') as User;
        return UserActions.loginSuccess({ user });
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      mergeMap(action =>
        this.userService.login(action.loginRequest).pipe(
          map(user => UserActions.loginSuccess({ user })),
          catchError(error => of(UserActions.loginFailure({ error })))
        )
      )
    )
  );
}
