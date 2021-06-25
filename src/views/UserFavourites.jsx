import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {getFavourites} from "../store/favourites"

import Poster from "../components/Poster/Poster"
import FavouriteButton from "../components/FavouriteButton/FavouriteButton"


const UserFavourites = ({id}) => {

    const dispatch = useDispatch()
    const favourites = useSelector((state) => state.favourites)
    const user = useSelector((state) => state.user)
    
    useEffect(() => {
        dispatch(getFavourites(id))
    }, [dispatch])

    return (
        <div >
            {favourites.length ? 
            <>
            <div className={"container"} >
            <h3>FAVOURITES</h3>
                <div className={"row"}>
                    {favourites.map((e) => {
                        return (
                            <div className={"col-12 col-sm-6 col-lg-4 mt-3 mb-3 d-flex justify-content-center flex-column"}>
                                <Link to={`/movies/${e.movieId}`}>
                                    <Poster image={e.img} title={e.title} />
                                </Link>
                                <FavouriteButton  id={e.id} movieId={e.movieId} title={e.title} img={e.img} userId={user.id} />
                            </div>
                        )
                    })}
                </div>
            </div>


            </> 
            : <></>}
                
        </div>
    )
}

export default UserFavourites
