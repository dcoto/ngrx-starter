import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Book } from '../../models/book';

@Component({
  selector: 'bc-book-authors',
  templateUrl: './book-authors.component.html',
  styleUrls: ['./book-authors.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookAuthorsComponent {
  @Input() book: Book;

  get authors() {
    return this.book.volumeInfo.authors;
  }
}
