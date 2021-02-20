import { Book } from 'src/components/books/books';

export interface BooksState {
    books: ReadonlyArray<Book>;
    collection: ReadonlyArray<string>;
}
