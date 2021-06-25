import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import moviesReducer from "./movies"
import singleMovieReducer from "./singleMovie";
import userReducer from "./user";
import favouriteReducer from "./favourites"
import searchUserReducer from "./userSearch"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer : {
        movies : moviesReducer,
        singleMovie : singleMovieReducer,
        user : userReducer,
        favourites : favouriteReducer,
        searchUser : searchUserReducer,
    }
})

export default store