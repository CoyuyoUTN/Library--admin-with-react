import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    lang: 'ES',
    logued: false,
    userId: '',
    userName: ''
  }
];

const sysConfigSlice = createSlice({
  name: "sysConfig",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      console.log("state en addUchglangser", state);
      console.log("action en chglang", action);
      state.push(action.payload);
    },
    login: (state, action) => {
      console.log("state en loginCheck", state);
      console.log("action en loginCheck", action);
      console.log("action.payload en loginCheck", action.payload);
      //return state.filter((task) => task.id !== action.payload);

    },


  },
});

export const {changeLanguage, login} = sysConfigSlice.actions;

export default sysConfigSlice.reducer;
