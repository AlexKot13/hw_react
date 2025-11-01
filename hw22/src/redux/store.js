import { configureStore } from "@reduxjs/toolkit"
import quoteReducer from '../redux/quoteSlice'

export const store = configureStore({
  reducer: {
    quote: quoteReducer
  }
})