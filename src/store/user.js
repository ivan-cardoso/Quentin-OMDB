import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const setUser = createAsyncThunk("SET_USER", (data)=>{return data})

export const logoutUser = createAsyncThunk("LOGOUT_USER", () => {
    return axios.post("/api/logout")
    .then((res) => res.data)
})

const userReducer = createReducer({}, {
    [setUser.fulfilled]: (state, action) => {
        return action.payload
    }, 
    [setUser.pending] : (state, action) =>{
        return action.payload = action.meta.requestStatus
    },
    [setUser.rejected] : (state, action) =>{
        return action.payload = action.meta.requestStatus
    }
})

export default userReducer

