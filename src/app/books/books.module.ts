import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BookEffects } from './effects/book.effects';
import { CollectionEffects } from './effects/collection.effects';
import { BookExistsGuard } from './guards/book-exists.guard';
import { GoogleBooksService } from './services/google-books.service';

import { BookAuthorsComponent } from './components/book-authors/book-authors.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { BookPreviewListComponent } from './components/book-preview-list/book-preview-list.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { FindBookPageComponent } from './containers/find-book-page/find-book-page.component';
import { ViewBookPageComponent } from './containers/view-book-page/view-book-page.component';
import { SelectedBookPageComponent } from './containers/selected-book-page/selected-book-page.component';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';

import { MaterialModule } from '../material';
import { PipesModule } from '@shared/pipes';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'find', component: FindBookPageComponent },
      {
        path: ':id',
        component: ViewBookPageComponent,
        canActivate: [BookExistsGuard],
      },
      { path: '', component: CollectionPageComponent },
    ]),

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('books', reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([BookEffects, CollectionEffects]),
  ],
  declarations: [
    BookAuthorsComponent,
    BookDetailComponent,
    BookPreviewComponent,
    BookPreviewListComponent,
    BookSearchComponent,
    FindBookPageComponent,
    ViewBookPageComponent,
    SelectedBookPageComponent,
    CollectionPageComponent,
  ],
  providers: [BookExistsGuard, GoogleBooksService],
})
export class BooksModule {}
