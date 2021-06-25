import React from 'react'
import { Link, useLocation } from "react-router-dom"
import s from "./style.module.scss" 
import { useSelector, useDispatch } from "react-redux"
import {logoutUser, setUser} from "../../store/user"
import {useHistory} from "react-router-dom"
import {Button} from "react-bootstrap"


const NavBar = () => {
    const history = useHistory()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const location = useLocation()

    const handleLogout = () =>{
        dispatch(logoutUser()).then(dispatch(setUser({})))
    }

    const username =  user.email ? user.email.split("@")[0] : ""
    const capitalizeUsername = username ? username.charAt(0).toUpperCase() + username.slice(1) : ""

    return (
        <div className={s.navbar}>
            {user.id ? 
                <>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center ">
                            <Link to={`/user/${user.id}`}>
                                <Button variant="dark" >FAVOURITES</Button>
                            </Link>
                            <h5 className="m-0 ml-2" >{capitalizeUsername}</h5>
                        </div>
                        <div className="d-flex align-items-center ">
                            <Link to={`/movies`}>
                                <Button variant="danger" >MOVIES</Button>
                            </Link>
                        </div>
                        <div>
                            <div className="d-flex align-items-center">
                                
                            <Link to={"/user/search"}>
                                <Button variant="light" className="m-0 mr-4 " >SEARCH USERS</Button>
                            </Link>

                            <Link to={"/login"} onClick={handleLogout} >
                                <Button>LOGOUT</Button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            :  location.pathname !== "/login" ? 
                <div className="container">
                <Link to={"/login"} >
                    <Button>Login</Button>
                </Link> 
                </div>
                :<></>
            }
            
        </div>
    )
}

export default NavBar
