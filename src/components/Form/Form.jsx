import React from 'react'
import {Button} from "react-bootstrap"

const Form = ({ title, buttonText, handleSubmit, handleChange }) => {
    return (
        <div>
            <form action="submit" onSubmit={handleSubmit} >
                <h4>{title}</h4>
                <label htmlFor="" style={{ width: "10rem" }} >Email</label>
                <input type="email" name="email" onChange={handleChange} required/> <br />

                <label htmlFor="" style={{ width: "10rem" }} >Password</label>
                <input type="password" name="password" onChange={handleChange} required /> <br />

                <Button type="submit">{buttonText}</Button>
            </form>
        </div>
    )
}

export default Form
