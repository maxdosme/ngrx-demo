import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../books';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent {
  @Input() books: Array<Book>;
  @Output() remove = new EventEmitter();
}
