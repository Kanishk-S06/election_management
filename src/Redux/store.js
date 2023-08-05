import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./Slices/Usersslice/Usersslice"
export const store = configureStore({
  reducer:{
    user:userReducer,
  }
})