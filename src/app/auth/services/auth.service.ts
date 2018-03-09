import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';

import { Authenticate, User } from '../models/user';

@Injectable()
export class AuthService {
    constructor() {}

    login({username, password}: Authenticate): Observable<User> {
        /**
         * Simulate a failed login
         */
        if (username !== 'test') {
            return _throw('Invalid username or password');
        }

        return of({ name: 'User'});
    }

    logout() {
        return of(true);
    }
}
