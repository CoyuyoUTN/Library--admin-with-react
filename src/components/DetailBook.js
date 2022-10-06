import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../Features/books/booksSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/detail.css";

const DetailBook = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
  });
  const notify = () => {
    toast("Book was deleted successfully");
  };
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
    setTimeout(() => {
      navigate("/home");
    }, 2000);
    notify();
  };

  useEffect(() => {
    if (id) {
      setBook(books.find((book) => book.id == id));
    }
  }, [id]);

  return (
    <div key={id} className="detail-container">
      <div className="detail-container-info">
        <h1 className="detail-title">{book.title}</h1>
        <p className="detail-description">{book.description}</p>
        <p className="detail-price">{book.price}</p>
        <button onClick={() => handleDelete(book.id)}>Delete</button>
      </div>
      <div className="detail-container-img">
        <img src={book.imageLink} className="detail-img" />
      </div>
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default DetailBook;
