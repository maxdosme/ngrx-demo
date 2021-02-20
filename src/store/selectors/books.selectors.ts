import { Book } from '../../components/books/books';
import { BooksState } from './../state/books.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const selectBooks = createSelector(
    (state: BooksState) => state.books,
    (books: Array<Book>) => books
);

export const selectCollectionState = createFeatureSelector<
  BooksState,
  ReadonlyArray<string>
>('collection');

export const selectBookCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books: Array<Book>, collection: Array<string>) => {
        return collection.map((id) => books.find((book) => book.id === id));
    }
);
