import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect, useHistory } from 'react-router-dom'
import axios from "axios"
import "./App.scss"

import NavBar from "./Bars/NavBar"
// import Footer from "../components/Footer"
import Movies from "./Movies/"
import SingleMovie from "./SingleMovie/SingleMovie"
import UserFavourites from "./UserFavourites"
import CreateUser from "./CreateUser/CreateUser"
import UserLogin from "./UserLogin/Index"
import SearchUsers from "./SearchUsers"
import SearchUsersFavourites from "./SearchUsersFavourites"

import { useSelector, useDispatch } from "react-redux"
import {setUser} from "../store/user"
import Home from './Home/Index'


const App = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const history = useHistory()

    const [loading, setLoading] = useState("pending")
    
    useEffect(() => {
        axios.get("/api/me")
        .then((res)=> res.data)
        .then((user) =>{
            setLoading("fulfilled")
            return dispatch(setUser(user))
        })
        .catch(err =>{
            // history.push("/login")
            return console.log("ME NO AUTORIZED", err)
        })
    }, [])

    return (
        <>
            <NavBar/> 
            <div style={{marginTop : "4rem"}}>
                <Switch>
                    {/* <Route exact path={"/"} /> */}
                    <Route exact path={"/login"} component={UserLogin} />
                    <Route exact path={"/create-user"} component={CreateUser} />
                    

                    <Route  exact path={"/user/search"} component={SearchUsers}/>
                    <Route  exact path={"/search/:id"} render={(props)=> <SearchUsersFavourites id={props.match.params.id} />}/>
                    {user.id ? 
                    <>
                        <Route exact path={"/movies"} component={Movies}/>
                        <Route exact path={"/movies/:id"} render={(props) => <SingleMovie id={props.match.params.id}/>} /> 
                        <Route exact path={"/user/:id"} render={(props) => <UserFavourites id={props.match.params.id} />} />
                    </> : null}

                    {user === "pending" ? <></> : null}

                    
                </Switch>
            </div>
            
             {/* <Footer/>  */}
        </>
    )
}

export default App
