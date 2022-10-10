import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      const bookFound = state.find((book) => book.id === action.payload);

      if (bookFound) {
        state.splice(state.indexOf(bookFound), 1);
      }
    },
    updateBook:(state , action)=>{

      const {id , title , imageLink , author , year, description} = action.payload;
      const bookFound=state.find((book)=>book.id==id);
        console.log(action.payload);
      if(bookFound){
        bookFound.id=id
        bookFound.title=title
        bookFound.imageLink=imageLink
        bookFound.author=author
        bookFound.year=year
        bookFound.description=description
      }
      console.log(bookFound.title);

    },
  },
});

export const { addBook, deleteBook,updateBook } = booksSlice.actions;

export default booksSlice.reducer;
/*o Título 
o Autor/a/es/as 
o Año de publicación 
o Una imagen para la portada 
o Una descripción o reseña del contenido 
o ISBN (Si se encuentra disponible) – Opcional 
En la preview, se debe poder ver:  
 Título 
 Imagen (Subida a Google Drive o equivalente) 
 El primer autor 
Debe contar con un detalle para cada libro en el cual se debe ver: 
 Año de Publicación 
 Todos los autores 
 Descripción 
 ISBN - Opcional*/
