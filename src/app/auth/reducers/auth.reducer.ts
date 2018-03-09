import { AuthActions, AuthActionTypes } from './../actions/auth.actions';
import { User } from '../models/user';

/**
 * Create the interface for the state
 */
export interface State {
    loggedIn: boolean;
    user: User | null;
}

/**
 * Set the initial state for this state
 */
export const initialState: State = {
    loggedIn: false,
    user: null
};

/**
 * Create reducer for this state
 */
export function reducer(state = initialState, action: AuthActions): State {
    switch (action.type) {
        case AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user
            };
        }

        case AuthActionTypes.Logout: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}

/**
 * Create getters for specific state properties
 */
export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
