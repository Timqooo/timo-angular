import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../../models/book';
import { BookComponent } from '../book/book.component';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LibraryService } from '../../../library.service';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, BookComponent, MatSlideToggleModule, MatButtonModule,
    FormsModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
    RouterOutlet, RouterModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})

export class LibraryComponent {

  LibraryService: LibraryService = inject(LibraryService);
  books: Book[] = [];

  constructor() {
    this.LibraryService.getAllAvailableBooks().subscribe(books => this.books = books);
  }

  newBook = {
    id: this.books.length + 1,
    title: '',
    author: '',
    genre: '',
    available: false,
    pages: ''
  }

  addBook() {
    console.log(this.newBook)
    this.books.push(this.newBook);
    this.newBook = {
      id: this.books.length + 1,
      title: '',
      author: '',
      genre: '',
      available: false,
      pages: ''
    }
  }
}
