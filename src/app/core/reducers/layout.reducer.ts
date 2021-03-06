import { LayoutActionTypes, LayoutActions } from '../actions/layout.actions';

export interface State {
    showSidenav: boolean;
}

const initialState: State = {
    showSidenav: false
};

export function reducer(state = initialState, action: LayoutActions): State {
    switch (action.type) {
        case LayoutActionTypes.CloseSidenav: {
            return {
                showSidenav: false
            };
        }

        case LayoutActionTypes.OpenSidenav: {
            return {
                showSidenav: true
            };
        }

        default:
            return state;
    }
}

export const getShowSidenav = (state: State) => state.showSidenav;
