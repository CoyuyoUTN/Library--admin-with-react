import { createSlice } from "@reduxjs/toolkit";

const initialState = [{}];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export const {} = booksSlice.actions;

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
