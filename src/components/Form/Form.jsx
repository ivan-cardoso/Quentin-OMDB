import React from 'react'
import {Button} from "react-bootstrap"
import s from "./style.module.scss" 

const Form = ({ title, buttonText, handleSubmit, handleChange }) => {
    return (
        <div>
            <form action="submit" onSubmit={handleSubmit} >
                <h4 className={`${s.formTitle}`} >{title}</h4>
                <div className={`${s.formControlsContainer}`}>
                    <input className={`${s.formInput}`} type="email" name="email" onChange={handleChange} required placeholder="Email"/> <br />
                    <input className={`${s.formInput}`} type="password" name="password" onChange={handleChange} placeholder="Password" required /> <br />
                    <button className={`${s.formInputBtn}`} type="submit">{buttonText}</button>
                </div>
            </form>
        </div>
    )
}

export default Form
