import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"

import {useDispatch, useSelector} from "react-redux"
import {setMovies} from "../../store/movies"
import {setFavourites} from "../../store/favourites"
import { useHistory } from "react-router-dom";
import s from "./style.module.scss"


import Input from "../../components/Input/Input"
import Poster from "../../components/Poster/Poster"
import FavouriteButton from "../../components/FavouriteButton/FavouriteButton"

const Home = () => {

    const [inputValue, setInputValue] = useState("")

    const dispatch = useDispatch()
    const movies = useSelector((state) => state.movies)
    const favourites = useSelector((state) => state.favourites)
    

    useEffect(()=>{
        dispatch(setMovies(inputValue))
    }, [inputValue])
    
    const handleInput = ({target}) => {
        const {value} = target
        setInputValue(value)
    }

    const moviesFound = movies.Search

    const history = useHistory()
    const user = useSelector((state) => state.user)
    
        return (
            <div className={s.homeContainer}>

             <div className={s.inputContainer}>
                <Input value={inputValue} handleInput={handleInput}/>
             </div>
             {moviesFound ? 
             <div className={"container"} >
                 <div className={"row"}>
                 {moviesFound.map(e=>{
                    return (
                        <div  key={e.imdbID} className={"col-12 col-sm-6 col-lg-4 mt-3 mb-3 d-flex justify-content-center flex-column"}>
                            
                            <Link to={`/movies/${e.imdbID}`}>
                                <Poster image={e.Poster} title={e.Title} />
                            </Link>
                            
                            <FavouriteButton movieId={e.imdbID} title={e.Title} img={e.Poster} userId={user.id}/>
                        </div>
                )
             })}
                 </div>
             </div> 
             : <></>}
             
        </div>
    )
}

export default Home
