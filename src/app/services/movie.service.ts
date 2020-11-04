import { Injectable } from '@angular/core';
import { MovieModel } from '../models/movie.model';
import { listOfMovies } from './movie-list';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private moviesList: MovieModel[];
  private movieId: string;

  constructor() {
    this.moviesList = listOfMovies;
  }

  getMovies() {
    return this.moviesList;
  }

  getMovieById(id: number) {
    return this.moviesList.filter((movie) => movie.id === id)[0];
  }

  getMovieId() {
    return this.movieId;
  }

  setMovieId(movieId: string) {
    this.movieId = movieId;
  }
}
