import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useLocation} from "react-router-dom"
import {setFavourites, removeFavourites} from "../../store/favourites"

import s from "./style.module.scss"

const FavouriteButton = ({id, movieId, title, img, userId, btnName}) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const addFavourites = () =>{
        dispatch(setFavourites({movieId,title, img, userId}))
    }

    const deleteFavourites = () =>{
        return dispatch(removeFavourites({userId, id}))
    }

    const user = useSelector((state) => state.user)

    return (

        <div>
            {location.pathname === `/user/${user.id}` ? 
            <button className={s.color} onClick={()=>deleteFavourites()}>
                Remove from favourites
            </button>
            : location.pathname.includes("/search/") ? <></> : 
            <button className={s.color} onClick={()=>addFavourites()}>
                Add to favourites
            </button>
            }
        </div>
    )
}

export default FavouriteButton
