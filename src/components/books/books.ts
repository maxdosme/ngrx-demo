export interface Book {
    id: string;
    info: {
        title: string;
        authors: Array<string>;
    };
}
