import React from 'react'
import s from "./style.module.scss"

const Input = ({handleInput, value, placeholder}) => {
    return (
        <>
            <input  className={s.movieInput} value={value} onChange={handleInput} type="text" placeholder={placeholder} />  
        </>
    )
}

export default Input
