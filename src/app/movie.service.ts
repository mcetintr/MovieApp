import { Injectable } from '@angular/core';
import { Movies } from './movie.datasource';
import { Movie } from './movie';
import {Observable, of} from 'rxjs'; // asenkron veri getirmek için kullanıyoruz.
import { LoggingService } from './logging.service';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService : LoggingService) { }

  getMovies() : Observable<Movie[]> {
    this.loggingService.add('MovieService : getMovies ');
    return of(Movies);
  }
}
