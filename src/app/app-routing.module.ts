import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'not-found', component: NotFoundComponent },
  {
    path: 'detail',
    loadChildren: () =>
      import('./movie-detail/movie-detail.module').then(
        (m) => m.MovieDetailModule
      ),
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
