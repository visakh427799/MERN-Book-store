import React from "react";
import "./Books.css";
import book3 from "../Books/book3.jpg";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import Swal from "sweetalert2";

function Books() {
  const [books, setBooks] = React.useState([]);
  const [book, setBook] = React.useState({});
  const [update, setUpdate] = React.useState(false);

  React.useEffect(() => {
    let token = localStorage.getItem("token");

    axios
      .get("http://localhost:8000/books", {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        setBooks(res.data.bks);
      })
      .catch(() => {
        setBooks([]);
      });
  }, [update]);

  const handleChange = (e) => {
    console.log("jii");
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    alert(book);
  };

  const handleDelete = (bookid) => {
    console.log(bookid);
    let token = localStorage.getItem("token");

    axios
      .post(
        "https://bookstore-backend-app.herokuapp.com/delete",
        { bookid },
        { headers: { Authorization: `${token}` } }
      )
      .then((res) => {
        if (res.data.status) {
          setUpdate(true);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your book has been deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  const handleEdit = (item) => {
    Swal.fire({
      showConfirmButton: false,
      html:
        '<div  className="wrapper" >' +
        '<div className="lefts">' +
        "</div>" +
        '<div className="rights">' +
        '<div className="inpt">' +
        ` <input type="text" name="bookname" onChange="${handleChange}" value=${item.bookname}></input>` +
        `<input type="text" name="description"  onChange="${handleChange}" value=${item.description}></input>` +
        `<input type="text" name="author"  onChange="${handleChange}" value=${item.author}></input>` +
        `<input type="text" name="prize"  onChange="${handleChange}" value=${item.prize}></input>` +
        `<button onClick="${handleClick}">EDIT BOOK</button>` +
        " </div>" +
        "</div>" +
        "</div>",
    });
  };

  const handleView = (item) => {
    Swal.fire({
      showConfirmButton: false,
      html:
        '<div  className="wrapper" >' +
        '<div className="lefts">' +
        "</div>" +
        '<div className="rights">' +
        "<h4>Book details</h4>" +
        '<div className="inpt">' +
        ` Book Name :<input type="text" READONLY name="bookname" onChange="${handleChange}" value=${item.bookname}></input>` +
        `<br>Description :<input type="text" READONLY name="description"  onChange="${handleChange}" value=${item.description}></input>` +
        `<br>Author :<input type="text" READONLY name="author"  onChange="${handleChange}" value=${item.author}></input>` +
        `<br>Prize :<input type="text" READONLY name="prize"  onChange="${handleChange}" value=${item.prize}></input>` +
        " </div>" +
        "</div>" +
        "</div>",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="box">
        {books.length > 0 ? (
          books.map((item) => {
            return (
              <div className="card">
                <div className="card-img">
                  <img src={book3} />
                  <ul className="card-tags">
                    <li
                      onClick={() => {
                        handleEdit(item);
                      }}
                    >
                      Edit
                    </li>
                    <li
                      onClick={() => {
                        handleView(item);
                      }}
                    >
                      View
                    </li>
                    <li
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    >
                      Delete{" "}
                    </li>
                  </ul>
                </div>

                <div className="card-info">
                  <h2>{item.bookname}</h2>
                  <p>{item.description}</p>
                  <button>View</button>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <h1 style={{ textAlign: "center" }}>You have no books to show</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default Books;
