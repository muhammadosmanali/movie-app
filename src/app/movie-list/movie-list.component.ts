import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  moviesList: MovieModel[] = [];

  search: string;
  private movies: HTMLCollectionOf<Element>;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private _document: HTMLDocument
  ) {}

  ngOnInit(): void {
    this.moviesList = this.movieService.getMovies();
    this.movies = this._document.getElementsByClassName('unique');
    setTimeout(() => {
      try {
        const id: string = this.movieService.getMovieId();
        this._document
          .getElementById(id)
          .scrollIntoView({ behavior: 'smooth' });
      } catch (e) {}
    }, 200);
  }

  onInput() {
    let search = this.search.toUpperCase();
    for (let i = 0; i < this.movies.length; i++) {
      if (
        this.movies[i]
          .getElementsByTagName('h2')[0]
          .innerText.toUpperCase()
          .indexOf(search) > -1
      ) {
        this.renderer.removeStyle(this.movies[i], 'display');
      } else {
        this.renderer.setStyle(this.movies[i], 'display', 'none');
      }
    }
  }

  onCardClick(id: number) {
    this.router.navigate(['detail', id]);
    this.movieService.setMovieId(id.toString());
  }
}
