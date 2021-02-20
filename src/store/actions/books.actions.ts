import { createAction, props } from '@ngrx/store';


export const addBook = createAction(
    '[Book List] Add Book',
    props<{ bookId }>()
);

export const removeBook = createAction(
    '[Book List] Remove Book',
    props<{ bookId }>()
);

export const retrievedBookList = createAction(
    '[Book List/API] Retrieve Books Success',
    props<{ Book }>()
);
