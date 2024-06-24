import { createAction, props } from "@ngrx/store";
import { User } from "../../../core/intefaces/user";
import { LoginRequest } from "../../../core/types/auth/login-request";

export const login = createAction(
    '[User] Login',
    props<{ loginRequest: LoginRequest }>()
);

export const logout = createAction(
    '[User] Logout'
);
  
export const loginSuccess = createAction(
    '[User] Login Success',
    props<{ user: User }>()
);

export const loginFailure = createAction(
    '[User] Login Failure',
    props<{ error: any }>()
);

export const saveUser = createAction(
    '[User] Save User',
    props<{ user: User }>()
);

export const loadUser = createAction(
    '[User] Load User'
);