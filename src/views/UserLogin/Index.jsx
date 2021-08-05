import axios from 'axios'
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";
import {Alert} from "react-bootstrap"

import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../../store/user"

import Form from "../../components/Form/Form"
import s from "./style.module.scss" 
import dancing from '../../utils/dancing.svg'
import dancing2 from '../../utils/dancing2.png'
import hurt from '../../utils/reanimation.svg'

const UserLogin = () => {
    const user = useSelector((state) => state.user)

    const [userLogin, setUserLogin] = useState(user)
    const [noAuth, setNoAuth] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("/api/auth", userLogin)
        .then((res)=> {
            return dispatch(setUser(res.data))
        })
        .then((data)=>{
            history.push("/movies")
        })
        .catch(err => {
            setNoAuth(true)
            console.log("NO AUTORIZED", err)
        })
    }

    const handleChange = (e) => {
        setTimeout(()=> setNoAuth(false), 800)
        const key = e.target.name
        const value = e.target.value
        setUserLogin({ ...userLogin, [key]: value })
    }

    return (
        <div className={s.loginSection}>
            <div className={`container ${s.loginContainer}`}>
            <div className={`row ${s.loginRow} `}>

                <div className={`col-12 col-md-6 ${s.titleHomeContainer}`}>
                    <h2 className={`${s.quentinTitle} `} >Quentin</h2>
                    {/* <img src={hurt} alt="" srcset="" /> */}
                    <img src={dancing2} alt="" srcset="" className={s.dancingSvg} />
                </div>

                <div className={`col-12 col-md-6 ${s.formControlContainer}`} >
                    <div className={`${s.formControl}`} >
                        <Form
                            title={"Quentin is waiting for you!"}
                            buttonText={"Sing in"}
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            />
                        <Link to={"create-user"}>
                            <p className={`${s.notAlreadyLogin}`}>
                                Not already logged in? Create account
                            </p>
                        </Link>
                        <div className={`${s.userInvalidSection}`}>
                            {noAuth ? 
                                <div className={`${s.userInvalidContainer}`}>
                                    <p className={`${s.userInvalid}`}>Invalid User</p> 
                                </div>
                            : <></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default UserLogin
