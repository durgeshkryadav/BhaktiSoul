import { useState } from "react";
import { BookInterface } from "../../components/Card/BookCard";
import Pagination from "../../components/Pagination/Pagination";
import { booksMockData } from "../../mockdata/mocklibrary";
import { BookList } from "./BookList";
import { ThemeSwitch } from "../../theme/ThemeSwitch";

export const Library = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [books, setBooks] = useState<BookInterface[]>(booksMockData);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const booksPerPage: number = 6; // Number of books per page
  const totalPages: number = Math.ceil(books.length / booksPerPage);

  // Get current books for the current page
  const indexOfLastBook: number = currentPage * booksPerPage;
  const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
  const currentBooks: BookInterface[] = books.slice(
    indexOfFirstBook,
    indexOfLastBook
  );

  // Change page
  const onPageChange = (page: number): void => {
    setCurrentPage(page);
  };
  // return <div className='movie-card-container'></div>;
  return (
    <div className='library-container'>
      <h1>Library</h1>
      <BookList books={currentBooks} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};
