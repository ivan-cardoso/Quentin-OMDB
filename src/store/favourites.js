import {createReducer, createAsyncThunk, createAction} from "@reduxjs/toolkit"
import axios from "axios"

export const setFavourites = createAsyncThunk("SET_FAVOURITE", (params)=>{
    return axios.post(`/api/favourites/`, params)
    .then((res) => res.data)
})

export const getFavourites = createAsyncThunk("GET_FAVOURITES", (id)=>{
    return axios.get(`/api/favourites/${id}`)
    .then((res) => res.data)
})

export const removeFavourites = createAsyncThunk("REMOVE_FAVOURITES", (params)=>{
    return axios.delete(`/api/favourites/${params.userId}/${(params.id)}`)
    .then((res) => {
        return res.data
    })
})

const favouriteReducer = createReducer([], {
    [setFavourites.fulfilled] : (state, action) => action.payload,
    [getFavourites.fulfilled] : (state, action) => action.payload,
    [removeFavourites.fulfilled] : (state, action) => action.payload
})


export default favouriteReducer


