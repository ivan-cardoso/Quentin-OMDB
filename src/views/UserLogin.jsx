import axios from 'axios'
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";
import {Alert} from "react-bootstrap"

import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../store/user"

import Form from "../components/Form/Form"

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
            console.log("NO AUTORIZED", err)})
    }

    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setUserLogin({ ...userLogin, [key]: value })
    }

    return (
        <div className="container">
            <Form
                title={"Login"}
                buttonText={"Sing in"}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            {noAuth ? 
                <Alert variant="danger">Incorrect User</Alert> 
            : <></>}
            <Link to={"create-user"}>
                <p>Not already logged in? Create account</p>
            </Link>
        </div>
    )
}
export default UserLogin
