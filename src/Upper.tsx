import { TbStarFilled } from "react-icons/tb";
import { books } from "./books";

const Upper = ({ index }: any) => {
  const book = books[index];
  return (
    <div className="upper">
      <img src={book.coverImg} alt={book.name} />
      <div>
        <h2>{book.name}</h2>
        <h3>{book.author}</h3>
        {book.coAuthor && <h4>{book.coAuthor}</h4>}
        {[...Array(book.rating)].map(() => (
          <span className="star">
            <TbStarFilled size={25} />
          </span>
        ))}
        {book.sequels && book.sequels.map((s: string) => <h5>{s}</h5>)}
      </div>
    </div>
  );
};

export default Upper;
