import { createSlice } from "@reduxjs/toolkit";

const initialState = 
  {
    lang: 'ES',
    logued: false,
    userId: '',
    userName: ''
  }
;

const sysConfigSlice = createSlice({
  name: "sysConfig",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.push(action.payload);
    },
    login: (state, action) => {
      state.userId = action.payload.id;
      state.userName = action.payload.name;
      state.logued = true;
    },


  },
});

export const {changeLanguage, login} = sysConfigSlice.actions;

export default sysConfigSlice.reducer;
