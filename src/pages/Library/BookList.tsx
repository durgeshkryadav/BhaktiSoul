import { BookCard, BookInterface } from "../../components/Card/BookCard";

export interface BookListPropsType {
  books: BookInterface[];
}

export const BookList = (props: BookListPropsType) => {
  const { books } = props;
  return (
    <div className='book-list'>
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};
