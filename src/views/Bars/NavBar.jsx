import React from 'react'
import { Link, useLocation } from "react-router-dom"
import s from "./style.module.scss" 
import { useSelector, useDispatch } from "react-redux"
import {logoutUser, setUser} from "../../store/user"
import {useHistory} from "react-router-dom"
import {Button} from "react-bootstrap"

import mia from "../../utils/mia.svg"
import reanimation from "../../utils/reanimation.svg"
import logout from "../../utils/logout.svg"


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
                            {/* <Link to={`/user/${user.id}`}>
                                <Button variant="dark" >FAVOURITES</Button>
                            </Link> */}

                                {/* <Button variant="danger" >MOVIES</Button> */}
                                <h2 className={`${s.quentinTitle} `} >
                                    <Link to={`/movies`} className={`${s.link} `}>
                                        Quentin
                                    </Link>
                                    </h2>
                            {/* <h5 className="m-0 ml-2" >{capitalizeUsername}</h5> */}
                        </div>
                        <div className="d-flex align-items-center ">
                            {/* <Link to={`/movies`}>
                                <Button variant="danger" >MOVIES</Button>
                            </Link> */}
                        </div>
                        
                        <div className={s.navBarIconsContainer}>
                            <Link to={`/user/search`}>
                                <img className={`${s.navbarIcon}`} src={mia} alt={mia} srcset="" />    
                                <p>Users</p>
                            </Link>

                            <Link to={`/user/${user.id}`}>
                                <img className={`${s.navbarIcon}`} src={reanimation} alt={mia} srcset="" />    
                                <p style={{marginRight : "10px"}}>Favs</p>
                            </Link>


                            <Link to={"/login"} onClick={handleLogout} >
                                <img className={`${s.navbarIcon}`} src={logout} alt={mia} srcset="" />    
                                <p>Logout</p>
                            </Link>
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
