import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      { id: 1, name: 'movie 1', description: 'açıklama 1', imageUrl: '1.jpg' },
      { id: 2, name: 'movie 2', description: 'açıklama 2', imageUrl: '2.jpg' },
      { id: 3, name: 'movie 3', description: 'açıklama 3', imageUrl: '3.jpg' },
      { id: 4, name: 'movie 4', description: 'açıklama 4', imageUrl: '4.jpg' },
      { id: 5, name: 'movie 5', description: 'açıklama 5', imageUrl: '5.jpg' },
      { id: 6, name: 'movie 6', description: 'açıklama 6', imageUrl: '6.jpg' },
      { id: 7, name: 'movie 7', description: 'açıklama 7', imageUrl: '7.jpg' }

    ];
    return { movies };
  }

  constructor() { }
}
