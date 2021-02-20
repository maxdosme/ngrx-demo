import { removeBook, addBook } from './../actions/books.actions';
import { createReducer, on } from '@ngrx/store';


export const initState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
    initState,
    on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
    on(addBook, (state, { bookId }) => {
      if (state.indexOf(bookId) > -1) {
        return state;
      }
      return [...state, bookId];
    })
  );
