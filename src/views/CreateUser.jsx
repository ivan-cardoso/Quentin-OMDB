import React, {useState,useEffect} from 'react'
import axios from "axios"
import { useHistory } from 'react-router' 


import Form from "../components/Form/Form"

const CreateUser = () => {

    const [createUserInput, setCreateUserInput] = useState({
        email : "", 
        password : ""
    })
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("/api/register/", createUserInput)
        .then((res) => res.data)
        .then((data) => {
            setCreateUserInput(data)
            history.push("/login")
        })
    }

    const handleChange = (e) =>{
        const key = e.target.name
        const value = e.target.value
        setCreateUserInput({...createUserInput, [key] : value})
    }  

    return (
        <div className="container">
            <Form 
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            title={"Create user"} 
            buttonText={"Create user"}/>   
        </div>
    )
}

export default CreateUser
