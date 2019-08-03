import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

// component
import BookDetails from "./BookDetails";

function BookList(props) {
  const [selected, setSelected] = useState("");
  const displayBooks = () => {
    const data = props;
    // console.log(data);
    if ("books" in data.data) {
      return data.data.books.map(book => {
        return (
          <li key={book.id} onClick={e => setSelected(book.id)}>
            {book.name}
          </li>
        );
      });
      // console.log(data);
    } else {
      return <div>Loading books...</div>;
      // if(data.data.books)
    }
  };
  // console.log(props);
  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
      <BookDetails bookId={selected} />
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
