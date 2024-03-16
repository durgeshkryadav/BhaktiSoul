export interface BookInterface {
  title: string;
  description: string;
  writer: string;
  posterUrl: string;
}

export interface BookCardProps {
  book: BookInterface;
}

export const BookCard = (props: BookCardProps) => {
  const { book } = props;
  // Function to truncate description to first five words
  const truncateDescription = (description: string) => {
    return description.split(" ").slice(0, 5).join(" ");
  };

  return (
    <div className='book-card'>
      <img src={book.posterUrl} alt={book.title} />
      <div className='book-info'>
        <h2>{book.title}</h2>
        <p>{truncateDescription(book.description)}...</p>
        <p>
          <strong style={{ fontSize: "1.2rem", color: "#4CAF50" }}>
            Writer:
          </strong>
          : {book.writer}
        </p>
      </div>
    </div>
  );
};
