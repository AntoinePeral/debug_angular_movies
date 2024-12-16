import { Component, OnInit, inject } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';
import {MovieThumbnailComponent} from '../../components/movie-thumbnail/movie-thumbnail.component'

@Component({
  selector: 'app-movie-list-page',
  standalone: true,
  imports: [FormsModule, MovieThumbnailComponent],
  templateUrl: './movie-list-page.component.html',
  styleUrl: './movie-list-page.component.scss'
})
export class MovieListPageComponent implements OnInit {
  private movieService: MovieService = inject(MovieService)
  movies: Movie[] = [];
  searchQuery: string = '';

  ngOnInit() {
    this.loadPopularMovies();
  }

  loadPopularMovies() {
    this.movieService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  searchMovies() {
    if (this.searchQuery.trim()) {
      this.movieService.searchMovies(this.searchQuery).subscribe((data: any) => {
        console.log(data.results)
        this.movies = data.results;
      });
    } else {
      this.loadPopularMovies();
    }
  }

  toggleFavorite(movie: Movie) {
    if (this.movieService.isFavorite(movie.id)) {
      this.movieService.removeFromFavorites(movie.id);
    } else {
      this.movieService.addToFavorites(movie);
    }
  }

  isFavorite(movieId: number): boolean {
    return this.movieService.isFavorite(movieId);
  }
}
