import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromBooks from '../../reducers';
import * as collectionActions from '../../actions/collection.actions';
import { Book } from '../../models/book';

@Component({
  selector: 'bc-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPageComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store<fromBooks.State>) {
    this.books$ = store.pipe(
        select(fromBooks.getBookCollection)
    );
  }

  ngOnInit() {
    this.store.dispatch(new collectionActions.Load());
  }
}
