import React from "react"; // As react is a dependecy not a module, we dont specify path
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    author: "Riichiro Inagaki",
    image:
      "https://m.media-amazon.com/images/I/91SLpHwjp8L._AC_UY327_QL65_.jpg",
    title: "Dr. Stone",
  },
  {
    id: 2,
    author: "Yuki Tabata",
    image:
      "https://m.media-amazon.com/images/I/91KFL+WcX1L._AC_UY327_QL65_.jpg",
    title: "Black Clover",
  },
  {
    id: 3,
    author: "Tite Kubo",
    image:
      "https://m.media-amazon.com/images/I/61BEFF+ErRS._AC_UY327_QL65_.jpg",
    title: "Burn The Witch",
  },
  {
    id: 4,
    author: "Atsushi Ohkubo",
    image:
      "https://m.media-amazon.com/images/I/81fZ9kfMXGL._AC_UY327_QL65_.jpg",
    title: "Fire Force",
  },
];
// const names = ["lol", "lmao", "rofl"];
// const newName = names.map((name) => {
//   <h1>{name}</h1>;
// });

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  // const clickHandler = () => alert({"hello world"});
  const { image, title, author } = props.book;
  return (
    <article className="book">
      <img src={image} alt=" " />
      <h3>{title}</h3>
      <h4>{author}</h4>
      <button type="button" onClick={() => alert(title)}>
        Click me!
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
