import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styles: [
        `
     h2 {
         color : blue;
     }
     `
    ]
})
export class MoviesComponent {
    title = 'Film Listesi';
    movies: Movie[];
    selectedMovie: Movie;


    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.getMovies();
    }

    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

    getMovies(): void {
        this.movieService.getMovies()
            .subscribe(movies => {
                // subscribe özelliği veri gelene kadar bekletir.
                this.movies = movies;
            });
    }

    add(name: string, imageUrl: string, description): void {
        console.log(name);
        console.log(imageUrl);
        console.log(description);

        this.movieService.add({
            name,
            imageUrl,
            description
        } as Movie).subscribe(movie => this.movies.push(movie));

    }

    delete(movie:Movie) : void {
        this.movieService.delete(movie).subscribe();
        this.movies = this.movies.filter(m => m !== movie);
    }

}