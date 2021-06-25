import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {setSingleMovie} from "../../store/singleMovie"

import Poster from "../../components/Poster/Poster"
import FavouriteButton from "../../components/FavouriteButton/FavouriteButton"

import s from "./style.module.scss" 

const SingleMovie = ({id}) => {

    const dispatch = useDispatch()
    const singleMovie = useSelector((state) => state.singleMovie)
    const user = useSelector((state) => state.user)

    useEffect(()=>{
        dispatch(setSingleMovie(id))
    }, [dispatch])

    return (
        <div className={s.sectionSingleMovie} >

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <Poster image={singleMovie.Poster} title={singleMovie.Title}/>
                    </div>
                    <div className="col-12 col-md-7">
                        <h4>{singleMovie.Title}</h4>
                        <p>{singleMovie.Year}  |  {singleMovie.Genre}  |  {singleMovie.Rated}  |  {singleMovie.Runtime}</p>
                        <p>{singleMovie.Director}</p>
                        <p>{singleMovie.Awards}</p>
                        <p>{singleMovie.Plot}</p>
                        <p>Imdb Rating: {singleMovie.imdbRating}</p>

                        <FavouriteButton movieId={singleMovie.imdbID} title={singleMovie.Title} img={singleMovie.Poster} userId={user.id}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleMovie
