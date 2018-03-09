import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromAuth from '@auth/reducers/index';
import * as fromRoot from '@reducers/index';
import * as authActions from '@auth/actions/auth.actions';

import * as layoutActions from '../../actions/layout.actions';

@Component({
    selector: 'bc-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    showSidenav$: Observable<boolean>;
    loggedIn$: Observable<boolean>;

    constructor(private store: Store<fromRoot.State>) {
        this.showSidenav$ = this.store.pipe(
            select(fromRoot.getShowSidenav)
        );
        this.loggedIn$ = this.store.pipe(
            select(fromAuth.getLoggedIn)
        );
    }

    closeSidenav() {
        /**
         * All state updates are handles through dispatched actions in 'container' components
         */
        this.store.dispatch(new layoutActions.CloseSidenav());
    }

    openSidenav() {
        this.store.dispatch(new layoutActions.OpenSidenav());
    }

    logout() {
        this.closeSidenav();

        this.store.dispatch(new authActions.Logout());
    }
}
