import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'bc-book-preview-list',
  templateUrl: './book-preview-list.component.html',
  styleUrls: ['book-preview-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPreviewListComponent {
  @Input() books: Book[];
}
