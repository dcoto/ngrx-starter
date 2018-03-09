import { Action } from '@ngrx/store';
import { User, Authenticate } from '../models/user';

/**
 * Create an enum of types for actions
 */
export enum AuthActionTypes {
    Login = '[Auth] Login',
    Logout = '[Auth] Logout',
    LoginSuccess = '[Auth] Login Success',
    LoginFailure = '[Auth] Login Failure',
    LoginRedirect = '[Auth] Login Redirect'
}

/**
 * Create a class for each action for type safety
 */
export class Login implements Action {
    readonly type = AuthActionTypes.Login;

    constructor(public payload: Authenticate) {}
}

export class Logout implements Action {
    readonly type = AuthActionTypes.Logout;
}

export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LoginSuccess;

    constructor(public payload: { user: User }) {}
}

export class LoginFailure implements Action {
    readonly type = AuthActionTypes.LoginFailure;

    constructor(public payload: any) {}
}

export class LoginRedirect implements Action {
    readonly type = AuthActionTypes.LoginRedirect;
}

/**
 * Export the Actions with each valid type
 */
export type AuthActions =
      Login
    | Logout
    | LoginSuccess
    | LoginFailure
    | LoginRedirect;
