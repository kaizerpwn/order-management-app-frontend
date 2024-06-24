import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of, tap } from 'rxjs'; 
import * as UserActions from './user.actions'; 
import { User } from '../../../core/intefaces/user';
import { AuthService } from '../../../core/services/auth.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  saveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginSuccess), 
      tap(action => {
        localStorage.setItem('user', JSON.stringify(action.user)); 
      })
    ),
    { dispatch: false } 
  );
  
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.logout), 
      tap(action => {
        localStorage.setItem('user', JSON.stringify(null)); 
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
        this.authService.login(action.loginRequest).pipe(
          map(user => UserActions.loginSuccess({ user })),
          catchError(error => of(UserActions.loginFailure({ error })))
        )
      )
    )
  ); 
}
