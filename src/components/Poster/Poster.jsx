import React from 'react'
import s from "./style.module.scss"

const Poster = ({image, title}) => {

    return (
        <>
            <img  className={s.card} src={image} alt={title} />
        </>
    )
}

export default Poster
