import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../Features/books/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
