import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
  import { storeFreeze } from 'ngrx-store-freeze';

import * as fromRoot from '@reducers/index';

import * as fromAuth from './auth.reducer';
import * as fromLoginPage from './login-page.reducer';

/**
 * Create the auth state from the 2 reducers in Auth
 */
export interface AuthState {
  status: fromAuth.State;
  loginPage: fromLoginPage.State;
}

/**
 * Extend the root state
 */
export interface State extends fromRoot.State {
  auth: AuthState;
}

/**
 * Create the action map object of reducers
 */
export const reducers: ActionReducerMap<AuthState> = {
  status: fromAuth.reducer,
  loginPage: fromLoginPage.reducer
};

/**
 * Create the main selector for this feature
 */
export const selectAuthState = createFeatureSelector<AuthState>('auth');

/**
 * Create sub selector for each 'state' in the main state
 */
export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.loginPage
);

/**
 * Now create the selectors for the individual properties on each state
 * First from AuthState which has getLoggedIn and getUser
*/
export const getLoggedIn = createSelector(
  selectAuthStatusState,
  fromAuth.getLoggedIn
);

export const getUser = createSelector(
  selectAuthStatusState,
  fromAuth.getUser
);

/**
 * Now create selectors properties in LoginPageState
 */
export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);

export const getLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);
