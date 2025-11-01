import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
  text: "",
  author: "",
  status: "idle",
  error: ""
}

export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  const response = await axios.get("https://dummyjson.com/quotes/random")
  const data = response.data
  return {
    quote: data.quote,
    author: data.author
  }
})

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     .addCase(fetchQuote.pending, (state) => {
       state.status = "loading"
     })
     .addCase(fetchQuote.fulfilled, (state, action) => {
      state.status = "succeeded"
      state.text = action.payload.quote
      state.author = action.payload.author
     })
     .addCase(fetchQuote.rejected, (state, action) => {
      state.status = "failed"
      state.error = action.error.message
     })
  }
})

export default quoteSlice.reducer