import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromAuth from '@auth/reducers/index';
import * as Auth from '@auth/actions/auth';
import * as fromRoot from '@reducers/index';

import * as layout from '../../actions/layout';

@Component({
    selector: 'bc-app',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
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
        this.store.dispatch(new layout.CloseSidenav());
    }

    openSidenav() {
        this.store.dispatch(new layout.OpenSidenav());
    }

    logout() {
        this.closeSidenav();

        this.store.dispatch(new Auth.Logout());
    }
}
