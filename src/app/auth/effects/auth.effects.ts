import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { tap, map, exhaustMap, catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import {
  Login,
  LoginSuccess,
  LoginFailure,
  AuthActionTypes,
  LoginRedirect,
} from '../actions/auth.actions';
import { User, Authenticate } from '../models/user';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
      ) {}

    @Effect()
    login$ = this.actions$.pipe( // On the stream of actions
        ofType(AuthActionTypes.Login), // Look for any that has Login type
        map((action: Login) => action.payload), // Return the payload of the action
        exhaustMap((auth: Authenticate) =>
            this.authService.login(auth).pipe(
                map(user => new LoginSuccess({ user })), // Returning the LoginSuccess action
                catchError(error => of(new LoginFailure(error))) // Returning the LoginFailure action
            )
        )
    );

    @Effect({ dispatch: false}) // Use this when we do not want to return an action
    loginSuccess$ = this.actions$.pipe(
        ofType(AuthActionTypes.LoginSuccess),  // On LoginSuccess action
        tap(() => this.router.navigate(['/'])) // Use the router to navigate to /
    );

    @Effect({ dispatch: false})
    loginRedirect$ = this.actions$.pipe(
        ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
        tap(() => this.router.navigate(['/login'])) // On logout or rediret, go to login page
    );
}
