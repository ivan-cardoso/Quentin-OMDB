import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

// export const setUser = createAsyncThunk("SET_USER", (data)=>{return data})

export const getUserSearch = createAsyncThunk("SEARCH_USER", (username) => {
    return axios.get("/api/users/search",{
        params : {
            username
        }
    })
    .then((res) => res.data)
})

const searchUserReducer = createReducer([], {
    [getUserSearch.fulfilled]: (state, action) => {
        return action.payload
    }
})

export default searchUserReducer

