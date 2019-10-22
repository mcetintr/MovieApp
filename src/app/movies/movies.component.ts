import { Component } from '@angular/core';
import { Movie } from '../movie';

@Component({
    selector : 'movies',
    templateUrl : 'movies.component.html',
    styles:[
     `
     h2 {
         color : blue;
     }
     `
    ]
})
export class MoviesComponent{
    movie : Movie = {
        id : 1,
        name : 'Movie Name'
    }
}