import { books } from "./books";
import { ISetIndex } from "./interfaces";

const Lower = ({ setIndex }: ISetIndex) => {
  return (
    <>
      {books.map((book, idx: number) => (
        <div className="lower" key={idx} onClick={() => setIndex(idx)}>
          <img src={book.coverImg} alt={book.name} />
          <h4>{book.name}</h4>
                 </div>
      ))}
    </>
  );
};

export default Lower;
