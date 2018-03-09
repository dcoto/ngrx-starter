import { Routes } from '@angular/router';
import { AuthGuard } from '@auth/services/auth-guard.service';
import { PageNotFoundComponent } from '@core/containers/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: 'books',
    loadChildren: './books/books.module#BooksModule',
    canActivate: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];
