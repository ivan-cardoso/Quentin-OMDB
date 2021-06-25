import React from 'react'
import UserFavourites from "./UserFavourites"
import {useSelector} from "react-redux"
const SearchUsersFavourites = ({id}) => {

    const userFounded = useSelector((state) => state.searchUser)
    return (
        <div>
            {userFounded.length ? 
            <UserFavourites id={userFounded[0].id}/>
            : <></>}
        </div>
    )
}

export default SearchUsersFavourites
