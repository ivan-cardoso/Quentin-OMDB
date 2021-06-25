import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const setMovies = createAsyncThunk("SET_MOVIES", (inputValue)=>{
    return axios.get(`http://www.omdbapi.com/?apikey=20dac387&s=${inputValue}`)
    .then((res) => res.data)
})

const moviesReducer = createReducer([], {
    [setMovies.fulfilled] : (state, action) => action.payload
})

export default moviesReducer