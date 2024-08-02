import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Book ({books}) {
  return (
    books.map( (ele, idx) => {
      let result = (
        <p key={idx}>
          <b>{ele.no}번 책 : </b>{ele.name}
        </p>
      );
      return result;
    } )
  );
}

export default function BookList () {

  let url = "/api/book";
  let [books, setBooks] = useState([]);

  function callAPI() {
    fetch(url)
    .then(response => response.json())
    .then(json => {
      setBooks(json);
    })
  }

  useEffect( () => {
    callAPI();
  }, []);

  return (
  <div>
    <h2>Book List</h2>
    <Book books={books} />
    <Link to="/bookinsert"><button>책 등록</button></Link>
  </div>
  );
}