import {createReducer, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const setSingleMovie = createAsyncThunk("SET_SINGLE_MOVIE", (id)=>{
    return axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
    .then(res=> res.data)
})

const singleMovieReducer = createReducer([], {
    [setSingleMovie.fulfilled] : (state, action) => action.payload
})


export default singleMovieReducer


