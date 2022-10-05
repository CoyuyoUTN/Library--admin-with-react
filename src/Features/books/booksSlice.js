import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {

id:1,
title:"harry potter",
description:"libro de magos",
image : "https://static.wikia.nocookie.net/esharrypotter/images/e/ee/HarryPotterPromoPic7.jpg/revision/latest?cb=20101217182546",
},
{

  id:2,
  title:"El rey leon",
  description:"libro de leones",
  image:"https://lumiere-a.akamaihd.net/v1/images/image_8b5ca578.jpeg?region=0,0,540,810",
  }

];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook : (state,action)=>{
      const bookFound = state.find(book=>book.id === action.payload);
    
    if(bookFound){
      state.splice(state.indexOf(bookFound),1);
    }
    }

  },
});

export const {deleteBook} = booksSlice.actions;

export default booksSlice.reducer;
