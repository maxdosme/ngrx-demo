import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from 'src/components/books/books.service';
import { selectBookCollection, selectBooks } from 'src/store/selectors/books.selectors';
import { addBook, removeBook, retrievedBookList } from 'src/store/actions/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-demo';

  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  constructor(
    private store: Store,
    private booksService: GoogleBooksService,
  ) { }

  ngOnInit(): void {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }


  onAdd(bookId): void {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId): void {
    this.store.dispatch(removeBook({ bookId }));
  }
}
