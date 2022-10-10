import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addBook } from "../Features/books/booksSlice";

const CallJson = () => {
  const dispatch = useDispatch();

  const getBooksAxios = async () => {
    const getAxios = await axios.get("./books.json").catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
    getAxios.data.map((book) => {
      dispatch(addBook(book));
      return;
    });
  };

  useEffect(() => {
    async function getBooksUseEffect() {
      await getBooksAxios();
    }
    getBooksUseEffect();
  }, []);

  return <></>;
};

export default CallJson;
