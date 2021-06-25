import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getUserSearch } from "../store/userSearch"
import Input from "../components/Input/Input"
import { Button, Card } from "react-bootstrap"
import {Link} from "react-router-dom"

const SearchUsers = () => {
    const [userInputValue, setUserInputValue] = useState("")
    const dispatch = useDispatch()

    const handleSearch = () => {
        dispatch(getUserSearch(userInputValue))
    }

    const handleInput = ({ target }) => {
        const { value } = target
        setUserInputValue(value)
    }

    const userFounded = useSelector((state) => state.searchUser)

    return (
        <div className="container">
            <h4>SEARCH USERS</h4>
            <Input value={userInputValue} handleInput={handleInput} placeholder={"Seach a user"} />
            <Button onClick={handleSearch}>SEARCH</Button>

            {userFounded.length ?
                <>
                    {userFounded.map((e) => {
                        return (

                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{e.username}</Card.Title>
                                    <Card.Text>
                                        {e.email}
                                    </Card.Text>
                                </Card.Body>

                                <Card.Body>
                                    <Link to={`/search/${e.username}`} >View his favourites</Link>
                                </Card.Body>
                            </Card>



                        )
                    })}
                </>
                :
                <></>}

        </div>
    )
}

export default SearchUsers
