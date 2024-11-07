import { Component, Input } from '@angular/core';
import { Book } from '../../../models/book';
import { CommonModule, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, NgIf, MatButtonModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  @Input() book!: Book;

  onOrder() {
    this.book.available = false;
  }
}
