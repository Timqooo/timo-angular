import { Injectable } from '@angular/core';
import { Book } from './models/book';
import { of, delay, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private listOfBooks: Book[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Fiction',
      available: true,
      pages: '274'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      available: true,
      pages: '296'
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
      available: true,
      pages: '328'
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Romance',
      available: true,
      pages: '288'
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Fiction',
      available: false,
      pages: '277'
    },
  ];

    getListOfBooks(): Observable < Book[] > {
      return of(this.listOfBooks).pipe(
        delay(2000),
        
        map(books => books.map(book =>({
          ...book,
          title: book.title.toUpperCase()}
    ))));
    }
}
