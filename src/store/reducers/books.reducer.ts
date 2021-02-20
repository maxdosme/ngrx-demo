import { retrievedBookList } from './../actions/books.actions';
import { createReducer, on } from '@ngrx/store';
import { Book } from 'src/components/books/books';


export const initState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initState,
    // tslint:disable-next-line: no-shadowed-variable
    on(retrievedBookList, (state, { Book }) => [...Book])
);
